<template>
<div class="container">
  <div class="search">
    <el-image src="favicon.png" style="width: 100px; height: 100px;"></el-image>
    <el-input placeholder="热门话题搜索" style="width: 50%;"></el-input>
  </div>

  <div class="tab">
    <span class="tab-item" :class="{ 'active': t === active }" v-for="t in tabs" :key="t" @click="tabChange(t)">{{ t }}</span>
    <el-button type="primary" style="position: absolute; right: 20px;" @click="openModal">发起话题</el-button>
  </div>

  <el-dialog title="发起话题" :visible.sync="visible" style="overflow: hidden">
    <quillEditor v-model="content" style="box-sizing: border-box; width: 100%; height: calc(100% - 100px)"></quillEditor>
  </el-dialog>

  <div v-for="(i, index) in datas" class="item" :key="index">
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
import { quillEditor } from "vue-quill-editor"

export default {
  name: "discuss",
  components: {
    Chat, quillEditor
  },
  data() {
    return {
      icons: ['el-icon-share', 'el-icon-chat-dot-square'],
      visible: false,
      content: '',
      active: '热门话题',
      tabs: ['关注的人', '热门话题', '我参与的'],
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
    },
    tabChange(t) {
      this.active = t;
    },
    openModal() {
      this.visible = true;
    }
  }
}
</script>

<style scoped>
.search {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  margin: 50px auto 0;
  max-width: 1000px;
  min-width: 800px;
  padding-bottom: 100px;
  overflow: hidden;
}
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
.tab {
  margin-top: 20px;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: #fff;
  padding: 8px 16px;
  position: relative;
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


>>> .el-dialog {
  width: 80vw;
}
>>>.el-dialog__body {
  height: 60vh;
}

</style>