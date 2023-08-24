<script setup>
import { defineEmits , defineProps} from 'vue'
defineProps({
    message: String
})
defineEmits(['update:message'])
</script>

<template>
    <input :value="message" @input="$emit('update:message',$event.target.value)"/>
</template>