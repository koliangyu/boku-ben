<script setup>
defineProps({
  color: String,
})
</script>

<template>
  <hr
    class="w-full h-[9px] p-0 my-0 mx-auto border-t-4 border-b-2 border-solid border-black bg-[var(--my-color-var)]
    max-md:h-[6px] max-md:mt-0 max-md:mx-auto max-md:mb-0 max-md:border-t-[3px] max-md:border-b max-md:border-solid max-md:border-black"
    :style="`--my-color-var: var(${color})`">
</template>
