<template>
    <div class="home-container">
        <img src="@/assets/images/home.png"/>
        <div class="text">
            <p style="font-size: 20px;">服务准妈妈搭建的一站式服务平台</p>
            <p>--畅所欲言 交流心得</p>
            <p>--经验分享 互帮互助</p>
            <p>--孕妈好物 购您所需</p>
            <p style="font-size: 18px;">为您的育儿之路保驾护航</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>

<style scoped>
.home-container {
    position: relative;
    overflow: hidden;
    height: 100%;
    background: rgba(0,0,0,.8);
}
img {
    display: inline-block;
    width: 100%;
    height: 100%;
    opacity: 0.8;
    object-fit: cover;
}
.text {
    text-align: right;
    color: #fff;
    font-size: 16px;
    position: absolute;
    right: 50px;
    top: 0;
    bottom: 0;
    padding: 30px 15px 0;
    background: rgba(255,255,255,.3);
}
</style>