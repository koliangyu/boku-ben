import { ref } from 'vue'
import { defineStore } from 'pinia'

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

  const currentCharacter = ref(character.FUMINO)
  const color = ref(`--color-${currentCharacter.value}`)
  const bgTop = ref(`/src/assets/img/common/bg/${currentCharacter.value}/pc_bg_top.png`)
  const bgUnder = ref(`/src/assets/img/common/bg/${currentCharacter.value}/pc_bg_under.png`)
  const footerImg = ref(`/src/assets/img/common/footer/img_footer_${currentCharacter.value}.png`)
  const particleColor = ref(particleColorList[currentCharacter.value])

  function changeCharacter(char) {
    currentCharacter.value = char
    color.value = `--color-${currentCharacter.value}`
    bgTop.value = `/src/assets/img/common/bg/${currentCharacter.value}/pc_bg_top.png`
    bgUnder.value = `/src/assets/img/common/bg/${currentCharacter.value}/pc_bg_under.png`
    footerImg.value = `/src/assets/img/common/footer/img_footer_${currentCharacter.value}.png`
    particleColor.value = particleColorList[currentCharacter.value]
  }

  return {
    character,
    currentCharacter,
    color,
    bgTop,
    bgUnder,
    footerImg,
    particleColor,
    changeCharacter,
  }
})
