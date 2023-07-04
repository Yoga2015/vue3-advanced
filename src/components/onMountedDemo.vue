<script setup>
// 生命周期函数的使用

// 1、引入 函数
import { onMounted } from 'vue';

// 2、执行函数 传入回调        一个 生命周期函数 可以执行多次
onMounted(() => {
  console.log('组件挂载完毕 onMounted 执行了 1');
  // 别人编写的，好多逻辑
})

onMounted(() => {
  console.log('组件挂载完毕 onMounted 执行了 2');
  // 自己编写的， 补充逻辑
})

onMounted(() => {
  console.log('组件挂载完毕 onMounted 执行了 3');
})

</script>

<template>
  <div>

  </div>
</template>