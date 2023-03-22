<template>
<div class="container">
  <div v-if="topics.length > 0">
    <div v-if="!showDetail">
      <div class="topic-item" v-for="topic in topics" :key="topic.key">
        <el-image :src="topic.pic" fit="cover"></el-image>
        <div class="content">
          <h2 class="title" @click="toDetail(topic)">{{ topic.title }}</h2>
          <div class="desc">{{ topic.desc }}</div>
          <div class="info">
            <div>{{ topic.writer }}</div>
            <div>发布于 {{ topic.info }}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="detail-container" v-if="showDetail">
      <Detail :data="detail" @back="showDetail = false;"></Detail>
    </div>
  </div>
  <div v-if="topics.length === 0">
    <el-empty style="background: #fff;" description="该主题还没有任何帖子噢"></el-empty>
  </div>
</div>
</template>

<script>
import Detail from "@/components/page/blog/share/detail";

export default {
  props: ['topics'],
  data() {
    return {
      showDetail: false,
      detail: {},
    }
  },
  methods: {
    toDetail(data) {
      this.showDetail = !this.showDetail;
      this.detail = data;
    }
  },
  components: {
    Detail
  }
}
</script>

<style scoped>
.topic-item {
  background: #fff;
  display: flex;
  padding: 15px;
  margin-bottom: 20px;
}

.el-image {
  flex: none;
  margin-right: 20px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: rgba(256,256,256,.5);
}

.content {
  position: relative;
}

.title {
  cursor: pointer;
  margin: 0 0 20px;
}

.title:hover {
  color: #409EFF;
}

.desc {
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.info {
  position: absolute;
  bottom: 0;
  font-size: 14px;
  color: #999;
}

.detail-container {
  background: #fff;
}
</style>