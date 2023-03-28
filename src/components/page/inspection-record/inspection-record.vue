<template>
<div class="container">
  <div v-if="!detailView">
    <h2>
      <i class="el-icon-date"></i>
      我的产检记录
    </h2>

    <div class="next">
      <div>
        怀孕时间： 2023-03-03 
        <i class="el-icon-edit" style="cursor: pointer;" @click="dialogVisible = true"></i>
      </div>
      <div>
        <span>下一次产检: </span>
        <span>{{ records[nextCheck].time }}</span>
      </div>
      <div>第{{nextCheck + 1}}次产检（怀孕{{ 12 + 4 * nextCheck }}周）</div>
    </div>

    <div class="box">
      <div v-for="(item, i) in records" :key="i" class="item">
        <div style="flex: 1; cursor: pointer;" @click="toDetail(item)">
          <div style="font-size: 14px; font-weight: bold; color: #333; margin-bottom: 5px;">第{{ i + 1 }}次产检（怀孕{{ 12 + 4 * i }}周）</div>
          <div>【检查项目】 {{ item.content }}</div>
          <div>{{ item.time }}</div>
        </div>
        <div class="tick" :class="{'is-tick': item.tick}" @click="tick(i)">
          <i class="el-icon-circle-check"></i>
        </div>
      </div>
    </div>

    <div style="padding: 10px; background: #eee;">
      <el-calendar>
        <template
          v-slot:dateCell="{data}">
          <div :class="{'check-day': checkDays.includes(data.day)}">
            {{ data.day.split('-')[2] }}
            <div v-if="checkDays.includes(data.day)">
              产检日
            </div>
          </div>
        </template>
      </el-calendar>
    </div>
  </div>

  <div class="detail" v-if="detailView">
    <div class="detail-header">
      <el-button plain @click="detailView = false;">返回</el-button>
      <h3>第{{ detail.t }}次产检</h3>
      <el-button type="danger" @click="detail.tick = !detail.tick">{{detail.tick ? '已' : ''}}完成产检</el-button>
    </div>
    <p>适宜月龄： 怀孕{{8 + 4 * detail.t}}周</p>
    <p>推荐时间： {{ detail.time }}</p>
    <p>注意事项： </p>
    <p style="text-indent: 2em;">孕检前3～5天应饮食清淡，检查前一天晚上12点之后不能进食和饮水。孕期，孕妇一定要定期做好产检工作，谨遵医嘱。另外，孕妇平时要注意要放松心情，以积极乐观的态度面对宝宝的出生，这样对孕妇也是好的。如有任何异常情况，要随时就医。</p>
    <p>检查项目： </p>
    <p style="text-indent: 2em;">{{ detail.content }}</p>
    <p>检查项目解读： </p>
    <p style="text-indent: 2em;">询问病史: 既往妇科就诊史，妇科疾病史，怀孕和生育史。询问末次月经日期，推算预产期。</p>
    <p style="text-indent: 2em;">测量体重和血压: 医生通常会问准妈妈怀孕前的体重，以作为孕期体重增加的参考依据。整个孕期中，理想的体重增加值为10-12.5千克孕前体重不同，建议增长的体重也有差别，建议准妈妈使用宝宝知道提供的孕期体重监测工具，帮助自己查看并监测孕期体重的增长。</p>
    <p style="text-indent: 2em;">询问病史: 既往妇科就诊史，妇科疾病史，怀孕和生育史。询问末次月经日期，推算预产期。</p>
    <p style="text-indent: 2em;">测量体重和血压: 医生通常会问准妈妈怀孕前的体重，以作为孕期体重增加的参考依据。整个孕期中，理想的体重增加值为10-12.5千克孕前体重不同，建议增长的体重也有差别，建议准妈妈使用宝宝知道提供的孕期体重监测工具，帮助自己查看并监测孕期体重的增长。</p>
  </div>

  <el-dialog
    title="修改怀孕时间"
    :visible.sync="dialogVisible"
    width="30%">
    <el-date-picker
      v-model="pregnantTime"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</div>
</template>

<script>
export default {
  name: "inspection-record",
  data() {
    return {
      records: [
        { t: 1, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '需要建立孕妇保健手册，确定孕周推算预产期，评估孕期的高危因素，包括梅毒血清抗体筛查和HIV筛查，血常规，空腹血糖，肝功和肾功，乙型肝炎表面抗原，尿常规、血型、心电图等常规的检查，以及有无地中海贫血的筛查。早期彩超检查来确定宫内的妊娠和孕周', time: '2023-05-26' },
        { t: 2, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '分析头次产检的检查结果。测量体重、血压、量宫高腹围、听胎心。此阶段进行一项重要的检查，叫唐氏筛查。主要是对胎儿神经管畸形以及染色体异常等进行筛查', time: '2023-06-23' },
        { t: 3, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '测量体重、血压、量宫高、腹围，还有进行四维彩超的检查以及糖耐量的检查筛查', time: '2023-07-21' },
        { t: 4, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '进行常规的产科超声检查，血常规检查、尿常规检查', time: '2023-08-18' },
        { t: 5, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '常规进行体重、血压、宫高、腹围的测量，以及胎心胎位的监测。进行尿常规的检查、白带常规的检查', time: '2023-09-15' },
        { t: 6, tick: false, project: '询问病史、测量体重和血压、多普勒胎心、尿常规、身体各部分检查、B超、心电图、MDI分泌物、血常规+血型(ABO+RH)、肝功+两对半、血糖、血钙、血脂、丙肝抗体、梅毒反应素、HIV抗体、优生四项 (巨细胞病毒、单纯疤疹病毒、风疹病毒、弓形虫)、微量元素。', content: '进行产科彩超、胎心监测检查等等检查内容。还需要定期地进行胎心监护，及早地发现胎儿宫内缺氧等存在', time: '2023-09-29' },
      ],
      checkDays: [],
      detail: {},
      detailView: false,
      dialogVisible: false,
      pregnantTime: new Date('2023-03-03')
    }
  },
  created() {
    this.checkDays = this.records.map(i => i.time);
  },
  computed: {
    nextCheck() {
      return this.records.findIndex(i => !i.tick);
    }
  },
  methods: {
    tick(i) {
      if (this.records[i - 1] && this.records[i - 1].tick === false) {
        this.$message.warning('请按顺序记录您的产检信息噢~');
        return;
      }
      this.records[i].tick = !this.records[i].tick;
    },
    toDetail(data) {
      this.detail = data;
      this.detailView = true;
    }
  }
}
</script>

<style scoped>
.container {
  margin: 20px auto;
  max-width: 1000px;
  min-width: 800px;
  background: #fff;
  padding: 20px;
}
.box {
  margin: 20px 0;
  background: #eee;
  padding: 10px;
  border-radius: 5px;
}
.item {
  display: flex;
  align-items: stretch;
  padding: 10px;
  border-radius: 5px;
  background: #fff;
  font-size: 12px;
  color: #999;
  margin-bottom: 10px;
}
.item:last-child {
  margin-bottom: 0;
}
.tick {
  cursor: pointer;
  font-size: 30px;
  color: #555;
  width: 40px;
  flex: none;
  display: flex;
  align-items: center;
  justify-content: center;
}
.tick:hover {
  background: rgb(254, 245, 248);
}
.is-tick {
  color: #bb52fc;
}
.check-day {
  background: rgb(254, 245, 248);
  margin: -8px;
  padding: 8px;
  width: 100%;
  height: 100%;
}
.next {
  padding: 10px;
  background: rgb(254, 245, 248);
  color: rgb(225, 129, 155);
  line-height: 1.5;
}
.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>