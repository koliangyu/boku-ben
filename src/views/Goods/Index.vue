<script setup>
import goods3087ThumbnailUrl from '@/assets/img/goods/goods_3087_thumbnail.jpg'
import goods3088ThumbnailUrl from '@/assets/img/goods/goods_3088_thumbnail.jpg'
import goods3089ThumbnailUrl from '@/assets/img/goods/goods_3089_thumbnail.jpg'
import goods3090ThumbnailUrl from '@/assets/img/goods/goods_3090_thumbnail.jpg'
import goods3091ThumbnailUrl from '@/assets/img/goods/goods_3091_thumbnail.jpg'
import goods3092ThumbnailUrl from '@/assets/img/goods/goods_3092_thumbnail.jpg'
import goods3093ThumbnailUrl from '@/assets/img/goods/goods_3093_thumbnail.jpg'
import goods3094ThumbnailUrl from '@/assets/img/goods/goods_3094_thumbnail.jpg'
import goods3095ThumbnailUrl from '@/assets/img/goods/goods_3095_thumbnail.jpg'
import goods3096ThumbnailUrl from '@/assets/img/goods/goods_3096_thumbnail.jpg'
import goods3097ThumbnailUrl from '@/assets/img/goods/goods_3097_thumbnail.jpg'
import goods3098ThumbnailUrl from '@/assets/img/goods/goods_3098_thumbnail.jpg'
import { storeToRefs } from 'pinia'
import ContentTitle from '../../components/ContentTitle.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.FUMINO)

const layoutProps = {
  contentInnerClass: 'w-[895px] pb-[316px] max-md:w-[90%] max-md:pb-[142px]',
}

const goods = [
  {
    name: 'トレーディングスクエア缶バッジ',
    href: './?item_id=3098',
    img: goods3098ThumbnailUrl,
  },
  {
    name: 'マウスパッド',
    href: './?item_id=3097',
    img: goods3097ThumbnailUrl,
  },
  {
    name: '缶バッジコレクション',
    href: './?item_id=3096',
    img: goods3096ThumbnailUrl,
  },
  {
    name: '手帳型スマートフォンケース 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3095',
    img: goods3095ThumbnailUrl,
  },
  {
    name: 'シャープペンシル 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3094',
    img: goods3094ThumbnailUrl,
  },
  {
    name: 'クリアファイルセット古橋文乃＆緒方理珠/武元うるか＆桐須真冬/小美浪あすみ＆集合',
    href: './?item_id=3093',
    img: goods3093ThumbnailUrl,
  },
  {
    name: 'アクリルフィギュア 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3092',
    img: goods3092ThumbnailUrl,
  },
  {
    name: 'B2タペストリー 古橋文乃＆緒方理珠＆武元うるか/桐須真冬＆小美浪あすみ',
    href: './?item_id=3091',
    img: goods3091ThumbnailUrl,
  },
  {
    name: '缶バッジ',
    href: './?item_id=3090',
    img: goods3090ThumbnailUrl,
  },
  {
    name: 'レザーパスケース',
    href: './?item_id=3089',
    img: goods3089ThumbnailUrl,
  },
  {
    name: 'メガネケースセット',
    href: './?item_id=3088',
    img: goods3088ThumbnailUrl,
  },
  {
    name: 'まるっとレザーケース',
    href: './?item_id=3087',
    img: goods3087ThumbnailUrl,
  },
]
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="max-md:mb-[29px] effect_item">GOODS</ContentTitle>

    <div class="relative effect_item">
      <ul class="flex flex-wrap after:block after:invisible after:clear-both after:h-0">
        <li v-for="item in goods" class="group relative w-[198px] h-auto mt-0 mr-[24px] mb-[40px] ml-0 [transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)]
          max-md:w-[48%] max-md:h-auto max-md:mt-0 max-md:mr-[4%] max-md:mb-[40px] max-md:ml-0 max-md:even:mr-0">
          <div
            class="relative w-[198px] h-[198px] overflow-hidden bg-white border-2 border-solid border-[#e6e6e6] bg-no-repeat bg-center bg-contain
            before:block before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[200%] before:h-[200%] before:bg-[var(--my-color-var)]
            before:translate-x-[22%] before:translate-y-[0%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
            group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[-50%] group-hover:before:rotate-[-45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
            max-md:relative max-md:w-full max-md:h-auto max-md:pt-[100%] max-md:overflow-hidden max-md:bg-white max-md:border-2 max-md:border-solid max-md:border-[#e6e6e6]"
            :style="`background-image:url(${item.img})`">
          </div>
          <p
            class="relative w-full pt-[30px] font-extrabold text-[17px] leading-normal [transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)]
            before:box-content before:block before:absolute before:top-[13px] before:left-0 before:w-full before:h-[3px] before:border-t-4 before:border-b-2 before:border-solid before:border-black before:bg-[var(--my-color-var)]
            max-md:pt-[26px] max-md:text-[3.7333333333vw]
            max-md:before:top-[12px] max-md:before:h-[2px] max-md:before:border-t-2 max-md:before:border-b max-md:before:border-solid max-md:before:border-black">
            {{ item.name }}</p>
          <a :href="item.href" class="block absolute top-0 left-0 z-[2] w-full h-full"></a>
        </li>
      </ul>

      <div class="relative align-top text-center">
        <div v-if="false" class="inline-block relative w-[42px] h-[42px] rounded-full [box-shadow:_3px_3px_#000] cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)]
        bg-[url(/src/assets/img/common/arrow_left.svg)] bg-no-repeat bg-center bg-[15px_auto] bg-[var(--my-color-var)]
        scale-100 origin-center
        hover:scale-[.93]
        max-md:w-[35px] max-md:h-[35px] max-md:[box-shadow:_2px_2px_#000] max-md:bg-[8px_auto]">
          <a href="?p=1" class="absolute top-0 left-0 w-full h-full"></a>
        </div>

        <ul class="inline-block mt-[12px] mr-[20px] mb-0 ml-[24px] align-top tracking-[-.4em] text-center
          max-md:mt-[12px] max-md:mx-[4.4%] max-md:mb-0 max-md:align-top max-md:text-center">
          <li
            class="inline-block relative mx-[10px] my-0 px-[4px] py-0 align-top font-bold font-montserrat tracking-normal active
          before:absolute before:bottom-[-6px] before:left-[1px] before:w-0 before:h-0 before:m-auto before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] before:border-t-[5px] before:border-black before:border-double
          [&.active]:before:w-full
          hover:before:w-full
          max-md:mx-[10px] max-md:my-0 max-md:px-[4px] max-md:py-0 max-md:align-top max-md:font-bold max-md:tracking-normal
          max-md:before:absolute max-md:before:bottom-[-6px] max-md:before:left-[1px] max-md:before:w-0 max-md:before:h-0 max-md:before:m-auto max-md:before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] max-md:before:border-t-[5px] max-md:before:border-black max-md:before:border-double">
            <div class="text-[18px] max-md:text-[3.2vw]">
              <p>1</p>
            </div>
            <a href="?p=1" class="absolute top-0 left-0 w-full h-full"></a>
          </li>
          <li
            class="inline-block relative mx-[10px] my-0 px-[4px] py-0 align-top font-bold font-montserrat tracking-normal
          before:absolute before:bottom-[-6px] before:left-[1px] before:w-0 before:h-0 before:m-auto before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] before:border-t-[5px] before:border-black before:border-double
          [&.active]:before:w-full
          hover:before:w-full
          max-md:mx-[10px] max-md:my-0 max-md:px-[4px] max-md:py-0 max-md:align-top max-md:font-bold max-md:tracking-normal
          max-md:before:absolute max-md:before:bottom-[-6px] max-md:before:left-[1px] max-md:before:w-0 max-md:before:h-0 max-md:before:m-auto max-md:before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] max-md:before:border-t-[5px] max-md:before:border-black max-md:before:border-double">
            <div class="text-[18px] max-md:text-[3.2vw]">
              <p>2</p>
            </div>
            <a href="?p=2" class="absolute top-0 left-0 w-full h-full"></a>
          </li>
        </ul>

        <div class="inline-block relative w-[42px] h-[42px] rounded-full [box-shadow:_3px_3px_#000] cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)]
        bg-[url(/src/assets/img/common/arrow_right.svg)] bg-no-repeat bg-center bg-[15px_auto] bg-[var(--my-color-var)]
        scale-100 origin-center
        hover:scale-[.93]
        max-md:w-[35px] max-md:h-[35px] max-md:[box-shadow:_2px_2px_#000] max-md:bg-[8px_auto]">
          <a href="?p=2" class="absolute top-0 left-0 w-full h-full"></a>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
