<script setup>
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';
import TwitterFollow from '../components/TwitterFollow.vue';
</script>

<template>
  <div class="font-wrapper">
    <Header />

    <div
      class="bg-[url('/src/assets/img/common/bg/fumino/pc_bg_top.png'),_url('/src/assets/img/common/bg/fumino/pc_bg_under.png')]
     table-cell align-top bg-[position:top_-300px_left_0,_right_bottom] bg-[length:940px_auto,_594px_auto] bg-no-repeat">
      <div class="relative">
        <div class="container relative z-[1] mx-auto my-0 pt-0 pb-[212px] min-h-[1000px]">
          <slot />
        </div>
      </div>

      <Footer />
    </div>

    <TwitterFollow />
  </div>
</template>
