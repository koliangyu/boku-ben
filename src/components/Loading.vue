<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const windowWidth = ref(getWidth())

const canvasStartY = ref(1230)
const canvasDirection = ref(315)

const heorineClass = ref(null)

const loadingShow = ref(false)
const loadingActive = ref(false)
const loadCanvasShow = ref(true)

let loading = null
let loadingSystem = null

onMounted(() => {
  if (checkWidthIsMobile()) {
    canvasStartY.value = -30
    canvasDirection.value = 45
  }

  loading = new createjs.Stage('loadCanvas')
  loadingSystem = new particlejs.ParticleSystem()
  loading.addChild(loadingSystem.container)
  loadingSystem.importFromJson(
    {
      'bgColor': '#ffffff',
      'width': 1200,
      'height': 1200,
      'emitFrequency': 25,
      'startX': -30,
      'startXVariance': 100,
      'startY': canvasStartY.value,
      'startYVariance': 50,
      'canvasStartDirection': canvasDirection.value,
      'initialDirectionVariance': 200,
      'initialSpeed': 30,
      'initialSpeedVariance': 10,
      'friction': 0.045,
      'accelerationSpeed': 0.08,
      'accelerationDirection': canvasDirection.value,
      'startScale': 0.1,
      'startScaleVariance': 1,
      'finishScale': 0.1,
      'finishScaleVariance': 1,
      'lifeSpan': 175,
      'lifeSpanVariance': 27,
      'startAlpha': 0.6,
      'startAlphaVariance': 1,
      'finishAlpha': 0,
      'finishAlphaVariance': 0,
      'shapeIdList': [
        'circle',
      ],
      'startColor': {
        'hue': 187,
        'hueVariance': 0,
        'saturation': 75,
        'saturationVariance': 0,
        'luminance': 90,
        'luminanceVariance': 0,
      },
      'blendMode': false,
      'alphaCurveType': '0',
      'VERSION': '1.0.0',
    }
  )
  createjs.Ticker.framerate = 60
  createjs.Ticker.addEventListener('tick', handleTick)

  let heorine = ['fumino', 'rizu', 'uruka', 'mafuyu', 'asumi']
  let heroineNum = Math.floor(Math.random() * heorine.length)
  heorineClass.value = 'c-heroine_' + heorine[heroineNum]

  if (location.search === '' && location.hash === '') {
    loadingShow.value = true
    setTimeout(() => {
      loadingActive.value = true
    }, 350)
    setTimeout(() => {
      loadingShow.value = false
    }, 3500)
    setTimeout(function () {
      loadCanvasShow.value = false
      removeTickerEventListener()
    }, 5000)

    if (!checkWidthIsMobile()) {
      window.scrollTo({
        top: 1380,
        left: 0,
        behavior: 'smooth',
      })
      setTimeout(function () {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }, 3800)
    }

  } else {
    loadingShow.value = false
    removeTickerEventListener()
  }
})

function handleTick() {
  let particleColor = ['187', '29', '0', '339', '253']
  let rondomColor = Math.floor(Math.random() * particleColor.length)
  loadingSystem.startColor.hue = particleColor[rondomColor]
  loadingSystem.update()
  loading.update()
}

function getWidth() {
  // return window.innerWidth
  return window.document.documentElement.clientWidth
}

function checkWidthIsMobile() {
  return windowWidth.value <= 768
}

function removeTickerEventListener() {
  createjs.Ticker.removeEventListener('tick', handleTick)
}

onUnmounted(() => {
  removeTickerEventListener()
})
</script>

<template>
  <Teleport to="#l-wrapper">
    <Transition enter-active-class="ease-out duration-400" enter-from-class="opacity-0" enter-to-class="opacity-100"
      leave-active-class="ease-in duration-1000" leave-from-class="opacity-100" leave-to-class="opacity-0">
      <div v-show="loadingShow" :class="{ active: loadingActive }, heorineClass" class="group fixed top-0 left-0 z-[999] w-full min-w-[1100px] h-full overflow-hidden bg-white
      before:opacity-0 before:absolute before:top-0 before:left-0 before:w-0 before:h-full before:bg-[color:var(--color-fumino)]
      [&.active]:before:opacity-100 [&.active]:before:w-full [&.active]:before:[transition:_all_1.4s_cubic-bezier(.215,_.61,_.355,_1)_1.4s]
      [&.c-heroine\_rizu]:before:bg-[color:var(--color-rizu)]
      [&.c-heroine\_uruka]:before:bg-[color:var(--color-uruka)]
      [&.c-heroine\_mafuyu]:before:bg-[color:var(--color-mafuyu)]
      [&.c-heroine\_asumi]:before:bg-[color:var(--color-asumi)]
      max-md:fixed max-md:top-0 max-md:right-0 max-md:bottom-0 max-md:left-0 max-md:min-w-full max-md:min-h-full">
        <canvas v-if="loadCanvasShow" id="loadCanvas" width="1200" height="1200" class="block absolute bottom-0 left-0 w-full max-w-[1200px] min-w-[600px]
          max-md:top-0 max-md:bottom-auto"></canvas>
        <div class="opacity-0 absolute top-0 left-0 z-[5] translate-x-[-20px] translate-y-[20px] w-[70.5vh] h-full bg-[url('/src/assets/img/top/loading/img_fumino.jpg')] bg-left bg-no-repeat bg-[length:100%]
        group-[&.active]:opacity-100 group-[&.active]:translate-x-0 group-[&.active]:translate-y-0 group-[&.active]:[transition:_all_1.2s_cubic-bezier(.215,_.61,_.355,_1)_1.6s]
        group-[.c-heroine\_rizu]:bg-[url('/src/assets/img/top/loading/img_rizu.jpg')]
        group-[.c-heroine\_uruka]:bg-[url('/src/assets/img/top/loading/img_uruka.jpg')]
        group-[.c-heroine\_mafuyu]:bg-[url('/src/assets/img/top/loading/img_mafuyu.jpg')]
        group-[.c-heroine\_asumi]:bg-[url('/src/assets/img/top/loading/img_asumi.jpg')]
        max-md:translate-x-[-35px] max-md:translate-y-[-35px] max-md:w-[82.4%] max-md:bg-left-top">
        </div>
        <div class="absolute top-0 right-0 z-[6] w-[calc(100%_-_70.5vh)] h-full
        max-md:top-auto max-md:bottom-[20px] max-md:w-[160px] max-md:h-auto">
          <div class="md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-[200px] md:h-[91px]
            max-md:relative max-md:w-[146px] max-md:h-auto">
            <img src="@/assets/img/common/logo02.svg" class="relative" alt="ぼくたちは勉強ができない！">
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>