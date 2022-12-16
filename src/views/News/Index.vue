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
      class="opacity-0 translate-y-[25px] effect_item
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <div>
        <div class="mb-[30px] text-center">
          <ul>
            <li
              class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal cate-now
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

      <div class="relative px-0 py-[8px] bg-[rgba(255,_255,_255,_.7)]">
        <DecoItem :color="layoutProps.character.color"></DecoItem>

        <ul class="divide-y-2 divide-black divide-solid">
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.11.10
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                ぼくたちは勉強ができない」第21巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                原作コミックス21巻音声ドラマ＆ミニ画集付き同梱版が予約受付中！<br>&nbsp;<br>真冬＆あすみそれぞれのパラレルストーリーを、TVアニメキャストが新たに熱演！<br>&nbsp;<br>予約締切は12月21日（月）となっておりますので<br>お申し込み逃しなく！<br>&nbsp;<br>【予約締切】2020年12月21日（月）<br>【発売日】2021年3月4日（木）　<br>【予価】本体2,200円+税<br>【商品内容】JC『ぼくたちは勉強ができない』第21巻、音声ドラマ「明日の夜の小妖精編」「薄氷の女王編」（収録時間30分以上予定／ミニ画集内に「専用サービスMIRAIL」用コードを記載）、ミニ画集（JCサイズ／フルカラー16ページ予定）<br>※「ぼくたちは勉強ができない」第21巻通常版も3月4日（木）同日発売です。<br>ネット書店でも絶賛予約受付中！<br>&nbsp;<br>Amazon様<br><a
                  href="https://www.amazon.co.jp/dp/4089083982/">https://www.amazon.co.jp/dp/4089083982/</a><br><br>楽天ブックス様<br><a
                  href="https://books.rakuten.co.jp/rb/16510650/">https://books.rakuten.co.jp/rb/16510650/</a><br><br>セブンネットショッピング様<br><a
                  href="https://7net.omni7.jp/detail/1107143910">https://7net.omni7.jp/detail/1107143910</a><br>&nbsp;<br><img
                  src="SYS/CONTENTS/2020110917240271325542/w776" width="776"><br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.10.21
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                ぼくたちは勉強ができない」第20巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                原作コミックス20巻は音声ドラマ＆ミニ画集付き同梱版が予約受付中！<br>&nbsp;<br>理珠＆文乃それぞれのパラレルストーリーを、TVアニメキャストが新たに熱演！<br>あのハッピーエンドが音声ドラマで蘇る！<br>&nbsp;<br>予約締切は10月27日（火）となっておりますので<br>お申し込み逃しなく！<br>&nbsp;<br>【予約締切】2020年10月27日（火）<br>【発売日】2021年1月4日（月）　<br>【予価】本体2,200円+税<br>【商品内容】JC『ぼくたちは勉強ができない』第20巻、音声ドラマ「機械仕掛けの親指姫編」「文学の森の眠り姫編」（収録時間30分以上予定／ミニ画集内に「専用サービスMIRAIL」用コードを記載）、ミニ画集（JCサイズ／フルカラー16ページ予定）<br>※「ぼくたちは勉強ができない」第20巻通常版も1月4日（月）同日発売です。<br>&nbsp;<br>ネット書店でも絶賛予約受付中！<br>Amazon様<br><a
                  href="https://www.amazon.co.jp/dp/4089083974">https://www.amazon.co.jp/dp/4089083974</a><br>楽天ブックス様<br><a
                  href="https://books.rakuten.co.jp/rb/16440184/">https://books.rakuten.co.jp/rb/16440184/</a><br>セブンネットショッピング様<br><a
                  href="https://7net.omni7.jp/detail/1107127109">https://7net.omni7.jp/detail/1107127109</a><br>&nbsp;<br><img
                  src="SYS/CONTENTS/2020102119004161603789/w776" width="776"><br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.05.27
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                第2期最終巻特典CD内フルピュア関連楽曲2曲試聴音源公開
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                6月24日発売TVアニメ「ぼくたちは勉強ができない！」vol.6<br>完全生産限定版特典オリジナルサウンドトラックvol.3には<br>川瀬・海原・真冬が歌うフルピュアの曲「ワンダー・ピュアマジック！」と<br>うるかが歌うフルピュア・ダークネスの曲「星屑のプレリュード」も収録！<br>フルピュアは本編で歌った2人に真冬も加わったSPver.！<br><br>▼商品ページ▼<br><a
                  href="https://boku-ben.com/bddvd/2nd/06.html">https://boku-ben.com/bddvd/2nd/06.html</a><br>&nbsp;<br>「ワンダー・ピュアマジック！」<br>作詞・作曲・編曲：西田圭稀<br>歌：桐須真冬（CV.Lynn）＆川瀬あゆ子（CV.大地葉）＆海原智波（CV.阿澄佳奈）<br><br>「星屑のプレリュード」<br>作詞・作曲・編曲：西田圭稀<br>歌：武元うるか（CV.鈴代紗弓）<br>&nbsp;<br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.04.21
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                第2期BD&amp;DVD第6巻完全生産限定版描き下ろしイラスト公開
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                6/24(水)発売第2期BD&amp;DVD第6巻完全生産限定版の<br>■キャラクタデザイン・佐々木政勝
                描き下ろし三方背ケース<br>■特製デジパック<br>イラスト公開！<br>&nbsp;<br>三方背ケースにはヒロイン5人、デジパックには成幸含め全員の素敵な姿が描かれております<br>是非チェックください<br>&nbsp;<br>▼詳細▼<br><a
                  href="https://boku-ben.com/bddvd/2nd/06.html">https://boku-ben.com/bddvd/2nd/06.html</a><br>&nbsp;<br><img
                  src="SYS/CONTENTS/2020041716030799965089/w595" width="595"><br>&nbsp;<br><img
                  src="SYS/CONTENTS/2020041716031923238522/w598" width="598"><br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.04.21
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                TVアニメ『ぼくたちは勉強ができない！』Blu-ray＆DVD 5～6巻 発売日変更のお知らせ
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                政府より発令された緊急事態宣言に伴うソニーミュージックグループ商品の発売延期処置および、この環境下における制作状況への影響を考慮し、TVアニメ「ぼくたちは勉強ができない！」Blu-ray＆DVD
                5～6巻は発売日を変更させていただく事となりました。<br>対象商品と変更後の発売日は下記となります。<br>&nbsp;<br>■対象商品と変更後の発売日<br>TVアニメ「ぼくたちは勉強ができない！」Blu-ray＆DVD
                vol.5 (ANZX/ZB-14929～14930)<br>発売日未定 → 2020年5月27日(水)<br>TVアニメ「ぼくたちは勉強ができない！」Blu-ray＆DVD vol.6
                (ANZX/ZB-14931～14932)<br>旧発売予定日2020年5月27日(水) →
                2020年6月24日(水)<br>&nbsp;<br>また、4月27日発売の週刊少年ジャンプ21.22合併号につきましては印刷日程の都合上、変更前の発売日にて情報が記載されております。<br><br>発売を楽しみにお待ちいただいているお客様に多大なご迷惑をおかけいたします事、深くお詫び申し上げます。<br>何卒ご理解賜りますようお願い申し上げます。<br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.04.15
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                TVアニメ『ぼくたちは勉強ができない！』 Blu-ray＆DVD Vol.5 発売日延期のお知らせ
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                政府により発令された緊急事態宣言に伴うソニーミュージックグループ商品の発売延期処置にともない、4/29発売を予定しておりましたアニメ『ぼくたちは勉強ができない！』 Blu-ray＆DVD
                Vol.5は<br>発売延期とさせていただく事となりました。<br>&nbsp;<br>■対象商品<br>アニメ『ぼくたちは勉強ができない！』 Blu-ray＆DVD
                Vol.5<br>ANZX/ANZB-14929～14930（旧発売予定日2020年4月29日(水)）<br>→発売日未定延期<br>&nbsp;<br>詳細な発売日が定まりましたら、改めて公式サイト、オフィシャルTwitterアカウントからご案内いたします。<br>楽しみにお待ちいただいているお客様に多大なご迷惑をおかけいたします事、深くお詫び申し上げます。<br>何卒ご理解賜りますようお願い申し上げます。<br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.02.27
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                TVアニメ「ぼくたちは勉強ができない！」スペシャルイベント中止に関してのお知らせ
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                いつも「ぼくたちは勉強ができない」を応援いただき、誠にありがとうございます。<br>3月1日（日）に開催を予定しておりましたTVアニメ「ぼくたちは勉強ができない！」スペシャルイベント〜[x]たちは最後の祭典に参加する〜につきまして、2月26日（水）に新型コロナウイルス感染症対策本部にて示されたイベント自粛要請の内容を重く受け止め、公演でのウイルス感染拡大の可能性を考慮し、また何よりお客様の健康と安全を最優先と判断し、誠に残念ではございますが開催を中止させていただくこととなりました。<br>&nbsp;<br>開催直前のご案内となり、ご参加を予定されておりました皆様には多大なご迷惑をおかけいたしますこと、心よりお詫び申し上げます。ご理解を賜ります様、何卒よろしくお願いいたします。<br>&nbsp;<br>会場にて販売を予定しておりましたグッズにつきましては、インターネット通販サイト「ANIPLEX+」にて3月1日(日)12時より販売を行います。詳細はこちらをご確認ください。<br><a
                  href="https://www.aniplexplus.com/UPsgYoYh">https://www.aniplexplus.com/UPsgYoYh</a><br>&nbsp;<br>ご購入をいただきましたチケットの払い戻し方法は下記をご確認ください。<br><br>■払い戻し期間<br>2020年3月2日（月）10:00～
                2020年3月31日（火）23:59<br>&nbsp;<br>■払い戻し方法<br>払い戻し方法は、チケットの受け取り方法や支払い方法などにより異なります。<br>詳細は下記URLより御確認ください。<br>公演中止
                払戻確認チャート　<a
                  href="https://eplus.jp/sf/refund1">https://eplus.jp/sf/refund1</a><br>（問）イープラスカスタマーセンター：0570-06-9919（受付時間10時～18時・土日祝含む）　<br>※お電話が混み合ってかかりにくい場合があります。<br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
          <li class="relative pt-[20px] pb-[17px] px-[20px] text-[0] tracking-[-.4em]">
            <div class="relative w-[120px] h-[120px] inline-block align-top text-[16px] tracking-normal">
              <div class="absolute top-0 right-0 bottom-0 left-0 bg-center bg-cover bg-no-repeat bg-white"
                style="background-image: url(/src/assets/img/news/img_noimg.jpg)">
              </div>
            </div>
            <div class="w-[calc(100%_-_134px)] ml-[14px] inline-block align-top text-[16px] tracking-normal">
              <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">
                2020.02.21
              </p>
              <div
                class="mt-[9px] pb-[13px] px-0 overflow-hidden font-bold text-[20px] tracking-wider whitespace-nowrap text-ellipsis">
                【お知らせ】新型コロナウイルス感染症への対応について（3月1日スペシャルイベントへ参加される皆さまへ）
              </div>
              <div class="h-[66px] overflow-hidden text-[13px] leading-[22px]">
                新型コロナウイルス感染症が発生し、国内でもその感染の広がりが懸念されております。<br>現在開催に向けて準備を進めておりますが、TVアニメ「ぼくたちは勉強ができない！」スペシャルイベント〜[x]たちは最後の祭典に参加する〜へ参加される皆さまにおかれましては、<br>新型コロナウイルスの国内感染の拡大に伴い、予防のための下記ご協力の程をお願い致します。<br>&nbsp;<br>※万が一、発熱・咳・全身痛などの症状がある場合は、ご来場の前に必ず医療機関にご連絡の上、指定された医療機関で受診されますようお願い致します。<br>※会場入口にアルコール消毒液をご用意しております。ご入場の際にご利用ください。<br>※開場中・イベント中含めマスク着用のご協力をお願いいたします。<br>※イベントスタッフもマスクを着用させて頂く場合がございます。<br>※感染予防対策として、うがい・手洗いの励行をお願いいたします。<br>※当日、体調にご不安のある方はご無理なさらぬようお願い申し上げます。<br>&nbsp;<br>イベントに関するお問い合わせについては、下記お問い合わせ先までご連絡ください。<br>お問い合わせ先<br>ホットスタッフ・プロモーション<br>03-5720-9999（平日12:00～18:00／土･日･祝は除く）<br>&nbsp;<br>※ご参考<br>★厚生労働省より、<a
                  title="" href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/0000164708_00001.html"
                  target="">「国民の皆さまへのメッセージ」</a><br>※厚生労働省新型コロナウイルス感染症電話相談窓口<br>TEL：0120-565653（フリーダイヤル）／午前9時～午後9時まで　日本語対応<br>●厚生労働省：<a
                  title="" href="https://www.mhlw.go.jp/content/10900000/000596905.pdf"
                  target="">「新型コロナウイルス感染症についての相談・受診の目安」</a><br>&nbsp;<br>
              </div>
            </div>
            <RouterLink :to="{ name: 'news.show', params: { id: '55576' } }" class="block absolute top-0 left-0 w-full h-full
             before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full [transition:_opacity_.3s_ease-out] before:bg-[#fbba78]
             hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></RouterLink>
          </li>
        </ul>
      </div>
    </div>

    <ul class="mt-[30px] text-[0] tracking-[-.4em] text-center">
      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
       relative w-[40px] h-[40px] mr-[20px] invisible">
        <a
          class="block w-full h-full text-black no-underline relative p-0
         after:absolute after:top-0 after:left-0 after:w-full after:h-full
         after:bg-[url(/src/assets/img/common/arrow_left.svg)] after:bg-center after:bg-no-repeat after:bg-[15px_auto]">
          <div class="absolute top-[2px] left-[2px] bg-black w-full h-full rounded-full"></div>
          <div class="relative w-full h-full rounded-full bg-[#fbba78]"></div>
        </a>
      </li>

      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal active
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
        <a href="?p=1" class="block w-full h-full px-[13px] py-0 text-black no-underline">1</a>
      </li>
      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
        <a href="?p=2" class="block w-full h-full px-[13px] py-0 text-black no-underline">2</a>
      </li>
      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
        <a href="?p=3" class="block w-full h-full px-[13px] py-0 text-black no-underline">3</a>
      </li>
      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
        <a href="?p=4" class="block w-full h-full px-[13px] py-0 text-black no-underline">4</a>
      </li>

      <li class="inline-block align-middle font-extrabold text-[22px] font-montserrat tracking-normal
       scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
       hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
       relative w-[40px] h-[40px] ml-[20px]">
        <a href="?p=2"
          class="block w-full h-full text-black no-underline relative p-0
         after:absolute after:top-0 after:left-0 after:w-full after:h-full
         after:bg-[url(/src/assets/img/common/arrow_right.svg)] after:bg-center after:bg-no-repeat after:bg-[15px_auto]">
          <div class="absolute top-[2px] left-[2px] bg-black w-full h-full rounded-full"></div>
          <div class="relative w-full h-full rounded-full bg-[#fbba78]"></div>
        </a>
      </li>
    </ul>
  </AppLayout>
</template>
