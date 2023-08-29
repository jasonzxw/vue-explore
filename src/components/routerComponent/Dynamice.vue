<script setup>
import { useRoute , onBeforeRouteUpdate} from 'vue-router'
import { watch , onMounted ,} from 'vue'

const route = useRoute();

watch(() => route.params , (to,from) => console.log(to,from))
onMounted(() => console.log(`load dynamic route`))
onBeforeRouteUpdate((to,from) => {
    console.log(to,from)
})
    
</script>
<template>
    <div>
        dynamic: {{ route.params.id }}
    </div>
</template>