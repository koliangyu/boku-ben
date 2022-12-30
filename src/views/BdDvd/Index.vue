<script setup>
import ContentTitle from '../../components/ContentTitle.vue'
import AppLayout from '../../layouts/AppLayout.vue'
import Season from '../../components/Season.vue'

const layoutProps = {
  contentInnerClass: 'w-[869px] pt-[71px] pb-[272px]',
  character: {
    color: '#fbba78',
    bgTop: '/src/assets/img/common/bg/rizu/pc_bg_top.png',
    bgUnder: '/src/assets/img/common/bg/rizu/pc_bg_under.png',
    footerImg: '/src/assets/img/common/footer/img_footer_rizu.png',
    particleColor: '29',
  },
}

const seasons = [
  { name: '2ND SEASON', href: '/bddvd' },
  { name: '1ST SEASON', href: '/bddvd/1st' },
]

const categories = [
  { name: 'vol.01', href: '/bddvd/2nd/01.html', isNow: true },
  { name: 'vol.02', href: '/bddvd/2nd/02.html', isNow: false },
  { name: 'vol.03', href: '/bddvd/2nd/03.html', isNow: false },
  { name: 'vol.04', href: '/bddvd/2nd/04.html', isNow: false },
  { name: 'vol.05', href: '/bddvd/2nd/05.html', isNow: false },
  { name: 'vol.06', href: '/bddvd/2nd/06.html', isNow: false },
]
</script>

<template>
  <AppLayout v-bind="layoutProps">
    <ContentTitle class="effect_item">Blu-ray&DVD</ContentTitle>

    <div
      class="opacity-0 translate-y-[25px] effect_item
      [&.active]:opacity-100 [&.active]:translate-y-0 [&.active]:[transition:_transform_.4s_cubic-bezier(.01,_.53,_.37,_.99)_.4s,_opacity_.4s_ease-in_.4s]">
      <Season :color="layoutProps.character.color" :li-class="'w-[428px]'" :seasons="seasons"></Season>

      <div class="mb-[30px] text-center effect_item">
        <ul>
          <li v-for="category in categories"
            class="peer peer-[]:ml-[29px] relative inline-block align-top tracking-normal
            before:box-content before:opacity-0 before:absolute before:bottom-[-6px] before:left-[-2.5px] before:w-0 before:h-[2px] before:border-2 before:border-solid before:border-black before:leading-[1px] before:bg-[#fbba78]
            before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            hover:before:opacity-100 hover:before:w-full hover:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]
            [&.now]:before:opacity-100 [&.now]:before:w-full [&.now]:before:[transition:_all_0.7s_cubic-bezier(0.23,_1,_0.32,_1)]"
            :class="{ 'now': category.isNow }">
            <a :href="category.href"
              class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
              {{ category.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </AppLayout>
</template>
