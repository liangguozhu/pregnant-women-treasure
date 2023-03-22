<template>
<el-container>
  <el-header>
    <Header></Header>
  </el-header>
  <el-main>
    <router-view></router-view>

    <div class="chat" :class="showChatBox ? 'show' : 'hide'">
      <div class="ask" @click="contact">
        联系客服
      </div>
      <div class="chat-box">
        <div class="chat-header">
          在线客服
          <i class="el-icon-close" style="float: right; cursor: pointer;" @click="contact"></i>
        </div>

        <div class="chat-body">
          <div class="message-content">
            <msg v-for="i in msgs" :key="i.key" :dir="i.dir" :content="i.content"></msg>
          </div>
          <div class="message-box">
            <el-input placeholder="您可以直接输入问题向客服提问" v-model="msg">
              <template slot="append"><span @click="ask" style="cursor:pointer;">发送</span></template>
            </el-input>
          </div>
        </div>
      </div>
    </div>
  </el-main>
</el-container>
</template>

<script>
import Header from "@/components/Header";
import Msg from "@/components/common/msg";

export default {
  components: {
    Header,
    Msg
  },
  data() {
    return {
      showChatBox: false,
      msg: '',
      msgs: [
        { key: 0, dir: true, content: 'Hi，请问有什么可以帮您~' }
      ]
    }
  },
  methods: {
    contact() {
      this.showChatBox = !this.showChatBox
    },
    ask() {
      this.msgs.push({ key: this.msgs.length, dir: false, content: this.msg });
      this.msg = '';
      console.log('触发')
    }
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

.chat {
  display: flex;
  align-items: flex-end;
  position: fixed;
  right: -500px;
  bottom: 50px;
}

.ask {
  margin-bottom: 40px;
  cursor: pointer;
  font-size: 16px;
  background: #fff;
  padding: 20px 10px;
  width: 20px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 0 2px 3px #ddd;
  border-radius: 3px;
}

.chat-box {
  width: 500px;
  height: 500px;
  background: #fff;
}

.chat-header {
  box-sizing: border-box;
  padding: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  box-shadow: 0 1px 1px 1px #eee;
}

.chat-body {
  box-sizing: border-box;
  padding: 10px;
  height: 449px;
  display: flex;
  flex-flow: column nowrap;
}

.message-content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
}

.message-content::-webkit-scrollbar {
  display: none;
}

.message-box {
  flex: none;
  width: 100%;
}

@keyframes chat-box-display {
  from { right: -500px; }
  to { right: 0; }
}
@keyframes chat-box-hide {
  from { right: 0; }
  to { right: -500px; }
}
.show {
  animation: chat-box-display 200ms linear forwards;
}
.hide {
  animation: chat-box-hide 200ms linear forwards;
}
</style>