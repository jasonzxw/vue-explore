<script setup>
import { inject, onBeforeUpdate, onUpdated , onMounted} from "vue";
const injectData = inject("name");
const injectCount = inject("count");

onMounted(() => console.log(`child mounted`))
onBeforeUpdate(() => console.log(`child before update`));
onUpdated(() => console.log(`child update`));
</script>

<template>
  <h3 @click="injectCount++">inject: {{ injectData }} {{ injectCount }}</h3>
</template>
