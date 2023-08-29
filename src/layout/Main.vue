<template>
  <div class="main">
    <router-link to="main">main</router-link>
    <router-link to="about">about</router-link>

    <router-view />
  </div>
</template>

<style scoped>
.main {
  flex: 1;
  border: 1px solid black;
}
</style>