<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import ContentTitle from '../../components/ContentTitle.vue'
import MovieModal from '../../components/Modals/MovieModal.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.URUKA)

const showModal = ref(false)

const selectedVideoId = ref(null)

const layoutProps = {
  contentInnerClass: 'pb-[272px]',
}

const movies = [
  { name: '最終巻特典CD収録「ワンダー・ピュアマジック」＆「星空のプレリュード」試聴動画', videoId: 'MrNfQAMY_N8' },
  { name: 'halca「放課後のリバティ」music video ～ぼく勉ver.～', videoId: '4kyKpdN2JXQ' },
  { name: '「もしもし☆Study」2ndSG発売記念回', videoId: 'epe8UO1D100' },
  { name: 'Study 2ndSG「Can now, Can now」（全体試聴動画）', videoId: 'GvV1dSIOP9Y' },
  { name: 'Study「関係≧方程式」（試聴動画）', videoId: 'Wzxnmq69sxY' },
  { name: 'halca「放課後のリバティ」ノンクレジットED映像', videoId: 'n6Dfw_VTnAs' },
  { name: '「Can now, Can now」OP映像', videoId: 'p6HWwmPJdi4' },
  { name: '「Can now, Can now」発売告知CM', videoId: '17C6XfijdMo' },
  { name: '「ぼくたちは勉強ができない！」Blu-ray＆DVD発売告知CM', videoId: 'oJoFhZFiN6s' },
  { name: 'ミニ音声番組「もしもし☆Study」', videoId: 'tdBzw-iLkjg' },
  { name: 'Study 「Can now, Can now」 MV [YouTube Edit]', videoId: 'Cd3nPXDRntA' },
  { name: '【Study】2ndLIVE決定告知動画', videoId: 'Qimt8Ng0Qek' },
  { name: '【合いの手】Study『セイシュンゼミナール』（ロング版）', videoId: 'fsKHf1xhaUU' },
  { name: '【合いの手】Study『引き出せポテンシャル』（ロング版）', videoId: 'OLrMAZ0HJYg' },
  { name: '【合いの手】Study『打算だ!!!』（ロング版）', videoId: 'ZZMgemPbXFc' },
  { name: '【合いの手】Study『ready STUDY go!』（ロング版）', videoId: 'QijQwSWVhc8' },
  { name: 'Study『ていく・あ・ぶれいく♪』試聴動画（Studyワンマンライブ用新曲）', videoId: 'r30Uq5xgCBk' },
  { name: 'ワンマンライブ「PROGRESSIVE」開催告知CM', videoId: 'Itshng4PtcE' },
  { name: '「ぼくたちは勉強ができない！」CM', videoId: 'qrJQMb7x8_4' },
  { name: '「ぼくたちは勉強ができない！」PV', videoId: 'd88R3PgX2Wo' },
  { name: '「PROGRESSIVE」試聴動画', videoId: '9NdeRTkSOxQ' },
  { name: '第2期告知PV', videoId: 'F9M2HgK8ceU' },
  { name: '「PROGRESSIVE」発売告知CM第二弾', videoId: '-MadzvMXDn0' },
  { name: '「PROGRESSIVE」発売告知CM', videoId: '3dVCyjQ6qQc' },
  { name: 'ニコ生特番 ready STUDY go！二限目', videoId: 'QFDR5VLJbD0' },
  { name: '音楽ユニットStudy発表会！！！', videoId: '2JqeZaFl81A' },
  { name: 'ノンクレジットED', videoId: 'LWAmCCpr3U8' },
  { name: 'Study アーティスト写真撮影メイキング', videoId: 'B8VcesYfppQ' },
  { name: '「セイシュンゼミナール」ノンクレジットOP', videoId: 'sIMGyA39hug' },
  { name: 'Blu-ray＆DVD発売告知CM', videoId: '1NBN_JTylkU' },
  { name: '「セイシュンゼミナール／Never Give It Up!!」発売告知CM　アニメ ver.', videoId: 'arbFohGaQbs' },
  { name: '「セイシュンゼミナール／Never Give It Up!!」発売告知CM　Study ver.', videoId: '9tS22q_Kfg8' },
  { name: 'Study 「セイシュンゼミナール」 MV [YouTube Edit]', videoId: 'Qk1gxobARdE' },
  { name: 'Study 「ready STUDY go!」 MV [Full Size]', videoId: 'Zst0UsPKZMA' },
  { name: '第二弾CM', videoId: 'McKnT54ntI0' },
  { name: '第三弾PV<', videoId: 'cI6HM7NCR3Y' },
  { name: '第一弾CM', videoId: 'D45lY3xDJPk' },
  { name: 'Study 「ready STUDY go!」 MVメイキング', videoId: 'Su62MZmCmGg' },
  { name: '音楽ユニット「Study」武元うるか役・鈴代紗弓さんビデオコメント', videoId: 'DkwBzoeWt-c' },
  { name: '音楽ユニット「Study」緒方理珠役・富田美憂さんビデオコメント', videoId: '0CZyrmeU6b8' },
  { name: '音楽ユニット「Study」古橋文乃役・白石晴香さんビデオコメント', videoId: 'yRZbPWZYwEk' },
  { name: '第二弾PV ロングバージョン', videoId: 'Jad4ySgl0zc' },
  { name: '第二弾PV ショートバージョン', videoId: 'CXQdqp6JFxI' },
  { name: '第一弾PV', videoId: 'RSoLdYXC6tw' },
]
</script>

<template>
  <AppLayout v-bind="layoutProps" :style="`--my-color-var: var(${color})`">
    <ContentTitle class="effect_item">MOVIE</ContentTitle>

    <nav class="mb-[30px] text-center">
      <ul>
        <li
          class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal current
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.current]:before:opacity-100 [&.current]:before:w-full [&.current]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
          <a href="./"
            class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">ALL</a>
        </li>
        <li
          class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.current]:before:opacity-100 [&.current]:before:w-full [&.current]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
          <a href="./?category=Anime"
            class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">Anime</a>
        </li>
        <li
          class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[var(--my-color-var)]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.current]:before:opacity-100 [&.current]:before:w-full [&.current]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]">
          <a href="./?category=Study"
            class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">Study</a>
        </li>
      </ul>
    </nav>

    <ul
      class="text-[0] tracking-[-.4em] opacity-0 translate-y-[25px] effect_item
     [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <li v-for="movie in movies"
        class="group inline-block w-[393px] mb-[38px] align-top text-[16px] tracking-normal cursor-pointer even:ml-[60px]"
        @click="(selectedVideoId = movie.videoId, showModal = true)">
        <div
          class="relative w-full pt-[56.5%]
          before:opacity-70 before:absolute before:top-[20px] before:left-[20px] before:w-full before:h-full before:bg-[var(--my-color-var)]
          before:translate-x-0 before:translate-y-0 before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          group-hover:before:translate-x-[10px] group-hover:before:translate-y-[10px] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
          after:absolute after:top-0 after:left-0 after:w-full after:h-full after:border-4 after:border-solid after:border-black after:box-border">
          <div class="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-no-repeat origin-center before:bg-[var(--my-color-var)]
              before:opacity-30 before:absolute before:top-1/2 before:left-1/2 before:w-[250%] before:h-[250%]
              before:translate-x-[20%] before:translate-y-[-50%] before:rotate-[-45deg] before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              group-hover:before:translate-x-[-50%] group-hover:before:translate-y-[-50%] group-hover:before:rotate-[-45deg] group-hover:before:[transition:_transform_.6s_cubic-bezier(.215,_.61,_.355,_1)]
              after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-[url('/src/assets/img/movie/icon_play.svg')] after:bg-center after:bg-no-repeat after:bg-[length:70px_auto]
              after:scale-100 after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
              group-hover:after:scale-[1.06] group-hover:after:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]"
              :style="`background-image: url(//img.youtube.com/vi/${movie.videoId}/hqdefault.jpg)`"></div>
          </div>
        </div>
        <div class="inline-block relative max-w-full mt-[35px] align-top font-semibold text-[13px] leading-[1.3em] tracking-[.075em]
          before:opacity-70 before:absolute before:bottom-[-5px] before:left-0 before:w-0 before:h-[10px] before:bg-[var(--my-color-var)]
          before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]
          group-hover:before:w-full group-hover:before:[transition:_width_.4s_cubic-bezier(.215,_.61,_.355,_1)]">
          <p class="relative z-[1]">{{ movie.name }}</p>
        </div>
      </li>
    </ul>
  </AppLayout>

  <MovieModal :show="showModal" :color="`var(${color})`" @close="showModal = false">
    <div class="relative w-full pt-[56.25%]">
      <iframe width="900" height="506" :src="`https://www.youtube-nocookie.com/embed/${selectedVideoId}`"
        frameborder="0" class="absolute top-0 left-0 w-full h-full"></iframe>
    </div>
  </MovieModal>
</template>
