<template>
<div>
  <div class="msg">
    <el-avatar :class="dir ? 'f-l' : 'f-r'" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
    <div :class="dir ? 'f-l' : 'f-r'" class="content">{{ content }}</div>
  </div>
</div>
</template>

<script>
export default {
  name: "msg",
  props: ['dir', 'content'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.f-l {
  float: left;
}
.f-r {
  float: right;
  background: #6ff12f!important;
}

.msg {
  overflow: hidden;
  margin-bottom: 20px;
}
.el-avatar {
  display: inline-block;
  width: 30px;
  height: 30px;
}
.content {
  display: inline-block;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 0 10px;
  background: #f1f3f0;
  margin: 0 10px;
  max-width: calc(100% - 50px);
  line-height: 30px;
  box-shadow: 1px 1px 1px 1px rgba(0,0,0,.1);
}
</style>