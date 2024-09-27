//custom derivatives

<template>
  <div>
    <h2 v-bg-color>Click me to change my background color!</h2>
  </div>
</template>

<script>
export default {
  directives: {
    // Custom directive: bg-color
    bgColor: {
      beforeMount(el) {
        // Initial color state
        let isColorOne = true;

        // Add click event listener to toggle background color
        el.addEventListener('click', () => {
          if (isColorOne) {
            el.style.backgroundColor = 'lightblue'; // First color
          } else {
            el.style.backgroundColor = 'lightgreen'; // Second color
          }
          isColorOne = !isColorOne; // Toggle the color state
        });
      },
      unmounted(el) {
        // Remove the event listener when the element is removed from the DOM
        el.removeEventListener('click');
      },
    },
  },
};
</script>

<style scoped>
h2 {
  padding: 20px;
  text-align: center;
  cursor: pointer;
  user-select: none;
}
</style>
