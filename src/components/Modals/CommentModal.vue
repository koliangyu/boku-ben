<script setup>
import Modal from './Modal.vue'
import ModalContent from './ModalContent.vue'

defineProps({
  show: Boolean,
  color: String,
})
</script>

<template>
  <Teleport to="#l-wrapper">
    <Modal :show="show" :color="color" @close="$emit('close')" class="absolute">
      <ModalContent class="w-[730px] px-0 py-[15px] bg-white border-[6px] border-solid border-black top-[200px]"
        style="transform: translate(-50%, 0)">
        <slot />
      </ModalContent>
    </Modal>
  </Teleport>
</template>
