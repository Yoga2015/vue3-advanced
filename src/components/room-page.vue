<script setup>

import { provide, ref } from 'vue';

import RoomMsgItem from './room-msg-item.vue'

// 组件嵌套关系
// RoomPage -> RoomMsgItem -> RoomMsgComment

// 1、顶层组件 通过 provide()函数 提供数据
provide('data-key', 'this is room data')

// 3、传递 响应式数据
const count = ref(0)

provide('count-key', count)

setTimeout(() => {
  count.value = 999
}, 3000)

// 5、传递方法 (谁的数据谁负责修改)
const setCount = () => { 
  count.value++
}

provide('setCount-key',setCount)


</script>

<template>
  <div class="page">
    顶层组件

    <RoomMsgItem></RoomMsgItem>

  </div>
</template>