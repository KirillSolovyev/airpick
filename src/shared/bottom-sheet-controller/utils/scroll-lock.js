import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from 'body-scroll-lock';

const scrollLockOptions = {
  reserveScrollBarGap: true,
  allowTouchMove: (el) => {
    while (el && el !== document.body) {
      if (el.classList.contains('body-scroll-lock-ignore')) {
        return true;
      }

      el = el.parentElement;
    }
  }
};

const getNode = (name) =>
  document.querySelector(`[data-disable-scroll-name='${name}']`);

export function lockScroll(name) {
  disableBodyScroll(getNode(name), scrollLockOptions);
}

export function unlockScroll(name) {
  const node = getNode(name);

  if (node) {
    enableBodyScroll(node);
  } else {
    clearAllBodyScrollLocks();
  }
}
