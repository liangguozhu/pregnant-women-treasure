<template>
<div class="store-container">
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
    <div class="good" v-for="(good, i) in goods" :key="i">
      {{ good.id }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Store",
  data() {
    return {
      searchVal: '',
      tabs: ['奶粉', '婴儿服装', '纸尿片', '孕妇裙子', '营养汤包', '空气清新剂'],
      goods: [
        { id: 1, img: '', name: '', desc: '', price: '' },
        { id: 2, img: '', name: '', desc: '', price: '' },
        { id: 3, img: '', name: '', desc: '', price: '' },
        { id: 4, img: '', name: '', desc: '', price: '' },
        { id: 5, img: '', name: '', desc: '', price: '' },
        { id: 6, img: '', name: '', desc: '', price: '' },
        { id: 7, img: '', name: '', desc: '', price: '' },
      ]
    }
  }
}
</script>

<style scoped>
.goods {
  background: #bfa;
  column-count: 4;
}
.store-container {
  margin: 0 auto;
  width: 60%;
  height: 100%;
  min-width: 800px;
  background: #fff;
}
.el-image {
  flex: none;
  width: 120px;
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
  height: 58%;
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