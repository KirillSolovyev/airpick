<template>
  <div class="relative w-16 h-16 rounded-2xl bg-white">
    <div
      class="app-loader absolute w-8 h-8 border-2 border-blue-500 rounded-full"
    ></div>
  </div>
</template>

<style>
@keyframes spinner {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

.app-loader {
  top: 50%;
  left: 50%;
  border-right-color: transparent !important;
  transform-origin: center center;
  animation: spinner 1s linear infinite;
}
</style>
