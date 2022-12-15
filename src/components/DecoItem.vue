<script setup>
defineProps({
  color: String,
})
</script>

<template>
  <ul>
    <li class="absolute left-0 w-full h-[6px] top-0 bg-transparent
     before:absolute before:left-0 before:w-full before:bg-black before:top-0 before:h-[3px]
     after:absolute after:left-0 after:w-full after:bg-black after:bottom-0 after:h-[1px]"
      :style="`background-color: ${color}`"></li>
    <li class="absolute left-0 w-full h-[6px] bottom-[10px] bg-transparent
     before:absolute before:left-0 before:w-full before:bg-black before:top-0 before:h-[1px]
     after:absolute after:left-0 after:w-full after:bg-black after:bottom-0 after:h-[3px]"
      :style="`background-color: ${color}`"></li>
  </ul>
</template>
