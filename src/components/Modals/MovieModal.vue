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
    <Modal :show="show" :color="color" @close="$emit('close')">
      <ModalContent class="w-[740px] border-4 border-solid border-black">
        <slot />
      </ModalContent>
    </Modal>
  </Teleport>
</template>
