<script setup>
</script>

<template>
  <li class="relative mt-0 mx-0 mb-[24px] pl-[32px] text-[#f5588b] text-[18px] leading-[1.6]
    before:absolute before:top-[5px] before:left-0 before:w-[18px] before:h-[18px]
    before:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')]
    before:bg-left before:bg-no-repeat before:bg-contain
    max-md:mt-0 max-md:mx-0 max-md:mb-[12px] max-md:pl-[23px] max-md:text-[3.4666666667vw]
    max-md:before:top-[2px]">
    <slot />
  </li>
</template>