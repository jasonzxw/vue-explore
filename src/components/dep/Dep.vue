/** watch & computed 区别*/
<script setup>
import { ref , watch , computed } from 'vue'
const count = ref(1);
const data = ref(2)

let total = computed(()=> count.value + data.value)
watch(count ,(cur,pre) => console.log(cur,pre))
</script>

<template>
    <div>
        <div>Dep</div>
        <div @click="count++"> {{ count }}</div>
        <div>total: {{ total }}</div>
    </div>
</template>