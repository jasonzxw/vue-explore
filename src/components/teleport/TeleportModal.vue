<script setup>
import { ref } from "vue";
const open = ref(false);
</script>

<template>
    <button @click="open = true">Open Modal</button>

    <Teleport to="body">
      <div v-if="open" class="modal">
        <div class="container">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </div>
    </Teleport>
</template>

<style scoped>
.modal {
  position: fixed;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.45);
  width: 100%;
  height: 100%;
  top: 0px;
}
.modal .container{
    position: relative;
    background: #fff;
    width: 50%;
    height: 80%;
    border-radius: 5px;
    margin: 5% auto;
}
</style>