<script setup>

// 1、导入 计算属性
import { computed, ref } from 'vue';

const list = ref([1, 2, 3, 4, 5, 6, 7, 8])

console.log(list)


// 2、执行函数 ，在回调参数中 return 基于 响应式数据 做 计算的值 ，用 变量接收
const computedList = computed(() => {
  // 做计算  根据一个数据 计算得到 一个新的数据
  return list.value.filter(item => item > 2)
})

// （1）页面初始 渲染 时 ， 默认会 自动触发 一次。


setTimeout(() => {
  list.value.push(9, 10)
}, 3000)

// （2）、当 所依赖的数据 发生了变化时 ，会再次 触发 重新计算。    （无限次数）


</script>

<template>
  <div>
    <div> 原始响应式 数组 - {{ list }}</div>
    <div> 计算属性 数组 - {{ computedList }} </div>
  </div>
</template>

