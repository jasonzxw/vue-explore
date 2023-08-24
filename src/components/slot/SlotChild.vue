<script setup>
import { reactive } from 'vue'

const obj = reactive({count: 1})
</script>
<template>
    <slot name="header"></slot>
    <slot name="main"></slot>
    <slot name="footer" :data="obj"></slot>

</template>