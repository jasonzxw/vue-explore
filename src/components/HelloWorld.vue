<script setup>
import { onBeforeUpdate, ref } from 'vue'
import { useMouse ,} from '../hooks/useMouse'
defineProps({
  msg: String,
})

const count = ref(0)
const { x , y } = useMouse()


</script>

<template>
  <h1>{{ msg }}</h1>
  <h3> Mouse position is : {{ x }} , {{ y }}</h3>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
