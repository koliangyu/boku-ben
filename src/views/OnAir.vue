<script setup>
import { storeToRefs } from 'pinia'
import ContentTitle from '../components/ContentTitle.vue'
import AppLayout from '../layouts/AppLayout.vue'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.URUKA)

const layoutProps = {
  contentInnerClass: 'pb-[322px] max-md:pb-[52px]',
}
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="mb-[40px] max-md:mb-[22px] effect_item">ONAIR</ContentTitle>

    <p class="group font-semibold text-[20px] leading-[44px] tracking-[.15em] effect_item block
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
      max-md:text-[15px] max-md:leading-[37px] max-md:tracking-[.1em] max-md:translate-y-[15px] max-md:[&.active]:translate-y-0
      max-md:hidden">
      <span class="relative text-[26px] tracking-widest
        before:box-content before:opacity-0 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)_1s]
        max-md:text-[20px] max-md:tracking-widest">
        第2期 2019年10月</span>より放送開始！
    </p>

    <p class="group font-semibold text-[20px] leading-[44px] tracking-[.15em] effect_item hidden
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
      max-md:text-[15px] max-md:leading-[37px] max-md:tracking-[.1em] max-md:translate-y-[15px] max-md:[&.active]:translate-y-0
      max-md:block">
      <span class="relative text-[26px] tracking-widest
        before:box-content before:opacity-0 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)_1s]
        max-md:text-[20px] max-md:tracking-widest max-md:before:bottom-[-5px]">第2期</span>2019年10月より<br><span class="relative text-[26px] tracking-widest
        before:box-content before:opacity-0 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)_1s]
        max-md:text-[17px] max-md:tracking-widest max-md:before:bottom-[-5px]">放送開始！</span>
    </p>

    <div class="mt-[45px] effect_item
     opacity-0 translate-y-[25px]
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
     max-md:translate-y-[15px] max-md:mt-[25px] max-md:[&.active]:translate-y-0">
      <div class="[border-bottom:_2px_solid_#000] text-left font-bold md:text-[0] md:tracking-[-.4em]
       before:box-content before:block before:w-full before:[border-top:_4px_solid_#000] before:[border-bottom:_2px_solid_#000] before:h-[3px] before:bg-[var(--my-color-var)]
       max-md:after:table max-md:after:clear-both">
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[248px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:block max-md:float-left max-md:w-[110px]">
          放送局</p>
        <p class="md:hidden text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:tracking-normal md:w-[156px]
        max-md:block max-md:ml-[120px]">放送情報</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[156px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          放送スタート日</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[100px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          放送週</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[150px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          放送時間</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[104px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          備考</p>
      </div>
      <ul class="font-bold">
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.bs11.jp/" target="_blank">BS11</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">24：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://s.mxtv.jp/" target="_blank">TOKYO MX</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">24：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.gtv.co.jp/" target="_blank">群馬テレビ</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">24：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.tochigi-tv.jp/" target="_blank">とちぎテレビ</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">24：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
            【第2話 振替放送】<br>10/17(木)26:00～放送</p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.mbs.jp/" target="_blank">MBS</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月12日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">26：38～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.at-x.com/" target="_blank">AT-X</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">22：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://tv-aichi.co.jp/" target="_blank">テレビ愛知</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月8日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週火曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">26：05～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          last-of-type:[border-bottom:_none] last-of-type:after:block last-of-type:after:w-full last-of-type:after:[border-top:_2px_solid_#000] last-of-type:after:[border-bottom:_4px_solid_#000] last-of-type:after:h-[3px] last-of-type:after:absolute last-of-type:after:bottom-[-7px]
          after:box-content after:bg-[var(--my-color-var)]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.ncctv.co.jp/" target="_blank">長崎文化放送</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月24日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週木曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">25：55～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
      </ul>
      <p class="text-[12px] mt-[25px]">※放送日時は変更となる場合がございます</p>
    </div>

    <div class="mt-[45px] effect_item
     opacity-0 translate-y-[25px]
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
     max-md:translate-y-[15px] max-md:mt-[25px] max-md:[&.active]:translate-y-0">
      <p class="relative inline-block px-[15px] py-0 mb-[30px] text-[20px] font-bold
       after:absolute after:z-[1] after:bottom-[-10px] after:left-0 after:w-full after:h-[23px] after:bg-[var(--my-color-var)]
       max-md:text-[18px] max-md:px-[8px] max-md:py-0
       max-md:after:h-[16px] max-md:after:bottom-[-5px]">
        <span class="relative z-[5]">配信情報</span>
      </p>
      <div class="[border-bottom:_2px_solid_#000] text-left font-bold text-[0] tracking-[-.4em]
       before:box-content before:block before:w-full before:[border-top:_4px_solid_#000] before:[border-bottom:_2px_solid_#000] before:h-[3px] before:bg-[var(--my-color-var)]
       max-md:after:table max-md:after:clear-both">
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[248px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:block max-md:float-left max-md:w-[110px]">
          配信</p>
        <p class="md:hidden text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:tracking-normal md:w-[156px]
        max-md:block max-md:ml-[120px]">配信情報</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[156px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          配信スタート日</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[100px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          配信週</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[150px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          配信時間</p>
        <p class="text-center relative text-[#f65589] text-[14px] px-0 py-[12px] md:inline-block md:tracking-normal md:w-[104px]
        [&:not(:last-of-type)]:after:bg-[#DDD] [&:not(:last-of-type)]:after:absolute [&:not(:last-of-type)]:after:w-[2px] [&:not(:last-of-type)]:after:h-[13px] [&:not(:last-of-type)]:after:block [&:not(:last-of-type)]:after:right-[-1px] [&:not(:last-of-type)]:after:top-1/2 [&:not(:last-of-type)]:after:-translate-y-1/2
        max-md:hidden">
          備考</p>
      </div>
      <ul class="font-bold">
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://abema.tv/video/title/26-84" target="_blank">AbemaTV</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">24：30～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://anime.dmkt-sp.jp/animestore/ci?workId=22998" target="_blank">ｄアニメストア</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月5日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週土曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">25：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://pc.video.dmkt-sp.jp/ti/10023851" target="_blank">ｄTV</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://anime.nicovideo.jp/detail/boku-ben2/index.html" target="_blank">ニコニコ<br
                class="hidden max-md:block">チャンネル</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://anime.nicovideo.jp/detail/boku-ben2/index.html" target="_blank">ニコニコ<br
                class="hidden max-md:block">生放送</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">22：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.b-ch.com/titles/6700/" target="_blank">バンダイ<br class="hidden max-md:block">チャンネル</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.hulu.jp/we-never-learn" target="_blank">Hulu</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.hikaritv.net/" target="_blank">ひかりTV</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://fod.fujitv.co.jp/s/genre/anime/ser5a31/?img_frame=0" target="_blank">FOD</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://gyao.yahoo.co.jp/p/00548/v12331/" target="_blank">GYAO!</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.videomarket.jp/title/155226" target="_blank">Video Market</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://animehodai.my.softbank.jp/feature/d/index.html" target="_blank">アニメ放題</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://video.unext.jp/title/SID0043195" target="_blank">U-NEXT</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://ch.ani.tv/titles/1092" target="_blank">あにてれ</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.amazon.co.jp/dp/B07YP2FRWH/" target="_blank">Amazon　<br
                class="hidden max-md:block">Prime Video</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.netflix.com/browse" target="_blank">Netflix</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月7日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週月曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">12：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left [border-bottom:_2px_solid_#C8C8C8] px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://www.videopass.jp/series/9939" target="_blank">ビデオパス</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月8日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週火曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">00：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>
        <li class="relative w-full align-top text-left px-0 py-[30px] md:text-[0] md:tracking-[-.4em]
          last-of-type:[border-bottom:_none] last-of-type:after:block last-of-type:after:w-full last-of-type:after:[border-top:_2px_solid_#000] last-of-type:after:[border-bottom:_4px_solid_#000] last-of-type:after:h-[3px] last-of-type:after:absolute last-of-type:after:bottom-[-7px]
          after:box-content after:bg-[var(--my-color-var)]
          max-md:border-b max-md:px-0 max-md:py-[20px]
          max-md:after:table max-md:after:clear-both">
          <p
            class="text-[15px] align-middle
            md:tracking-normal md:inline-block md:w-[248px] md:pl-[18px] md:box-border md:text-left
            max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:w-[34%] max-md:pl-[5px] max-md:leading-[1.3]">
            <a href="https://jvod.myjcom.jp/detail/JVOD0000100061171829" target="_blank">J:COM<br
                class="hidden max-md:block">オンデマンド <br class="hidden max-md:block">メガパック</a>
          </p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[156px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:mt-0">10月8日より</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[100px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block">毎週火曜</p>
          <p class="text-[15px] align-middle md:tracking-normal md:inline-block md:text-center md:w-[150px]
          max-md:text-[14px] max-md:align-middle max-md:inline-block max-md:ml-0">00：00～</p>
          <p class="text-[12px] align-middle md:tracking-normal md:inline-block md:text-left md:w-[214px] font-medium md:leading-[1.4]
            max-md:align-middle max-md:inline-block max-md:mt-[10px] max-md:leading-[1.4]">
          </p>
        </li>

      </ul>
      <p class="text-[12px] mt-[25px]">※配信日時は変更になる可能性がございます。予めご了承ください。</p>
    </div>
  </AppLayout>
</template>
