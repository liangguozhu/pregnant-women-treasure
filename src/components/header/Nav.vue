<template>
<div class="nav-container">
  <el-button type="text">首页</el-button>
  <el-button type="text">畅所欲言</el-button>
  <el-button type="text">取经之道</el-button>
  <el-button type="text">孕妈好物</el-button>
</div>
</template>

<script>
export default {
  name: "Nav"
}
</script>

<style scoped>
.nav-container {
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