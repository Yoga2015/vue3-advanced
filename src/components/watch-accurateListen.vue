<script setup>

import { ref, watch } from 'vue'

const state = ref({
  name: 'walking',
  age: 20
})

const changeName = () => {
  // 修改 name
  state.value.name = 'walking - teacher'
}

const changeAge = () => {
  // 修改 age
  state.value.age = 60
}

// 精准 侦听 某个具体属性
watch(

  // 1、侦听谁？ 侦听 name
  () => state.value.name,

  // 2、侦听 的 name 发生变化后，执行的回调函数
  () => {
    console.log('name 变化了');
  }

)

</script>

<template>
  <div>
    <div>当前 name -- {{ state.name }}</div>
    <div>当前 age -- {{ state.age }}</div>
    <div>
      <button @click="changeName">修改 name</button>
      <button @click="changeAge">修改 age</button>
    </div>
  </div>
</template>