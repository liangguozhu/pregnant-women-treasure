<template>
  <div class="container">
      <el-button type="text" >登录</el-button>
      <el-button type="text" >注册</el-button>
  </div>
</template>

<script>
export default {
  name: "User"
}
</script>

<style scoped>
.container {
  height: 60px;
  display: flex;
  align-items: stretch;
}

.el-button {
  padding: 0 15px;
  color: #fff;
}
.el-button:hover {
  background: #e539ba;
}
</style>