<script setup>
import { storeToRefs } from 'pinia'
import { EffectFade, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import ContentTitle from '../../components/ContentTitle.vue'
import Season from '../../components/Season.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'
import SlideInner from './Partials/SlideInner.vue'

import 'swiper/css'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.FUMINO)

const currentActive = ref(0)

const modules = [EffectFade, Navigation, Pagination]

const swiperOptions = {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  fadeEffect: {
    crossFade: true,
  },
  pagination: {
    bulletClass: 'swiper-pagination-thumb',
    el: '.slide_pagination',
    clickable: true,
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      currentActive.value = current
    },
  },
}

const layoutProps = {
  contentInnerClass: 'w-[890px] pb-[365px] max-md:w-[90%] max-md:pb-[60x]',
}

const seasons = [
  { name: 'MAIN', href: '/character' },
  { name: 'SUB', href: '/character/sub' },
]

const characters = [
  {
    slug: 'nariyuki',
    name: [
      ['ゆい', '唯'],
      ['が', '我'],
      ['なり', '成'],
      ['ゆき', '幸'],
    ],
    cv: 'CV.逢坂良太',
    intro: '飛び抜けた才能はないものの、<br>ほぼ全教科で８割以上の成績を誇る秀才！<br>家族のために受験・学費免除の<br>「特別ＶＩＰ推薦」を目指している。<br>真面目で面倒見のよい性格だが、<br>教育係として熱心すぎるあまり<br>自分の恋愛には鈍感。',
    img1: '/src/assets/img/chara/img_chara_nariyuki_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_nariyuki_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_nariyuki_2.png',
    thumb: {
      name: '唯我成幸',
      img: '/src/assets/img/chara/img_tmb_nariyuki.png',
    },
  },
  {
    slug: 'fumino',
    name: [
      ['ふる', '古'],
      ['はし', '橋'],
      ['ふみ', '文'],
      ['の', '乃'],
    ],
    cv: 'CV.白石晴香',
    intro: '「文学の森の眠り姫」こと文系の天才で、<br>紡ぎ出す文章は読む者・聞く者すべての心に感動を巻き起こす。<br>一方で理系教科にはめっぽう弱く、<br>数式を見るだけで頭が真っ白に！<br>性格は明るく人当りがよいが、たまに辛辣な言葉も…!?',
    img1: '/src/assets/img/chara/img_chara_fumino_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_fumino_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_fumino_2.png',
    thumb: {
      name: '古橋文乃',
      img: '/src/assets/img/chara/img_tmb_fumino.png',
    },
  },
  {
    slug: 'rizu',
    name: [
      ['お', '緒'],
      ['がた', '方'],
      ['り', '理'],
      ['ず', '珠'],
    ],
    cv: 'CV.富田美憂',
    intro: '「機械仕掛けの親指姫」と呼ばれる理系の天才で、<br>難解な数式も瞬時に解を導く！　<br>理系の考え方が染みついており、<br>性格は生真面目でやや頑固。<br>そのため人心を読み解く文系科目は特に苦手。<br>大好きなアナログゲームも、駆け引き下手で腕前は…。',
    img1: '/src/assets/img/chara/img_chara_rizu_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_rizu_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_rizu_2.png',
    thumb: {
      name: '緒方理珠',
      img: '/src/assets/img/chara/img_tmb_rizu.png',
    },
  },
  {
    slug: 'uruka',
    name: [
      ['たけ', '武'],
      ['もと', '元'],
      [null, 'う'],
      [null, 'る'],
      [null, 'か'],
    ],
    cv: 'CV.鈴代紗弓',
    intro: '「白銀の漆黒人魚姫」と呼ばれる水泳の天才。<br>水泳一辺倒で勉強は大の苦手だが、<br>スポーツ推薦のため英語を猛勉強中！<br>成幸とは中学からの付き合いで、密かに想いを寄せている。<br>元気で飾らない性格だが、恋愛となると一気に乙女に!!',
    img1: '/src/assets/img/chara/img_chara_uruka_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_uruka_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_uruka_2.png',
    thumb: {
      name: '武元うるか',
      img: '/src/assets/img/chara/img_tmb_uruka.png',
    },
  },
  {
    slug: 'mafuyu',
    name: [
      ['きり', '桐'],
      ['す', '須'],
      ['ま', '真'],
      ['ふゆ', '冬'],
    ],
    cv: 'CV.Lynn',
    intro: '一ノ瀬学園教師。<br>文乃と理珠の最初の教育係で、<br>２人に進路変更を勧めたことも。<br>冷徹な言動で周囲から恐れられているが、<br>生徒思いの優しい先生。<br>有能で仕事もきっちりこなす。<br>しかし私生活では相当ズボラで、さらにドジっ娘な一面も!?',
    img1: '/src/assets/img/chara/img_chara_mafuyu_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_mafuyu_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_mafuyu_2.png',
    thumb: {
      name: '桐須真冬',
      img: '/src/assets/img/chara/img_tmb_mafuyu.png',
    },
  },
  {
    slug: 'asumi',
    name: [
      ['こ', '小'],
      ['み', '美'],
      ['なみ', '浪'],
      [null, 'あ'],
      [null, 'す'],
      [null, 'み'],
    ],
    cv: 'CV.朝日奈丸佳',
    intro: '浪人して受験勉強に励む一ノ瀬学園のＯＧ。<br>医学部を志望しつつも理科全般が苦手で、<br>後輩の成幸に教わることもしばしば。<br>ある事情で成幸と恋人同士のフリをすることになり、<br>純情な成幸をからかっては楽しんでいる様子だ。',
    img1: '/src/assets/img/chara/img_chara_asumi_1.png',
    img2Pc: '/src/assets/img/chara/pc/img_chara_asumi_2.png',
    img2Sp: '/src/assets/img/chara/sp/img_chara_asumi_2.png',
    thumb: {
      name: '小美浪あすみ',
      img: '/src/assets/img/chara/img_tmb_asumi.png',
    },
  },
]

function scrollToSwiper() {
  document.getElementById('swiper').scrollIntoView({
    behavior: 'smooth',
  })
}
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="mb-[30px] max-md:mb-[33px] effect_item">CHARACTER</ContentTitle>

    <div class="relative effect_item
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
      max-md:translate-y-[15px] max-md:[&.active]:translate-y-0">
      <Season :color="`var(${color})`" :seasons="seasons" class="mb-0"></Season>

      <swiper id="swiper" :modules="modules" :navigation="swiperOptions.navigation"
        :pagination="swiperOptions.pagination" :slides-per-view="1" :space-between="0" :autoHeight="true"
        :effect="'fade'" :fadeEffect="swiperOptions.fadeEffect" :speed="500" class="w-full">
        <swiper-slide v-for="character in characters">
          <SlideInner :character="character" :color="color"></SlideInner>
        </swiper-slide>

        <div class="top-[20px] left-auto right-[55px] w-[40px] h-[40px] mt-0 bg-none
        before:absolute before:w-full before:h-full before:rounded-full before:top-[2px] before:left-[2px] before:bg-black
        after:absolute after:w-full after:h-full after:rounded-full after:top-0 after:left-0 after:bg-[var(--my-color-var)]
        scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
        hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
        max-md:top-0 max-md:right-[52px] max-md:w-[35px] max-md:h-[35px]
        swiper-button-prev">
          <span class="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-[15px] h-[10px]
          bg-[url(/src/assets/img/common/arrow_left.svg)] bg-center bg-contain bg-no-repeat
          max-md:w-[15px] max-md:h-[10px]"></span>
        </div>
        <div class="top-[20px] right-[2px] w-[40px] h-[40px] mt-0 bg-none
        before:absolute before:w-full before:h-full before:rounded-full before:top-[2px] before:left-[2px] before:bg-black
        after:absolute after:w-full after:h-full after:rounded-full after:top-0 after:left-0 after:bg-[var(--my-color-var)]
        scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
        hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
        max-md:top-0 max-md:right-[2px] max-md:w-[35px] max-md:h-[35px]
        swiper-button-next">
          <span class="absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-[15px] h-[10px]
          bg-[url(/src/assets/img/common/arrow_right.svg)] bg-center bg-contain bg-no-repeat
          max-md:w-[15px] max-md:h-[10px]"></span>
        </div>
      </swiper>

      <div class="mt-[50px] max-md:mt-[15px]">
        <h4 class="pb-[40px] font-semibold text-[36px] font-montserrat tracking-[.075em]
        max-md:pb-[20px] max-md:text-[23px] max-md:tracking-wider">CHARACTER LIST</h4>
        <div class="slide_pagination text-[0] tracking-[-.4em]">
          <div @click="scrollToSwiper" v-for="(character, index) in characters" class="group swiper-pagination-thumb inline-block mr-[50px] mb-[30px] align-top text-[16px] tracking-normal text-center cursor-pointer
          scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
          hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
          [&:nth-child(4n)]:mr-0
          max-md:w-[28%] max-md:mr-[7%] max-md:mb-[22px] max-md:text-[12px]
          max-md:[&:nth-child(3n)]:mr-0
          max-md:[&:nth-child(4n)]:mr-[7%]" :class="{ active: currentActive === index + 1 }">
            <p
              class="relative
              before:opacity-70 before:absolute before:top-[17px] before:left-[17px] before:w-full before:h-full before:rounded-full before:bg-[#ffff4f]
              before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              hover:before:translate-x-[10px] hover:before:translate-y-[10px] hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]">
              <img :src="character.thumb.img" class="relative bg-[#9ce8f5] rounded-full [transition:_background-color_.4s_ease-out]
              group-[.active]:bg-[#fc90b2] group-[.active]:[transition:_background-color_.4s_ease-out]"
                :alt="character.thumb.name">
            </p>
            <p
              class="inline-block relative pt-[20px] align-top font-medium tracking-normal
              before:box-content before:opacity-0 before:absolute before:bottom-[-10px] before:left-0 before:w-full before:h-[2px] before:border-2 before:border-solid before:border-black before:[transition:_opacity_.4s_ease-out] before:bg-[var(--my-color-var)]
              group-[.active]:before:opacity-100 group-[.active]:before:[transition:_opacity_.4s_ease-out]
              max-md:pt-[11px]
              max-md:before:bottom-[-5px] max-md:before:h-[1px] max-md:before:border max-md:before:border-solid max-md:before:border-black">
              {{ character.thumb.name }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
