<script setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import ContentTitle from '../../components/ContentTitle.vue'
import DecoItem from '../../components/DecoItem.vue'
import CommentModal from '../../components/Modals/CommentModal.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import { useThemeStore } from '../../stores/theme'
import ListItem from './Partials/ListItem.vue'

const store = useThemeStore()
const { color } = storeToRefs(store)
const { character, changeCharacter } = store

changeCharacter(character.ASUMI)

const showModal = ref(false)

const layoutProps = {
  contentInnerClass: 'pb-[300px] max-md:pb-[94px]',
}

const staffs = [
  { isBig: true, position: '原作', name: '筒井大志', supplement: '(集英社「週刊少年ジャンプ」連載)', mobileBreakPoint: null },
  { isBig: false, position: '監督', name: '岩崎良明', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: 'シリーズ構成', name: '雑破業', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: 'キャラクターデザイン', name: '佐々木政勝', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '美術監督', name: '松本浩樹', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '美術デザイン', name: '山本浩憲・村田貴弘', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '背景スタジオ', name: 'アトリエPlatz', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '色彩設計', name: '松山愛子', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '撮影監督', name: '今泉秀樹', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '撮影スタジオ', name: '颱風グラフィックス', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '編集', name: '梅津朋美', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '編集スタジオ', name: 'エディッツ', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '音響監督', name: '本山哲', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '音響制作', name: 'マジックカプセル', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '音楽', name: '中山真斗', supplement: null, mobileBreakPoint: null },
  { isBig: true, position: 'アニメーションプロデュース', name: 'barnum　studio', supplement: null, mobileBreakPoint: null },
  { isBig: true, position: 'アニメーション制作', name: 'stシルバー×アルボアニメーション', supplement: null, mobileBreakPoint: 6 },
  { isBig: true, position: '製作', name: 'ぼくたちは勉強ができない製作委員会', supplement: null, mobileBreakPoint: null },
]

const casts = [
  { isBig: false, position: '唯我 成幸', name: '逢坂良太', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '古橋 文乃', name: '白石晴香', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '緒方 理珠', name: '富田美憂', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '武元 うるか', name: '鈴代紗弓', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '桐須 真冬', name: 'Lynn', supplement: null, mobileBreakPoint: null },
  { isBig: false, position: '小美浪 あすみ', name: '朝日奈丸佳', supplement: null, mobileBreakPoint: null },
]

const commentData = {
  position: ref(''),
  name: ref(''),
  comment: ref(''),
}

function handlerShowModal(event) {
  showModal.value = true

  commentData.position.value = event.target.dataset.position
  commentData.name.value = event.target.dataset.name
  commentData.comment.value = event.target.dataset.comment
}
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">STAFF/CAST</ContentTitle>

    <div class="relative px-0 pt-[45px] pb-[30px] effect_item
    opacity-0 translate-y-[25px]
    [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]
    max-md:translate-y-[15px] max-md:px-0 max-md:pt-[23px] max-md:pb-[25px] max-md:[&.active]:translate-y-0">
      <DecoItem :color="`var(${color})`"></DecoItem>

      <h3 class="pb-[35px] font-semibold text-[36px] font-montserrat tracking-[.075em]
      max-md:pb-[23px] max-md:text-[26px] max-md:tracking-wider">STAFF</h3>

      <ul class="py-0 pr-0 pl-[18px] text-[0] leading-[-.4em]
      max-md:py-0 max-md:px-[4.5%]">
        <template v-for="staff in staffs">
          <ListItem v-if="staff.name === '筒井大志'" :staff="staff">
            <div class="absolute top-1/2 right-[-35px] w-[24px] h-[24px] mt-[-12px]
            bg-[url('/src/assets/img/staff/icon_balloon.svg')] bg-center bg-no-repeat bg-contain cursor-pointer
            scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center block
            hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
            max-md:w-[20px] max-md:h-[20px] max-md:mt-[-10px]" data-position="原作" data-name="筒井大志"
              data-comment="最初聞いた時は、<br class='hidden max-md:block'>何かのドッキリの可能性も考えましたが、<br>本当のようで驚天動地でございます。本当に応援してくれた皆様のおかげ様です。<br>全力感謝です。<br>放送日には、ぼくと一緒に<br class='hidden max-md:block'>テレビにかじりつきましょうね！"
              @click="handlerShowModal">
            </div>
          </ListItem>
          <ListItem v-else :staff="staff"></ListItem>
        </template>
      </ul>
    </div>

    <div class="relative px-0 pt-[45px] pb-[30px]
    max-md:px-0 max-md:pt-[28px] max-md:pb-[5px]">
      <DecoItem :color="`var(${color})`" :hidden-top="true"></DecoItem>

      <h3 class="pb-[35px] font-semibold text-[36px] font-montserrat tracking-[.075em]
      max-md:pb-[23px] max-md:text-[26px] max-md:tracking-wider">CAST</h3>

      <ul class="py-0 pr-0 pl-[18px] text-[0] leading-[-.4em]
      max-md:py-0 max-md:px-[4.5%]">
        <template v-for="staff in casts">
          <ListItem :staff="staff"></ListItem>
        </template>
      </ul>
    </div>
  </AppLayout>

  <CommentModal :show="showModal" :color="`var(${color})`" @close="showModal = false">
    <div class="relative px-[60px] pt-[28px] pb-[68px]
    before:absolute before:top-1/2 before:left-[-18px] before:-translate-y-1/2 before:w-[36px] before:h-[95%]
    before:bg-[url('/src/assets/img/chara/bg_note_repeat.svg')]
    before:bg-top before:bg-repeat-y before:bg-contain
    max-md:pt-[30px] max-md:pr-[5%] max-md:pb-[45px] max-md:pl-[12%]
    max-md:before:w-[30px]">
      <DecoItem :color="`var(${color})`"></DecoItem>

      <h3 class="pb-[45px] font-extrabold text-[48px] font-montserrat
      max-md:pb-[35px] max-md:text-[30px]">COMMENT</h3>
      <p class="pb-[7px] text-[#f5588b] font-medium text-[18px]
      max-md:text-[13px]">{{ commentData.position.value }}</p>
      <div class="mb-[15px] text-[0] tracking-[-.4em]
      max-md:mb-[25px]">
        <p v-for="str in [...commentData.name.value]" class="inline-block w-[60px] mb-0 px-0 py-[13px] bg-white [border:_3px_solid_#ececec] align-top font-bold text-[28px] tracking-normal text-center [border-right:_none]
          last:[border-right:_3px_solid_#ececec]
          max-md:w-[16%] max-md:px-0 max-md:py-[3.1%] max-md:[border:_2px_solid_#ececec] max-md:text-[22px] max-md:[border-right:_none]
          max-md:last:[border:_2px_solid_#ececec]">{{ str }}</p>
      </div>
      <p class="font-medium text-[15px] leading-[28px]
      max-md:text-[13px] max-md:leading-[22px]" v-html="commentData.comment.value"></p>
    </div>
  </CommentModal>
</template>
