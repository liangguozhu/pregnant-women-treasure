<template>
    <div>
        <div v-if="!isChat" class="container">
            <div class="search">
                <el-image src="favicon.png" style="width: 100px; height: 100px;"></el-image>
                <el-input placeholder="搜索专家" style="width: 50%;"></el-input>
            </div>

            <div class="tab">
                <span class="tab-item" :class="{ 'active': t === active }" v-for="t in tabs" :key="t" @click="tabChange(t)">{{ t }}</span>
            </div>

            <div class="experts" v-for="(item, i) in experts" :key="i">
                <div class="expert">
                    <el-image class="avatar" src="https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png"></el-image>
                    <div class="info">
                        <div style="font-size: 20px; font-weight: bold;">{{ item.name }}</div>
                        <div>{{ item.desc }}</div>
                        <div style="font-size: 14px;">{{ item.info }}</div>
                    </div>
                    <el-button type="success" class="btn" @click="contact(item)">联系专家</el-button>
                </div>
            </div>
        </div>
        <div v-if="isChat" class="chat">
            <div class="chat-window">
                <div class="title">
                    <i @click="back" class="el-icon-arrow-left" style="position: absolute; left: 20px; top: 17px; width: 20px; height: 20px; cursor: pointer;"></i>
                    <span>{{ current.name }}</span>
                </div>
                <div class="message-content">
                    <msg v-for="(i, index) in msgs" :key="index" :dir="i.dir" :content="i.content"></msg>
                </div>
            </div>
            <div class="input-box">
                <textarea class="input-item" v-model="msg" type="text" placeholder="请输入..."></textarea>
                <div class="send" @click="ask">发 送</div>
            </div>
        </div>
    </div>
</template>

<script>
import Msg from "@/components/common/msg";

export default {
    name: 'expert',
    components: {
        Msg
    },
    data() {
        return {
            isChat: false,
            active: '',
            tabs: [],
            experts: [],
            current: {},
            msg: '',
            msgs: [
                { dir: true, content: '您好，请问有什么可以帮您？' }
            ],
            data: {
                '膳食专家': [
                    { name: '王超', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '张三', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '李四', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '赵六', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '田七', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '朱枸杞', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                ],
                '产前护理专家': [
                    { name: '马腾寿', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '田健', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '石阡', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '石磊潇', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '赵青', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '罗峰', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '叶天', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                ],
                '月子调养专家': [
                    { name: '姜黄春', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '郝油将', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '都江氨', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '时厂度', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                    { name: '朱寿春', desc: '首都医科大学妇科主治医师', info: '拥有八年工作经验，拥有丰富的孕妇照顾经验' },
                ]
            }
        }
    },
    created() {
        this.tabs = Object.keys(this.data);
        this.active = this.tabs[0];
        this.experts = this.data[this.active];
    },
    methods: {
        ask() {
            this.msgs.push({ key: this.msgs.length, dir: false, content: this.msg });
            this.msg = '';
        },
        contact(item) {
            this.current = item;
            this.isChat = true;
        },
        tabChange(t) {
            this.active = t;
            this.experts = this.data[this.active];
        },
        back() {
            this.isChat = false;
        }
    }
}
</script>

<style scoped>
.message-content {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px;
}
.send {
    height: 40px;
    flex: none;
    background: #409eff;
    text-align: center;
    color: #fff;
    line-height: 40px;
    font-size: 16px;
    cursor:pointer;
}
.input-item {
    display: block;
    flex: 1;
    padding: 10px;
    width: 100%;
    border: none;
    box-sizing: border-box;
    outline: none;
    border-bottom: 1px solid #ccc;
    border-top: 1px solid #ccc;
    resize: none;
}
.chat-window {
    display: flex;
    flex-flow: column nowrap;
    flex: 0 0 70%;
}
.title {
    flex: none;
    position: relative;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-bottom: 1px solid #ccc;
}
.input-box {
    flex: 0 0 30%;
    display: flex;
    flex-flow: column nowrap;
}
.chat {
    margin: 20px auto;
    height: calc(100vh - 100px);
    background: #fff;
    display: flex;
    flex-flow: column nowrap;
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
.search {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  margin: 50px auto 0;
  max-width: 800px;
  min-width: 600px;
  padding-bottom: 100px;
  overflow: hidden;
}
.experts {
    background: #fff;
    margin: 20px 0;
    padding: 15px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px 1px #eee;
}
.expert {
    display: flex;
    align-items: center;
}
.info {
    flex: 1;
    padding: 20px 0;
    font-size: 16px;
    color: #666;
}
.avatar.el-image {
    flex: none;
    margin-right: 30px;
}
.btn {
    height: 60px;
    flex: none;
}
</style>