import { dictUtils } from './dict';
import { dateUtils } from './dates';

const mapSegmentPoint = (dict, point) => ({
  ...point,
  airport: point.airport,
  airportText: dictUtils.getAirport(point.airport, dict).name_ru,
  city: dictUtils.getCityByAirport(point.airport, dict).name_ru,
  time: dateUtils.prettyTime(dateUtils.removeTimezone(point.at)),
  dayOfMonth: dateUtils.getVerbalDate(point.at),
  dayOfWeek: dateUtils.format(point.at, 'dd'),
  year: dateUtils.format(point.at, 'YYYY'),
  iso: point.at
});

const mapSegment = (dict, segment) => ({
  ...segment,
  dep: mapSegmentPoint(dict, segment.dep),
  arr: mapSegmentPoint(dict, segment.arr),
  flightNumber: segment.flight_number,
  baggage: segment.baggage,
  handLuggage: segment.hand_luggage,
  cabin: segment.cabin,
  connection: segment.connection,
  airline: segment.airline,
  airlineTitle: dictUtils.getAirline(segment.airline, dict).name_ru
});

export function mapFlight(dict, flight) {
  return {
    duration: flight.duration,
    durationText: dateUtils.prettyDurationFromSeconds(flight.duration),
    segments: flight.segments.map((segment) => mapSegment(dict, segment))
  };
}

export const getUniqueAirlines = (flight) => {
  const { segments } = flight;
  const airlinesHashmap = segments.reduce((acc, { airline, airlineTitle }) => {
    if (!acc[airline]) {
      acc[airline] = airlineTitle;
    }
    return acc;
  }, {});
  return Object.keys(airlinesHashmap).map((iata) => ({
    iata,
    title: airlinesHashmap[iata]
  }));
};
