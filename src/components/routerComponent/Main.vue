<template>
    <div>main</div>    
</template>

<script setup>
import { onBeforeRouteLeave } from 'vue-router'
onBeforeRouteLeave((to,from) => {
    console.log(to,from)
})
</script>