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
        <div style="margin-bottom: 10px;">{{i.content}}</div>
        <div v-if="i.link" class="link">
          <el-image v-if="i.link.type === 'img'" :src="i.link.src" fit="contain" style="height: 100%;"></el-image>
        </div>
      </div>
    </div>
    <div class="like">
      <div class="link-item">
        <i class="el-icon-share" style="margin-right: 10px;"></i>
        <span>{{ i.shareCount || 0 }}</span>
      </div>
      <div class="link-item" @click="open(i)">
        <i class="el-icon-chat-dot-square" style="margin-right: 10px;"></i>
        <span>{{ i.comments.length }}</span>
      </div>
    </div>
    <Chat v-if="i.showChat" :comments="i.comments"></Chat>
  </div>
</div>
</template>

<script>
import Chat from './chat.vue';
export default {
  name: "discuss",
  components: {
    Chat
  },
  data() {
    return {
      icons: ['el-icon-share', 'el-icon-chat-dot-square'],
      datas: [
        {
          key: 1,
          avatar: '1.png',
          name: '宝妈',
          description: '怀胎十月，一朝分娩',
          time: '1小时前',
          content: '宝宝还有一个月就出生啦，好紧张好紧张',
          link: {
            type: 'img',
            src: '1.png'
          },
          showChat: true,
          shareCount: 3,
          comments: [
            {
              key: 2,
              avatar: '2.png',
              name: '宝爷',
              content: '要抱孙子咯',
              time: '30分钟前'
            },
            {
              key: 1,
              avatar: '1.png',
              name: '宝爸',
              content: '宝妈辛苦啦♥♥♥♥♥♥♥♥',
              time: '一小时前'
            }
          ]
        },
        {
          key: 2,
          avatar: '2.png',
          name: '肖可可',
          description: '小可小可小可小可',
          time: '3小时前',
          content: '要当妈妈啦哈哈哈哈哈~~~~~~~~~~~~',
          link: {
            type: 'img',
            src: '2.png'
          },
          showChat: true,
          shareCount: 2,
          comments: [
            {
              key: 1,
              avatar: '2.png',
              name: '大可可',
              content: '宝妈辛苦啦♥♥♥♥♥♥♥♥',
              time: '一小时前'
            }
          ]
        },
        {
          key: 3,
          avatar: '3.jpg',
          name: '小天使',
          description: '安吉尔',
          time: '3小时前',
          content: '准妈妈应该注意些啥>_<',
          link: {
            type: 'img',
            src: '3.jpg'
          },
          showChat: true,
          shareCount: 2,
          comments: [
            {
              key: 1,
              avatar: '3.jpg',
              name: '大恶魔',
              content: '多喝热水嗷，不能吃辣',
              time: '一小时前'
            }
          ]
        }
      ],
    }
  },
  methods: {
    open(i) {
      i.showChat = !i.showChat;
    }
  }
}
</script>

<style scoped>
.item {
  border-radius: 5px;
  background: #fff;
  padding: 25px;
  padding-bottom: 0;
  margin-bottom: 10px;
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
  max-height: 200px;
}

.like {
  margin-top: 10px;
  border-top: 1px solid #eee;
  display: flex;
  padding: 10px 0;
  justify-content: space-around;
  align-items: center;
  font-size: 16px;
}

.link-item {
  flex: 1;
  cursor: pointer;
  text-align: center;
}

</style>