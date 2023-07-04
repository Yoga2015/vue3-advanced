<script setup>
import { Ref } from 'vue';

const name = ref('testName')

const setName = () => {
  name.value = 'test new name'
}

defineExpose({
  name,
  setName
})

</script>

<template>
  <div class="refIdentifier">
    我 是 ref-identifier组件
  </div>

  <p>{{ name }}</p>
  <button @click="setName">点击改变名称</button>
</template>

<style>
.refIdentifier {
  margin: 10px;
}
</style>