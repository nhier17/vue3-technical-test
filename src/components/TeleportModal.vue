//teleporting

<template>
  <div>
    <button @click="openModal">Open Modal</button>
    
    <!-- Include Modal Component -->
    <Modal v-if="isModalOpen" :isOpen="isModalOpen" @close="closeModal" />
  </div>
</template>

<script>
import Teleport from './Teleport.vue'; // Assuming the Modal is in the same folder

export default {
  components: {
    Teleport,
  },
  data() {
    return {
      isModalOpen: false, // Modal state
    };
  },
  methods: {
    openModal() {
      this.isModalOpen = true; // Open the modal
    },
    closeModal() {
      this.isModalOpen = false; // Close the modal
    },
  },
};
</script>

<style scoped>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #358768;
}
</style>
