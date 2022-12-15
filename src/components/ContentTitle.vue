<script setup>
</script>

<template>
  <div
    class="inline-block relative mb-[53px] text-[45px] font-montserrat
        before:opacity-0 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[32px] before:bg-black
        [&.active]:before:opacity-100 [&.active]:before:w-full [&.active]:before:[transition:_width_.6s_cubic-bezier(.165,_.84,_.44,_1),_opacity_.6s_ease-in]">
    <h2
      class="inline-block relative w-auto px-[10px] pt-0 pb-[10px] text-white font-extrabold tracking-[.075em] [-webkit-text-stroke:_1px_#000]">
      <slot />
    </h2>
  </div>
</template>