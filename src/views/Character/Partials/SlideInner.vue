<script setup>
import DecoItem from '../../../components/DecoItem.vue'

defineProps({
  color: String,
  character: {
    slug: String,
    name: Array,
    cv: String,
    intro: String,
    img1: String,
    img2Pc: String,
    img2Sp: String,
  },
})
</script>

<template>
  <div class="group relative" :class="character.slug" :style="`--my-color-var: var(${color})`">
    <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[835px] h-[78.5%]">
      <div class="opacity-70 absolute top-[20px] left-[20px] w-full h-full bg-[var(--my-color-var)]"></div>
      <div class="absolute top-0 left-0 w-full h-full px-0 py-[15px] bg-white border-[5px] border-solid border-black">
        <div class="relative w-full h-full
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-[29%]
        before:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] before:bg-left-top before:bg-repeat
        after:absolute after:top-1/2 after:left-[-18px] after:-translate-y-1/2 after:w-[36px] after:h-[96%]
        after:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')] after:bg-top after:bg-repeat-y after:bg-contain">

          <DecoItem :color="`var(${color})`"></DecoItem>
        </div>
      </div>
    </div>

    <div class="relative pl-[95px]">
      <div class="pt-[203px] text-[0] tracking-[-.4em]">
        <p v-for="item in character.name" class="inline-block relative w-[65px] mb-0 px-0 py-[14.5px] bg-white [border:_3px_solid_#ececec] align-top font-bold text-[30px] tracking-normal text-center [border-right:_none]
        last:[border-right:_3px_solid_#ececec]">
          <span v-if="item[0]"
            class="absolute top-[-25px] left-1/2 -translate-x-1/2 translate-y-0 w-full font-normal text-[13px] tracking-wider text-center">
            {{ item[0] }}
          </span>
          {{ item[1] }}
        </p>
      </div>
      <p class="pt-[14px] pb-[28px] text-[#f5588b] font-medium text-[14px] tracking-[.2em]">{{ character.cv }}</p>
      <p class="font-medium text-[14px] leading-[27px] tracking-[.02em]" v-html="character.intro"></p>
    </div>

    <div class="absolute top-0
    group-[.nariyuki]:top-[50px] group-[.nariyuki]:right-[-48px]
    group-[.fumino]:right-[-130px]
    group-[.rizu]:right-[-140px]
    group-[.uruka]:right-[-140px]
    group-[.mafuyu]:top-[40px]  group-[.mafuyu]:right-[-100px]
    group-[.asumi]:right-[-100px]">
      <img :src="character.img1" alt="">
    </div>

    <div class="relative w-full mx-auto my-0
    group-[.uruka]:mt-[130px]
    group-[.asumi]:mt-[50px]">
      <img :src="character.img2Pc" alt="" class="block">
      <img :src="character.img2Sp" alt="" class="hidden">
    </div>
  </div>
</template>
