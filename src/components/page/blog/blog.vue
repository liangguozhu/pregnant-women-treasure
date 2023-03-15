<template>
<div class="blog-container">
  <div class="tab">
    <span class="tab-item" :class="{ 'active': t === active }" v-for="t in tabs" :key="t" @click="tabChange(t)">{{ t }}</span>
  </div>

  <Discuss v-if="active === '话题讨论'"></Discuss>
  <Share v-if="active === '经验分享'"></Share>
</div>
</template>

<script>
import Discuss from "@/components/page/blog/discuss/discuss";
import Share from "@/components/page/blog/share/share"

export default {
  name: "blog",
  components: {
    Discuss, Share
  },
  data() {
    return {
      tabs: ['话题讨论', '经验分享'],
      active: '话题讨论'
    }
  },
  methods: {
    tabChange(t) {
      this.active = t;
    }
  }
}
</script>

<style scoped>
.blog-container {
  margin: 0 auto;
  width: 60%;
  min-width: 800px;
  padding-bottom: 100px;
  overflow: hidden;
}
.tab {
  margin-top: 50px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding: 8px 16px;
}

.tab-item {
  margin: 0 15px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

.tab-item:hover {
  background: rgba(238,238,238,.8);
}

.tab-item.active {
  font-weight: bold;
  border-bottom: 2px solid #333;
}

</style>