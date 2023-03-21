<template>
<div class="container">
  <div class="order" v-for="(o, i) in orders" :key="i">
    <el-image :src="o.img"></el-image>
    <div class="content">
      <h4>{{ o.name }}</h4>
      <div>单 价 ： ￥ {{ o.price }}</div>
      <div>数 量 ： {{ o.count }}</div>
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
        { img: 'g1.png', name: '美素佳儿（Friso）皇家幼儿配方奶粉 3段（1-3岁幼儿适用） 800克 （荷兰原装进口）', price: '362.0', count: 1 },
        { img: 'g2.png', name: '至初（A2）a2至初1段 婴儿配方奶粉 0-6月龄适用 900g/罐 1罐装', price: '488.0', count: 1 },
        { img: 'g3.png', name: '爽然shinrea屁屁好朋友拉拉裤XXL96片(12-16kg)超薄透气拉拉裤尿不湿', price: '108.0', count: 5 },
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin: 0 auto;
  width: 60%;
  min-height: 100%;
  min-width: 800px;
  background: #fff;
}
</style>