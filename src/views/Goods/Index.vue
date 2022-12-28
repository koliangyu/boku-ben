<script setup>
import ContentTitle from '../../components/ContentTitle.vue'
import AppLayout from '../../layouts/AppLayout.vue'

const layoutProps = {
  contentInnerClass: 'w-[895px] pt-[71px] pb-[316px]',
  character: {
    color: '#9ce9f5',
    bgTop: '/src/assets/img/common/bg/fumino/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/fumino/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_fumino.png',
    particleColor: '187',
  },
}

const goods = [
  {
    name: 'トレーディングスクエア缶バッジ',
    href: './?item_id=3098',
    img: '/src/assets/img/goods/goods_3098_thumbnail.jpg',
  },
  {
    name: 'マウスパッド',
    href: './?item_id=3097',
    img: '/src/assets/img/goods/goods_3097_thumbnail.jpg',
  },
  {
    name: '缶バッジコレクション',
    href: './?item_id=3096',
    img: '/src/assets/img/goods/goods_3096_thumbnail.jpg',
  },
  {
    name: '手帳型スマートフォンケース 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3095',
    img: '/src/assets/img/goods/goods_3095_thumbnail.jpg',
  },
  {
    name: 'シャープペンシル 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3094',
    img: '/src/assets/img/goods/goods_3094_thumbnail.jpg',
  },
  {
    name: 'クリアファイルセット古橋文乃＆緒方理珠/武元うるか＆桐須真冬/小美浪あすみ＆集合',
    href: './?item_id=3093',
    img: '/src/assets/img/goods/goods_3093_thumbnail.jpg',
  },
  {
    name: 'アクリルフィギュア 古橋文乃/緒方理珠/武元うるか/桐須真冬/小美浪あすみ',
    href: './?item_id=3092',
    img: '/src/assets/img/goods/goods_3092_thumbnail.jpg',
  },
  {
    name: 'B2タペストリー 古橋文乃＆緒方理珠＆武元うるか/桐須真冬＆小美浪あすみ',
    href: './?item_id=3091',
    img: '/src/assets/img/goods/goods_3091_thumbnail.jpg',
  },
  {
    name: '缶バッジ',
    href: './?item_id=3090',
    img: '/src/assets/img/goods/goods_3090_thumbnail.jpg',
  },
  {
    name: 'レザーパスケース',
    href: './?item_id=3089',
    img: '/src/assets/img/goods/goods_3089_thumbnail.jpg',
  },
  {
    name: 'メガネケースセット',
    href: './?item_id=3088',
    img: '/src/assets/img/goods/goods_3088_thumbnail.jpg',
  },
  {
    name: 'まるっとレザーケース',
    href: './?item_id=3087',
    img: '/src/assets/img/goods/goods_3087_thumbnail.jpg',
  },
]
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">GOODS</ContentTitle>

    <div class="relative effect_item">
      <ul class="flex flex-wrap after:block after:invisible after:clear-both after:h-0">
        <li v-for="item in goods"
          class="group relative w-[198px] h-auto mt-0 mr-[24px] mb-[40px] ml-0 [transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)]">
          <div
            class="relative w-[198px] h-[198px] overflow-hidden bg-white border-2 border-solid border-[#e6e6e6] bg-no-repeat bg-center bg-contain
            before:block before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[200%] before:h-[200%] before:bg-[#9ce9f5]
            before:translate-x-[22%] before:translate-y-[0%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
            group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[-50%] group-hover:before:rotate-[-45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]"
            :style="`background-image:url(${item.img})`">
          </div>
          <p
            class="relative w-full pt-[30px] font-extrabold text-[17px] leading-normal [transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)]
            before:box-content before:block before:absolute before:top-[13px] before:left-0 before:w-full before:h-[3px] before:border-t-4 before:border-b-2 before:border-solid before:border-black before:bg-[#9ce9f5]">
            {{ item.name }}</p>
          <a :href="item.href" class="block absolute top-0 left-0 z-[2] w-full h-full"></a>
        </li>
      </ul>

      <div class="relative align-top text-center">
        <div v-if="false" class="inline-block relative w-[42px] h-[42px] rounded-full [box-shadow:_3px_3px_#000] cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)]
        bg-[url(/src/assets/img/common/arrow_left.svg)] bg-no-repeat bg-center bg-[15px_auto] bg-[#9ce9f5]
        scale-100 origin-center
        hover:scale-[.93]">
          <a href="?p=1" class="absolute top-0 left-0 w-full h-full"></a>
        </div>

        <ul class="inline-block mt-[12px] mr-[20px] mb-0 ml-[24px] align-top tracking-[-.4em] text-center">
          <li class="inline-block relative mx-[10px] my-0 px-[4px] py-0 align-top font-bold font-montserrat tracking-normal active
          before:absolute before:bottom-[-6px] before:left-[1px] before:w-0 before:h-0 before:m-auto before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] before:border-t-[5px] before:border-black before:border-double
          [&.active]:before:w-full
          hover:before:w-full">
            <div class="text-[18px]">
              <p>1</p>
            </div>
            <a href="?p=1" class="absolute top-0 left-0 w-full h-full"></a>
          </li>
          <li class="inline-block relative mx-[10px] my-0 px-[4px] py-0 align-top font-bold font-montserrat tracking-normal
          before:absolute before:bottom-[-6px] before:left-[1px] before:w-0 before:h-0 before:m-auto before:[transition:_all_.3s_cubic-bezier(.165,_.84,_.44,_1)] before:border-t-[5px] before:border-black before:border-double
          [&.active]:before:w-full
          hover:before:w-full">
            <div class="text-[18px]">
              <p>2</p>
            </div>
            <a href="?p=2" class="absolute top-0 left-0 w-full h-full"></a>
          </li>
        </ul>

        <div class="inline-block relative w-[42px] h-[42px] rounded-full [box-shadow:_3px_3px_#000] cursor-pointer [transition:_all_.6s_cubic-bezier(.23,_1,_.32,_1)]
        bg-[url(/src/assets/img/common/arrow_right.svg)] bg-no-repeat bg-center bg-[15px_auto] bg-[#9ce9f5]
        scale-100 origin-center
        hover:scale-[.93]">
          <a href="?p=2" class="absolute top-0 left-0 w-full h-full"></a>
        </div>
      </div>
    </div>
  </AppLayout>
</template>
