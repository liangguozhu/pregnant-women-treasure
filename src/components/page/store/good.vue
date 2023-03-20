<template>
    <div class="container">
        <el-image :src="data.img"></el-image>
        <div class="price">￥ {{ data.price }}</div>
        <div class="title">{{ data.name }}</div>
    </div>
</template>

<script>
export default {
    name: 'good',
    props: ['data'],
    data() {
        return {

        }
    }
}
</script>

<style scoped>
.container {
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    height: 400px;
    overflow: hidden;
    color: #666;
    border: 1px solid transparent;
}
.container:hover {
    border: 1px solid #eee;
}
.title {
    font-size: 14px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    word-break: break-all;
    -webkit-box-orient: vertical;
}
.el-image {
    width: 100%;
}
.price {
    font-size: 18px;
    color: red;
    margin: 10px 0;
}
</style>