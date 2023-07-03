<script setup>

// 1、导入 watch
import { watch, ref } from "vue"

const state = ref({
  count: 0
})

const changeStateByCount = () => {
  // 直接修改 count ，默认不会 触发回调
  state.value.count++
}

// 2、调用 watch 深度侦听
watch(state, () => {
  console.log(`state 变化了 `);
}, {
  deep: true
})

</script>

<template>
  <div>
    <p>{{ state.count }}</p>
    <button @click="changeStateByCount">通过 count 修改</button>
  </div>
</template>