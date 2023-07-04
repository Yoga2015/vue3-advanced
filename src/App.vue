<script setup>
import { ref, onMounted } from 'vue';
import refIdentifierVue from './components/ref-identifier.vue';

// 1、调用 ref 函数 生成一个 ref对象(容器)
const H1Ref = ref(null)   // 既然 生成的是对象 ，先用 null 占个位置
const comRef = ref(null)

// 3、 组件 挂载完毕 之后 才能获取
onMounted(() => {
  console.log(H1Ref.value);
  console.log(comRef.value);
})

</script>

<template>
  <div class="father">

    <!-- 2、 通过 ref 标识 绑定 ref对象 -->
    <h1 ref="H1Ref">父组件App -- 我是 Dom 标签 h1</h1>

    <refIdentifierVue ref="comRef"></refIdentifierVue>

  </div>
</template>

<style scoped>
.father {
  margin: 10px auto;
  width: 500px;
  height: 300px;
  border: 1px solid black;
}
</style>  
