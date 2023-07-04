<script setup>
import roomMsgComment from './room-msg-comment.vue';
</script>

<template>
  <div class="item">
    中间层组件

    <roomMsgComment></roomMsgComment>
  </div>
</template>

<style scoped>
.item {
  margin: 30px;
}
</style>