/** watch & computed 区别*/
<script setup>
import { ref , watch , computed ,watchEffect , defineExpose} from 'vue'
const count = ref(1);
const data = ref(2)

const arr = ref([1,2])

function add(){
    arr.value.push(1)
}

// 必须定义expose ，组件ref可访问的变量
defineExpose({
    count,
    add
})
// ref 形式，新旧值一样，不能获得旧值
watch(arr ,((cur,pre) => console.log(cur,pre)),{deep: true})
// 写错getter形式可以避免不能获得旧值
watch(() => [... arr.value] ,((cur,pre) => console.log(cur,pre)),{deep: true})
let total = computed(()=> count.value + data.value)
watch(count ,(cur,pre) => console.log(cur,pre))
watchEffect(() => console.log(count.value))
</script>

<template>
    <div>
        <div>Dep</div>
        <div @click='add'>{{ arr }}</div>
        <div @click="count++"> {{ count }}</div>
        <div>total: {{ total }}</div>
    </div>
</template>