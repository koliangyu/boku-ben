<script setup>
defineProps({
  staff: {
    isBig: Boolean,
    position: String,
    name: String,
    supplement: String,
  },
})
</script>

<template>
  <li class="inline-block mb-[36px] text-[0] tracking-[-.4em]" :class="staff.isBig ? 'w-full' : 'w-1/2'">
    <p class="pb-[10px] text-[#f5588b] font-medium text-[15px] tracking-normal">
      {{ staff.position }}
    </p>
    <div class="inline-block relative">
      <div class="text-[0] tracking-[-.4em]">
        <p v-for="str in [...staff.name]" class="inline-block w-[39px] mb-0 px-0 py-[5.5px] bg-white [border:_3px_solid_#ececec] align-top font-bold text-[22px] tracking-normal text-center [border-right:_none]
        last:[border-right:_3px_solid_#ececec]">{{ str }}</p>
      </div>
      <slot />
    </div>
    <p v-if="staff.supplement" class="pt-[8px] text-[12px] tracking-[.03em]">{{ staff.supplement }}</p>
  </li>
</template>