<script setup>
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import ContentTitle from '../components/ContentTitle.vue'
import DecoItem from '../components/DecoItem.vue'
import MovieModal from '../components/Modals/MovieModal.vue'
import AppLayout from '../layouts/AppLayout.vue'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.FUMINO)

const showModal = ref(false)

const isActive = ref(false)

const layoutProps = {
  contentInnerClass: 'top pb-[212px] [&.top]:w-full [&.top]:pt-0 [&.top]:max-md:pb-[42px]',
  isTop: true,
}

const news = [
  {
    id: 55576,
    title: 'ぼくたちは勉強ができない」第21巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！',
    href: './news/?id=55576',
    date: '2020.11.10',
  },
  {
    id: 55441,
    title: 'ぼくたちは勉強ができない」第20巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！',
    href: './news/?id=55441',
    date: '2020.10.21',
  },
  {
    id: 54040,
    title: '第2期最終巻特典CD内フルピュア関連楽曲2曲試聴音源公開',
    href: './news/?id=54040',
    date: '2020.05.27',
  },
]

onMounted(() => {
  setTimeout(() => {
    isActive.value = true
  }, 500)

  if (!document.getElementById('myScript')) {
    const script = document.createElement('script')
    script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
    script.setAttribute('async', '')
    script.setAttribute('charset', 'utf-8')
    script.setAttribute('id', 'myScript')
    document.head.appendChild(script)
  }
})

onUnmounted(() => {
  const el = document.getElementById('myScript')
  if (el) { el.remove() }
})
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <div class="relative p-0 text-center effect_item">
      <div class="relative w-full text-center">
        <img src="@/assets/img/top/img_main.jpg" class="w-full" alt="">
      </div>
      <h2 class="absolute top-[10px] right-[18px] w-[70px] h-[419px]
        opacity-0 translate-y-[20px]
        [&.active]:opacity-100 [&.active]:translate-y-0
        [&.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99),_opacity_.6s_ease-in,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)]
        max-md:top-auto max-md:bottom-[1.5%] max-md:left-[2%] max-md:w-[11.5%] max-md:h-auto"
        :class="{ active: isActive }">
        <img src="@/assets/img/top/copy_main.svg" class="md:w-[70px] md:h-[419px]" alt="[最終問題]　きみが選ぶのは、だれですか。">
      </h2>
    </div>

    <div class="hidden max-md:block">
      <img src="@/assets/img/top/txt_2nd_sp.jpg" alt="第2期　10月5日より放送開始！">
    </div>

    <div class="hidden max-md:block max-md:w-[90%] max-md:mt-0 max-md:mx-auto max-md:mb-[14px]">
      <a href="/event/"><img src="@/assets/img/top/bnr/bnr_event_sp.jpg" alt="「ぼくたちは勉強ができない」スペシャルイベント開催！"></a>
    </div>

    <div class="group relative pt-[67px] pb-[93px] px-0 overflow-hidden effect_item
      bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] bg-left-top bg-repeat
      max-md:pt-[47px] max-md:pb-[66px] max-md:px-0 max-md:bg-[length:16px_auto]">
      <div class="opacity-0 absolute bottom-0 left-[-30px] w-[334px] translate-x-[-40px]
        group-[.active]:opacity-100 group-[.active]:translate-x-0 group-[.active]:[transition:_transform_.6s_cubic-bezier(.01,_.53,_.37,_.99)_1s,_opacity_.4s_ease-in_1s,_-webkit-transform_.6s_cubic-bezier(.01,_.53,_.37,_.99)_1s]
        max-md:left-[-19%] max-md:w-[54%]">
        <img src="@/assets/img/top/img_movie.png" alt="">
      </div>

      <div class="w-[868px] mx-auto my-0 max-md:w-[90%]">
        <ContentTitle class="mb-[60px] max-md:mb-[31px] max-md:text-[0] max-md:tracking-[-.4em] effect_item"
          :h-class="'max-md:pb-[3px] max-md:text-[30px]'">MOVIE
        </ContentTitle>

        <div class="opacity-0 translate-y-[30px]
          group-[.active]:opacity-100 group-[.active]:translate-y-0 group-[.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s]
          max-md:translate-y-[20px] group-[.active]:max-md:translate-y-0">
          <div class="group/movie w-[520px] mx-auto my-0 md:text-center max-md:w-[78%] max-md:mt-0"
            data-movie="d88R3PgX2Wo" @click="showModal = true">
            <div class="relative w-full mx-auto my-0 pt-[56.25%] cursor-pointer
              before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[var(--my-color-var)]
              before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              group-hover/movie:before:translate-x-[10px] group-hover/movie:before:translate-y-[10px] group-hover/movie:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-4 after:border-solid after:border-black after:box-border
              max-md:top-[8%] max-md:left-[8%] max-md:after:border-[3px]">
              <div class="absolute top-0 left-0 w-full h-full">
                <div class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat origin-center overflow-hidden before:bg-[var(--my-color-var)]
                  before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[250%] before:h-[250%]
                  before:translate-x-[20%] before:translate-y-[-50%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
                  group-hover/movie:before:translate-x-[-50%] group-hover/movie:before:translate-y-[-50%] group-hover/movie:before:rotate-[-45deg] group-hover/movie:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
                  after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('/src/assets/img/movie/icon_play.svg')] after:bg-center after:bg-no-repeat after:bg-[length:70px_auto]
                   after:scale-100 after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
                   group-hover/movie:after:scale-[1.06] group-hover/movie:after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
                   max-md:after:bg-[length:45px_auto]"
                  style="background-image: url(//img.youtube.com/vi/d88R3PgX2Wo/maxresdefault.jpg)"></div>
              </div>
            </div>
            <div class="relative mt-[33px] font-semibold text-[16px] leading-[1.3em] tracking-[.075em] text-center inline-block
              before:opacity-70 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[10px] before:bg-[var(--my-color-var)]
              before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
              group-hover/movie:before:w-full group-hover/movie:before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
              max-md:mt-[34px] max-md:text-[13px] max-md:leading-[1.4em]">
              <p class="relative z-[1] overflow-hidden whitespace-nowrap text-ellipsis">TVアニメ「ぼくたちは勉強ができない！」PV</p>
            </div>
          </div>
          <div class="relative w-[283px] h-[40px] mt-[26px] mb-0 mx-auto text-center block
            scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
            hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
            before:absolute before:top-[4px] before:left-[4px] before:w-full before:h-full before:bg-black before:rounded-[10px]
            after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[var(--my-color-var)] after:rounded-[10px]
            max-md:w-[68%] max-md:h-[38px] max-md:mt-[18px] max-md:mb-0 max-md:mx-auto
            max-md:before:top-[3px] max-md:before:left-[3px] max-md:before:rounded-[5px]
            max-md:after:rounded-[5px]">
            <p class="relative top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-full font-semibold text-[17px] font-montserrat tracking-wider
              before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full
              before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]
              max-md:text-[15px] max-md:before:bg-[length:15px_auto]">
              MORE
            </p>
            <a href="/movie/" class="absolute top-0 left-0 z-[2] w-full h-full"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="group pt-[66px] pb-0 px-0 effect_item
      bg-[url('/src/assets/img/common/bg/fumino/pc_bg_top.png')] bg-left-top bg-no-repeat bg-contain
      max-md:pt-[50px]">
      <div class="w-[868px] mx-auto my-0 max-md:w-[90%]">
        <ContentTitle class="mb-[43px] max-md:mb-[30px] effect_item" :h-class="'max-md:pb-[3px] max-md:text-[30px]'">
          NEWS</ContentTitle>

        <div class="opacity-0 translate-y-[30px] text-[0] tracking-[-.4em]
          group-[.active]:opacity-100 group-[.active]:translate-y-0 group-[.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s]
          max-md:translate-y-[20px] max-md:text-center
          group-[.active]:max-md:translate-y-0">
          <div class="w-[433px] mr-[30px] inline-block align-top text-[16px] tracking-normal
            max-md:w-full max-md:mr-0 max-md:text-left">
            <div class="relative px-0 py-[6px]">
              <DecoItem :color="`var(${color})`"></DecoItem>

              <ul class="divide-y-2 divide-black divide-solid">
                <li v-for="item in news" class="relative pt-[25px] pb-[27.5px] px-0
                  max-md:pt-[17px] max-md:pb-[20px] max-md:px-0">
                  <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]
                    max-md:text-[12px]">{{ item.date }}</p>
                  <div class="mt-[4px] mb-0 mx-0 overflow-hidden font-bold text-[16px] tracking-wider whitespace-nowrap text-ellipsis
                    max-md:text-[12px]">
                    {{ item.title }}
                  </div>
                  <a :href="item.href" class="block absolute top-0 left-0 w-full h-full
                   before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[var(--my-color-var)]
                   before:[transition:_opacity_.3s_ease-out]
                   hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></a>
                </li>
              </ul>
            </div>

            <div class="relative w-[283px] h-[40px] mt-[32px] mb-0 mx-auto text-center block
              scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
              hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
              before:absolute before:top-[4px] before:left-[4px] before:w-full before:h-full before:bg-black before:rounded-[10px]
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[var(--my-color-var)] after:rounded-[10px]
              max-md:w-[75%] max-md:mt-[26px]
              max-md:before:top-[3px] max-md:before:left-[3px] max-md:before:rounded-[5px]
              max-md:after:rounded-[5px]">
              <p class="relative top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-full font-semibold text-[17px] font-montserrat tracking-wider
                before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full
                before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]
                max-md:text-[15px]
                max-md:before:bg-[length:15px_auto]">
                MORE
              </p>
              <a href="/news/" class="absolute top-0 left-0 z-[2] w-full h-full"></a>
            </div>
          </div>

          <div class="inline-block relative w-[calc(100%_-_463px)] mt-[148px] pt-[20px] pb-[24px] px-[20px] bg-black rounded-[5px] align-top text-[16px] tracking-normal
            max-md:w-[90%] max-md:mt-[97px] max-md:pt-[20px] max-md:pb-[24px] max-md:px-[5%]">
            <p class="twitter_name absolute top-[-30px] left-0 pt-[15px] pb-[10px] px-[20px] bg-black rounded-[5px_5px_0_0] font-bold text-[15px] font-montserrat tracking-[.15em] text-[var(--my-color-var)]
              max-md:top-[-24px] max-md:text-[11px] max-md:tracking-[.075em]">
              @bokuben_anime</p>
            <div class="twitter_timeline">
              <a class="twitter-timeline" data-width="360" data-height="400" data-chrome="noheader nofooter noscrollbar"
                href="https://twitter.com/bokuben_anime?ref_src=twsrc%5Etfw">Tweets by bokuben_anime</a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="opacity-0 translate-y-[30px] pt-[195px] effect_item
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s]
      max-md:translate-y-[20px] max-md:pt-[76px] [&.active]:max-md:translate-y-0">
      <div class="relative w-[375px] h-[60px] mx-auto my-0 border-[3px] border-solid border-black rounded-[10px] block
        scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
        hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
        before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]
        max-md:w-[68%] max-md:h-[40px] max-md:border-2 max-md:rounded-[5px]
        max-md:before:w-[20px] max-md:before:bg-[length:13px_auto]">
        <p class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[269px] py-[9px] pl-[35px] pr-0 font-semibold text-[18px]
          before:absolute before:top-0 before:left-0 before:w-[35px] before:h-full
          before:bg-[url('/src/assets/img/top/icon_jump.svg')] before:bg-[center_left] before:bg-no-repeat before:bg-[length:25px_auto]
          max-md:w-[193px] max-md:pl-[24px] max-md:text-[13px]
          max-md:before:bg-[length:20px_auto]">
          週刊少年ジャンプ公式リンク</p>
        <a href="https://www.shonenjump.com/j/rensai/bokuben.html" class="block absolute top-0 left-0 w-full h-full"
          target="_blank"></a>
      </div>
    </div>
  </AppLayout>

  <MovieModal :show="showModal" :color="`var(${color})`" @close="showModal = false">
    <div class="relative w-full pt-[56.25%]">
      <iframe width="900" height="506" src="https://www.youtube-nocookie.com/embed/d88R3PgX2Wo" frameborder="0"
        class="absolute top-0 left-0 w-full h-full"></iframe>
    </div>
  </MovieModal>
</template>
