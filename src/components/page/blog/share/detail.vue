<template>
<div class="container">
  <el-button plain @click="back">返回</el-button>
  <h2>{{ data.title }}</h2>
  <div class="info">{{ data.writer }} 发布于 {{ data.info }}</div>
  <el-image :src="data.pic" fit="scale-down" style="width: 100%; height: 300px; text-align: center;"></el-image>
  <pre class="content">
    {{ data.content }}
  </pre>
</div>
</template>

<script>
export default {
  name: "detail",
  props: ['data'],
  methods: {
    back() {
      this.$emit('back');
    }
  }
}
</script>

<style scoped>
.container {
  padding: 15px;
  min-height: 300px;
}
h2 {
  text-align: center;
}
.info {
  text-align: center;
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}
.content {
  overflow-wrap: break-word;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>