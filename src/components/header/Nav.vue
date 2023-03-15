<template>
<div class="nav-container">
  <el-button :class="{ active: activePath === '/home' }" type="text" @click="linkTo('/home')">首页</el-button>
  <el-button :class="{ active: activePath === '/blog' }" type="text" @click="linkTo('/blog')">话题</el-button>
  <el-button :class="{ active: activePath === '/store' }" type="text" @click="linkTo('/store')">孕妈好物</el-button>
</div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {
      activePath: 'home'
    }
  },
  created() {
    this.activePath = this.$route.path;
  },
  methods: {
    linkTo(path) {
      this.activePath = path;
      this.$router.push(path);
    }
  }
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

.active {
  background: #e539ba;
  color: #409EFF;
  font-weight: bold;
  font-size: 16px;
}
</style>