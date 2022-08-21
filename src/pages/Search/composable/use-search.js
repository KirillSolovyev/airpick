import { ref, computed } from 'vue';
import { airflow } from '@aviatakz/platform-client';

import { clientAwaited } from '@/client';
import { mapFlight } from '@/shared/utils/flights';
import { getCachedResult, cacheResult } from './cache-search';

function startSearch(query) {
  return clientAwaited.then((client) => {
    return client.airflow
      .search(query)
      .then((res) => res.data)
      .then((search) => client.airflow.pollResults(search.id, search.$meta))
      .then((res) => res.data);
  });
}

export function useAirSearch() {
  const isLoading = ref(true);
  const result = ref({});
  const grouppedOffers = computed(() =>
    airflow.utils.groupOffers(result.value.items)
  );
  const mappedOffers = computed(() => {
    if (result.value?.$meta.dict) {
      return grouppedOffers.value.map((offer) => ({
        ...offer,
        flights: offer.flights.map((flight) =>
          mapFlight(result.value?.$meta.dict, flight)
        )
      }));
    }
    return [];
  });

  function startAirSearch(query) {
    isLoading.value = true;
    const cachedResult = getCachedResult(query);
    const searchPromise = cachedResult
      ? new Promise((resolve) => {
          result.value = cachedResult;
          resolve(cachedResult);
        })
      : startSearch(query).then((res) => {
          result.value = res;
          cacheResult(res, query);
          return res;
        });
    return searchPromise.finally(() => (isLoading.value = false));
  }

  return {
    offers: mappedOffers,
    mappedOffers,
    result,
    isLoading,
    startAirSearch
  };
}
