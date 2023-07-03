<script setup>

// 1、导入 watch
import { watch, ref } from "vue"

const count = ref(0)

const setCount = () => {
  count.value++
}

// 2、调用 watch 侦听 变化     （侦听  一个 响应式数据 ）
// 侦听 count 数据，当 count 数据 一发生变化，count 数据 后面的 回调函数 就会 自动执行
// ref对象 不需要 .value
watch(count, (newValue, oldValue) => {
  console.log(`count 变化了 `);
}, {
  // immediate 属性：可以用来设置 初始一挂载 就自动触发侦听, 执行回调一次, 响应式数据变化 之后 继续执行回调。
  immediate: true,
  deep: true
})

</script>


<template>
  <div>
    <p>{{ count }}</p>
    <button @click="setCount">点击+1</button>
  </div>
</template>