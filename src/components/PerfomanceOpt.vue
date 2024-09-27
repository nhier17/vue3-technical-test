//performance optimization

<template>
  <div>
    <ul>
      <!-- Using v-memo for memoization of unchanged elements -->
      <li v-for="item in items" :key="item.id" v-memo="[item.id]">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  // Use Object.freeze() if the array is static and won't change
  created() {
    this.items = Object.freeze(this.items);
  },
};
</script>


//Stable :key: We keep the unique key item.id, assuming it's a stable and unique identifier. If item.id is not unique, consider a different stable key.

//v-memo Directive: The v-memo="[item.id]" memoizes the rendering of each list item. This helps Vue avoid re-rendering list items that haven't changed, improving performance when dealing with large lists or frequently changing data.

//Use Object.freeze: In the created lifecycle hook, we use Object.freeze(this.items) to make the items array immutable. This reduces the reactivity overhead and prevents Vue from tracking changes in the list unnecessarily, which can improve performance if the list doesnt change frequently.