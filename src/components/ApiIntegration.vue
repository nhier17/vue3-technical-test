//api integration

<template>
  <div>
    <h2>Fetched Data:</h2>
    <ul>
      <li v-for="item in data" :key="item.id">{{ item.name }}</li>
    </ul>
    <p v-if="loading">Loading data...</p>
    <p v-if="error">{{ error }}</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const data = ref([]);
    const loading = ref(false);
    const error = ref(null);

    const fetchData = async () => {
      loading.value = true;
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        data.value = result;
      } catch (err) {
        error.value = err.message;
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchData();
    });

    return {
      data,
      loading,
      error,
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
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
}
</style>
