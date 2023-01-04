<script setup>
import BgCanvas from '../components/BgCanvas.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import TwitterFollow from '../components/TwitterFollow.vue'
import { useScrollEffectModule } from '../composables/useScrollEffectModule.js'

useScrollEffectModule()

defineProps({
  contentInnerClass: String,
  isTop: Boolean,
  character: {
    color: String,
    bgTop: String,
    bgUnder: String,
    footerImg: String,
    particleColor: String,
  },
})
</script>

<template>
  <div id="l-wrapper" class="w-full table font-wrapper">
    <BgCanvas :color="character?.particleColor" />

    <Header />

    <div
      class="table-cell align-top bg-[position:top_-300px_left_0,_right_bottom] bg-[length:940px_auto,_594px_auto] bg-no-repeat"
      :style="`background-image: url(${character?.bgTop}), url(${character?.bgUnder})`">
      <div class="relative">
        <div :class="contentInnerClass"
          class="relative z-[1] w-[869px] mx-auto my-0 pt-[71px] pb-[232px] min-h-[1000px]">
          <slot />
        </div>
      </div>

      <Footer :character-img="character?.footerImg" />
    </div>

    <TwitterFollow :character-color="character?.color" />
  </div>
</template>
