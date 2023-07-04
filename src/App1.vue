<!-- 开关：容许在script书写组合式API -->
<script setup>

// import reactiveDemo from './components/reactiveDemo.vue';
// import refDemo from './components/refDemo.vue';
// import computedDemo from './components/computedDemo.vue';
// import watchRefOneDemo from './components/watch-RefOneDemo.vue';
// import watchRefMultiDemo from './components/watch-RefMultiDemo.vue';
// import watchRefOneImmediateDemo from './components/watch-RefOne-immediateDemo.vue';
// import watchRefOneDeepDemo from './components/watch-RefOne-deepDemo.vue';
// import watchAccurateListen from './components/watch-accurateListen.vue';

import onMountedDemo from './components/onMountedDemo.vue';

// console.log('setup', this)

// const message = 'this is message';
// const logMessage = () => {
//   console.log(message)
// }

</script>

<template>
  <!-- 不再要求唯一根元素 -->
  <!-- <div>{{ message }}</div> -->
  <!-- <button @click="logMessage"> 点击会控制台输出</button>-->

  <!-- <reactiveDemo></reactiveDemo> -->
  <!-- <refDemo></refDemo> -->
  <!-- <computedDemo></computedDemo> -->
  <!-- <watchRefOneDemo></watchRefOneDemo> -->
  <!-- <watchRefMultiDemo></watchRefMultiDemo> -->
  <!-- <watchRefOneImmediateDemo></watchRefOneImmediateDemo> -->
  <!-- <watchRefOneDeepDemo></watchRefOneDeepDemo> -->
  <!-- <watchAccurateListen></watchAccurateListen> -->

  <onMountedDemo></onMountedDemo>
  
</template>

<style scoped>
div {
  display: inline-block;
  width: 300px;
  height: 200px;
  background-color: pink;
}
</style>
