<!--
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-24 10:26:50
 * @FilePath: \vue-explore\src\App.vue
-->
<script setup>
import HelloWorld from './components/HelloWorld.vue'
import SlotChild from './components/slot/SlotChild.vue';
import TeleportModal from './components/teleport/TeleportModal.vue';
</script>

<template>
  <HelloWorld msg="Vite + Vue" />
  <SlotChild>
    <template #header>
      <h1>header</h1>
    </template>
    <template #main>
      <h2>main</h2>
    </template>
    <template #footer="data">
      <h3>footer</h3>
      <h3>{{ data }}</h3>
    </template>
  </SlotChild>
  <TeleportModal />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
