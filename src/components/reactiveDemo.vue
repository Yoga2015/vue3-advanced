<script setup>
// 1、导入 reactive 函数
import { reactive } from 'vue'

// 2、执行函数 ，并 传入 一个对象类型的参数 ，并让 变量state 接收
const state = reactive({
  count: 0
})

// 此时 变量state 就是 一个响应式对象

// 3、写一个 方法函数 设置 count 的 值 
const setCount = () => {

  state.count++

}

</script>

<template>
  <button @click="setCount"> {{ state.count }} </button>


</template>

<style scoped>
button {
  display: block;
  margin: 10px 0;
  background-color: yellow;
}
</style>
