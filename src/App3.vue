<script setup>
import { ref } from 'vue';

//  setup 语法糖下 局部组件， 无需注册， 直接可以使用
import SonToFather from './components/SonToFather.vue'

const getMessage = (msg) => {
  console.log(msg);
}

const getCount = (count) => {
  console.log(count);
}

</script>

<template>
  <div class="father">

    <h2>父组件App</h2>

    <!-- 1、绑定 自定义事件 -->
    <SonToFather @get-message="getMessage" @get-Count="getCount">
    </SonToFather>

  </div>
</template>

<style scoped>
.father {
  margin: 10px auto;
  width: 500px;
  height: 400px;
  border: 1px solid black;
}
</style>
