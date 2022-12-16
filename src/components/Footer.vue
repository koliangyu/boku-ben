<script setup>
defineProps({
  characterImg: String,
})

const official = [
  { name: 'PRIVACY POLICY', href: 'https://www.aniplex.co.jp/help/privacy.html' },
  { name: 'CONTACT', href: 'https://www.aniplex.co.jp/support/user.html' },
  { name: 'ANIPLEX', href: 'https://www.aniplex.co.jp/' },
]

const share = [
  {
    name: 'Facebook',
    href: '//www.facebook.com/sharer.php?u=https%3A%2F%2Fboku-ben.com%2F',
    imgUrl: '/src/assets/img/common/footer/icon_facebook.svg',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/intent/tweet?text=TV%e3%82%a2%e3%83%8b%e3%83%a1%e3%80%8c%23%e3%81%bc%e3%81%8f%e3%81%9f%e3%81%a1%e3%81%af%e5%8b%89%e5%bc%b7%e3%81%8c%e3%81%a7%e3%81%8d%e3%81%aa%e3%81%84%ef%bc%81%e3%80%8d%0d%0a2019%e5%b9%b410%e6%9c%885%e6%97%a5%28%e5%9c%9f%2924%3a30%e3%82%88%e3%82%8a%e6%94%be%e9%80%81%e9%96%8b%e5%a7%8b%f0%9f%8e%89%0d%0a%0d%0a%5b%e6%9c%80%e7%b5%82%e5%95%8f%e9%a1%8c%5d%e3%80%80%e3%81%8d%e3%81%bf%e3%81%8c%e9%81%b8%e3%81%b6%e3%81%ae%e3%81%af%e3%80%81%e3%81%a0%e3%82%8c%e3%81%a7%e3%81%99%e3%81%8b%e3%80%82%0d%0a%20https%3a%2f%2fboku%2dben%2ecom%2f%0d%0a%0d%0a%23%e3%81%bc%e3%81%8f%e5%8b%89',
    imgUrl: '/src/assets/img/common/footer/icon_twitter.svg',
  },
  {
    name: 'LINE',
    href: '//line.me/R/msg/text/?TV%E3%82%A2%E3%83%8B%E3%83%A1%E3%80%8C%E3%81%BC%E3%81%8F%E3%81%9F%E3%81%A1%E3%81%AF%E5%8B%89%E5%BC%B7%E3%81%8C%E3%81%A7%E3%81%8D%E3%81%AA%E3%81%84%EF%BC%81%E3%80%8D%0A2019%E5%B9%B410%E6%9C%885%E6%97%A5(%E5%9C%9F)24%3A30%E3%82%88%E3%82%8A%E6%94%BE%E9%80%81%E9%96%8B%E5%A7%8B%F0%9F%8E%89%0A%0A%5B%E6%9C%80%E7%B5%82%E5%95%8F%E9%A1%8C%5D%E3%80%80%E3%81%8D%E3%81%BF%E3%81%8C%E9%81%B8%E3%81%B6%E3%81%AE%E3%81%AF%E3%80%81%E3%81%A0%E3%82%8C%E3%81%A7%E3%81%99%E3%81%8B%E3%80%82%0A%20https%3A%2F%2Fboku-ben.com%2F',
    imgUrl: '/src/assets/img/common/footer/icon_line.svg',
  },
]

function toTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <footer class="group block relative pt-[40px] pr-[350px] pb-[30px] pl-[48px] effect_item">
    <div
      class="opacity-0 absolute right-0 bottom-0 w-[440px] translate-y-[30px]
    group-[.active]:opacity-100 group-[.active]:translate-y-0 group-[.active]:[transition:_transform_.6s_cubic-bezier(.01,_.53,_.37,_.99),_opacity_.4s_ease-in]">
      <img :src="characterImg" alt="">
    </div>

    <ul>
      <li v-for="item in official" class="peer peer-[]:ml-[29px] inline-block align-top tracking-normal scale-100 origin-center transition-transform duration-1000
        hover:scale-[.93] hover:transition-transform hover:duration-1000">
        <a :href="item.href" target="_blank"
          class="block w-full h-full text-black font-semibold text-[16px] font-montserrat tracking-[.13em] no-underline">
          {{ item.name }}
        </a>
      </li>
    </ul>

    <div class="mt-[13px] mb-[23px] mx-0 text-[0] tracking-[-.4em]">
      <p class="font-semibold font-montserrat tracking-wider inline-block align-middle text-[15px]">SHARE</p>
      <ul class="text-[0] tracking-[-.4em] inline-block align-middle">
        <li v-for="item in share" class="peer peer-[]:ml-[18px] inline-block w-[40px] h-[40px] ml-[22px] bg-transparent rounded-[50%] align-top tracking-normal scale-100 transition-transform duration-1000 origin-center
         hover:scale-[.93] hover:transition-transform hover:duration-1000">
          <a :href="item.href" class="block relative w-full h-full" target="_blank">
            <img :src="item.imgUrl"
              class="absolute top-1/2 left-1/2 max-w-[20px] max-h-[23px] -translate-x-1/2 -translate-y-1/2"
              :alt="item.name">
          </a>
        </li>
      </ul>
    </div>

    <p class="relative text-[10px] leading-[20px] tracking-wider">
      このサイトに記載されている一切の文書・図版・写真等を、手段や形態を問わず複製・転載されることを禁じます。<br>
      ©筒井大志／集英社・ぼくたちは勉強ができない製作委員会
    </p>

    <div @click="toTop" class="absolute right-[10px] bottom-[13px] w-[60px] h-[60px] bg-black rounded-full cursor-pointer scale-100 transition-transform duration-1000 origin-center
     hover:scale-[.93] hover:transition-transform hover:duration-1000
     before:absolute before:top-0 before:left-0 before:w-full before:h-full
     before:bg-[url('/src/assets/img/common/footer/arrow_pagetop.svg')]
     before:bg-center before:bg-no-repeat before:bg-[length:19px_auto]">
    </div>
  </footer>
</template>