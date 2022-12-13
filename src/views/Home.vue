<script setup>
import AppLayout from '../layouts/AppLayout.vue'

const news = [
  {
    id: 55576,
    title: 'ぼくたちは勉強ができない」第21巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！',
    href: './news/?id=55576',
    date: '2020.11.10',
  },
  {
    id: 55441,
    title: 'ぼくたちは勉強ができない」第20巻　音声ドラマ＆ミニ画集付き同梱版予約受付中！',
    href: './news/?id=55441',
    date: '2020.10.21',
  },
  {
    id: 54040,
    title: '第2期最終巻特典CD内フルピュア関連楽曲2曲試聴音源公開',
    href: './news/?id=54040',
    date: '2020.05.27',
  },
]
</script>

<template>
  <AppLayout>
    <div class="relative p-0 text-center">
      <div class="relative w-full text-center">
        <img src="@/assets/img/top/img_main.jpg" class="w-full" alt="">
      </div>
      <h2
        class="absolute top-[10px] right-[18px] w-[70px] h-[419px] active
       opacity-0 translate-y-[20px]
       [&.active]:opacity-100 [&.active]:translate-y-0
       [&.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99),_opacity_.6s_ease-in,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)]">
        <img src="@/assets/img/top/copy_main.svg" class="w-[70px] h-[419px]" alt="[最終問題]　きみが選ぶのは、だれですか。">
      </h2>
    </div>

    <div class="group relative pt-[67px] pb-[93px] px-0 overflow-hidden active
     bg-[url('/src/assets/img/common/bg_grid_repeat.jpg')] bg-[top_left] bg-repeat">
      <div
        class="opacity-0 absolute bottom-0 left-[-30px] w-[334px] translate-x-[-40px]
      group-[.active]:opacity-100 group-[.active]:translate-x-0 group-[.active]:[transition:_transform_.6s_cubic-bezier(.01,_.53,_.37,_.99)_1s,_opacity_.4s_ease-in_1s,_-webkit-transform_.6s_cubic-bezier(.01,_.53,_.37,_.99)_1s]">
        <img src="@/assets/img/top/img_movie.png" alt="">
      </div>

      <div class="w-[868px] mx-auto my-0">
        <div
          class="mb-[60px] inline-block relative text-[45px] font-montserrat
         before:opacity-0 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[32px] before:bg-black
         group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_width_.6s_cubic-bezier(.165,_.84,_.44,_1),_opacity_.6s_ease-in]">
          <h3
            class="inline-block relative w-auto px-[10px] pt-0 pb-[10px] text-white font-extrabold tracking-[.075em] [-webkit-text-stroke:_1px_#000]">
            MOVIE
          </h3>
        </div>
        <div
          class="opacity-0 translate-y-[30px]
        group-[.active]:opacity-100 group-[.active]:translate-y-0 group-[.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s]">
          <div class="group/movie w-[520px] mx-auto my-0 text-center" data-movie="d88R3PgX2Wo">
            <div
              class="relative w-full mx-auto my-0 pt-[56.25%] cursor-pointer
             before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[#9ce9f5]
             before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
             group-hover/movie:before:translate-x-[10px] group-hover/movie:before:translate-y-[10px] group-hover/movie:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
             after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-4 after:border-solid after:border-black after:box-border">
              <div class="absolute top-0 left-0 w-full h-full">
                <div
                  class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat origin-center overflow-hidden before:bg-[#9ce9f5]
                 before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[250%] before:h-[250%]
                 before:translate-x-[20%] before:translate-y-[-50%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
                 group-hover/movie:before:translate-x-[-50%] group-hover/movie:before:translate-y-[-50%] group-hover/movie:before:rotate-[-45deg] group-hover/movie:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
                 after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('/src/assets/img/movie/icon_play.svg')] after:bg-center after:bg-no-repeat after:bg-[length:70px_auto]
                 after:scale-100 after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
                 group-hover/movie:after:scale-[1.06] group-hover/movie:after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]"
                  style="background-image: url(//img.youtube.com/vi/d88R3PgX2Wo/maxresdefault.jpg)"></div>
              </div>
            </div>
            <div
              class="relative mt-[33px] font-semibold text-[16px] leading-[1.3em] tracking-[.075em] text-center inline-block
             before:opacity-70 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[10px] before:bg-[#9ce9f5]
             before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
             group-hover/movie:before:w-full group-hover/movie:before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]">
              <p class="relative z-[1] overflow-hidden whitespace-nowrap text-ellipsis">TVアニメ「ぼくたちは勉強ができない！」PV</p>
            </div>
          </div>
          <div class="relative w-[283px] h-[40px] mt-[26px] mb-0 mx-auto text-center block
          scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
          hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
          before:absolute before:top-[4px] before:left-[4px] before:w-full before:h-full before:bg-black before:rounded-[10px]
          after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#9ce8f5] after:rounded-[10px]">
            <p
              class="relative top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-full font-semibold text-[17px] font-montserrat tracking-wider
           before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full
           before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]">
              MORE
            </p>
            <a href="/movie/" class="absolute top-0 left-0 z-[2] w-full h-full"></a>
          </div>
        </div>
      </div>
    </div>

    <div class="group pt-[66px] pb-0 px-0 active
    bg-[url('/src/assets/img/common/bg/fumino/pc_bg_top.png')] bg-left-top bg-no-repeat bg-contain">
      <div class="w-[868px] mx-auto my-0">
        <div
          class="inline-block relative mb-[43px] text-[45px] font-montserrat
        before:opacity-0 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[32px] before:bg-black
        group-[.active]:before:opacity-100 group-[.active]:before:w-full group-[.active]:before:[transition:_width_.6s_cubic-bezier(.165,_.84,_.44,_1),_opacity_.6s_ease-in]">
          <h3
            class="inline-block relative w-auto px-[10px] pt-0 pb-[10px] text-white font-extrabold tracking-[.075em] [-webkit-text-stroke:_1px_#000]">
            NEWS
          </h3>
        </div>

        <div
          class="opacity-0 translate-y-[30px] text-[0] tracking-[-.4em]
        group-[.active]:opacity-100 group-[.active]:translate-y-0 group-[.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s,_-webkit-transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s]">
          <div class="w-[433px] mr-[30px] inline-block align-top text-[16px] tracking-normal">
            <div class="relative px-0 py-[6px]">
              <ul>
                <li class="absolute left-0 w-full h-[6px] top-0 bg-[#9ce9f5]
               before:absolute before:left-0 before:w-full before:bg-black before:top-0 before:h-[3px]
               after:absolute after:left-0 after:w-full after:bg-black after:bottom-0 after:h-[1px]"></li>
                <li class="absolute left-0 w-full h-[6px] bottom-[10px] bg-[#9ce9f5]
               before:absolute before:left-0 before:w-full before:bg-black before:top-0 before:h-[1px]
               after:absolute after:left-0 after:w-full after:bg-black after:bottom-0 after:h-[3px]"></li>
              </ul>

              <ul class="divide-y-2 divide-black divide-solid">
                <li v-for="item in news" class="relative pt-[25px] pb-[27.5px] px-0">
                  <p class="text-[#f5588b] font-bold text-[13px] font-montserrat tracking-[.08em]">{{ item.date }}</p>
                  <div
                    class="mt-[4px] mb-0 mx-0 overflow-hidden font-bold text-[16px] tracking-wider whitespace-nowrap text-ellipsis">
                    {{ item.title }}
                  </div>
                  <a :href="item.href" class="block absolute top-0 left-0 w-full h-full
                   before:opacity-0 before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-[#9ce9f5]
                   before:[transition:_opacity_.3s_ease-out]
                   hover:before:opacity-30 hover:before:[transition:_opacity_.3s_ease-out]"></a>
                </li>
              </ul>
            </div>

            <div class="relative w-[283px] h-[40px] mt-[32px] mb-0 mx-auto text-center block
          scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
          hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
          before:absolute before:top-[4px] before:left-[4px] before:w-full before:h-full before:bg-black before:rounded-[10px]
          after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[#9ce8f5] after:rounded-[10px]">
              <p
                class="relative top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 w-full font-semibold text-[17px] font-montserrat tracking-wider
           before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full
           before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]">
                MORE
              </p>
              <a href="/news/" class="absolute top-0 left-0 z-[2] w-full h-full"></a>
            </div>
          </div>

          <div
            class="inline-block relative w-[calc(100%_-_463px)] mt-[148px] pt-[20px] pb-[24px] px-[20px] bg-black rounded-[5px] align-top text-[16px] tracking-normal">
            <p
              class="twitter_name absolute top-[-30px] left-0 pt-[15px] pb-[10px] px-[20px] bg-black rounded-[5px_5px_0_0] font-bold text-[15px] font-montserrat tracking-[.15em] text-[#9ce9f5]">
              @bokuben_anime</p>
            <div class="twitter_timeline">
              <div class="twitter-timeline twitter-timeline-rendered"
                style="display: flex; width: 360px; max-width: 100%; margin-top: 0px; margin-bottom: 0px;"><iframe
                  id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" allowfullscreen="true"
                  class=""
                  style="position: static; visibility: visible; width: 360px; height: 400px; display: block; flex-grow: 1;"
                  title="Twitter Timeline"
                  src="https://syndication.twitter.com/srv/timeline-profile/screen-name/bokuben_anime?dnt=false&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOlsibGlua3RyLmVlIiwidHIuZWUiLCJ0ZXJyYS5jb20uYnIiLCJ3d3cubGlua3RyLmVlIiwid3d3LnRyLmVlIiwid3d3LnRlcnJhLmNvbS5iciJdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2hvcml6b25fdGltZWxpbmVfMTIwMzQiOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2JhY2tlbmQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3JlZnNyY19zZXNzaW9uIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19zaG93X2J1c2luZXNzX3ZlcmlmaWVkX2JhZGdlIjp7ImJ1Y2tldCI6Im9mZiIsInZlcnNpb24iOm51bGx9LCJ0ZndfY2hpbl9waWxsc18xNDc0MSI6eyJidWNrZXQiOiJjb2xvcl9pY29ucyIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfcmVzdWx0X21pZ3JhdGlvbl8xMzk3OSI6eyJidWNrZXQiOiJ0d2VldF9yZXN1bHQiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3NlbnNpdGl2ZV9tZWRpYV9pbnRlcnN0aXRpYWxfMTM5NjMiOnsiYnVja2V0IjoiaW50ZXJzdGl0aWFsIiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0ZndfZHVwbGljYXRlX3NjcmliZXNfdG9fc2V0dGluZ3MiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3ZpZGVvX2hsc19keW5hbWljX21hbmlmZXN0c18xNTA4MiI6eyJidWNrZXQiOiJ0cnVlX2JpdHJhdGUiLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmx1ZV92ZXJpZmllZF9iYWRnZSI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&amp;frame=false&amp;hideBorder=false&amp;hideFooter=true&amp;hideHeader=true&amp;hideScrollBar=true&amp;lang=ja&amp;maxHeight=400px&amp;origin=https%3A%2F%2Fboku-ben.com%2F%3Ffrom__lower&amp;sessionId=d0e49698411d45311fd53f9a52535711bbd147c7&amp;showHeader=false&amp;showReplies=false&amp;siteScreenName=bokuben_anime&amp;transparent=false&amp;widgetsVersion=a3525f077c700%3A1667415560940"></iframe>
              </div>
              <!-- <script async="" src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="opacity-0 translate-y-[30px] pt-[195px] active
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.8s_cubic-bezier(.01,_.53,_.37,_.99)_.6s,_opacity_.6s_ease-in_.6s]">
      <div
        class="relative w-[375px] h-[60px] mx-auto my-0 border-[3px] border-solid border-black rounded-[10px] block
      scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
      hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
      before:absolute before:top-0 before:right-0 before:w-[25px] before:h-full before:bg-[url('/src/assets/img/common/arrow_right.svg')] before:bg-[left_center] before:bg-no-repeat before:bg-[length:15px_auto]">
        <p
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[269px] py-[9px] pl-[35px] pr-0 font-semibold text-[18px]
         before:absolute before:top-0 before:left-0 before:w-[35px] before:h-full
         before:bg-[url('/src/assets/img/top/icon_jump.svg')] before:bg-[center_left] before:bg-no-repeat before:bg-[length:25px_auto]">
          週刊少年ジャンプ公式リンク</p>
        <a href="https://www.shonenjump.com/j/rensai/bokuben.html" class="block absolute top-0 left-0 w-full h-full"
          target="_blank"></a>
      </div>
    </div>
  </AppLayout>
</template>
