<script setup>
import { RouterLink } from 'vue-router'
import ContentTitle from '../../components/ContentTitle.vue'
import DecoItem from '../../components/DecoItem.vue'
import AppLayout from '../../layouts/AppLayout.vue'

const layoutProps = {
  character: {
    color: '#fbba78',
    bgTop: '/src/assets/img/common/bg/rizu/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/rizu/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_rizu.png',
    particleColor: '29',
  },
}
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">NEWS</ContentTitle>

    <div
      class="opacity-0 translate-y-[25px] mb-[70px] effect_item
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <div>
        <div class="mb-[30px] text-center">
          <ul>
            <li
              class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.cate-now]:before:opacity-100 [&.cate-now]:before:w-full [&.cate-now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
              <a href="./" data-page=""
                class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
                ALL
              </a>
            </li>
            <li
              class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.cate-now]:before:opacity-100 [&.cate-now]:before:w-full [&.cate-now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
              <a href="?category=Anime" data-page=""
                class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
                Anime
              </a>
            </li>
            <li
              class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.cate-now]:before:opacity-100 [&.cate-now]:before:w-full [&.cate-now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
              <a href="?category=Study" data-page=""
                class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
                Study
              </a>
            </li>
            <li
              class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.cate-now]:before:opacity-100 [&.cate-now]:before:w-full [&.cate-now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
              <a href="?category=Event" data-page=""
                class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
                Event
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="relative px-[20px] py-[47px] bg-[rgba(255,_255,_255,_.7)]">
        <DecoItem :color="layoutProps.character.color"></DecoItem>

        <p class="text-[#f5588b] font-bold text-[14px] font-montserrat tracking-[.08em]">
          2020.11.10
        </p>
        <h3 class="pt-[8px] pb-[22px] px-0 font-bold text-[22px] leading-[1.3em] tracking-wider">
          ぼくたちは勉強ができない」第21巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！
        </h3>
        <div class="text-[15px] leading-[20px]">
          原作コミックス21巻音声ドラマ＆ミニ画集付き同梱版が予約受付中！<br>&nbsp;<br>真冬＆あすみそれぞれのパラレルストーリーを、TVアニメキャストが新たに熱演！<br>&nbsp;<br>予約締切は12月21日（月）となっておりますので<br>お申し込み逃しなく！<br>&nbsp;<br>【予約締切】2020年12月21日（月）<br>【発売日】2021年3月4日（木）　<br>【予価】本体2,200円+税<br>【商品内容】JC『ぼくたちは勉強ができない』第21巻、音声ドラマ「明日の夜の小妖精編」「薄氷の女王編」（収録時間30分以上予定／ミニ画集内に「専用サービスMIRAIL」用コードを記載）、ミニ画集（JCサイズ／フルカラー16ページ予定）<br>※「ぼくたちは勉強ができない」第21巻通常版も3月4日（木）同日発売です。<br>ネット書店でも絶賛予約受付中！<br>&nbsp;<br>Amazon様<br><a
            href="https://www.amazon.co.jp/dp/4089083982/">https://www.amazon.co.jp/dp/4089083982/</a><br><br>楽天ブックス様<br><a
            href="https://books.rakuten.co.jp/rb/16510650/">https://books.rakuten.co.jp/rb/16510650/</a><br><br>セブンネットショッピング様<br><a
            href="https://7net.omni7.jp/detail/1107143910">https://7net.omni7.jp/detail/1107143910</a><br>&nbsp;<br>
        </div>
      </div>

      <div class="relative w-[285px] h-[40px] mt-[40px] mb-0 mx-auto
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
        <div class="absolute w-full h-full rounded-[10px] top-[2px] left-[2px] bg-black"></div>
        <div class="absolute top-0 left-0 w-full h-full rounded-[10px] bg-[#fbba78]"></div>
        <p
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full font-bold text-[18px] font-montserrat tracking-[.075em] text-center">
          BACK TO LIST
        </p>
        <RouterLink :to="{ name: 'news' }"
          class="absolute top-0 left-0 w-full h-full
         before:absolute before:top-0 before:left-0 before:w-[25px] before:h-full
         before:bg-[url('/src/assets/img/common/arrow_left.svg')] before:bg-[center_right] before:bg-no-repeat before:bg-[length:15px_auto]">
        </RouterLink>
      </div>
    </div>
  </AppLayout>
</template>
