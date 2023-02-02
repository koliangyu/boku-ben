<script setup>
import Modal from './Modal.vue'
import ModalContent from './ModalContent.vue'

defineEmits(['close'])

defineProps({
  show: Boolean,
  color: String,
})
</script>

<template>
  <Teleport to="#l-wrapper">
    <Modal :show="show" :color="color" @close="$emit('close')">
      <ModalContent class="w-[740px] border-4 border-solid border-black
      max-md:w-[90%]">
        <slot />
      </ModalContent>
    </Modal>
  </Teleport>
</template>
