//teleporting

<template>
  <teleport to="body">
    <div v-if="isOpen" class="modal-backdrop" @click="closeModal">
      <div class="modal-content" @click.stop>
        <h2>Modal Title</h2>
        <p>This is the modal content.</p>
        <button @click="closeModal">Close Modal</button>
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  emits: ['close'],
  methods: {
    closeModal() {
      this.$emit('close'); // Notify the parent to close the modal
    },
  },
};
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  text-align: center;
}
</style>
