import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useAssetsUrl } from '../composables/useAssetsUrl'

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
  const bgTop = ref(useAssetsUrl(`common/bg/${currentCharacter.value}/pc_bg_top.png`))
  const bgUnder = ref(useAssetsUrl(`common/bg/${currentCharacter.value}/pc_bg_under.png`))
  const bgRepeat = ref(useAssetsUrl(`common/bg/${currentCharacter.value}/sp_bg_repeat.jpg`))
  const footerImg = ref(useAssetsUrl(`common/footer/img_footer_${currentCharacter.value}.png`))
  const particleColor = ref(particleColorList[currentCharacter.value])

  function changeCharacter(char) {
    currentCharacter.value = char
    color.value = `--color-${currentCharacter.value}`
    bgTop.value = useAssetsUrl(`common/bg/${currentCharacter.value}/pc_bg_top.png`)
    bgUnder.value = useAssetsUrl(`common/bg/${currentCharacter.value}/pc_bg_under.png`)
    bgRepeat.value = useAssetsUrl(`common/bg/${currentCharacter.value}/sp_bg_repeat.jpg`)
    footerImg.value = useAssetsUrl(`common/footer/img_footer_${currentCharacter.value}.png`)
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
