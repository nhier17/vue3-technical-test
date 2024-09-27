//unit test

<template>
<div>
<button @click="Increment">Increment</button>

<p>{{ count }}</p>
</div>
</template>

<script>
export default {
    data() {
    return {
    count: 0
    };
    
    },
    methods: {
    Increment() {
        this.count++;
    }
    }
} 

</script>