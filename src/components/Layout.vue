<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <router-view></router-view>

    <div class="ask">
      联系专家
    </div>
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

.ask {
  cursor: pointer;
  font-size: 16px;
  background: #fff;
  padding: 20px 10px;
  width: 20px;
  text-align: center;
  position: fixed;
  font-weight: bold;
  right: 0;
  bottom: 100px;
  box-shadow: 0 0 2px 3px #ddd;
}
</style>