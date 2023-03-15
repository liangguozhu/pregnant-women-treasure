<template>
<div class="container">
  <div v-for="i in datas" class="item" :key="i.key">
    <div class="main">
      <el-avatar :size="50" :src="i.avatar"></el-avatar>
      <div class="content">
        <div style="font-weight: bold;">{{i.name}}</div>
        <div class="desc">
          <span style="margin-right: 10px;">{{i.time}}</span>
          <span>{{i.description}}</span>
        </div>
        <div>{{i.content}}</div>
        <div v-if="i.link" class="link">
          <el-image v-if="i.link.type === 'img'" :src="i.link.src" fit="contain"></el-image>
        </div>
      </div>
    </div>
    <div class="like">
      <div v-for="j in icons" :key="j">
        <i :class="j" style="margin-right: 10px;"></i>
        <span>{{ count }}</span>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "discuss",
  data() {
    return {
      icons: ['el-icon-share', 'el-icon-chat-dot-square'],
      datas: [
        {
          key: 1,
          avatar: '',
          name: '宝妈',
          description: '111111111111',
          time: '1小时前',
          content: '1111111111111',
          link: {
            type: 'img',
            src: '@/assets/images/home.png'
          }
        }
      ],
    }
  },
  computed: {
    count() {
      return Math.floor(Math.random() * 100);
    }
  }
}
</script>

<style scoped>
.item {
  border-radius: 5px;
  background: #fff;
  padding: 25px;
}

.main {
  display: flex;
  flex-flow: row wrap;
}

.el-avatar {
  flex: none;
  margin-right: 15px;
}

.content {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: stretch;
}

.desc {
  color: #666;
  margin: 2px 0;
  font-size: 14px;
}

.link {
  min-height: 100px;
}

.like {
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
}

</style>