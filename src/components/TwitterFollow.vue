<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'

const store = useThemeStore()
const { color } = storeToRefs(store)
</script>

<template>
  <div
    class="fixed right-0 bottom-[100px] z-[9] translate-x-[60px] translate-y-[0%] p-[4px] border-2 border-solid border-black rounded-[10px]
    md:[transition:_transform_.4s_cubic-bezier(.445,_.05,_.55,_.95)]
    md:hover:translate-x-[30px] md:hover:translate-y-0 md:hover:[transition:_transform_.4s_cubic-bezier(.445,_.05,_.55,_.95)]
    max-md:top-[42.5%] max-md:bottom-auto max-md:translate-x-[34px] max-md:w-[68px] max-md:p-[2px] max-md:border max-md:border-solid max-md:border-black max-md:rounded-[5px]">
    <div
      class="pt-[23px] pr-[30px] pb-[25px] pl-[8px] bg-black border-2 border-solid border-black rounded-[7px] font-extrabold text-[20px] font-montserrat tracking-[.075em] [writing-mode:vertical-rl]"
      :style="`color: var(${color})`">
      <div class="pl-[10px]" :style="`fill: var(${color})`">
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
          width="20.9px" height="140.1px" viewBox="0 0 20.9 140.1" style="enable-background:new 0 0 20.9 140.1;"
          xml:space="preserve">
          <g>
            <g>
              <path class="st0" d="M16.4,15h3.9V0.5H0.7v5h7.2v8.8h3.9V5.5h4.5V15z"></path>
              <path
                d="M20.8,15.5h-4.9V6h-3.5v8.8H7.4V6H0.2V0h20.5V15.5z M16.9,14.5h2.9V1H1.2v4h7.2v8.8h2.9V5h5.5V14.5z">
              </path>
            </g>
            <g>
              <path class="st0"
                d="M20.4,28.3c0-6-4.2-10.6-9.9-10.6c-5.7,0-10,4.5-10,10.6c0,6.1,4.3,10.6,10,10.6
			C16.2,38.9,20.4,34.4,20.4,28.3z M16.3,28.4c0,3-2.5,5.4-5.8,5.4s-5.8-2.4-5.8-5.4c0-3,2.5-5.5,5.8-5.5S16.3,25.4,16.3,28.4z"></path>
              <path d="M10.5,39.4C4.5,39.4,0,34.6,0,28.3C0,22,4.5,17.3,10.5,17.3c5.9,0,10.4,4.8,10.4,11.1C20.9,34.6,16.5,39.4,10.5,39.4z
			 M10.5,18.3C5.1,18.3,1,22.6,1,28.3c0,5.7,4.1,10.1,9.5,10.1c5.4,0,9.4-4.3,9.4-10.1C19.9,22.6,15.9,18.3,10.5,18.3z M10.5,34.3
			c-3.6,0-6.3-2.6-6.3-5.9c0-3.3,2.8-6,6.3-6c3.5,0,6.3,2.6,6.3,6C16.8,31.7,14,34.3,10.5,34.3z M10.5,23.3c-2.9,0-5.3,2.3-5.3,5
			c0,2.8,2.3,4.9,5.3,4.9c3,0,5.3-2.2,5.3-4.9C15.8,25.5,13.5,23.3,10.5,23.3z"></path>
            </g>
            <g>
              <path class="st0" d="M4.9,48.2h15.4v-5H0.7v13.3h4.2V48.2z"></path>
              <path d="M5.4,57H0.2V42.7h20.5v6H5.4V57z M1.2,56h3.2v-8.3h15.4v-4H1.2V56z"></path>
            </g>
            <g>
              <path class="st0" d="M4.9,65.5h15.4v-5H0.7v13.3h4.2V65.5z"></path>
              <path d="M5.4,74.3H0.2V60h20.5v6H5.4V74.3z M1.2,73.3h3.2V65h15.4v-4H1.2V73.3z"></path>
            </g>
            <g>
              <path class="st0"
                d="M20.4,86.5c0-6-4.2-10.6-9.9-10.6c-5.7,0-10,4.5-10,10.6c0,6.1,4.3,10.6,10,10.6
			C16.2,97.1,20.4,92.6,20.4,86.5z M16.3,86.6c0,3-2.5,5.4-5.8,5.4s-5.8-2.4-5.8-5.4c0-3,2.5-5.5,5.8-5.5S16.3,83.6,16.3,86.6z"></path>
              <path d="M10.5,97.6C4.5,97.6,0,92.9,0,86.5c0-6.3,4.5-11.1,10.5-11.1c5.9,0,10.4,4.8,10.4,11.1C20.9,92.9,16.5,97.6,10.5,97.6z
			 M10.5,76.5C5.1,76.5,1,80.8,1,86.5c0,5.7,4.1,10.1,9.5,10.1c5.4,0,9.4-4.3,9.4-10.1C19.9,80.8,15.9,76.5,10.5,76.5z M10.5,92.5
			c-3.6,0-6.3-2.6-6.3-5.9c0-3.3,2.8-6,6.3-6c3.5,0,6.3,2.6,6.3,6C16.8,89.9,14,92.5,10.5,92.5z M10.5,81.6c-2.9,0-5.3,2.3-5.3,5
			c0,2.8,2.3,4.9,5.3,4.9c3,0,5.3-2.2,5.3-4.9C15.8,83.8,13.5,81.6,10.5,81.6z"></path>
            </g>
            <g>
              <path class="st0" d="M0.7,123.4l19.5,6.5v-5.1L5.9,121l14.4-3.8v-4.9l-14.4-3.7l14.4-3.8v-5.3l-19.5,6.4v5.1l13.5,3.7l-13.5,3.6
			V123.4z"></path>
              <path d="M20.8,130.5l-20.5-6.8v-5.9l12.1-3.2l-12.1-3.3v-5.9l20.5-6.7v6.4l-12.9,3.4l12.9,3.4v5.6L7.8,121l12.9,3.4V130.5z
			 M1.2,123l18.5,6.1v-4L3.9,121l15.8-4.2v-4.1l-15.8-4.1l15.8-4.2v-4.2l-18.5,6.1v4.4l14.9,4.1l-14.9,4V123z"></path>
            </g>
            <g>
              <path class="st0" d="M15.2,139.6h5V135h-5l-7.8,0.8v2.9L15.2,139.6z M5.2,137.2c0-1.3-0.9-2.3-2.3-2.3c-1.4,0-2.3,1-2.3,2.3
			c0,1.4,0.9,2.3,2.3,2.3C4.2,139.6,5.2,138.6,5.2,137.2z"></path>
              <path d="M20.7,140.1l-5.5,0l-8.2-0.9v-3.8l8.2-0.9l5.5,0V140.1z M15.2,139.1h4.4v-3.6h-4.5l-7.3,0.8v2L15.2,139.1z M2.8,140.1
			c-1.6,0-2.8-1.2-2.8-2.8c0-1.6,1.2-2.8,2.8-2.8c1.6,0,2.8,1.2,2.8,2.8C5.7,138.9,4.5,140.1,2.8,140.1z M2.8,135.4
			c-1.1,0-1.8,0.7-1.8,1.8c0,1.1,0.7,1.8,1.8,1.8c1.1,0,1.8-0.7,1.8-1.8C4.7,136.1,3.9,135.4,2.8,135.4z"></path>
            </g>
          </g>
        </svg>
      </div>
      <div class="relative pt-[30px]">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[23px]" :style="`fill: var(${color})`">
          <svg class="w-[23px] h-[23px]" version="1.1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="28.3px" height="22.7px"
            viewBox="0 0 28.3 22.7" style="enable-background:new 0 0 28.3 22.7;" xml:space="preserve">
            <path class="st0"
              d="M28.3,2.7c-1,0.5-2.1,0.7-3.3,0.9c1.2-0.7,2.1-1.9,2.6-3.1c-1.1,0.6-2.4,1.1-3.7,1.4C22.7,0.7,21.2,0,19.6,0
         c-3.2,0-5.8,2.6-5.8,5.7c0,0.5,0,0.9,0.1,1.2C9,6.7,4.8,4.5,2,1C1.5,1.9,1.2,2.9,1.2,4c0,1.9,1,3.7,2.5,4.7C2.8,8.7,1.8,8.3,1.1,8
         c0,0,0,0,0,0.1c0,2.7,2,5.1,4.6,5.6c-0.5,0.1-1,0.2-1.5,0.2c-0.4,0-0.7,0-1.1-0.1c0.7,2.2,2.9,4,5.5,4c-2,1.5-4.5,2.5-7.2,2.5
         c-0.5,0-0.9,0-1.4-0.1c2.6,1.6,5.6,2.6,8.9,2.6c10.7,0,16.5-8.7,16.5-16.2c0-0.2,0-0.5,0-0.7C26.4,4.8,27.4,3.8,28.3,2.7z"></path>
          </svg>
        </div>
        <p>OFFICIAL<br>Twitter</p>
      </div>
    </div>
    <a href="https://twitter.com/bokuben_anime" class="block absolute top-0 left-0 w-full h-full" target="_blank"></a>
  </div>
</template>