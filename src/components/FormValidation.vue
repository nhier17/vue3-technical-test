//form validation

<template>
  <div>
    <form @submit.prevent="handleSubmit">
      <!-- Name Field -->
      <div>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" />
        <p v-if="errors.name" class="error">{{ errors.name }}</p>
      </div>

      <!-- Email Field -->
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" />
        <p v-if="errors.email" class="error">{{ errors.email }}</p>
      </div>

      <!-- Password Field -->
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" />
        <p v-if="errors.password" class="error">{{ errors.password }}</p>
      </div>

      <!-- Submit Button -->
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>

    <!-- Success message -->
    <p v-if="formSubmitted">Form submitted successfully!</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const errors = ref({});
    const formSubmitted = ref(false);

    const validateForm = () => {
      errors.value = {};

      // Validate Name
      if (!name.value) {
        errors.value.name = 'Name cannot be empty';
      }

      // Validate Email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value || !emailPattern.test(email.value)) {
        errors.value.email = 'Invalid email format';
      }

      // Validate Password
      if (!password.value || password.value.length < 6) {
        errors.value.password = 'Password must be at least 6 characters long';
      }

      return Object.keys(errors.value).length === 0;
    };

    const handleSubmit = () => {
      formSubmitted.value = false;

      if (validateForm()) {
        // Handle form submission (e.g., send data to an API)
        formSubmitted.value = true;
        console.log({
          name: name.value,
          email: email.value,
          password: password.value,
        });

        // Reset the form after successful submission
        name.value = '';
        email.value = '';
        password.value = '';
      }
    };

    return {
      name,
      email,
      password,
      errors,
      formSubmitted,
      handleSubmit,
    };
  },
};
</script>

<style scoped>
.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 5px;
}
form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
button {
  background-color: #42b983;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
}
button:hover {
  background-color: #358768;
}
</style>
