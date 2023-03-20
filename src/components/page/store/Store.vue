<template>
  <div style="height: 100%;">
    <div class="store-container" v-if="!showDetail">
      <div class="header">
        <el-image src="favicon.png"></el-image>
        <div class="search">
          <el-input placeholder="宝宝奶粉" v-model="searchVal">
            <template slot="append">
              <span style="background: pink;"><i class="el-icon-search"></i></span>
            </template>
          </el-input>
          <div style="width: 100%;">
            <div class="tabs">
              <div class="tab" v-for="t in tabs" :key="t">{{t}}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="goods">
        <div class="good" v-for="(good, i) in goods" :key="i" @click="toDetail(good)">
          <Good :data="good"></Good>
        </div>
      </div>
    </div>
    <div class="store-container detail-container" v-if="showDetail">
      <el-button plain @click="toDetail()">返回</el-button>
      <Detail :data="detail"></Detail>
    </div>
  </div>
</template>

<script>
import Good from '@/components/page/store/good.vue';
import Detail from '@/components/page/store/detail.vue';

export default {
  name: "Store",
  data() {
    return {
      searchVal: '',
      tabs: ['全部商品', '奶粉', '婴儿服装', '纸尿片', '孕妇裙子', '营养汤包'],
      goods: [
        { img: 'g1.png', name: '美素佳儿（Friso）皇家幼儿配方奶粉 3段（1-3岁幼儿适用） 800克 （荷兰原装进口）', price: '362.0' },
        { img: 'g2.png', name: '至初（A2）a2至初1段 婴儿配方奶粉 0-6月龄适用 900g/罐 1罐装', price: '488.0' },
        { img: 'g3.png', name: '爽然shinrea屁屁好朋友拉拉裤XXL96片(12-16kg)超薄透气拉拉裤尿不湿', price: '108.0' },
        { img: 'g4.png', name: 'Classic Teddy精典泰迪一体拉拉裤XXL码50片【15-17kg】婴儿尿不湿超薄透气尿裤', price: '49.9' },
        { img: 'g5.png', name: '戴·可·思（Dexter）金盏花液体爽身粉婴儿吸汗防痱宝宝干爽保湿宝宝50g装', price: '68.0' },
        { img: 'g6.png', name: '戴·可·思（Dexter）婴儿唇周霜宝宝口水唇周疹护理修护膏滋润保湿乳液润肤霜疹 唇周霜15g', price: '89.0' },
        { img: 'g1.png', name: '美素佳儿（Friso）皇家幼儿配方奶粉 3段（1-3岁幼儿适用） 800克 （荷兰原装进口）', price: '362.0' },
        { img: 'g2.png', name: '至初（A2）a2至初1段 婴儿配方奶粉 0-6月龄适用 900g/罐 1罐装', price: '488.0' },
        { img: 'g3.png', name: '爽然shinrea屁屁好朋友拉拉裤XXL96片(12-16kg)超薄透气拉拉裤尿不湿', price: '108.0' },
        { img: 'g4.png', name: 'Classic Teddy精典泰迪一体拉拉裤XXL码50片【15-17kg】婴儿尿不湿超薄透气尿裤', price: '49.9' },
        { img: 'g5.png', name: '戴·可·思（Dexter）金盏花液体爽身粉婴儿吸汗防痱宝宝干爽保湿宝宝50g装', price: '68.0' },
        { img: 'g6.png', name: '戴·可·思（Dexter）婴儿唇周霜宝宝口水唇周疹护理修护膏滋润保湿乳液润肤霜疹 唇周霜15g', price: '89.0' }
      ],
      showDetail: false,
      detail: {}
    }
  },
  methods: {
    toDetail(good) {
      this.showDetail = !this.showDetail;
      this.detail = good || {};
    }
  },
  components: {
    Good, Detail
  }
}
</script>

<style scoped>
.detail-container {
  padding: 15px;
}
.goods {
  display: flex;
  flex-wrap: wrap;
}
.good {
  flex: 0 0 33.3%;
  box-sizing: border-box;
  padding: 10px;
}
.store-container {
  margin: 0 auto;
  width: 60%;
  min-height: 100%;
  min-width: 800px;
  background: #fff;
}
.el-input {
  margin-top: 72px;
}
.el-image {
  flex: none;
}
.header {
  margin-bottom: 20px;
  height: 200px;
  padding: 10px 30px;
  display: flex;
  align-items: center;
}
.search {
  overflow: hidden;
  height: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: space-between;
}
.el-input {
  max-width: 500px;
}
>>> .el-input-group__append {
  color: #fff;
  font-size: 20px;
  background: pink;
}
.tabs {
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
}
.tab {
  flex: 1;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  border-bottom: 1px solid #eee;
}
.tab:hover {
  background: #eee;
}
</style>