<template>
<div class="container">
  <p class="title">我的订单</p>
  <div class="order" v-for="(o, i) in orders" :key="i">
    <el-image :src="o.img"></el-image>
    <div class="content">
      <h4>{{ o.name }}</h4>
      <div>单 价 ： ￥ {{ o.price }}</div>
      <div>数 量 ： {{ o.count }}</div>
      <div>合 计 ： ￥ {{ o.price * o.count }}</div>
      <div>地 址 :  {{ o.address }}</div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "orders",
  data() {
    return {
      orders: [
        { img: 'g1.png', address: '广东省佛山市顺德区北滘镇前进街道302号', name: '美素佳儿（Friso）皇家幼儿配方奶粉 3段（1-3岁幼儿适用） 800克 （荷兰原装进口）', price: '362.0', count: 1 },
        { img: 'g2.png', address: '广东省佛山市顺德区北滘镇前进街道302号', name: '至初（A2）a2至初1段 婴儿配方奶粉 0-6月龄适用 900g/罐 1罐装', price: '488.0', count: 1 },
        { img: 'g3.png', address: '广东省佛山市顺德区北滘镇前进街道302号', name: '爽然shinrea屁屁好朋友拉拉裤XXL96片(12-16kg)超薄透气拉拉裤尿不湿', price: '108.0', count: 5 },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 40px auto 0;
  width: 60%;
  min-height: 100%;
  min-width: 800px;
  background: #fff;
}
.title {
  font-size: 20px;
  height: 50px;
  line-height: 50px;
  text-align: center;
}
.order {
  height: 200px;
  display: flex;
  margin: 20px 0;
  padding: 10px;
}
.el-image {
  height: 180px;
  width: 180px;
  margin-right: 20px;
  flex: none;
  position: relative;

}
</style>