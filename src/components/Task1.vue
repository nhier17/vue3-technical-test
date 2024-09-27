<template>
  <div>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello vue 3');
    
    return {
      message,
    };
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  background-color: #f0f0f0;
  margin-bottom: 5px;
  border-radius: 4px;
}

p {
  color: red;
}
</style>