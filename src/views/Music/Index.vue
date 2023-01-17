<script setup>
import { storeToRefs } from 'pinia'
import ContentTitle from '../../components/ContentTitle.vue'
import Season from '../../components/Season.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.RIZU)

const layoutProps = {
  contentInnerClass: 'w-[895px] pb-[316px] max-md:w-[90%] max-md:pb-[50px]',
}

const seasons = [
  { name: 'OPENING', href: '/music' },
  { name: 'ENDING', href: '/music/ed' },
]
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="effect_item">MUSIC</ContentTitle>

    <div class="effect_item
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
      max-md:translate-y-[15px] max-md:[&.active]:translate-y-0">
      <Season :color="`var(${color})`" :seasons="seasons"></Season>

      <div class="text-center">
        <h3 class="text-[50px] font-normal
        max-md:text-[27px]">「<span class="font-montserrat font-bold">Can now, Can now</span>」</h3>
        <h4
          class="font-montserrat font-bold inline-block relative mx-auto mt-[20px] mb-[32px] text-[34px]
          after:box-content after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[2px] after:border-2 after:border-solid after:border-black after:bg-[var(--my-color-var)]
          max-md:mt-[12px] max-md:mx-auto max-md:mb-[14px] max-md:text-[22px]
          max-md:after:bottom-[-6px] max-md:after:h-[2px] max-md:after:border max-md:after:border-solid max-md:after:border-black">
          Study</h4>
        <div><img src="@/assets/img/music/img_date.png" class="h-[40px] w-auto m-auto text-center
          max-md:h-auto max-md:w-full" alt="2019年10月30日（水）発売"></div>

        <div class="group relative w-[700px] mx-auto mt-[40px] mb-[72px] z-[2]
          before:block before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:z-[-1] before:bg-[var(--my-color-var)]
          before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          hover:before:translate-x-[10px] hover:before:translate-y-[10px] hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          max-md:w-[90%]">
          <a href="../news/?id=51784" target="_blank"
            class="relative block overflow-hidden before:bg-[var(--my-color-var)]
            before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[300%] before:h-[300%]
            before:translate-x-[10%] before:translate-y-[-50%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
            group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[-50%] group-hover:before:rotate-[-45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]">
            <img src="@/assets/img/music/bnr_event_cannow.jpg"
              alt="TVアニメ「ぼくたちは勉強ができない！」オープニングテーマ Study『Can now, Can now』発売記念リリースイベントが決定！">
          </a>
        </div>
      </div>

      <div
        class="relative w-[846px] mx-auto mt-[40px] mb-[72px] z-[2]
        before:block before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:z-[-1] before:bg-[var(--my-color-var)]
        after:box-content after:absolute after:top-[19px] after:left-[5px] after:w-[836px] after:h-[3px] after:border-t-4 after:border-b-2 after:border-solid after:border-black after:bg-[var(--my-color-var)]
        max-md:w-[91.6%] max-md:mx-auto max-md:mt-[30px] max-md:mb-[60px] max-md:z-[2]
        max-md:before:top-[18px] max-md:before:left-[18px]
        max-md:after:top-[10px] max-md:after:left-[2px] max-md:after:w-[calc(100%_-_4px)] max-md:after:h-[2px] max-md:after:border-t-2 max-md:after:border-b max-md:after:border-solid max-md:after:border-black">
        <div
          class="relative pt-[70px] pr-[43px] pb-[77px] pl-[63px] bg-white border-[5px] border-solid border-black
          before:absolute before:top-1/2 before:left-[-18px] before:-translate-y-1/2 before:w-[36px] before:h-[94%] before:z-10
          before:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')]
          before:bg-left-top before:bg-repeat-y before:bg-contain
          after:box-content after:absolute after:bottom-[19px] after:left-0 after:w-full after:h-[3px] after:border-t-2 after:border-b-4 after:border-solid after:border-black after:bg-[var(--my-color-var)]
          max-md:p-0 max-md:border-2 max-md:border-solid max-md:border-black
          max-md:before:left-[-10px] max-md:before:w-[30px] max-md:before:h-[93.5%]
          max-md:after:bottom-[10px] max-md:after:w-full max-md:after:h-[2px] max-md:after:border-t max-md:after:border-b-2 max-md:after:border-solid max-md:after:border-black">
          <div class="max-md:pt-[38px] max-md:pr-[7%] max-md:pb-[77px] max-md:pl-[13%] max-md:overflow-hidden">
            <figure class="w-[670px] m-auto
            max-md:w-full max-md:m-auto"><img src="@/assets/img/music/img_study_1909.jpg"></figure>
            <div>
              <div class="mt-[38px] mx-0 mb-0
              max-md:mt-[22px] max-md:mx-0 max-md:mb-0">
                <h5 class="relative font-montserrat text-white text-[24px] [-webkit-text-stroke:_1px_#000] font-extrabold tracking-[0.1rem] z-10
                  max-md:text-[20px]">
                  PROFILE</h5>
                <p class="mt-[16px] mx-0 mb-0 text-[16px] font-extrabold leading-loose tracking-[0.1rem]
                max-md:mt-[10px] max-md:mx-0 max-md:mb-0 max-md:text-[12px]">
                  「ぼくたちは勉強ができない」の音楽ユニット「Study」。<br>
                  古橋文乃役の白石晴香、緒方理珠役の富田美憂、武元うるか役の鈴代紗弓、<br class="block max-md:hidden">
                  桐須真冬役のLynn、小美浪あすみ役の朝日奈丸佳の5人で構成される。
                </p>
              </div>
              <div
                class="relative mt-[50px] mx-0 mb-0
              after:block after:absolute after:top-[13px] after:left-[-63px] after:z-0 after:w-[835px] after:h-[calc(100%_-_13px)]
              after:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] after:bg-left-top after:bg-repeat
              max-md:relative max-md:mt-[28px] max-md:mx-0 max-md:mb-0
              max-md:after:block max-md:after:absolute max-md:after:top-[13px] max-md:after:left-[-50%] max-md:after:z-0 max-md:after:w-[200%] max-md:after:h-full
              max-md:after:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] max-md:after:bg-left-top max-md:after:bg-repeat max-md:bg-[length:16px_auto]">
                <h5 class="relative font-montserrat text-white text-[24px] [-webkit-text-stroke:_1px_#000] font-extrabold tracking-[0.1rem] z-10
                  max-md:text-[20px]">
                  COMMENT</h5>
                <ul class="relative pt-[4px] px-0 pb-[10px] z-10
                max-md:p-0">
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0
                  max-md:pt-[18px] max-md:px-0 max-md:pb-[14px] max-md:first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]
                      max-md:relative max-md:top-auto max-md:pt-0 max-md:pr-0 max-md:pb-[8px] max-md:pl-[16px] max-md:text-[13px]
                      max-md:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] max-md:bg-[left_top_2px] max-md:bg-no-repeat max-md:bg-[length:12px]">
                      白石晴香</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]
                    max-md:pl-0 max-md:text-[11px]">
                      Lynn さんと朝日奈さんにStudyの活動のお話をすると、いつも「みんな仲良くて楽しそうだね！」と言って下さっていたので、一緒にユニットとして活動出来る事が凄く嬉しいです！<br>
                      5人で歌う事によって、きっと今までの3人の姿とはまた違った一面を見て頂けると思います。<br>
                      頼りになるお二人が加わって心強いですし、Studyがより一層ユニットとして前進して行けるのではないかと、私自身楽しみです。みんなで力を合わせて頑張ります！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0
                  max-md:pt-[18px] max-md:px-0 max-md:pb-[14px] max-md:first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]
                      max-md:relative max-md:top-auto max-md:pt-0 max-md:pr-0 max-md:pb-[8px] max-md:pl-[16px] max-md:text-[13px]
                      max-md:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] max-md:bg-[left_top_2px] max-md:bg-no-repeat max-md:bg-[length:12px]">
                      富田美憂</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]
                    max-md:pl-0 max-md:text-[11px]">
                      ようやく皆さんにお伝えすることができました…！<br>
                      すでに撮影などで5人での活動は始まっていたので、発表の日が待ち遠しかったです。<br>
                      3人のStudyとはまた違った良さや魅力が、5人になることでさらにプラスされると思うので、皆さんの前でパフォーマンスをするのが今からすごく楽しみです！<br>
                      パワーアップしたStudy、どうぞよろしくお願いします！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0
                  max-md:pt-[18px] max-md:px-0 max-md:pb-[14px] max-md:first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]
                      max-md:relative max-md:top-auto max-md:pt-0 max-md:pr-0 max-md:pb-[8px] max-md:pl-[16px] max-md:text-[13px]
                      max-md:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] max-md:bg-[left_top_2px] max-md:bg-no-repeat max-md:bg-[length:12px]">
                      鈴代紗弓</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]
                    max-md:pl-0 max-md:text-[11px]">
                      Studyがパワーアップ！！<br>
                      今まで3人姉妹のような感じでしたが、また2人お姉ちゃんが増えたような感覚で、とっても嬉しいです！<br>
                      ユニット活動を通してこれからさらに二期が始まるぼく勉を盛り上げていけるように頑張りますので宜しくお願い致します！！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0
                  max-md:pt-[18px] max-md:px-0 max-md:pb-[14px] max-md:first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]
                      max-md:relative max-md:top-auto max-md:pt-0 max-md:pr-0 max-md:pb-[8px] max-md:pl-[16px] max-md:text-[13px]
                      max-md:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] max-md:bg-[left_top_2px] max-md:bg-no-repeat max-md:bg-[length:12px]">
                      Lynn</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]
                    max-md:pl-0 max-md:text-[11px]">
                      この度新しくStudyのメンバーになりましたLynnです。<br>
                      正直今ドキドキです。ティーチャー喜んでくださっていますか？（笑）<br>
                      これまでの三人の活動を間近で見ていたときは先生気分でしたが、実はずっと五人化することは知っていたので、なんとも不思議な気持ちだったんです。<br>
                      やっと言えました！（笑）<br>
                      三人の一生懸命な姿に、私自身とても力をもらっていました。<br>
                      これからは五人となることで、よりパワーアップしたStudyとして、力を合わせて楽しんでいきたいと思っています。よろしくお願いします！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0
                  max-md:pt-[18px] max-md:px-0 max-md:pb-[14px] max-md:first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]
                      max-md:relative max-md:top-auto max-md:pt-0 max-md:pr-0 max-md:pb-[8px] max-md:pl-[16px] max-md:text-[13px]
                      max-md:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] max-md:bg-[left_top_2px] max-md:bg-no-repeat max-md:bg-[length:12px]">
                      朝日奈丸佳</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]
                    max-md:pl-0 max-md:text-[11px]">
                      Lynnさんと新たにStudyに加わり、活動していくということで･･･最初に聞いた時は、「本当にいいのかな？」と思うほど3人のStudyが素敵だったので恐縮の極みだったのですが･･･やっぱり5人でいると楽しいし、とっても心強くて、一緒に活動していけることがとても嬉しいです！<br>
                      Studyとして、たくさんの景色を見ていきたい。夢を叶えてみたい。ティーチャーと共に！<br>
                      どんな難問も乗り越えられると信じています。<br>
                      新体制のStudy、宜しくお願いします！
                    </p>
                  </li>
                </ul>
              </div>
              <div class="pt-[50px] px-0 pb-0 text-center font-extrabold tracking-[0.1rem]
              max-md:pt-[50px] max-md:px-0 max-md:pb-0">
                <p class="text-[23px]
                max-md:text-[19px]">「Can now, Can now」</p>
                <p class="mt-[12px] mx-0 mb-0 text-[18px]
                max-md:mt-[8px] max-md:mx-0 max-md:mb-0 max-md:text-[12px]">2019年10月30日(水)発売</p>
                <ul class="m-0 tracking-[-.4em] text-left
                max-md:m-0">
                  <li class="inline-block w-[302px] mt-[32px] mx-0 mb-0 tracking-[0.1rem] align-top odd:mr-[110px]
                  max-md:inline-block max-md:w-full max-md:mt-[32px] max-md:mx-0 max-md:mb-0 max-md:tracking-[0.1rem] max-md:align-top
                  max-md:odd:mr-0">
                    <p class="mx-0 mt-0 mb-[16px] text-[17px] text-[#ff8c33] text-center
                    max-md:mt-0 max-md:mx-0 max-md:mb-[11px] max-md:text-[14px]">Study盤(CD＋Blu-ray)</p>
                    <figure><img src="@/assets/img/music/cd_op_01.jpg"></figure>
                    <p class="mt-[15px] mx-0 mb-0 text-[12px] leading-loose
                    max-md:mt-[8px] max-md:mx-0 max-md:mb-0 max-md:text-[11px]">
                      SVWC-70446～70447／￥1,800(税抜)<br>
                      ・CD＋Blu-ray2枚組<br>
                      ・「Can now, Can now」ミュージックビデオ＆メイキング映像を収録！<br>
                      ・Study特製フォトブックレット(20P)<br>
                      ≪CD 収録内容≫<br>
                      01. Can now, Can now （歌：白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）<br>
                      02. 関係≧方程式 （歌：白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）<br>
                      03. ていく・あ・ぶれいく♪ （歌：白石晴香・富田美憂・鈴代紗弓）<br>
                      ≪BD 収録内容≫<br>
                      ・「Can now, Can now」 ミュージックビデオ<br>
                      ・MV メイキング映像<br>
                      ※2020 年 10 月末日までの期間生産限定盤となります。<br>
                      ※商品の特典および仕様は予告なく変更になる場合がございます。<br>
                    </p>
                  </li>
                  <li class="inline-block w-[302px] mt-[32px] mx-0 mb-0 tracking-[0.1rem] align-top odd:mr-[110px]
                  max-md:inline-block max-md:w-full max-md:mt-[32px] max-md:mx-0 max-md:mb-0 max-md:tracking-[0.1rem] max-md:align-top
                  max-md:odd:mr-0">
                    <p class="mx-0 mt-0 mb-[16px] text-[17px] text-[#ff8c33] text-center
                    max-md:mt-0 max-md:mx-0 max-md:mb-[11px] max-md:text-[14px]">ぼく勉 盤</p>
                    <figure><img src="@/assets/img/music/cd_op_02.jpg"></figure>
                    <p class="mt-[15px] mx-0 mb-0 text-[12px] leading-loose
                    max-md:mt-[8px] max-md:mx-0 max-md:mb-0 max-md:text-[11px]">
                      SVWC-70448／￥1,500(税別)<br>
                      ・アニメイラストジャケット<br>
                      ≪CD 収録内容≫<br>
                      01. Can now, Can now （歌：白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）<br>
                      02. 関係≧方程式 （歌：白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）<br>
                      03. ていく・あ・ぶれいく♪ （歌：白石晴香・富田美憂・鈴代紗弓）<br>
                      ※商品の特典および仕様は予告なく変更になる場合がございます。<br>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-[50px] text-center
      max-md:mt-[50px]">
        <h3><img src="@/assets/img/music/cap_ibento.png" class="h-[50px] w-auto m-auto
          max-md:h-auto max-md:w-full" alt="選べるイベント申込券"></h3>
        <dl>
          <br>
          <p style="margin-bottom:5px;">※「選べるイベント申込券」がStudy盤のみの封入となります。</p>
          <p>※Aコース・Bコースのいずれかにお申し込みいただけます。</p>
          <br>
          <font color="#ff0000"><b>申込受付期間（A・Bコース共通）</b></font>
          <br>
          <font color="#ff0000"><b style="margin-top:15px;">2019年10月30日(水) 10：00　～　11月12日(火) 23：59</b></font>
        </dl>
        <ul>
          <li>
          </li>
          <li>
            <div class="w-[300px] mt-[30px] mx-auto mb-0
            max-md:w-[69%] max-md:mt-[22px] max-md:mx-auto max-md:mb-0"></div>
            <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold
            max-md:mt-[10px] max-md:text-[16px]">
              <span>[Aコース]Study 2nd LIVE「ready STUDY 5!!!!!」チケット優先販売申込権</span>
            </h4>
            <dl class="tracking-widest">
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">2019.12.1(SUN) @東京都・新宿LOFT
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">開場17:00／開演18:00
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">前売料金：オールスタンディング　5,500円（税込）※ドリンク代別
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">出演：Study（白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
                <ul class="text-[13px] font-semibold leading-[1.8]
                max-md:text-[11px]">
                  <br>
                  <li>※申し込み多数の場合は抽選となります。</li>
                  <li>※本申込受付は、当公演の2次先行受付となります。</li>
                </ul>
                <br>
                <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold
                max-md:mt-[10px] max-md:text-[16px]">
                  <span>[Bコース]サイン入りポスターお渡し会　無料招待申込権</span>
                </h4>
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">2019.12.1(SUN) @東京都・新宿LOFT
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">Study 2nd LIVEライブ「ready STUDY 5!!!!!」公演終了後に会場内にて実施
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">料金：無料招待 ライブ観覧には別途チケットが必要となります
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">出演：Study（白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
                <ul class="text-[13px] font-semibold leading-[1.8]
                max-md:text-[11px]">
                  <br>
                  <li>※当選者は抽選にて決定いたします。</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div class="mt-[50px] text-center
      max-md:mt-[50px]">
        <h3><img src="@/assets/img/music/cap_cheer.png" class="h-[50px] w-auto m-auto
          max-md:h-auto max-md:w-full" alt="応援店特典"></h3>
        <ul>
          <li>
            <div class="w-[300px] mt-[30px] mx-auto mb-0
            max-md:w-[69%] max-md:mt-[22px] max-md:mx-auto max-md:mb-0"><img
                src="@/assets/img/music/shop/img_tokuten_op.jpg" alt="">
            </div>
            <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold
            max-md:mt-[10px] max-md:text-[16px]">
              <span>描き下ろしアニメイラスト<br>A4サイズクリアファイル</span>
            </h4>
            <dl class="tracking-widest">
              <dt class="mt-[30px] mx-0 mb-[10px] text-[16px] font-semibold
              max-md:mt-[24px] max-md:mx-0 max-md:mb-[6px] max-md:text-[13px]">[ 対象店舗 ]</dt>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">後日、店舗名詳細をご案内いたします。
                <br class="hidden max-md:block">今しばらくお待ちください。
                <br class="hidden max-md:block">
                <br class="hidden max-md:block">
                <ul class="text-[13px] font-semibold leading-[1.8]
                max-md:text-[11px]">
                  <li>※先着特典となります。
                    <br class="hidden max-md:block">各店舗ともなくなり次第終了となります。
                    <br class="hidden max-md:block">予めご了承ください。
                  </li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div class="mt-[50px] text-center
      max-md:mt-[50px]">
        <h3><img src="@/assets/img/music/cap_shop.png" class="h-[50px] w-auto m-auto
          max-md:h-auto max-md:w-full" alt="店舗別特典"></h3>
        <ul>
          <li>
            <h4 class="text-[#ff8c33] text-[21px] leading-[1.4] font-bold mt-[30px]
            max-md:text-[16px] max-md:mt-[24px]">
              <span>「Study」 L版ブロマイド</span>
            </h4>
            <dl class="tracking-widest">
              <dt class="mt-[30px] mx-0 mb-[10px] text-[16px] font-semibold
              max-md:mt-[24px] max-md:mx-0 max-md:mb-[6px] max-md:text-[13px]">[ 対象店舗 ]</dt>
              <dd class="text-[13px] font-semibold leading-[1.8]
              max-md:text-[11px]">
                <ul class="mt-[20px] tracking-[-.4em]
                max-md:mt-[20px]">
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_animate.jpg"></figure>
                    アニメイト
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_gamers.jpg"></figure>
                    ゲーマーズ
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_sofmap.jpg"></figure>
                    ソフマップ<br><span class="text-[11px]">(CD取り扱い店舗及びドットコム)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_tora.jpg"></figure>
                    とらのあな<br><span class="text-[11px]">(一部店舗除く)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_amazon.jpg"></figure>
                    Amazon<br><span class="text-[11px]">(【Amazon.co.jp限定】<br>商品のみ対象)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_tower.jpg"></figure>
                    タワーレコード
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img src="@/study/assets/img/music/privilege3/img_wg.jpg">
                    </figure>
                    WonderGOO/新星堂
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0
                    max-md:w-[47%] max-md:mt-0 max-md:mr-[5%] max-md:mb-[20px] max-md:ml-0 max-md:text-[12px] max-md:even:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black
                    max-md:mt-0 max-md:mx-0 max-md:mb-[6px]"><img
                        src="@/study/assets/img/music/privilege3/img_anx.jpg"></figure>
                    ANIPLEX+
                  </li>
                </ul>
              </dd>
            </dl>
            <ul class="text-[13px] font-semibold leading-[1.8]
            max-md:text-[11px]">
              <li>※先着特典となります。
                <br class="hidden max-md:block">各店舗ともなくなり次第終了となります。
                <br class="hidden max-md:block">予めご了承ください。
              </li>
              <li>※店舗ごとにStudyの写真が異なります。
                <br class="hidden max-md:block">写真絵柄は現在鋭意選定中！
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </AppLayout>
</template>
