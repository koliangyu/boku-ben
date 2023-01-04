<script setup>
import { Autoplay, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import ContentTitle from '../components/ContentTitle.vue'
import DecoItem from '../components/DecoItem.vue'
import Season from '../components/Season.vue'
import AppLayout from '../layouts/AppLayout.vue'

import 'swiper/css'

const modules = [Autoplay, Navigation]

const swiperOptions = {
  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
}

const layoutProps = {
  contentInnerClass: 'w-[895px] pb-[316px]',
  character: {
    color: '#f4afc4',
    bgTop: '/src/assets/img/common/bg/mafuyu/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/mafuyu/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_mafuyu.png',
    particleColor: '339',
  },
}

const seasons = [
  { name: '2ND SEASON', href: '/story' },
  { name: '1ST SEASON', href: '/story/1st' },
]

const categories = [
  { name: '[ introduction ]', href: '/story/2nd/intro.html', isIntro: true, isNow: false },
  { name: '#01', href: '/story/2nd/01.html', isIntro: false, isNow: false },
  { name: '#02', href: '/story/2nd/02.html', isIntro: false, isNow: false },
  { name: '#03', href: '/story/2nd/03.html', isIntro: false, isNow: false },
  { name: '#04', href: '/story/2nd/04.html', isIntro: false, isNow: false },
  { name: '#05', href: '/story/2nd/05.html', isIntro: false, isNow: false },
  { name: '#06', href: '/story/2nd/06.html', isIntro: false, isNow: false },
  { name: '#07', href: '/story/2nd/07.html', isIntro: false, isNow: false },
  { name: '#08', href: '/story/2nd/08.html', isIntro: false, isNow: false },
  { name: '#09', href: '/story/2nd/09.html', isIntro: false, isNow: false },
  { name: '#10', href: '/story/2nd/10.html', isIntro: false, isNow: false },
  { name: '#11', href: '/story/2nd/11.html', isIntro: false, isNow: false },
  { name: '#12', href: '/story/2nd/12.html', isIntro: false, isNow: false },
  { name: '#13', href: '/story/2nd/13.html', isIntro: false, isNow: true },
]
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">STORY</ContentTitle>

    <div
      class="opacity-0 translate-y-[25px] effect_item
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <Season :color="layoutProps.character.color" :seasons="seasons"></Season>

      <div class="relative w-full mx-auto mt-0 mb-[40px] pl-[10px] text-center effect_item">
        <ul>
          <li v-for="category in categories"
            class="group inline-block relative mr-[20px] mb-[14px] align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#f4afc4]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.now]:before:opacity-100 [&.now]:before:w-full [&.now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.nav-intro]:block [&.nav-intro]:max-w-[220px] [&.nav-intro]:mx-auto [&.nav-intro]:mt-0 [&.nav-intro]:mb-[20px]"
            :class="{ 'nav-intro': category.isIntro, 'now': category.isNow }">
            <a :href="category.href" class="block w-full h-full text-black font-semibold text-[18px] font-montserrat tracking-wider no-underline
              group-[.nav-intro]:text-[22px]">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>

      <div
        class="relative w-[845px] ml-[10px]
        before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[#f4afc4]">
        <div class="relative px-0 py-[15px] bg-white border-[5px] border-solid border-black
        before:absolute before:top-1/2 before:left-[-18px] before:z-[9] before:-translate-y-1/2 before:w-[36px] before:h-[95%]
        before:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')]
        before:bg-left-top before:bg-repeat-y before:bg-contain">
          <div class="relative pt-[42px] pr-0 pb-[55px] pl-[65px] font-semibold text-[20px] tracking-[.075em]">
            <DecoItem :color="layoutProps.character.color"></DecoItem>

            <div>
              <div class="relative">
                <h3
                  class="inline-block absolute top-0 left-0 z-[2] w-auto mb-[53px] px-[10px] pt-0 pb-[10px] text-white font-extrabold text-[54px] font-montserrat tracking-[.075em] [text-shadow:_black_1px_1px_0px,_black_-1px_1px_0px,_black_1px_-1px_0px,_black_-1px_-1px_0px]
                  before:box-content before:opacity-100 before:absolute before:bottom-0 before:left-0 before:z-[-1] before:w-full before:h-[30px] before:border before:border-solid before:border-black before:[transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)] before:bg-[#f4afc4]">
                  #13
                </h3>
                <p
                  class="block min-h-[58px] mt-0 mr-0 mb-[16px] ml-[164px] pt-[10px] pb-0 px-0 font-semibold leading-[1.6] tracking-[.075em]">
                  祭の終わりは寂しくも華やかに［ｘ］どもを祝福する
                </p>
              </div>

              <div class="relative w-[730px]">
                <swiper :modules="modules" :navigation="swiperOptions.navigation" :loop="true"
                  :autoplay="swiperOptions.autoplay" :slides-per-view="1" :space-between="0" class="w-[730px] mx-0">
                  <swiper-slide><img src="@/assets/img/story/2nd/13/01.jpg"></swiper-slide>
                  <swiper-slide><img src="@/assets/img/story/2nd/13/02.jpg"></swiper-slide>
                  <swiper-slide><img src="@/assets/img/story/2nd/13/03.jpg"></swiper-slide>
                </swiper>

                <div class="swiper-button-prev-custom absolute top-1/2 left-[-25px] translate-x-0 -translate-y-1/2 w-[42px] h-[42px]
                bg-[url(/src/assets/img/common/arrow_left.svg)] bg-center bg-no-repeat bg-[15px_auto] rounded-full shadow-[_3px_3px_#000]
                cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)] z-10 bg-[#f4afc4]
                hover:translate-x-[-8px] hover:-translate-y-1/2">
                </div>
                <div class="swiper-button-next-custom absolute top-1/2 right-[-25px] translate-x-0 -translate-y-1/2 w-[42px] h-[42px]
                bg-[url(/src/assets/img/common/arrow_right.svg)] bg-center bg-no-repeat bg-[15px_auto] rounded-full shadow-[_3px_3px_#000]
                cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)] z-10 bg-[#f4afc4]
                hover:translate-x-[8px] hover:-translate-y-1/2">
                </div>
              </div>

              <div class="w-[730px] mt-[28px] mb-[60px] mx-0 text-[16px] leading-[2.2]">
                　着ぐるみの成幸の乱入により、文乃たちの演劇は大絶賛で終演。しかし着ぐるみ越しにキスした相手が分からず、文乃はただただ混乱…。一方、理珠のクラスのうどん店は、みんなの協力で大量のうどんが売り切れそうな盛況ぶり！<br>
                そして「一緒に花火を見ると結ばれる」というジンクスがささやかれる、後夜祭の時間が近づいてきた。成幸と一緒に花火を見る、運命の相手とは…!?
              </div>

              <div class="relative z-[6]
              after:block after:absolute after:top-[13px] after:left-[-65px] after:z-0 after:w-[835px] after:h-[204px]
              after:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] after:bg-left-top after:bg-repeat">
                <h4
                  class="inline-block relative z-[7] w-auto text-white font-extrabold text-[24px] font-montserrat tracking-[.15em] [text-shadow:_black_1px_1px_0px,_black_-1px_1px_0px,_black_1px_-1px_0px,_black_-1px_-1px_0px]">
                  STAFF
                </h4>
                <p class="relative z-[7] min-h-[184px] pt-[16px] pb-0 px-0 text-[15px] leading-[2.4]">
                  脚本：雑破業<br>
                  絵コンテ：中津環<br>
                  演出：前園文夫
                </p>
              </div>

              <div class="relative z-[6] w-[730px] mt-[60px]">
                <h4
                  class="inline-block relative w-auto pt-0 pb-[16px] py-0 text-white font-extrabold text-[24px] font-montserrat tracking-[.15em] [text-shadow:_black_1px_1px_0px,_black_-1px_1px_0px,_black_1px_-1px_0px,_black_-1px_-1px_0px]">
                  WEB TRAILER
                </h4>
                <div class="relative w-full pt-[56.25%]">
                  <iframe width="920" height="520" src="https://www.youtube-nocookie.com/embed/NBm3NphErcM"
                    frameborder="0" allow="autoplay; encrypted-media" allowfullscreen=""
                    class="absolute top-0 right-0 w-full h-full"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
