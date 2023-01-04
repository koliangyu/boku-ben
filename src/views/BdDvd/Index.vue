<script setup>
import PLAYER_MODULE_BRIGHTCOVE from 'js-player-module-brightcove'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted } from 'vue'
import ContentTitle from '../../components/ContentTitle.vue'
import Season from '../../components/Season.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import H4 from './Partials/H4.vue'
import Hr from './Partials/Hr.vue'
import Item from './Partials/Item.vue'
import Li from './Partials/Li.vue'

import 'swiper/css'

const modules = [Pagination]

const swiperOptions = {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="${className} inline-block cursor-pointer font-montserrat font-extrabold w-[14px] h-[14px] mx-[1.5px] my-0 pt-[1px] py-0 pb-0 text-[9px] bg-[rgba(0,_0,_0,_.25)] text-center min-h-0
      [&.swiper-pagination-bullet-active]:text-white [&.swiper-pagination-bullet-active]:bg-black">${index + 1}</span>`
    },
  },
}

const layoutProps = {
  contentInnerClass: 'w-[869px] pt-[71px] pb-[272px]',
  character: {
    color: '#fbba78',
    bgTop: '/src/assets/img/common/bg/rizu/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/rizu/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_rizu.png',
    particleColor: '29',
  },
}

const seasons = [
  { name: '2ND SEASON', href: '/bddvd' },
  { name: '1ST SEASON', href: '/bddvd/1st' },
]

const categories = [
  { name: 'vol.01', href: '/bddvd/2nd/01.html', isNow: true },
  { name: 'vol.02', href: '/bddvd/2nd/02.html', isNow: false },
  { name: 'vol.03', href: '/bddvd/2nd/03.html', isNow: false },
  { name: 'vol.04', href: '/bddvd/2nd/04.html', isNow: false },
  { name: 'vol.05', href: '/bddvd/2nd/05.html', isNow: false },
  { name: 'vol.06', href: '/bddvd/2nd/06.html', isNow: false },
]

onMounted(() => {
  new PLAYER_MODULE_BRIGHTCOVE({
    mode: 'audio',
    id: 'brightcovePlayer01',
    videoid: '6107410536001',
    account: '4929511769001',
    ui_default: false,
    ui_default_css: false,
  })
})
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">Blu-ray&DVD</ContentTitle>

    <div
      class="opacity-0 translate-y-[25px] effect_item
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <Season :color="layoutProps.character.color" :li-class="'w-[428px]'" :seasons="seasons"></Season>

      <div class="mb-[30px] text-center effect_item">
        <ul>
          <li v-for="category in categories"
            class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.now]:before:opacity-100 [&.now]:before:w-full [&.now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]"
            :class="{ 'now': category.isNow }">
            <a :href="category.href"
              class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>

      <div
        class="relative w-[846px] mb-[72px] z-[2]
        before:block before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:z-[-1] before:bg-[#fbba78]
        after:box-content after:absolute after:top-[19px] after:left-[5px] after:w-[836px] after:h-[3px] after:border-t-4 after:border-b-2 after:border-solid after:border-black after:bg-[#fbba78]">
        <div
          class="relative pt-[78px] pr-[43px] pb-[77px] pl-[63px] bg-white border-[5px] border-solid border-black
          before:absolute before:top-1/2 before:left-[-18px] before:-translate-y-1/2 before:w-[36px] before:h-[90%]
          before:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')]
          before:bg-top before:bg-repeat-y before:bg-contain
          after:box-content after:absolute after:bottom-[19px] after:left-0 after:w-full after:h-[3px] after:border-t-2 after:border-b-4 after:border-solid after:border-black after:bg-[#fbba78]">
          <h3 class="text-[27px] text-center font-bold tracking-wider">ぼくたちは勉強ができない！ vol.1</h3>
          <div class="mt-[16px] mx-auto mb-[40px] text-[22px] text-center font-bold tracking-wider">
            2019年12月25日(水) 発売
          </div>
          <div class="relative min-h-[570px]">
            <figure class="absolute top-0 left-0"><img src="@/assets/img/bddvd/2nd/pkg_01.jpg"></figure>
            <div class="ml-[450px]">
              <dl class="tracking-wider">
                <dt
                  class="relative pt-0 px-0 pb-[9px] mt-0 mx-0 mb-[26px] text-[20px] font-bold
                  after:box-content after:block after:absolute after:bottom-[-9px] after:w-full after:h-[6px] after:border after:border-solid after:border-black after:bg-[#fbba78]">
                  完全生産限定版Blu-ray</dt>
                <dd class="mt-0 mx-0 mb-[36px] text-[18px] font-extrabold leading-[1.6]">
                  ￥6,800+税<br>
                  <span class="text-[12px]">ANZX-14921～14922</span>
                </dd>
                <dt
                  class="relative pt-0 px-0 pb-[9px] mt-0 mx-0 mb-[26px] text-[20px] font-bold
                  after:box-content after:block after:absolute after:bottom-[-9px] after:w-full after:h-[6px] after:border after:border-solid after:border-black after:bg-[#fbba78]">
                  完全生産限定版DVD</dt>
                <dd class="mt-0 mx-0 mb-[36px] text-[18px] font-extrabold leading-[1.6]">
                  ￥5,800+税<br>
                  <span class="text-[12px]">ANZB-14921～14922</span>
                </dd>
                <dt
                  class="relative pt-0 px-0 pb-[9px] mt-0 mx-0 mb-[26px] text-[20px] font-bold
                  after:box-content after:block after:absolute after:bottom-[-9px] after:w-full after:h-[6px] after:border after:border-solid after:border-black after:bg-[#fbba78]">
                  収録話</dt>
                <dd class="mt-0 mx-0 mb-[36px] text-[18px] font-extrabold leading-[1.6]">1話、2話収録</dd>
              </dl>
              <div
                class="relative w-[206px] h-[42px] rounded-[30px] leading-[40px] mt-[46px] mx-auto mb-0 text-[19px] font-bold text-center [box-shadow:_3px_3px_#000] bg-[#fbba78] block
                scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
                hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
                after:absolute after:top-0 after:right-[2px] after:w-[25px] after:h-full
                after:bg-[url('/src/assets/img/common/arrow_right.svg')] after:bg-left after:bg-no-repeat after:bg-[length:15px_auto]">
                購入する
                <a href="https://www.aniplexplus.com/itemYwrmjdPW" class="absolute top-0 left-0 w-full h-full"
                  target="_blank"></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Hr />

      <Item class="mx-auto my-0">
        <H4>完全生産限定版特典</H4>
        <ul class="px-[32px] py-0">
          <Li>キャラクターデザイン・佐々木政勝 描き下ろし三方背ケース </Li>
          <Li>特製デジパック
            <figure class="w-[72%] mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_digi01.jpg"></figure>
          </Li>
          <Li>
            特典CD<br>
            キャラクターソング：「流星のち晴れ」古橋文乃（CV.白石晴香）<br>＆オリジナル・サウンドトラック Vol.2
            <div
              class="relative w-[430px] h-[58px] mt-[3px] mx-0 mb-0 p-0 border-[3px] border-solid border-black text-[9px] select-none leading-[1em] overflow-hidden z-[999]">
              <div class="h-full border-t-2 border-solid border-[#fbba78]" id="brightcovePlayer01">
                <div class="h-full border-t border-solid border-black">
                  <div
                    class="ui-time font-montserrat block w-auto absolute top-[15px] right-[9px] text-[11px] tracking-widest text-black">
                  </div>

                  <button
                    class="ui-btn-play cursor-pointer w-[30px] h-[30px] [transition:_.3s_all_ease-in] absolute top-1/2 left-[12px] translate-y-[-39%]
                      hover:opacity-70
                      bg-[url('/src/assets/img/bddvd/player/btn_play.png')] bg-top bg-no-repeat bg-[length:100%_auto]
                      [&.active]:bg-[url('/src/assets/img/bddvd/player/btn_stop.png')] [&.active]:bg-top [&.active]:bg-no-repeat [&.active]:bg-[length:100%_auto]"></button>

                  <div
                    class="ui-seekbar-time block absolute top-[39px] left-[51px] w-[363px] h-[8px] border border-solid border-black -translate-y-1/2">
                    <div class="ui-seekbar-time-bg"></div>
                    <span class="cursor-pointer block h-full bg-[#FFFF4F] absolute top-0 left-0"></span>
                  </div>

                  <div class="overflow-hidden absolute top-[15px] left-[52px] w-[273px] h-[18px] tracking-widest">
                    <div class="ui-name absolute w-[500px] text-black font-bold indent-0 leading-none text-[12px]
                      animate-title_anxsoundplayer"></div>
                  </div>
                </div>
              </div>
            </div>
          </Li>
          <Li>特製ブックレット</Li>
          <Li>オーディオコメンタリー（第1話 出演：白石晴香&富田美憂&鈴代紗弓）</Li>
          <Li>イベントチケット優先販売申込券<br>
            <div class="text-black text-[14px]">
              <p
                class="text-[15px] text-black mx-0 my-[14px] pt-0 pb-[10px] px-0 border-b-[3px] border-solid border-black">
                TVアニメ「ぼくたちは勉強ができない！」スペシャルイベント（仮）</p>
              <div>
                日程：2020年3月1日（日）<br>
                場所：関東近郊<br>
                出演者：逢坂良太、白石晴香、富田美憂、鈴代紗弓、Lynn、朝日奈丸佳　予定<br>
                詳細：追って発表予定<br>
                チケット：<br>2019年12月25日発売TVアニメ「ぼくたちは勉強ができない！」第1巻完全生産限定版にイベントチケット優先販売申込券封入<br>
              </div>
            </div>
          </Li>
          <Li>アニメ版権描き下ろし全巻収納ボックス
            <figure class="w-[72%] mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_box01.jpg"></figure>
          </Li>
          <Li>
            特典映像<br>
            ・オープニング映像<br>
            ・ノンクレジットエンディング<br>
            ・PV・CM集　　以上収録予定
          </Li>
        </ul>
        <p class="block mx-[32px] mt-[32px] mb-0 pl-[1em] indent-[-1em] text-[13px] tracking-wider font-medium">
          ※商品の特典および仕様は予告なく変更になる場合がございます。</p>
      </Item>

      <Hr />

      <Item>
        <H4>第1巻店舗共通購入特典</H4>
        <div>
          <ul class="px-[32px] py-0">
            <Li>
              描き下ろしA4サイズクリアファイル<br>
              (古橋文乃、緒方理珠、武元うるか、桐須真冬、小美浪あすみ)
              <figure class="w-[72%] mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_clearfile_2nd1.jpg"></figure>
              <p class="mt-[8px] text-black block pl-[1em] indent-[-1em] text-[13px]">※画像は製作途中のものです。完成次第更新します。お楽しみに！</p>
            </Li>
          </ul>
          <dl class="mt-[32px] mr-[32px] mb-0 ml-[60px] text-[15px]">
            <dt class="mx-0 mt-0 mb-[14px] px-0 pt-0 pb-[10px] border-b-[3px] border-solid border-black">対象店舗</dt>
            <dd class="leading-[1.6]">
              ANIPLEX+、アニメイト、Amazon(【Amazon.co.jp限定】商品のみ対象)、<br>
              HMV、ゲーマーズ、セブンネットショッピング、ソフマップ（BD/DVD取り扱い店及びドットコム）、<br>
              とらのあな（一部店舗除く）、WonderGOO/新星堂
            </dd>
          </dl>
        </div>
      </Item>

      <Hr />

      <Item>
        <H4>全巻店舗共通購入特典</H4>
        <div>
          <ul class="px-[32px] py-0">
            <Li>
              祝!人気投票第1位獲得 描き下ろし桐須真冬B2サイズクリアポスター
              <figure class="w-[72%] mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_poster01.jpg"></figure>
            </Li>
          </ul>
          <dl class="mt-[32px] mr-[32px] mb-0 ml-[60px] text-[15px]">
            <dt class="mx-0 mt-0 mb-[14px] px-0 pt-0 pb-[10px] border-b-[3px] border-solid border-black">対象店舗</dt>
            <dd class="leading-[1.6]">
              ANIPLEX+、アニメイト、Amazon(【Amazon.co.jp限定】商品のみ対象)、<br>
              HMV、ゲーマーズ、セブンネットショッピング、ソフマップ（BD/DVD取り扱い店及びドットコム）、<br>
              とらのあな（一部店舗除く）、WonderGOO/新星堂<br>
              <p class="mt-[5px] text-[13px]">※特典はなくなり次第終了となります。詳細は対象各店舗までお問い合わせください。</p>
            </dd>
          </dl>
        </div>
      </Item>

      <Hr />

      <Item>
        <H4>店舗別特典</H4>
        <ul class="px-[32px] py-0">
          <Li>
            <div>ANIPLEX+</div>
            <div class="tracking-[-.4em]">
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]">
                    <swiper :modules="modules" :pagination="swiperOptions.pagination" :slides-per-view="1"
                      :space-between="0" :loop="true" :speed="400">
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_01.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_02.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_03.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_04.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_05.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_06.png" alt=""></swiper-slide>

                      <div class="absolute right-[5px] bottom-[5px] min-h-0 leading-none z-10 swiper-pagination"></div>
                    </swiper>
                  </figure>
                </dt>
                <dd class="mt-[18px]">
                  各巻特典<br>
                  複製原画セット
                </dd>
              </dl>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]">
                    <swiper :modules="modules" :pagination="swiperOptions.pagination" :slides-per-view="1"
                      :space-between="0" :loop="true" :speed="400">
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_02_01.png" alt=""></swiper-slide>
                      <swiper-slide><img src="@/assets/img/bddvd/2nd/img_shop_anx_02_02.png" alt=""></swiper-slide>

                      <div class="absolute right-[5px] bottom-[5px] min-h-0 leading-none z-10 swiper-pagination"></div>
                    </swiper>
                  </figure>
                </dt>
                <dd class="mt-[18px]">
                  1-3巻特典<br>
                  桐須真冬スクールカレンダー
                </dd>
              </dl>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_anx_03_01.png" alt="">
                  </figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻特典①<br>
                  複製原画収納BOX
                </dd>
              </dl>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_anx_04_01.png" alt="">
                  </figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻特典②<br>
                  選べるデスクトップキャラファイングラフ
                </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>アニメイト</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_animate.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  A3布ポスター＋缶バッジ2個セット
                </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>Amazon(【Amazon.co.jp限定】商品のみ対象)</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_amazon.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  B2布ポスター
                </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>ゲーマーズ</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_gamers.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  B2タペストリー </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>セブンネットショッピング</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_seven.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  ブランケット
                </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>ソフマップ（BD/DVD取り扱い店及びドットコム）</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_sofmap.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  B2タペストリー
                </dd>
              </dl>
            </div>
          </Li>
          <Li>
            <div>とらのあな（一部店舗除く）</div>
            <div>
              <dl
                class="inline-block tracking-wider w-[360px] mt-0 mx-0 mb-[24px] align-top text-[16px] text-black odd:mr-[32px]">
                <dt>
                  <figure class="mt-[12px]"><img src="@/assets/img/bddvd/2nd/img_shop_tora.png" alt=""></figure>
                </dt>
                <dd class="mt-[18px]">
                  全巻購入特典<br>
                  B2タペストリー
                </dd>
              </dl>
            </div>
          </Li>
        </ul>

        <ul>
          <li class="mx-[24px] mt-0 mb-[6px] pl-[1em] indent-[-1em] text-[13px] font-medium leading-[1.6]">
            ※各店舗とも絵柄出来次第、追ってご案内いたします。</li>
          <li class="mx-[24px] mt-0 mb-[6px] pl-[1em] indent-[-1em] text-[13px] font-medium leading-[1.6]">
            ※詳細は実施各店舗にてお問い合わせください。</li>
        </ul>
      </Item>

      <Hr />
    </div>
  </AppLayout>
</template>
