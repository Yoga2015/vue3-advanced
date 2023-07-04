<script setup>

// 2、defineProps 接收数据  (defineProps 编译器宏函数 无需导入 直接使用)

// defineProps({
//   message: String
// })

const props = defineProps({
  message: String,
  count: Number
})

console.log(props);   // 也在控制台看看

</script>

<template>
  <div class="son">

    <h3>子组件Son</h3>

    <!-- 3、仅用来展示 传递过来的数据 -->
    <div> 父组件 传入 的 数据 - {{ message }} -- {{ count }} </div>

  </div>
</template>

<style scoped>
.son {
  margin: 20px;
}
</style>