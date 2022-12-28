<script setup>
import ContentTitle from '../../components/ContentTitle.vue'
import AppLayout from '../../layouts/AppLayout.vue'

const layoutProps = {
  contentInnerClass: 'w-[869px] pt-[71px] pb-[322px]',
  character: {
    color: '#c0b2ed',
    bgTop: '/src/assets/img/common/bg/asumi/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/asumi/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_asumi.png',
    particleColor: '253',
  },
}

const comics = [
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881111-6',
    img: '/src/assets/img/comic/img_comic_1.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881195-6',
    img: '/src/assets/img/comic/img_comic_2.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881214-4',
    img: '/src/assets/img/comic/img_comic_3.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881289-2',
    img: '/src/assets/img/comic/img_comic_4.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881342-4',
    img: '/src/assets/img/comic/img_comic_5.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881414-8',
    img: '/src/assets/img/comic/img_comic_6.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881510-7',
    img: '/src/assets/img/comic/img_comic_7.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881564-0',
    img: '/src/assets/img/comic/img_comic_8.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881646-3',
    img: '/src/assets/img/comic/img_comic_9.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881724-8',
    img: '/src/assets/img/comic/img_comic_10.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881798-9',
    img: '/src/assets/img/comic/img_comic_11.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-881866-5',
    img: '/src/assets/img/comic/img_comic_12.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-882021-7',
    img: '/src/assets/img/comic/img_comic_13.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-882083-5',
    img: '/src/assets/img/comic/img_comic_14.jpg',
  },
  {
    href: 'https://books.shueisha.co.jp/items/contents.html?isbn=978-4-08-882173-3',
    img: '/src/assets/img/comic/img_comic_15.jpg',
  },
]
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="mb-[40px] effect_item">COMICS</ContentTitle>

    <div
      class="group font-semibold text-[20px] leading-[44px] tracking-[.15em] effect_item
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <span
        class="relative text-[26px] tracking-widest
        before:box-content before:opacity-0 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#c0b2ed]
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)_1s]">週刊少年ジャンプ</span>にて大人気連載中！！<br>
      最新13巻は<span
        class="relative text-[26px] tracking-widest
        before:box-content before:opacity-0 before:absolute before:bottom-[-4px] before:left-0 before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#c0b2ed]
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)_1s]">9月4日発売！！</span>
    </div>

    <div
      class="w-[440px] mt-[30px] mx-0 mb-0 effect_item
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <a href="/news/?id=51891">
        <img src="@/assets/img/top/bnr/bnr_comic_bd_sp.jpg" alt="「ぼくたちは勉強ができない」第16巻　アニメBD同梱版発売決定！" class="block scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
        hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
      </a>
    </div>

    <ul
      class="mt-[50px] text-[0] tracking-[-.4em] opacity-0 translate-y-[25px] effect_item
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <li v-for="comic in comics"
        class="group inline-block relative w-[175px] mr-[50px] mb-[63px] align-top tracking-normal [&:nth-child(4n)]:mr-0
        before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[#c0b2ed]
        before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
        hover:before:translate-x-[10px] hover:before:translate-y-[10px] hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]">
        <div
          class="relative border-4 border-solid border-black overflow-hidden before:bg-[#c0b2ed]
          before:opacity-30 before:absolute before:top-0 before:left-0 before:w-[350%] before:h-[350%]
          before:translate-x-[0%] before:translate-y-[11%] before:rotate-[45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          group-hover:before:translate-x-[0%] group-hover:before:translate-y-[-38%] group-hover:before:rotate-[45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]">
          <img :src="comic.img" alt="">
        </div>
        <a :href="comic.href" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
      </li>
    </ul>
  </AppLayout>
</template>
