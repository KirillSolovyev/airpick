<template>
  <header class="flex pt-2" style="min-height: 40px">
    <div class="flex items-center space-between w-full">
      <div class="w-8">
        <slot name="leftAction" />
      </div>
      <div class="flex-grow">
        <slot />
      </div>
      <div class="w-8">
        <slot name="rightAction" />
      </div>
    </div>
  </header>
</template>
