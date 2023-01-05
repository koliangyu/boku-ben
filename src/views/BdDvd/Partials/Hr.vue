<script setup>
defineProps({
  color: String,
})
</script>

<template>
  <hr class="w-full h-[9px] p-0 my-0 mx-auto border-t-4 border-b-2 border-solid border-black bg-[var(--my-color-var)]"
    :style="`--my-color-var: var(${color})`">
</template>
