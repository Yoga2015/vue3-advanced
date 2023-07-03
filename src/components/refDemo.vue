<script setup>
// 1、导入 ref() 函数
import { ref } from 'vue';

// 2、 执行函数 , 并传入参数：简单类型 或者 复杂类型 , 变量sum 接收
const sum = ref(999)

console.log(sum); // RefImpl

// 3、 写一个方法函数 设置 sum 的值
const setSum = () => {

  // 脚本区域 修改 ref 产生 的响应式对象数据 必须通过 .value属性
  sum.value++

}

</script>

<template>
  <div class="refDemo">
    <div>{{ sum }}</div>
    <button @click="setSum">+1</button>
  </div>
</template>

<style scoped>
.refDemo {
  margin: 10px 0;
  width: 100px;
  height: 100px;
  background-color: yellowgreen;
}
</style>