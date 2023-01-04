<script setup>
import ContentTitle from '../../components/ContentTitle.vue'
import Season from '../../components/Season.vue'
import AppLayout from '../../layouts/AppLayout.vue'

const layoutProps = {
  contentInnerClass: 'w-[895px] pb-[316px]',
  character: {
    color: '#fbba78',
    bgTop: '/src/assets/img/common/bg/rizu/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/rizu/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_rizu.png',
    particleColor: '29',
  },
}

const seasons = [
  { name: 'OPENING', href: '/music' },
  { name: 'ENDING', href: '/music/ed' },
]
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">MUSIC</ContentTitle>

    <div
      class="effect_item
      opacity-0 translate-y-[25px]
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <Season :color="layoutProps.character.color" :seasons="seasons"></Season>

      <div class="text-center">
        <h3 class="text-[50px] font-normal">「<span class="font-montserrat font-bold">Can now, Can now</span>」</h3>
        <h4
          class="font-montserrat font-bold inline-block relative mx-auto mt-[20px] mb-[32px] text-[34px]
          after:box-content after:absolute after:left-0 after:bottom-[-10px] after:w-full after:h-[2px] after:border-2 after:border-solid after:border-black after:bg-[#fbba78]">
          Study</h4>
        <div><img src="@/assets/img/music/img_date.png" class="h-[40px] w-auto m-auto text-center"
            alt="2019年10月30日（水）発売"></div>

        <div
          class="group relative w-[700px] mx-auto mt-[40px] mb-[72px] z-[2]
          before:block before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:z-[-1] before:bg-[#fbba78]
          before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          hover:before:translate-x-[10px] hover:before:translate-y-[10px] hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]">
          <a href="../news/?id=51784" target="_blank"
            class="relative block overflow-hidden before:bg-[#fbba78]
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
        before:block before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:z-[-1] before:bg-[#fbba78]
        after:box-content after:absolute after:top-[19px] after:left-[5px] after:w-[836px] after:h-[3px] after:border-t-4 after:border-b-2 after:border-solid after:border-black after:bg-[#fbba78]">
        <div
          class="relative pt-[70px] pr-[43px] pb-[77px] pl-[63px] bg-white border-[5px] border-solid border-black
          before:absolute before:top-1/2 before:left-[-18px] before:-translate-y-1/2 before:w-[36px] before:h-[94%] before:z-10
          before:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')]
          before:bg-left-top before:bg-repeat-y before:bg-contain
          after:box-content after:absolute after:bottom-[19px] after:left-0 after:w-full after:h-[3px] after:border-t-2 after:border-b-4 after:border-solid after:border-black after:bg-[#fbba78]">
          <div>
            <figure class="w-[670px] m-auto"><img src="@/assets/img/music/img_study_1909.jpg"></figure>
            <div>
              <div class="mt-[38px] mx-0 mb-0">
                <h5
                  class="relative font-montserrat text-white text-[24px] [-webkit-text-stroke:_1px_#000] font-extrabold tracking-[0.1rem] z-10">
                  PROFILE</h5>
                <p class="mt-[16px] mx-0 mb-0 text-[16px] font-extrabold leading-loose tracking-[0.1rem]">
                  「ぼくたちは勉強ができない」の音楽ユニット「Study」。<br>
                  古橋文乃役の白石晴香、緒方理珠役の富田美憂、武元うるか役の鈴代紗弓、<br class="is-pc">
                  桐須真冬役のLynn、小美浪あすみ役の朝日奈丸佳の5人で構成される。
                </p>
              </div>
              <div class="relative mt-[50px] mx-0 mb-0
              after:block after:absolute after:top-[13px] after:left-[-63px] after:z-0 after:w-[835px] after:h-[calc(100%_-_13px)]
              after:bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] after:bg-left-top after:bg-repeat">
                <h5
                  class="relative font-montserrat text-white text-[24px] [-webkit-text-stroke:_1px_#000] font-extrabold tracking-[0.1rem] z-10">
                  COMMENT</h5>
                <ul class="relative pt-[4px] px-0 pb-[10px] z-10">
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]">
                      白石晴香</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]">
                      Lynn さんと朝日奈さんにStudyの活動のお話をすると、いつも「みんな仲良くて楽しそうだね！」と言って下さっていたので、一緒にユニットとして活動出来る事が凄く嬉しいです！<br>
                      5人で歌う事によって、きっと今までの3人の姿とはまた違った一面を見て頂けると思います。<br>
                      頼りになるお二人が加わって心強いですし、Studyがより一層ユニットとして前進して行けるのではないかと、私自身楽しみです。みんなで力を合わせて頑張ります！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]">
                      富田美憂</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]">
                      ようやく皆さんにお伝えすることができました…！<br>
                      すでに撮影などで5人での活動は始まっていたので、発表の日が待ち遠しかったです。<br>
                      3人のStudyとはまた違った良さや魅力が、5人になることでさらにプラスされると思うので、皆さんの前でパフォーマンスをするのが今からすごく楽しみです！<br>
                      パワーアップしたStudy、どうぞよろしくお願いします！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]">
                      鈴代紗弓</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]">
                      Studyがパワーアップ！！<br>
                      今まで3人姉妹のような感じでしたが、また2人お姉ちゃんが増えたような感覚で、とっても嬉しいです！<br>
                      ユニット活動を通してこれからさらに二期が始まるぼく勉を盛り上げていけるように頑張りますので宜しくお願い致します！！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]">
                      Lynn</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]">
                      この度新しくStudyのメンバーになりましたLynnです。<br>
                      正直今ドキドキです。ティーチャー喜んでくださっていますか？（笑）<br>
                      これまでの三人の活動を間近で見ていたときは先生気分でしたが、実はずっと五人化することは知っていたので、なんとも不思議な気持ちだったんです。<br>
                      やっと言えました！（笑）<br>
                      三人の一生懸命な姿に、私自身とても力をもらっていました。<br>
                      これからは五人となることで、よりパワーアップしたStudyとして、力を合わせて楽しんでいきたいと思っています。よろしくお願いします！
                    </p>
                  </li>
                  <li class="relative pt-[18px] px-0 pb-[20px] border-t-2 border-solid border-black first:border-t-0">
                    <p
                      class="font-extrabold z-10 absolute top-[20px] left-0 block pl-[23px] text-[20px]
                      bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] bg-[left_top_2px] bg-no-repeat bg-[length:18px] tracking-[0.1rem]">
                      朝日奈丸佳</p>
                    <p class="relative font-extrabold z-10 pl-[154px] text-[14px] leading-loose tracking-[0.1rem]">
                      Lynnさんと新たにStudyに加わり、活動していくということで･･･最初に聞いた時は、「本当にいいのかな？」と思うほど3人のStudyが素敵だったので恐縮の極みだったのですが･･･やっぱり5人でいると楽しいし、とっても心強くて、一緒に活動していけることがとても嬉しいです！<br>
                      Studyとして、たくさんの景色を見ていきたい。夢を叶えてみたい。ティーチャーと共に！<br>
                      どんな難問も乗り越えられると信じています。<br>
                      新体制のStudy、宜しくお願いします！
                    </p>
                  </li>
                </ul>
              </div>
              <div class="pt-[50px] px-0 pb-0 text-center font-extrabold tracking-[0.1rem]">
                <p class="text-[23px]">「Can now, Can now」</p>
                <p class="mt-[12px] mx-0 mb-0 text-[18px]">2019年10月30日(水)発売</p>
                <ul class="m-0 tracking-[-.4em] text-left">
                  <li class="inline-block w-[302px] mt-[32px] mx-0 mb-0 tracking-[0.1rem] align-top odd:mr-[110px]">
                    <p class="mx-0 mt-0 mb-[16px] text-[17px] text-[#ff8c33] text-center">Study盤(CD＋Blu-ray)</p>
                    <figure><img src="@/assets/img/music/cd_op_01.jpg"></figure>
                    <p class="mt-[15px] mx-0 mb-0 text-[12px] leading-loose">
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
                  <li class="inline-block w-[302px] mt-[32px] mx-0 mb-0 tracking-[0.1rem] align-top odd:mr-[110px]">
                    <p class="mx-0 mt-0 mb-[16px] text-[17px] text-[#ff8c33] text-center">ぼく勉 盤</p>
                    <figure><img src="@/assets/img/music/cd_op_02.jpg"></figure>
                    <p class="mt-[15px] mx-0 mb-0 text-[12px] leading-loose">
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

      <div class="mt-[50px] text-center">
        <h3><img src="@/assets/img/music/cap_ibento.png" class="h-[50px] w-auto m-auto" alt="選べるイベント申込券"></h3>
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
            <div class="w-[300px] mt-[30px] mx-auto mb-0"></div>
            <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold">
              <span>[Aコース]Study 2nd LIVE「ready STUDY 5!!!!!」チケット優先販売申込権</span>
            </h4>
            <dl class="tracking-widest">
              <dd class="text-[13px] font-semibold leading-[1.8]">2019.12.1(SUN) @東京都・新宿LOFT
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">開場17:00／開演18:00
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">前売料金：オールスタンディング　5,500円（税込）※ドリンク代別
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">出演：Study（白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）
                <ul class="text-[13px] font-semibold leading-[1.8]">
                  <br>
                  <li>※申し込み多数の場合は抽選となります。</li>
                  <li>※本申込受付は、当公演の2次先行受付となります。</li>
                </ul>
                <br>
                <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold">
                  <span>[Bコース]サイン入りポスターお渡し会　無料招待申込権</span>
                </h4>
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">2019.12.1(SUN) @東京都・新宿LOFT
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">Study 2nd LIVEライブ「ready STUDY 5!!!!!」公演終了後に会場内にて実施
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">料金：無料招待 ライブ観覧には別途チケットが必要となります
              </dd>
              <dd class="text-[13px] font-semibold leading-[1.8]">出演：Study（白石晴香・富田美憂・鈴代紗弓・Lynn・朝日奈丸佳）
                <ul class="text-[13px] font-semibold leading-[1.8]">
                  <br>
                  <li>※当選者は抽選にて決定いたします。</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div class="mt-[50px] text-center">
        <h3><img src="@/assets/img/music/cap_cheer.png" class="h-[50px] w-auto m-auto" alt="応援店特典"></h3>
        <ul>
          <li>
            <div class="w-[300px] mt-[30px] mx-auto mb-0"><img src="@/assets/img/music/shop/img_tokuten_op.jpg" alt="">
            </div>
            <h4 class="mt-[14px] text-[#ff8c33] text-[21px] leading-[1.4] font-bold">
              <span>描き下ろしアニメイラスト<br>A4サイズクリアファイル</span>
            </h4>
            <dl class="tracking-widest">
              <dt class="mt-[30px] mx-0 mb-[10px] text-[16px] font-semibold">[ 対象店舗 ]</dt>
              <dd class="text-[13px] font-semibold leading-[1.8]">後日、店舗名詳細をご案内いたします。今しばらくお待ちください。
                <ul class="text-[13px] font-semibold leading-[1.8]">
                  <li>※先着特典となります。各店舗ともなくなり次第終了となります。予めご了承ください。</li>
                </ul>
              </dd>
            </dl>
          </li>
        </ul>
      </div>

      <div class="mt-[50px] text-center">
        <h3><img src="@/assets/img/music/cap_shop.png" class="h-[50px] w-auto m-auto" alt="店舗別特典"></h3>
        <ul>
          <li>
            <h4 class="text-[#ff8c33] text-[21px] leading-[1.4] font-bold mt-[30px]">
              <span>「Study」 L版ブロマイド</span>
            </h4>
            <dl class="tracking-widest">
              <dt class="mt-[30px] mx-0 mb-[10px] text-[16px] font-semibold">[ 対象店舗 ]</dt>
              <dd class="text-[13px] font-semibold leading-[1.8]">
                <ul class="mt-[20px] tracking-[-.4em]">
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_animate.jpg"></figure>
                    アニメイト
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_gamers.jpg"></figure>
                    ゲーマーズ
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_sofmap.jpg"></figure>
                    ソフマップ<br><span class="text-[11px]">(CD取り扱い店舗及びドットコム)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_tora.jpg"></figure>
                    とらのあな<br><span class="text-[11px]">(一部店舗除く)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_amazon.jpg"></figure>
                    Amazon<br><span class="text-[11px]">(【Amazon.co.jp限定】<br>商品のみ対象)</span>
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_tower.jpg"></figure>
                    タワーレコード
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_wg.jpg"></figure>
                    WonderGOO/新星堂
                  </li>
                  <li
                    class="inline-block w-[202px] mt-0 mr-[24px] mb-[40px] ml-0 align-top text-[16px] leading-[1.4] tracking-widest [&:nth-child(4n)]:mr-0">
                    <figure class="mt-0 mx-0 mb-[13px] border border-solid border-black"><img
                        src="@/study/assets/img/music/privilege3/img_anx.jpg"></figure>
                    ANIPLEX+
                  </li>
                </ul>
              </dd>
            </dl>
            <ul class="text-[13px] font-semibold leading-[1.8]">
              <li>※先着特典となります。各店舗ともなくなり次第終了となります。予めご了承ください。</li>
              <li>※店舗ごとにStudyの写真が異なります。写真絵柄は現在鋭意選定中！</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </AppLayout>
</template>
