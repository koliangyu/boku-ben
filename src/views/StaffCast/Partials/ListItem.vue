<script setup>
defineProps({
  staff: {
    isBig: Boolean,
    position: String,
    name: String,
    supplement: String,
    mobileBreakPoint: Number,
  },
})
</script>

<template>
  <li class="inline-block mb-[36px] text-[0] tracking-[-.4em] max-md:w-full max-md:mb-[21.75px]"
    :class="staff.isBig ? 'w-full' : 'w-1/2'">
    <p class="pb-[10px] text-[#f5588b] font-medium text-[15px] tracking-normal
    max-md:pb-[8px] max-md:text-[13px]">
      {{ staff.position }}
    </p>
    <div class="inline-block relative">
      <div class="text-[0] tracking-[-.4em] max-md:border-l-[1.5px] max-md:border-solid max-md:border-[#ececec]">
        <template v-for="(str, index) in [...staff.name]">
          <p class="inline-block w-[39px] mb-0 px-0 py-[5.5px] bg-white [border:_3px_solid_#ececec] align-top font-bold text-[22px] tracking-normal text-center [border-right:_none]
          last:[border-right:_3px_solid_#ececec]
          max-md:w-[8.15vw] max-md:px-0 max-md:py-[1.56vw] max-md:[border:_1.5px_solid_#ececec] max-md:text-[16px] max-md:[border-left:_none]
          max-md:last:[border-right:_1.5px_solid_#ececec]">{{ str }}</p>
          <br v-if="staff.mobileBreakPoint === index" class="hidden max-md:block">
        </template>
      </div>
      <slot />
    </div>
    <p v-if="staff.supplement" class="pt-[8px] text-[12px] tracking-[.03em]
    max-md:text-[11px] max-md:tracking-wider">{{ staff.supplement }}</p>
  </li>
</template>