<script setup>
import { storeToRefs } from 'pinia'
import BgCanvas from '../components/BgCanvas.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import TwitterFollow from '../components/TwitterFollow.vue'
import { useScrollEffectModule } from '../composables/useScrollEffectModule.js'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { bgTop, bgUnder, bgRepeat } = storeToRefs(store)

useScrollEffectModule()

defineProps({
  contentInnerClass: String,
  isTop: Boolean,
})
</script>

<template>
  <div id="l-wrapper" class="w-full overflow-hidden font-wrapper md:table"
    :style="`--my-pc-background-var: url(${bgTop}), url(${bgUnder}); --my-sp-background-var: url(${bgRepeat})`">
    <BgCanvas />

    <Header :is-top="isTop" />

    <div class="bg-[position:top_-300px_left_0,_right_bottom] bg-[length:940px_auto,_594px_auto] bg-no-repeat bg-[image:var(--my-pc-background-var)]
      md:table-cell md:align-top
      max-md:bg-[position:top_-30vw_left_0] max-md:bg-[length:100%] max-md:bg-repeat-y max-md:pt-[78px]
      max-md:bg-[image:var(--my-sp-background-var)]"
      :class="{ 'max-md:pt-[0] max-md:bg-[position:top_250vw_left_0]': isTop }">
      <div class="relative">
        <div :class="contentInnerClass" class="relative z-[1] w-[869px] mx-auto my-0 pt-[71px] pb-[232px] md:min-h-[1000px]
          max-md:w-[90%] max-md:pt-[20px] max-md:pb-[40px]">
          <slot />
        </div>
      </div>

      <Footer />
    </div>

    <TwitterFollow />

    <!-- <div class="invisible opacity-0 fixed top-[16px] right-[20px] z-[21] [transform:_translate3d(0,_0,_ 0)] [backface-visibility:_hidden] cursor-pointer [transition:_all_.4s_ease]
      md:block md:scale-100 md:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] md:origin-center
      md:hover:scale-[.93] md:hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]
      max-md:top-[10px] max-md:right-[10px]">
      <div class="absolute top-[4px] left-[4px] bg-black w-[80px] h-[80px] rounded-full
        max-md:top-[2px] max-md:left-[2px] max-md:w-[55px] max-md:h-[55px]">
      </div>
      <div class="relative bg-white w-[80px] h-[80px] rounded-full
        max-md:w-[55px] max-md:h-[55px]">
      </div>
      <ul class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40px] h-[40px]
        max-md:w-[23px] max-md:h-[21px]">
        <li
          class="absolute top-1/2 left-1/2 w-full h-[4.5px] bg-black [transform:_translate(-50%,_-50%)_rotate(45deg)]">
        </li>
        <li
          class="absolute top-1/2 left-1/2 w-full h-[4.5px] bg-black [transform:_translate(-50%,_-50%)_rotate(-45deg)]">
        </li>
      </ul>
    </div> -->
  </div>
</template>
