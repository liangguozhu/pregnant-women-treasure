<template>
    <div class="container">
        <el-input v-model="comment" style="margin-bottom: 10px;">
            <template slot="append">
                <el-button>发表评论</el-button>
            </template>
        </el-input>

        <div class="comment-item" v-for="i in comments" :key="i.key">
            <el-avatar class="avatar" :size="30" :src="i.avatar"></el-avatar>
            <div style="margin-left: 10px; flex: 1;">
                <div style="font-size: 14px;">{{ i.name }}: <span style="color: #333;">{{ i.content }}</span></div>
                <div style="font-size: 12px; color: #666;">{{ i.time }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Chat',
    props: ['comments'],
    data() {
        return {
            comment: ''
        }
    }
}
</script>

<style scoped>

.comment-item {
    display: flex;
    padding: 10px 20px;
}
.avatar {
    flex: none;
}
</style>