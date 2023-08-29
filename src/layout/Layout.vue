<template>
    <div class="layout">
        <Sider />
        <div class="content">
            <Header />
            <Main />
        </div>
    </div>
</template>

<script setup>
import Header from './Header.vue';
import Main from './Main.vue';
import Sider from './Sider.vue';
</script>

<style scoped>
.layout{
    display: flex;
    flex: 1;
    min-height: 100vh;
}
.layout .content{
    flex: 1;
    display: flex;
    flex-direction: column;
}
</style>
