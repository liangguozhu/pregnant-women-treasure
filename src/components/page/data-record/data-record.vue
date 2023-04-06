<template>
  <div>
    <el-card class="container">
      <div slot="header" style="display: flex; align-items: center; justify-content: space-between">
        <span class="title">孕期数据记录</span>
        <div v-if="!isDetail">
          <el-button @click="help = true"><i class="el-icon-info"></i> 帮助</el-button>
          <el-button @click="add = true" type="primary"><i class="el-icon-edit"></i> 记录</el-button>
        </div>
      </div>

      <div v-if="!isDetail">
        <div class="item" v-for="(item, i) in records" :key="i" @click="toDetail(item)">
          <i class="el-icon-caret-right"></i>
          {{ item.title }}
          <span style="float: right; color: #999;">{{ item.time }}</span>
        </div>
      </div>
      <div class="detail" v-else>
        <div class="detail-header">
          <el-button style="position: absolute; left: 10px;" plain @click="isDetail = false;">返回</el-button>
          <h3>{{ current.title }}</h3>
        </div>
        <p v-html="current.content"></p>
      </div>

      <el-dialog
          title="帮助"
          :visible.sync="help"
          width="60%">
        <div style="text-align: justify; word-break: break-word;">
          孕期要做2~3次的超声波检查，主要报告的内容有胎囊、胎头、胎心、胎动、胎盘、脐带、股骨、羊水、脊柱及脑室间隙等，并列出一些数据。这些数据说明什么问题，是否正常或异常？以下数据可供参考。
          <br/><br/>1.胎心心是胎儿发育过程中，最早形成的器官。描述胎心是有、强为正常，无、弱为异常。胎心频率正常为每分钟120~160次之间。
          <br/><br/>2.胎头胎儿头颅为胚胎期发育最快的器官。其轮廓完整为正常，缺损、变形为异常，脑中线无移位和无脑积水为正常。BPD代表胎头双顶径，怀孕到足月时应达到9.3cm或以上。按一般规律，在孕5个月以后，基本与怀孕月份相符，即妊娠28周（7个月）时BPD约为7.0cm，孕32周时约为8.0cm，以此类推。孕8个月以后，平均每周增长约为0.2cm为正常。
          <br/><br/>3.胎囊胎囊只在怀孕早期见到。它的大小，在孕1.5个月时直径约2cm，2.5个月时约5cm为正常。胎囊位置在子宫的宫底、前壁、后壁、上部、中部都属正常；形态圆形、椭圆形、清晰为正常；如胎囊为不规则形、模糊，位置靠下部，孕妇同时有腹痛或阴道流血时，可能要流产。
          <br/><br/>4.胎盘胎盘是胎儿的与母亲进行营养交换与排除代谢产物的重要器官，是取代黄体的内分泌器官。胎盘的正常厚度应在2.5~5cm之间。胎盘钙化分为Ⅲ级，Ⅰ级为胎盘成熟的早期阶段，回声均匀，在怀30~32周可见此变化；Ⅱ级表示胎盘接近成熟；Ⅲ级提示胎盘已经成熟。越接近足月，胎盘越成熟，回声越不均匀。
          <br/><br/>5.羊水羊水是胎儿生长发育的场所。早期羊水来源于羊膜上皮细胞的分泌，胎儿泌尿器官形成后，胎儿的尿液为羊水的主要来源；羊水不断更新，胎儿吞饮羊水是羊水多主要去路。羊水深度在3~7cm之间为正常，超过7cm为羊水增多，少于3cm为羊水减少。
          <br/><br/>6.脐带正常情况下，脐带应漂浮在羊水中，如在胎儿颈部见到脐带影像，可能为脐带绕颈。
          <br/><br/>7.胎动有、强为正常，无、弱可能胎儿在睡眠中，也可能为异常情况，要结合其他项目综合分析。
          <br/><br/>8.股骨长度是胎儿大腿骨的长度，正常值与相应怀孕月份的BPD值差2~3cm左右，如说BPD为9.3cm，股骨长度应为7.3cm；BPD为8.9cm，股骨长度应为6.9cm等。
          <br/><br/>9.脊椎胎儿脊柱连续为正常，缺损为异常。10.脑室在妊娠14~38周正常侧脑室宽度为：7.6±0.6mm，其上限为10mm（平均值4标准差）。当宽度10~15mm为轻度增宽，其本身并无明显病理意义，约有1/3在孕期可能自行消失。大于或等于15mm，为重度侧脑室增寛或脑积水；如果没有发现其他异常，尤其是发现有神经管其他发育异常时，脑积水的可能性更大。注意的是有43%的病人会有其他结构异常或出现染色体异常时，伴有脑室异常，这类宝宝有问题的可能很大。
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="help = false">关 闭</el-button>
            </span>
      </el-dialog>

      <el-dialog
          title="记录孕期数据"
          :visible.sync="add"
          width="60%">
        <div style="height: 400px;">
          <div style="display: flex; align-items: center;"><span style="width: 100px;">题目：</span> <el-input v-model="title"></el-input></div>
          <quillEditor v-model="content" style="box-sizing: border-box; padding-top: 20px; width: 100%; height: calc(100% - 100px)"></quillEditor>
        </div>
        <span slot="footer" class="dialog-footer">
                <el-button @click="add = false">关 闭</el-button>
                <el-button type="primary" @click="confirm">提 交</el-button>
            </span>
      </el-dialog>
    </el-card>

    <el-card class="container">
      <div slot="header">
        <span class="title">预产期计算器</span>
      </div>
      受孕时间： <el-date-picker type="date" v-model="time"></el-date-picker>
      <div style="font-weight: bold; margin-top: 20px; font-size: 18px;">预产期预计：<span style="color: #830bf3;">{{ birthTime }}</span></div>
      <div style="font-size: 14px; color: #666;">【计算方法】 预产期月份：末次月经的月份 +9 或者 -3；预产期日：末次月经的天数 +7（末次月经开始日期 +280 天）</div>

      <div style="margin: 20px 0 5px;">当前胎儿发育状况：第{{currentBabyData}}个月</div>
      <div style="text-indent: 2em;">
        {{ this.babyData[currentBabyData] }}
      </div>
    </el-card>
  </div>
</template>

<script>
import { quillEditor } from "vue-quill-editor"

export default {
    name: 'data-record',
    components: {
        quillEditor
    },
    data() {
        return {
            time: new Date(),
            babyData: [
              '怀孕第一个月胎儿的五官等尚未发育完好，只能看到胎儿下巴以及嘴部的简单形状，此时胎儿的头部占身体很大的比例，并且可见尚未消失的长尾巴。',
              '胎儿已经可以检测到心跳，已经逐渐形成肝脏，胃肠等；神经细胞，脑快速发育；五官已基本成形，比如眼睛，嘴巴等，因此可以看出人脸的样子；子宫内底锐膜内绒毛大增，渐渐形成胎盘，脐带开始出现。',
              '胎儿头部占身长的50%；尾巴完全消失；可以清晰地看到胎儿的十指以及脚趾头等；诸如肝脏、心脏等胎儿的内脏以及皮肤之下的血管发育比较迅速；在此阶段已能分辨出是男胎还是女胎。',
              '头慢慢伸直，已有人脸的轮廓及外形；胎儿已经能够对母体外的声音有所感应，听觉系统基本发育完好；内脏器官发育大致已经完整；骨骼、肌肉系统愈发完美；胎盘已经形成。',
              '此时胎儿头部的比例为全身的1/3；胎儿皮肤表面出现细毛，眉毛以及指甲等都已经齐全；孕妇能够感觉到胎儿在腹中活动；胎儿心跳较快，四肢可四处运动。',
              '已经能清楚地看到眉毛和眼睫毛；胎宝宝皮肤因在羊水中长久浸泡而发皱；能够感知到母亲的心跳、说话的声音；胎儿也会时而用小脚踢母亲的子宫，并且经常在子宫中活动，震动羊水。',
              '男胎可见阴囊，女胎阴核及小阴唇突起；视网膜已形成；有微弱吸吮力以及呼吸；四肢灵活度较大；胎位尚未固定。',
              '此时胎儿的脑部发育很快；胎儿的眼睛时而睁开，时而闭上，能辨别出光源，目光跟随光源等；胎儿胃、肠和肺等功能基本上发育完全；男胎与女胎性器官发育表现为：睾丸沉下或阴蒂凸起；皮肤颜色也发生变化，由暗红色转为浅红色。',
              '此时胎儿呈现圆圆的一团，有着丰富的皮下脂肪；听觉系统也已经发育完好；体毛以及皮肤上的皱纹明显减少；男胎或女胎的性器官和内脏都应经生长完好；并且头部呈倒立状，进入母体骨盆中。',
              '胎宝宝的感觉器官和神经系统基本完善，能够根据母亲体内部以及外部环境的变化作出不同的反应；此时胎儿有着坚硬的骨骼，且在胎位正的情况下，头部稳定地处在母体骨盆内，安静地等待娩出。',
            ],

            records: [
                { title: '孕期记录一', content: '', time: '2023-03-03' },
                { title: '孕期记录二', content: '', time: '2023-03-06' },
                { title: '孕期记录三', content: '', time: '2023-03-13' },
                { title: '孕期记录四', content: '', time: '2023-03-16' },
                { title: '孕期记录五', content: '', time: '2023-03-21' },
                { title: '孕期记录六', content: '', time: '2023-03-28' },
            ],
            help: false,
            add: false,
            title: '',
            content: '',
            isDetail: false,
            current: {},
            txt: `
            1.胎心心是胎儿发育过程中，最早形成的器官。描述胎心是有、强为正常，无、弱为异常。胎心频率正常为每分钟120~160次之间。
            <br/>2.胎头胎儿头颅为胚胎期发育最快的器官。其轮廓完整为正常，缺损、变形为异常，脑中线无移位和无脑积水为正常。BPD代表胎头双顶径，怀孕到足月时应达到9.3cm或以上。按一般规律，在孕5个月以后，基本与怀孕月份相符，即妊娠28周（7个月）时BPD约为7.0cm，孕32周时约为8.0cm，以此类推。孕8个月以后，平均每周增长约为0.2cm为正常。
            <br/>3.胎囊胎囊只在怀孕早期见到。它的大小，在孕1.5个月时直径约2cm，2.5个月时约5cm为正常。胎囊位置在子宫的宫底、前壁、后壁、上部、中部都属正常；形态圆形、椭圆形、清晰为正常；如胎囊为不规则形、模糊，位置靠下部，孕妇同时有腹痛或阴道流血时，可能要流产。
            <br/>4.胎盘胎盘是胎儿的与母亲进行营养交换与排除代谢产物的重要器官，是取代黄体的内分泌器官。胎盘的正常厚度应在2.5~5cm之间。胎盘钙化分为Ⅲ级，Ⅰ级为胎盘成熟的早期阶段，回声均匀，在怀30~32周可见此变化；Ⅱ级表示胎盘接近成熟；Ⅲ级提示胎盘已经成熟。越接近足月，胎盘越成熟，回声越不均匀。`
        }
    },
    computed: {
      birthTime() {
        let year = this.time.getFullYear();
        const month = (this.time.getMonth() - 2 + 12) % 12;
        const day = (this.time.getDate() + 7) % 30;
        if (month < this.time.getMonth() + 1) year += 1;
        return `${year}-${month}-${day}`;
      },
      currentBabyData() {
        const stamp = Date.now() - this.time.getTime();
        const monthSec = 1000 * 60 * 60 * 12 * 30;
        return Math.ceil(stamp / monthSec);
      }
    },
    created() {
        this.records.reverse();
        this.records.map(i => {
            i.content = this.txt;
            return i;
        })
    },
    methods: {
        toDetail(data) {
            this.current = data;
            this.isDetail = true;
        },
        confirm() {
            this.add = false;
            this.records.unshift({ title: this.title , content: this.content, time: this.getTime() });
            this.title = '';
            this.content = '';
        },
        getTime(date) {
            date = date ? new Date(date) : new Date();
            return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getDate()}`;
        }
    }
}
</script>

<style scoped>
.container {
    margin: 20px auto;
    max-width: 1000px;
    min-width: 800px;
}
.title {
    font-size: 20px;
    font-weight: bold;
}
.item {
    padding: 10px;
    border-bottom: 1px solid #eee;
}
.item:hover {
    background-color: #eee;
    cursor: pointer;
}
.detail-header {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}
</style>