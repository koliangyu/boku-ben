<script setup>
import { RouterLink } from 'vue-router'
import DecoItem from '../components/DecoItem.vue'

const navigation = [
  { name: 'TOP', href: '/', target: null },
  { name: 'NEWS', href: '/news', target: null },
  { name: 'ON AIR', href: '/onair', target: null },
  { name: 'STORY', href: '/story', target: null },
  { name: 'STAFF/CAST', href: '/staffcast', target: null },
  { name: 'CHARACTER', href: '/character', target: null },
  { name: '"Study"', href: '/study', target: '_blank' },
  { name: 'MUSIC', href: '/music', target: null },
  { name: 'EVENT', href: '/event', target: null },
  { name: 'MOVIE', href: '/movie', target: null },
  { name: 'SPECIAL', href: '/special', target: null },
  { name: 'COMICS', href: '/comics', target: null },
  { name: 'GOODS', href: '/goods', target: null },
  { name: 'Blu-ray&DVD', href: '/bddvd', target: null },
  { name: 'Twitter', href: 'https://twitter.com/bokuben_anime', target: '_blank' },
]
</script>

<template>
  <header class="relative w-[218px] pt-[5px] bg-white table-cell align-top">
    <div class="hidden">
      <div>
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/img/common/logo.svg" alt="ぼくたちは勉強ができない">
        </RouterLink>
      </div>
    </div>

    <div class="relative w-[207px] h-screen min-h-[1073px] my-0 mx-auto pt-[13px] pb-[333px] px-0">
      <div class="w-[200px] mt-0 mb-[11px] mx-auto block">
        <RouterLink :to="{ name: 'home' }" class="block w-full h-full">
          <img src="@/assets/img/common/logo02.svg" alt="ぼくたちは勉強ができない">
        </RouterLink>
      </div>

      <div class="mt-[15px] mb-[40px] mx-0 block">
        <img src="@/assets/img/top/txt_2nd_pc.png" alt="第2期　10月5日より放送開始！">
      </div>

      <DecoItem class="block"></DecoItem>

      <div>
        <ul class="w-[197px] mx-auto my-0">
          <li v-for="item in navigation" class="mx-0 my-[2.5px]">
            <RouterLink :to="item.href" :target="item.target" class="group inline-block relative h-full py-[8px] pr-0 pl-[20px] text-black font-extrabold text-[22px] font-montserrat tracking-[.075em] no-underline
               before:transition-all before:ease-out before:duration-300
               before:opacity-0 before:absolute before:top-0 before:left-[2px] before:translate-x-[10px] before:w-[16px] before:h-full
               before:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')]
               before:bg-left before:bg-no-repeat before:bg-contain
               hover:before:opacity-100 hover:before:translate-x-0
               hover:before:transition-all hover:before:ease-out hover:before:duration-300
               [&.router-link-active]:before:opacity-100 [&.router-link-active]:before:translate-x-0">
              {{ item.name }}
              <span class="block absolute right-0 bottom-[2px] w-full h-[6px] bg-white border-2 border-solid border-black
               before:bg-white before:transition-[width] before:duration-[300ms] before:absolute before:-top-[2px] before:-left-[3px] before:w-[calc(100%_+_6px)] before:h-[calc(100%_+_4px)]
               group-hover:before:w-0 group-hover:before:transition-[width] group-hover:before:duration-[300ms]
               group-[&.router-link-active]:before:w-0"></span>
            </RouterLink>
          </li>
        </ul>

        <div class="mt-[13px] block">
          <a href="/event">
            <img src="@/assets/img/top/bnr/bnr_event.jpg" alt="「ぼくたちは勉強ができない」スペシャルイベント開催！" class="block scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
             hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
          </a>
        </div>
      </div>
    </div>
  </header>
</template>