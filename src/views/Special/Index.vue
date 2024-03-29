<script setup>
import { storeToRefs } from 'pinia'
import ContentTitle from '../../components/ContentTitle.vue'
import { useAssetsUrl } from '../../composables/useAssetsUrl'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.MAFUYU)

const layoutProps = {
  contentInnerClass: 'pb-[270px] max-md:pb-[64px]',
}

const specials = [
  {
    title: '古橋静流のPC',
    href: '../millennium/',
    img: useAssetsUrl('special/img_millennium.jpg'),
  },
  {
    title: '秋の星座を見よう',
    href: '../constellation/',
    img: useAssetsUrl('special/img_constellation.jpg'),
  },
  {
    title: '季節ビジュアル',
    href: './monthly/',
    img: useAssetsUrl('special/img_monthly.png'),
  },
  {
    title: '第２期キービジュアル公開記念！SNS用アイコンプレゼント',
    href: './icon5/',
    img: useAssetsUrl('special/img_sp_5.jpg'),
  },
  {
    title: 'うるかからの暑中見舞い風壁紙プレゼント',
    href: './summer/',
    img: useAssetsUrl('special/img_summer.jpg'),
  },
  {
    title: '推してよ、ティーチャー!! ディスプレイコンテスト',
    href: './contest/',
    img: useAssetsUrl('special/img_sp_contest.jpg'),
  },
  {
    title: 'LINEスタンプ シーン投票募集！',
    href: './stamp/',
    img: useAssetsUrl('special/img_sp_stamp.jpg'),
  },
  {
    title: 'ぼく勉学生証メーカー',
    href: './card/',
    img: useAssetsUrl('special/img_sp_cardmaker.jpg'),
  },
  {
    title: 'LINEアイコンプレゼント',
    href: './icon4/',
    img: useAssetsUrl('special/img_sp_4.jpg'),
  },
  {
    title: '第三弾キービジュアル公開記念！SNS用アイコンプレゼント',
    href: './icon3/',
    img: useAssetsUrl('special/img_sp_3.jpg'),
  },
  {
    title: '第二弾キービジュアル公開記念！SNS用アイコンプレゼント',
    href: './icon2/',
    img: useAssetsUrl('special/img_sp_2.jpg'),
  },
  {
    title: 'アニメ化決定！SNS用アイコンプレゼント',
    href: './icon/',
    img: useAssetsUrl('special/img_sp_1.jpg'),
  },
]
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="effect_item">SPECIAL</ContentTitle>

    <ul class="text-[0] tracking-[-.4em] opacity-0 translate-y-[25px] effect_item
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
     max-md:translate-y-[15px] max-md:[&.active]:translate-y-0">
      <li v-for="special in specials" class="group inline-block relative w-[393px] mb-[38px] align-top text-[16px] tracking-normal even:ml-[60px]
        max-md:w-[94%] max-md:mb-[25px] max-md:even:ml-0">
        <div class="relative w-full pt-[44%]
          before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[var(--my-color-var)]
          before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          group-hover:before:translate-x-[10px] group-hover:before:translate-y-[10px] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-4 after:border-solid after:border-black after:box-border
          max-md:pt-[44%]
          max-md:before:top-[18px] max-md:before:left-[6%]">
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat origin-center before:bg-[var(--my-color-var)]
              before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[250%] before:h-[250%]
              before:translate-x-[10%] before:translate-y-[-50%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[-50%] group-hover:before:rotate-[-45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]"
              :style="`background-image: url(${special.img})`"></div>
          </div>
        </div>
        <div class="inline-block relative mt-[34px] font-semibold text-[13px] leading-[1.3em] tracking-[.075em]
          before:opacity-70 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[10px] before:bg-[var(--my-color-var)]
          before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
          group-hover:before:w-full group-hover:before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
          max-md:mt-[31px] max-md:text-[12px]">
          <p class="relative z-[1] md:overflow-hidden md:whitespace-nowrap md:text-ellipsis">{{ special.title }}</p>
        </div>
        <a :href="special.href" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
      </li>
    </ul>
  </AppLayout>
</template>
