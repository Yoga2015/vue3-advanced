<script setup>

// 1、导入 watch
import { watch, ref } from "vue"

const count = ref(0)

const setCount = () => {
  count.value++
}

const name = ref('walking')

const setName = () => {
  name.value = 'walking is boss'
}


// 2、调用 watch 侦听 变化     （侦听  多个 响应式数据 ）
// 侦听 count 、name 数据，当 count 或者 name 数据 一发生变化 ，后面的 回调函数 都会 自动执行
// ref对象 不需要 .value
watch([count, name], ([newCount, newName], [oldCount, oldName]) => {
  console.log(`count 或者 name 发生了 变化 `, [newCount, newName], [oldCount, oldName]);
}, { immediate: true })

</script>


<template>
  <div>

    <p>count : {{ count }}</p>
    <button @click="setCount">点击+1</button>

    <p>name : {{ name }}</p>
    <button @click="setName">点击改变名称</button>

  </div>
</template>