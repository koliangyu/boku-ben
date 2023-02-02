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
    <Modal :show="show" :color="color" @close="$emit('close')" class="absolute max-md:absolute">
      <ModalContent
        class="w-[730px] px-0 py-[15px] bg-white border-[6px] border-solid border-black top-[200px] translate-x-[-50%] translate-y-[0]
        max-md:w-[87%] max-md:px-0 max-md:py-[10px] max-md:border-[3px] max-md:border-solid max-md:border-black max-md:top-[100px] max-md:translate-x-[-50%] max-md:translate-y-[0]">
        <slot />
      </ModalContent>
    </Modal>
  </Teleport>
</template>
