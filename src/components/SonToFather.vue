<script setup>

// 2、通过 defineEmits 编译器宏函数 生成 emit（） 方法
const emit = defineEmits(['get-message', 'get-Count'])

const SendMsg = () => {
  // 3、触发 自定义事件 传数据 给父组件
  emit('get-message', 'this is son msg')
}

const SendCount = () => {
  // 3、触发 自定义事件 传数据 给父组件
  emit('get-Count', 'this is son count')
}

</script>

<template>
  <div>
    <div class="son">

      <div>子组件Son</div>
      <button @click="SendMsg">在 子组件 中 点击 触发 自定义事件1</button>
      <button @click="SendCount">在 子组件 中 点击 触发 自定义事件2</button>

    </div>
  </div>
</template>


<style scoped lang="less">
.son {
  margin: 20px;

  button {
    display: block;
  }
}
</style>