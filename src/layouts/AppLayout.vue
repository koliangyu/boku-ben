<script setup>
import { storeToRefs } from 'pinia'
import BgCanvas from '../components/BgCanvas.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import TwitterFollow from '../components/TwitterFollow.vue'
import { useScrollEffectModule } from '../composables/useScrollEffectModule.js'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { bgTop, bgUnder } = storeToRefs(store)

useScrollEffectModule()

defineProps({
  contentInnerClass: String,
  isTop: Boolean,
})
</script>

<template>
  <div id="l-wrapper" class="w-full table font-wrapper">
    <BgCanvas />

    <Header />

    <div
      class="table-cell align-top bg-[position:top_-300px_left_0,_right_bottom] bg-[length:940px_auto,_594px_auto] bg-no-repeat"
      :style="`background-image: url(${bgTop}), url(${bgUnder})`">
      <div class="relative">
        <div :class="contentInnerClass"
          class="relative z-[1] w-[869px] mx-auto my-0 pt-[71px] pb-[232px] min-h-[1000px]">
          <slot />
        </div>
      </div>

      <Footer />
    </div>

    <TwitterFollow />
  </div>
</template>
