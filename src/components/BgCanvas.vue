<script setup>
import { onMounted, onUnmounted, ref } from 'vue'

const props = defineProps({
  color: String,
})

const particleColor = ref(props.color)
let stage = null
let particleSystem = null

onMounted(() => {
  stage = new createjs.Stage('bgCanvas')
  particleSystem = new particlejs.ParticleSystem()
  stage.addChild(particleSystem.container)
  particleSystem.importFromJson(
    {
      'bgColor': '#ffffff',
      'width': 2000,
      'height': 2000,
      'emitFrequency': 7,
      'startX': 1017,
      'startXVariance': 2000,
      'startY': 2050,
      'startYVariance': 0,
      'initialDirection': 270,
      'initialDirectionVariance': 20,
      'initialSpeed': 4,
      'initialSpeedVariance': 20,
      'friction': 0.02,
      'accelerationSpeed': 0.06,
      'accelerationDirection': 270,
      'startScale': 0.25,
      'startScaleVariance': 1,
      'finishScale': 0.2,
      'finishScaleVariance': 1,
      'lifeSpan': 500,
      'lifeSpanVariance': 0,
      'startAlpha': 0.8,
      'startAlphaVariance': '1',
      'finishAlpha': 0,
      'finishAlphaVariance': 0,
      'shapeIdList': [
        'circle',
      ],
      'startColor': {
        'hue': particleColor.value,
        'hueVariance': '0',
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
})

onUnmounted(() => {
  createjs.Ticker.removeEventListener('tick', handleTick)
})

function handleTick() {
  particleSystem.update()
  stage.update()
}
</script>

<template>
  <div class="block fixed top-0 left-0 w-full h-screen overflow-hidden">
    <canvas id="bgCanvas" width="2000" height="2000"
      class="block absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-0 w-full max-w-[2000px] min-w-[1000px]"></canvas>
  </div>
</template>