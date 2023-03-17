<template>
<div class="container">
  <div v-if="!showDetail">
    <div class="topic-item" v-for="topic in topics" :key="topic.key">
      <el-image :src="topic.pic" fit="cover"></el-image>
      <div class="content">
        <h2 class="title" @click="toDetail(topic)">{{ topic.title }}</h2>
        <div class="desc">{{ topic.desc }}</div>
        <div class="info">
          <div>{{ topic.writer }}</div>
          <div>发布于 {{ topic.info }}</div>
        </div>
      </div>
    </div>
  </div>
  <div class="detail-container" v-if="showDetail">
    <Detail :data="detail" @back="showDetail = false;"></Detail>
  </div>
</div>
</template>

<script>
import Detail from "@/components/page/blog/share/detail";

export default {
  data() {
    return {
      showDetail: false,
      detail: {},
      topics: [
        {
          key: 1,
          title: '准妈妈保养攻略，不丢好身材，不失好皮肤',
          desc: '怀孕应该坚持护肤，因为在怀孕期间，准妈妈的荷尔蒙分泌会有很大的变化。 如果此时护理不当，女性皮肤会变得营养不足，抵抗力会严重降低，皮肤质量也会变差。 怀孕是最好的护理时间，如果错过了，往往很难补救之后。 怀孕期间，皮肤护理是延缓皮肤衰老最重要的阶段。',
          pic: 'to1.jpg',
          info: '一小时前',
          writer: '美容护肤旗舰店',
          content: '孕妇保养皮肤小窍门是什么呢？\n' +
              '\n' +
              '孕妇皮肤护理原则\n' +
              '\n' +
              '怀孕之后，很多女性都会发现自己的皮肤开始变差，原本白皙的脸上开始出现斑点，皮肤缺水的现象也越来越严重，皮肤失去原本的光泽，变得暗沉。皮肤护理变得特别重要，但是却需要遵循孕妇皮肤护理的原则：\n' +
              '\n' +
              '1、充足睡眠\n' +
              '\n' +
              '孕妇会比常人更容易犯困这是常识，而且皮肤也是需要修复的，所有孕妇一定要保证充足的睡眠时间，既可让皮肤得到修复，又可缓解孕期疲劳。\n' +
              '\n' +
              '2、控制情绪\n' +
              '\n' +
              '孕妇情绪波动会比较大，容易出现紧张、恐惧，可是如果孕妇长时间的情绪波动，会让皮肤血液循环不良，对皮肤不利。\n' +
              '\n' +
              '3、少用祛斑产品\n' +
              '\n' +
              '女性怀孕后或多或少都会出现妊娠斑，但是在生完宝宝后是会消失的，所有不要太担心，而很多祛斑产品都含有化学成分，会影响宝宝的发育。\n' +
              '\n' +
              '4、天然产品\n' +
              '\n' +
              '孕妇选择护肤产品，一定要选择天然成分的，因为有些化学成分的护肤产品，是不适合孕妇使用的，会对宝宝造成伤害。\n' +
              '\n' +
              '5、润肤剂\n' +
              '\n' +
              '孕妇可以多用润肤剂，因为里面含有大量的维生素A，对改善皮肤生理环境很有效果。\n' +
              '\n' +
              '6、基础护肤\n' +
              '\n' +
              '每次用洗面奶洗完脸后，都记得要用不含美白成分的爽肤水，也可以用乳液，让肌肤变得滋润。\n' +
              '\n' +
              '孕妇皮肤护理小窍门\n' +
              '\n' +
              '女性爱美不可阻挡，怀孕也同样。为了让孕期皮肤不被恶化，很多孕妇都会尝试各种护肤方式。今天就针对孕妇常见的皮肤问题，给大家分享几个孕妇护肤的小窍门，让孕妇同样拥有精致皮肤。\n' +
              '\n' +
              '1、妊娠纹\n' +
              '\n' +
              '妊娠纹是最常见的孕期皮肤问题，有的人可能没有出现，但是有的人出现的地方却包括腹部、大腿等地方，让很多孕妇都难以接受。要想预防妊娠纹，最好的办法就是用妊娠纹涂抹，然后再进行按摩。\n' +
              '\n' +
              '2、肤色暗淡\n' +
              '\n' +
              '怀孕后发现皮肤不再光泽，反而变得暗淡，这主要是因为血液循环造成的，可以通过吃补血益气的食物来改善，也可以通过有氧运动来改善。\n' +
              '\n' +
              '3、干燥\n' +
              '\n' +
              '皮肤干燥可能出现的不仅仅实在孕期，其他时候也会因为天气的原因出现干燥，最主要的就是要记得补水，除了喝水外，也可以通过护肤品进行补水。\n' +
              '\n' +
              '4、痘痘\n' +
              '\n' +
              '长痘痘应该是很多孕妇都会出现的情况，这主要和孕妇的饮食习惯有关，改善的方式也可以通过食物，多吃清淡食物，不吃高热量的食物。还有一点需要注意的是，不要喝凉茶来去痘痘，这样会影响宝宝。\n' +
              '\n' +
              '5、色斑\n' +
              '\n' +
              '孕妇出现色斑的概率不低，但是色斑是会在生完宝宝后消失的，所有没有必要用功效型产品来祛斑，这些产品对宝宝百害无一益。'
        },
        {
          key: 2,
          title: '怀孕期间吃什么？这里有一份食谱！',
          desc: '孕期营养对母子双方的近期和远期健康都会产生至关重要的影响，孕期营养主要是保障孕妇的身体健康，保证胎儿正常生长发育，有利于产后的母乳喂养，有利于分娩和产后的身体恢复，还能潜移默化影响较大的婴儿对辅食的接受和后续多样化辅食结构的建立。\n' +
              '孕妇营养缺乏会导致流产、早产、死胎、胎儿发育不良、畸形、低体重，围产儿死亡率比较高、脑发育受损。营养过剩会导致巨大儿、难产，产后大出血的风险增加，远期增加子代发生心脑血管疾病及糖尿病的几率。妊娠期营养不良，母体并发症有妊娠期高血压疾病、妊娠期糖尿病、妊娠期贫血，产后身体恢复会受到很大影响。',
          pic: 'to2.jpg',
          info: '两小时前',
          writer: '中华小当家的母亲',
          content: '食材\n' +
              '\n' +
              '草鸡400g、淮山药350g、枸杞子8g、盐3g、姜3片、葱1根、料酒20g。\n' +
              '\n' +
              '做法\n' +
              '\n' +
              '1、先将鸡洗净后剁成块状，冷水下锅，倒入10g料酒，大火烧开煮2到3分钟捞出。\n' +
              '\n' +
              '2、焯过水的鸡块捞出后，用清水冲洗，将血沫洗净沥水备用。\n' +
              '\n' +
              '3、电炖锅中倒入2/3的清水，放入鸡块、姜片、葱结和10g料酒，盖上锅盖。\n' +
              '\n' +
              '4、开启电源，在控制面板中按下“菜单”键，选择到“鸡鸭汤”的功能，口感为“浓郁”，这时显示烹饪时间是2小时30分钟。\n' +
              '\n' +
              '5、自己设定烹饪时间为2小时，按下“开始”键。\n' +
              '\n' +
              '6、烹饪时间还剩1小时时，再来将山药去皮洗净后切滚刀，并用清水浸泡备用。\n' +
              '\n' +
              '7、烹饪时间还剩40分钟时，放入山药块继续炖煮。\n' +
              '\n' +
              '8、最后还剩下5分钟时，放入洗净的枸杞继续炖煮。\n' +
              '\n' +
              '9、直到发出“滴滴滴。。。”的声音，控制面板显示为保温状态，汤便炖好了。\n' +
              '\n' +
              '10、按下“取消”键，关掉电源，便可放入盐、白胡椒粉进行调味。\n' +
              '\n' +
              '11、一锅营养丰富，味道鲜美的养生汤便做好啦，盛出后慢慢享用吧！'
        }
      ]
    }
  },
  methods: {
    toDetail(data) {
      this.showDetail = !this.showDetail;
      this.detail = data;
    }
  },
  components: {
    Detail
  }
}
</script>

<style scoped>
.topic-item {
  background: #fff;
  display: flex;
  padding: 15px;
  margin-bottom: 20px;
}

.el-image {
  flex: none;
  margin-right: 20px;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  background: rgba(256,256,256,.5);
}

.content {
  position: relative;
}

.title {
  cursor: pointer;
  margin: 0 0 20px;
}

.title:hover {
  color: #409EFF;
}

.desc {
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  word-break: break-all;
  -webkit-box-orient: vertical;
}

.info {
  position: absolute;
  bottom: 0;
  font-size: 14px;
  color: #999;
}

.detail-container {
  background: #fff;
}
</style>