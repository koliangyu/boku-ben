<script setup>
import { storeToRefs } from 'pinia'
import { onUnmounted, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import DecoItem from '../components/DecoItem.vue'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)

defineProps({
  isTop: Boolean,
})

const show = ref(false)
const open = ref(false)
const isDesktop = ref(checkWidthIsDesktop())

const navigation = ref([
  { name: 'TOP', href: '/', target: null },
  { name: 'NEWS', href: '/news', target: null },
  { name: 'ON AIR', href: '/onair', target: null },
  { name: 'STORY', href: '/story', target: null },
  { name: 'STAFF/CAST', href: '/staffcast', target: null },
  { name: 'CHARACTER', href: '/character', target: null },
  { name: '"Study"', href: 'https://boku-ben.com/study/', target: '_blank' },
  { name: 'MUSIC', href: '/music', target: null },
  { name: 'EVENT', href: 'https://boku-ben.com/event/', target: '_blank' },
  { name: 'MOVIE', href: '/movie', target: null },
  { name: 'SPECIAL', href: '/special', target: null },
  { name: 'COMICS', href: '/comics', target: null },
  { name: 'GOODS', href: '/goods', target: null },
  { name: 'Blu-ray&DVD', href: '/bddvd', target: null },
  { name: 'Twitter', href: 'https://twitter.com/bokuben_anime', target: '_blank' },
])

window.addEventListener('resize', handleResize)

function handleResize() {
  isDesktop.value = checkWidthIsDesktop()
}

function checkWidthIsDesktop() {
  return window.innerWidth > 769
}

watch(show, (isShow) => {
  setTimeout(() => {
    open.value = isShow
  }, 100)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <header class="relative w-[218px] pt-[5px] bg-white
    md:table-cell md:align-top
    max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full max-md:px-[2.6%] max-md:py-[13px] max-md:bg-transparent"
    :style="`--my-color-var: var(${color})`">
    <div class="hidden max-md:block">
      <div class="max-md:w-[29.5%]" :class="{ 'max-md:invisible': isTop }">
        <RouterLink :to="{ name: 'home' }">
          <img src="@/assets/img/common/logo.svg" alt="ぼくたちは勉強ができない">
        </RouterLink>
      </div>
      <div class="group max-md:fixed max-md:top-[10px] max-md:right-[3.5%] max-md:z-[11]" :class="{ 'open': show }"
        @click="show = !show">
        <div class="max-md:relative max-md:bg-black max-md:w-[55px] max-md:h-[55px] max-md:rounded-full">
        </div>
        <ul
          class="max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:w-[23px] max-md:h-[21px]">
          <li
            class="max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:translate-x-[-50%] max-md:translate-y-[-10px] max-md:w-full max-md:h-[4.5px]
            max-md:before:absolute max-md:before:left-0 max-md:before:w-full max-md:before:bg-white max-md:before:top-0 max-md:before:h-[2px]
            max-md:after:absolute max-md:after:left-0 max-md:after:w-full max-md:after:bg-white max-md:after:bottom-0 max-md:after:h-[1px]
            group-[.open]:max-md:translate-x-[-50%] group-[.open]:max-md:translate-y-[-50%] group-[.open]:max-md:rotate-45 group-[.open]:max-md:bg-white">
          </li>
          <li class="max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:translate-x-[-50%] max-md:translate-y-[-50%] max-md:w-full max-md:h-[2px] max-md:bg-white
            group-[.open]:max-md:opacity-0">
          </li>
          <li
            class="max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:translate-x-[-50%] max-md:translate-y-[5px] max-md:w-full max-md:h-[4.5px]
            max-md:before:absolute max-md:before:left-0 max-md:before:w-full max-md:before:bg-white max-md:before:top-0 max-md:before:h-[1px]
            max-md:after:absolute max-md:after:left-0 max-md:after:w-full max-md:after:bg-white max-md:after:bottom-0 max-md:after:h-[2px]
            group-[.open]:max-md:translate-x-[-50%] group-[.open]:max-md:translate-y-[-50%] group-[.open]:max-md:-rotate-45 group-[.open]:max-md:bg-white">
          </li>
        </ul>
      </div>
    </div>
    <Transition enter-active-class="ease-out duration-[400ms]" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-[400ms]" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div class="relative w-[207px] h-screen min-h-[1073px] my-0 mx-auto pt-[13px] pb-[333px] px-0
         max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:z-10 max-md:w-full max-md:h-full max-md:p-0 max-md:overflow-y-auto
        max-md:before:opacity-95 max-md:before:fixed max-md:before:top-0 max-md:before:left-0 max-md:before:w-full max-md:before:h-full
        before:bg-[var(--my-color-var)]" v-show="isDesktop || show">
        <div class="w-[200px] mt-0 mb-[11px] mx-auto block max-md:hidden">
          <RouterLink :to="{ name: 'home' }" class="block w-full h-full">
            <img src="@/assets/img/common/logo02.svg" alt="ぼくたちは勉強ができない">
          </RouterLink>
        </div>

        <div class="mt-[15px] mb-[40px] mx-0 block max-md:hidden">
          <img src="@/assets/img/top/txt_2nd_pc.png" alt="第2期　10月5日より放送開始！">
        </div>

        <DecoItem class="block max-md:hidden"></DecoItem>

        <div class="max-md:h-screen max-md:overflow-y-auto">
          <ul class="w-[197px] mx-auto my-0
          max-md:w-[70%] max-md:mt-[45px] max-md:mx-[4.6%] max-md:mb-0 max-md:pb-[30px]">
            <li v-for="(item, index) in navigation" class="mx-0 my-[2.5px]
            max-md:opacity-0 max-md:translate-x-[-10px] max-md:mt-[2.5px] max-md:mx-0 max-md:mb-[4px]
            max-md:[&.open]:opacity-100 max-md:[&.open]:translate-x-[0] max-md:[&.open]:[transition:_all_.4s_cubic-bezier(.39,_.575,_.565,_1)]
            max-md:[&.open]:[transition-delay:_var(--my-delay-var)]" :class="{ 'open': open }"
              :style="`--my-delay-var: ${++index * 100}ms`">
              <RouterLink v-if="item.target === null" :to="item.href" class="group inline-block relative h-full py-[8px] pr-0 pl-[20px] text-black font-extrabold text-[22px] font-montserrat tracking-[.075em] no-underline
               before:opacity-0 before:absolute before:top-0 before:left-[2px] before:translate-x-[10px] before:w-[16px] before:h-full
               before:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] before:bg-left before:bg-no-repeat before:bg-contain
               md:before:[transition:_all_.3s_ease-out]
               md:hover:before:opacity-100 md:hover:before:translate-x-0 md:hover:before:[transition:_all_.3s_ease-out]
               [&.router-link-active]:before:opacity-100 [&.router-link-active]:before:translate-x-0
               max-md:text-[25px]
               max-md:before:w-[17px] max-md:before:bg-[url('/src/assets/img/common/menu/sp/img_pencil.png')]">
                {{ item.name }}
                <span class="block absolute right-0 bottom-[2px] w-full h-[6px] bg-white border-2 border-solid border-black
               before:absolute before:top-[-2px] before:left-[-3px] before:w-[calc(100%_+_6px)] before:h-[calc(100%_+_4px)] before:bg-white
               md:before:bg-white md:before:[transition:_width_.3s_cubic-bezier(.445,_.05,_.55,_.95)]
               md:group-hover:before:w-0 md:group-hover:before:[transition:_width_.3s_cubic-bezier(.445,_.05,_.55,_.95)]
               group-[&.router-link-active]:before:w-0
               max-md:hidden
               group-[&.router-link-active]:block"></span>
              </RouterLink>
              <a v-else :href="item.href" :target="item.target" class="group inline-block relative h-full py-[8px] pr-0 pl-[20px] text-black font-extrabold text-[22px] font-montserrat tracking-[.075em] no-underline
               before:opacity-0 before:absolute before:top-0 before:left-[2px] before:translate-x-[10px] before:w-[16px] before:h-full
               before:bg-[url('/src/assets/img/common/menu/pc/img_pencil.png')] before:bg-left before:bg-no-repeat before:bg-contain
               md:before:[transition:_all_.3s_ease-out]
               md:hover:before:opacity-100 md:hover:before:translate-x-0 md:hover:before:[transition:_all_.3s_ease-out]
               [&.router-link-active]:before:opacity-100 [&.router-link-active]:before:translate-x-0
               max-md:text-[25px]
               max-md:before:w-[17px] max-md:before:bg-[url('/src/assets/img/common/menu/sp/img_pencil.png')]">
                {{ item.name }}
                <span class="block absolute right-0 bottom-[2px] w-full h-[6px] bg-white border-2 border-solid border-black
               before:absolute before:top-[-2px] before:left-[-3px] before:w-[calc(100%_+_6px)] before:h-[calc(100%_+_4px)] before:bg-white
               md:before:bg-white md:before:[transition:_width_.3s_cubic-bezier(.445,_.05,_.55,_.95)]
               md:group-hover:before:w-0 md:group-hover:before:[transition:_width_.3s_cubic-bezier(.445,_.05,_.55,_.95)]
               group-[&.router-link-active]:before:w-0
               max-md:hidden
               group-[&.router-link-active]:block"></span>
              </a>
            </li>
          </ul>

          <div class="mt-[13px] block max-md:hidden">
            <a href="/event">
              <img src="@/assets/img/top/bnr/bnr_event.jpg" alt="「ぼくたちは勉強ができない」スペシャルイベント開催！" class="block scale-100 [transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)] origin-center
             hover:scale-[.93] hover:[transition:_transform_1s_cubic-bezier(.165,_.84,_.44,_1)]">
            </a>
          </div>
        </div>
      </div>
    </Transition>
  </header>
</template>