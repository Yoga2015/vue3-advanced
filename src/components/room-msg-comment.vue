<script setup>

import { inject } from 'vue';

// 2、底层组件 通过 inject()函数 获取数据 , 并赋值给变量roomData
const roomData = inject('data-key')

// 4、接收 响应式数据
const countData = inject('count-key')

// 6、接收方法
const setCountfn =  inject('setCount-key')

</script>

<template>
  <div class="comment">
    底层组件
    <div>
      来自顶层组件中的数据为 ： {{ roomData }}
    </div>
    <div>
      来自顶层组件中的响应式数据 ：{{ countData }}
    </div>

    <button @click="setCountfn">修改顶层组件的数据count</button>
  </div>
</template>

<style scoped>
.comment {
  margin: 30px;
}
</style>