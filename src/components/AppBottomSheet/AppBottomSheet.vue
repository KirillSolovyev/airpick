<template>
  <transition name="bottom-sheet-slide-up">
    <div
      v-if="controller?.isVisible(props.name)"
      class="z-50 fixed inset-0 flex"
      :data-disable-scroll-name="name"
    >
      <div
        class="blackout fixed inset-0 z-10"
        @touchstart="onBlackoutTouchStart"
        @touchend="onBlackoutTouchEnd"
        @click="hide"
      ></div>
      <div
        class="sheet z-10 absolute bottom-0 flex w-full"
        style="max-height: 85%"
      >
        <div
          ref="bottomSheetRef"
          :style="{
            transform: `translateY(${bottomSheetState.sheetShift}px)`
          }"
          class="sheet-content relative w-full flex flex-col overflow-hidden rounded-t-2xl transition duration-300 ease-out"
          role="dialog"
          aria-modal="true"
          @touchstart="onSheetTouchStart"
          @touchmove="onSheetTouchMove"
          @touchend="onSheetTouchEnd"
        >
          <div
            class="w-full flex items-center justify-center flex-shrink-0"
            @click="hide"
          >
            <div class="my-3 h-1 w-14 bg-gray-400 rounded"></div>
          </div>
          <button
            class="z-10 absolute top-0 right-0 flex items-center justify-center mt-3 mr-4 w-6 h-6 text-xl text-gray-600"
            type="button"
            @click="hide"
          >
            <fa-icon icon="fa-solid fa-xmark"></fa-icon>
          </button>
          <slot name="title"></slot>
          <div
            ref="contentRef"
            class="max-h-screen overscroll-none overflow-x-hidden overflow-y-auto"
          >
            <slot
              v-bind="{
                hide,
                params: controller?.getParams(props.name) || {}
              }"
            ></slot>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, inject, watch, onBeforeUnmount } from 'vue';

const props = defineProps({
  name: {
    type: String,
    required: true
  }
});

const emit = defineEmits(['onClose']);

const controller = inject('bottom-sheet');
const bottomSheetRef = ref();
const contentRef = ref();
const bottomSheetState = ref({
  blackoutTouchStarted: false,
  sheetTouchStarted: false,
  sheetTouchStart: 0,
  sheetShift: 0
});

if (controller) {
  watch(controller.state, (_, prevState) => {
    const wasActive = prevState.find((elem) => elem.activeName === props.name);
    if (!controller.isVisible(props.name) && wasActive) {
      emit('onClose');
    }
  });
}

onBeforeUnmount(() => hide());

const onBlackoutTouchStart = () =>
  (bottomSheetState.value.blackoutTouchStarted = true);

const onBlackoutTouchEnd = () => {
  if (bottomSheetState.value.blackoutTouchStarted) {
    bottomSheetState.value.blackoutTouchStarted = false;
    hide();
  }
};

const extractTouch = (e) => e.changedTouches[0].clientY;

const onSheetTouchStart = (e) => {
  bottomSheetState.value.sheetTouchStarted = contentRef?.value.scrollTop === 0;
  bottomSheetState.value.sheetTouchStart = extractTouch(e);
};

const onSheetTouchMove = (e) => {
  if (bottomSheetState.value.sheetTouchStarted) {
    const shift = extractTouch(e) - bottomSheetState.value.sheetTouchStart;
    bottomSheetState.value.sheetShift = Math.max(0, shift);
  }
};

const onSheetTouchEnd = () => {
  const bottomSheetHeight = bottomSheetRef.value.offsetHeight;
  const closingLimit = bottomSheetHeight < 200 ? bottomSheetHeight * 0.3 : 100;
  if (
    bottomSheetState.value.sheetTouchStarted &&
    bottomSheetState.value.sheetShift >= closingLimit
  ) {
    hide();
  }

  bottomSheetState.value.sheetTouchStarted = false;
  bottomSheetState.value.sheetShift = 0;
};

const hide = () => controller?.hide(props.name);
</script>

<style scoped>
.bottom-sheet-slide-up-enter-active,
.bottom-sheet-slide-up-leave-active {
  transition: 500ms;
}

.bottom-sheet-slide-up-enter-active > .blackout,
.bottom-sheet-slide-up-leave-active > .blackout {
  transition: 500ms;
}

.bottom-sheet-slide-up-enter-from > .blackout,
.bottom-sheet-slide-up-leave-to > .blackout {
  opacity: 0;
}

.bottom-sheet-slide-up-enter-active > .sheet,
.bottom-sheet-slide-up-leave-active > .sheet {
  transition: 200ms ease-in;
}

.bottom-sheet-slide-up-enter-from > .sheet,
.bottom-sheet-slide-up-leave-to > .sheet {
  transform: translateY(100%);
  transition: 200ms ease-in;
}

.blackout {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 10;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
}

.sheet-content {
  background-color: var(--app-bottom-sheet-bg-color, #fff);
}
</style>
