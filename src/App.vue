<!--
 * @author: jason_zuo
 * @LastEditors: jason_zuo
 * @LastEditTime: 2023-08-24 11:04:35
 * @FilePath: \vue-explore\src\App.vue
-->
<script setup>
import { ref , computed , provide , onBeforeUpdate , onUpdated , onMounted} from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import SlotChild from './components/slot/SlotChild.vue';
import TeleportModal from './components/teleport/TeleportModal.vue';
import Injectparent from './components/inject/Injectparent.vue';
import Vmodel from './components/vmodel/Vmodel.vue';
import Dep from './components/dep/Dep.vue';
const count = ref(1)
provide('count' ,count)

const message = ref('hi')

onMounted(() => console.log(`parent mounted`))
onBeforeUpdate(() => console.log(`parent before update`));
onUpdated(() => console.log(`parent update`))
</script>

<template>
  <Dep />
  <button @click="count++"> inject count {{ count }}</button>
  <Vmodel v-model:message="message"/><span>{{ message }}</span>
  <HelloWorld msg="Vite + Vue" />
  <Injectparent />
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
