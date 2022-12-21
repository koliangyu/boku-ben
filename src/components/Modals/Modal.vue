<script setup>
defineProps({
  show: Boolean,
  color: String,
})
</script>

<template>
  <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
    leave-active-class="ease-in duration-300" leave-from-class="opacity-100" leave-to-class="opacity-0">
    <div v-if="show" class="fixed top-0 left-0 z-20 w-full h-full overflow-hidden" @click="$emit('close')">
      <div class="opacity-90 absolute top-0 left-0 w-full h-full" :style="`background-color: ${color}`"></div>

      <slot />

      <div class="block fixed top-[16px] right-[20px] z-[21] [transform:_translate3d(0,_0,_0)] [backface-visibility:_hidden] cursor-pointer
    scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
    hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]" @click="$emit('close')">
        <div class="absolute top-[4px] left-[4px] bg-black w-[80px] h-[80px] rounded-full"></div>
        <div class="relative bg-white w-[80px] h-[80px] rounded-full"></div>
        <ul class="absolute top-1/2 left-1/2 w-[40px] h-[40px] -translate-x-1/2 -translate-y-1/2">
          <li class="absolute top-1/2 left-1/2 w-full h-[4.5px] bg-black -translate-x-1/2 -translate-y-1/2 rotate-45">
          </li>
          <li class="absolute top-1/2 left-1/2 w-full h-[4.5px] bg-black -translate-x-1/2 -translate-y-1/2 -rotate-45">
          </li>
        </ul>
      </div>
    </div>
  </Transition>
</template>
