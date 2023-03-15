<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <router-view></router-view>
  </el-main>
</el-container>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
}
</script>

<style scoped>
.el-header {
  padding: 0;
}

.el-main {
  padding: 0;
  background: #fff0f7;
  height: calc(100vh - 60px);
  overflow-y: auto;
  overflow-x: hidden;
}
</style>