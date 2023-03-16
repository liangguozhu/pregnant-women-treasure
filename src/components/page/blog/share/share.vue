<template>
<div class="container">
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
    <Detail :data="detail"></Detail>
  </div>
</div>
</template>

<script>
import Detail from "@/components/page/blog/share/detail";

export default {
  data() {
    return {
      showDetail: false,
      detail: {},
      topics: [
        {
          key: 1,
          title: '准妈妈保养攻略，不丢好身材，不失好皮肤',
          desc: '怀孕应该坚持护肤，因为在怀孕期间，准妈妈的荷尔蒙分泌会有很大的变化。 如果此时护理不当，女性皮肤会变得营养不足，抵抗力会严重降低，皮肤质量也会变差。 怀孕是最好的护理时间，如果错过了，往往很难补救之后。 怀孕期间，皮肤护理是延缓皮肤衰老最重要的阶段。',
          pic: 'to1.jpg',
          info: '一小时前',
          writer: '美容护肤旗舰店'
        },
        {
          key: 2,
          title: '怀孕期间吃什么？这里有一份食谱！',
          desc: '孕期营养对母子双方的近期和远期健康都会产生至关重要的影响，孕期营养主要是保障孕妇的身体健康，保证胎儿正常生长发育，有利于产后的母乳喂养，有利于分娩和产后的身体恢复，还能潜移默化影响较大的婴儿对辅食的接受和后续多样化辅食结构的建立。\n' +
              '孕妇营养缺乏会导致流产、早产、死胎、胎儿发育不良、畸形、低体重，围产儿死亡率比较高、脑发育受损。营养过剩会导致巨大儿、难产，产后大出血的风险增加，远期增加子代发生心脑血管疾病及糖尿病的几率。妊娠期营养不良，母体并发症有妊娠期高血压疾病、妊娠期糖尿病、妊娠期贫血，产后身体恢复会受到很大影响。',
          pic: 'to2.jpg',
          info: '两小时前',
          writer: '中华小当家的母亲'
        }
      ]
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