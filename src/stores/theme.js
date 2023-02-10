import { ref } from 'vue'
import { defineStore } from 'pinia'
import fuminoBgTopUrl from '@/assets/img/common/bg/fumino/pc_bg_top.png'
import fuminoBgUnderUrl from '@/assets/img/common/bg/fumino/pc_bg_under.png'
import fuminoBgRepeatUrl from '@/assets/img/common/bg/fumino/sp_bg_repeat.jpg'
import fuminoFooterImgUrl from '@/assets/img/common/footer/img_footer_fumino.png'
import rizuBgTopUrl from '@/assets/img/common/bg/rizu/pc_bg_top.png'
import rizuBgUnderUrl from '@/assets/img/common/bg/rizu/pc_bg_under.png'
import rizuBgRepeatUrl from '@/assets/img/common/bg/rizu/sp_bg_repeat.jpg'
import rizuFooterImgUrl from '@/assets/img/common/footer/img_footer_rizu.png'
import urukaBgTopUrl from '@/assets/img/common/bg/uruka/pc_bg_top.png'
import urukaBgUnderUrl from '@/assets/img/common/bg/uruka/pc_bg_under.png'
import urukaBgRepeatUrl from '@/assets/img/common/bg/uruka/sp_bg_repeat.jpg'
import urukaFooterImgUrl from '@/assets/img/common/footer/img_footer_uruka.png'
import mafuyuBgTopUrl from '@/assets/img/common/bg/mafuyu/pc_bg_top.png'
import mafuyuBgUnderUrl from '@/assets/img/common/bg/mafuyu/pc_bg_under.png'
import mafuyuBgRepeatUrl from '@/assets/img/common/bg/mafuyu/sp_bg_repeat.jpg'
import mafuyuFooterImgUrl from '@/assets/img/common/footer/img_footer_mafuyu.png'
import asumiBgTopUrl from '@/assets/img/common/bg/asumi/pc_bg_top.png'
import asumiBgUnderUrl from '@/assets/img/common/bg/asumi/pc_bg_under.png'
import asumiBgRepeatUrl from '@/assets/img/common/bg/asumi/sp_bg_repeat.jpg'
import asumiFooterImgUrl from '@/assets/img/common/footer/img_footer_asumi.png'

export const useThemeStore = defineStore('theme', () => {
  const character = {
    FUMINO: 'fumino',
    RIZU: 'rizu',
    URUKA: 'uruka',
    MAFUYU: 'mafuyu',
    ASUMI: 'asumi',
  }

  const particleColorList = {
    'fumino': '187',
    'rizu': '29',
    'uruka': '0',
    'mafuyu': '339',
    'asumi': '253',
  }

  const assets = {
    'fumino': {
      bgTop: fuminoBgTopUrl,
      bgUnder: fuminoBgUnderUrl,
      bgRepeat: fuminoBgRepeatUrl,
      footerImg: fuminoFooterImgUrl,
    },
    'rizu': {
      bgTop: rizuBgTopUrl,
      bgUnder: rizuBgUnderUrl,
      bgRepeat: rizuBgRepeatUrl,
      footerImg: rizuFooterImgUrl,
    },
    'uruka': {
      bgTop: urukaBgTopUrl,
      bgUnder: urukaBgUnderUrl,
      bgRepeat: urukaBgRepeatUrl,
      footerImg: urukaFooterImgUrl,
    },
    'mafuyu': {
      bgTop: mafuyuBgTopUrl,
      bgUnder: mafuyuBgUnderUrl,
      bgRepeat: mafuyuBgRepeatUrl,
      footerImg: mafuyuFooterImgUrl,
    },
    'asumi': {
      bgTop: asumiBgTopUrl,
      bgUnder: asumiBgUnderUrl,
      bgRepeat: asumiBgRepeatUrl,
      footerImg: asumiFooterImgUrl,
    },
  }

  const currentCharacter = ref(character.FUMINO)
  const color = ref(`--color-${currentCharacter.value}`)
  const bgTop = ref(assets[currentCharacter.value].bgTop)
  const bgUnder = ref(assets[currentCharacter.value].bgUnder)
  const bgRepeat = ref(assets[currentCharacter.value].bgRepeat)
  const footerImg = ref(assets[currentCharacter.value].footerImg)
  const particleColor = ref(particleColorList[currentCharacter.value])

  function changeCharacter(char) {
    currentCharacter.value = char
    color.value = `--color-${currentCharacter.value}`
    bgTop.value = assets[currentCharacter.value].bgTop
    bgUnder.value = assets[currentCharacter.value].bgUnder
    bgRepeat.value = assets[currentCharacter.value].bgRepeat
    footerImg.value = assets[currentCharacter.value].footerImg
    particleColor.value = particleColorList[currentCharacter.value]
  }

  return {
    character,
    currentCharacter,
    color,
    bgTop,
    bgUnder,
    bgRepeat,
    footerImg,
    particleColor,
    changeCharacter,
  }
})
