<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

defineProps({
  color: String,
  liClass: String,
  seasons:
  {
    name: String,
    href: String,
  },
})
</script>

<template>
  <ul class="mb-[40px] text-[0] tracking-[-.4em] text-center max-md:mb-[32px]">
    <li v-for="season in seasons" :class="{ 'is-current': season.href === route.path }, liClass" class="group peer peer-[]:ml-[10px] inline-block relative w-[434px] align-top font-extrabold text-[20px] font-montserrat tracking-[.04em] [-webkit-text-stroke:_1px_#000]
    [&.is-current]:pointer-events-none
    scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
    hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
    max-md:w-full max-md:text-[17px] max-md:tracking-normal max-md:peer-[]:mt-[12px] max-md:peer-[]:ml-0">
      <div class="relative overflow-hidden border-[3px] border-solid border-black rounded-[8px]
      max-md:border-2 max-md:rounded-[5px]">
        <p class="px-0 py-[12px] is-active
        [&.is-active]:opacity-0 [&.is-active]:absolute [&.is-active]:top-0 [&.is-active]:left-0 [&.is-active]:w-full [&.is-active]:bg-black
        group-[.is-current]:[&.is-active]:opacity-100
        max-md:pt-[8px] max-md:px-0 max-md:pb-[8px]" :style="`color: ${color}`">
          {{ season.name }}
        </p>
        <p class="text-white px-0 py-[12px] max-md:pt-[8px] max-md:px-0 max-md:pb-[8px]">{{ season.name }}</p>
      </div>
      <a :href="season.href" class="block absolute top-0 left-0 w-full h-full"></a>
    </li>
  </ul>
</template>