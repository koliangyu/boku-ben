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
    <div class="absolute top-[100px] left-1/2 -translate-x-1/2 w-[835px] h-[78.5%]
    max-md:top-[47px] max-md:left-[9px] max-md:translate-x-0 max-md:w-[calc(100%_-_30px)] max-md:h-[89%]">
      <div class="opacity-70 absolute top-[20px] left-[20px] w-full h-full bg-[var(--my-color-var)]
      max-md:top-[20px] max-md:left-[20px]"></div>
      <div class="absolute top-0 left-0 w-full h-full px-0 py-[15px] bg-white border-[5px] border-solid border-black
      max-md:px-0 max-md:py-[10px] max-md:border-[3px] max-md:border-solid max-md:border-black">
        <div class="relative w-full h-full
        before:absolute before:bottom-0 before:left-0 before:w-full before:h-[29%]
        before:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] before:bg-left-top before:bg-repeat
        after:absolute after:top-1/2 after:left-[-18px] after:-translate-y-1/2 after:w-[36px] after:h-[96%]
        after:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')] after:bg-top after:bg-repeat-y after:bg-contain
        max-md:before:h-[65.7%] max-md:before:bg-[length:16px_auto]
        max-md:after:left-[-10px] max-md:after:w-[30px] max-md:after:h-[96.5%]">
          <DecoItem :color="`var(${color})`"></DecoItem>
        </div>
      </div>
    </div>

    <div class="relative pl-[95px]
    max-md:py-0 max-md:pr-[11%] max-md:pl-[15%]">
      <div class="pt-[203px] text-[0] tracking-[-.4em]
      max-md:pt-[94px]">
        <p v-for="item in character.name" class="inline-block relative w-[65px] mb-0 px-0 py-[14.5px] bg-white [border:_3px_solid_#ececec] align-top font-bold text-[30px] tracking-normal text-center [border-right:_none]
        last:[border-right:_3px_solid_#ececec]
        max-md:w-[39px] max-md:px-0 max-md:py-[7.5px] max-md:[border:_1.5px_solid_#ececec] max-md:text-[22px]
        max-md:last:[border-right:_1.5px_solid_#ececec]">
          <span v-if="item[0]" class="absolute top-[-25px] left-1/2 -translate-x-1/2 translate-y-0 w-full font-normal text-[13px] tracking-wider text-center
            max-md:top-[-15px] max-md:text-[10px]">
            {{ item[0] }}
          </span>
          {{ item[1] }}
        </p>
      </div>
      <p class="pt-[14px] pb-[28px] text-[#f5588b] font-medium text-[14px] tracking-[.2em]
      max-md:pt-[11px] max-md:pb-[15px] max-md:text-[11px]">{{ character.cv }}</p>
      <p class="font-medium text-[14px] leading-[27px] tracking-[.02em]
      max-md:text-[13px] max-md:leading-[22px]" v-html="character.intro"></p>
    </div>

    <div class="md:absolute md:top-0
    md:group-[.nariyuki]:top-[50px] md:group-[.nariyuki]:right-[-48px]
    md:group-[.fumino]:right-[-130px]
    md:group-[.rizu]:right-[-140px]
    md:group-[.uruka]:right-[-140px]
    md:group-[.mafuyu]:top-[40px]  md:group-[.mafuyu]:right-[-100px]
    md:group-[.asumi]:right-[-100px]
    max-md:relative max-md:w-[108%] max-md:mt-[2px] max-md:ml-[-5%]">
      <img :src="character.img1" alt="">
    </div>

    <div class="md:relative md:w-full md:mx-auto md:my-0
    md:group-[.uruka]:mt-[130px]
    md:group-[.asumi]:mt-[50px]
    max-md:relative max-md:w-[108%] max-md:mt-[-23%] max-md:ml-[-5%]
    max-md:group-[.nariyuki]:mt-[-33%]
    max-md:group-[.uruka]:mt-[-5%]
    max-md:group-[.mafuyu]:mt-[-45%]
    max-md:group-[.asumi]:mt-[-5%]">
      <img :src="character.img2Pc" alt="" class="block max-md:hidden">
      <img :src="character.img2Sp" alt="" class="hidden max-md:block">
    </div>
  </div>
</template>
