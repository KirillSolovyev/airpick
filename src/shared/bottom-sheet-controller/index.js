import { ref, nextTick } from 'vue';
import { lockScroll, unlockScroll } from './utils/scroll-lock';

export function createBottomSheet() {
  const state = ref({ stack: [] });
  const escapeHandler = (e) => e.keyCode === 27 && hideLast();

  function isVisible(name) {
    return state.value.stack.some((modal) => modal.activeName === name);
  }

  function show(
    name,
    { captureEscape = true, shouldLockScroll = true, ...params } = {}
  ) {
    if (isVisible(name)) {
      return;
    }

    state.value.stack.push({
      activeName: name,
      params
    });

    if (shouldLockScroll) {
      nextTick().then(() => lockScroll(name));
    }

    if (captureEscape) {
      document.addEventListener('keydown', escapeHandler);
    }
  }

  function getParams(name) {
    const modal = state.value.stack.find((modal) => modal.activeName === name);
    return modal ? modal.params : {};
  }

  function hide(name) {
    unlockScroll(name);
    state.value.stack = state.value.stack.filter(
      (modal) => modal.activeName !== name
    );
    clearEventListenerForEmptyStack();
  }

  function hideLast() {
    const last = state.value.stack.pop();

    if (last) {
      unlockScroll(last.activeName);
    }
    clearEventListenerForEmptyStack();
  }

  function clearEventListenerForEmptyStack() {
    if (state.value.stack.length === 0) {
      document.removeEventListener('keydown', escapeHandler);
    }
  }

  return {
    show,
    isVisible,
    getParams,
    hide,
    state
  };
}
