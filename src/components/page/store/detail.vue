<template>
    <div class="container">
        <!-- <el-image :src="data.img"></el-image> -->

        <el-carousel height="400px">
            <el-carousel-item v-for="item in 2" :key="item">
                <el-image :src="data.img" style="width: 100%; height: 100%;"></el-image>
            </el-carousel-item>
        </el-carousel>
        <div>
            <h2>{{ data.name }}</h2>
            <div>
                <p>优 惠 价 ： <span style="font-size: 20px; color: red; font-weight: bold;">{{ data.price }}</span></p>
                <p>配 送 至 ： 
                    <el-cascader
                        :options="options"
                        :props="{ expandTrigger: 'hover' }"
                    ></el-cascader>
                </p>
                <p>详 细 地 址 ： 
                    <el-input placeholder="请输入详细地址，具体到门牌号" style="margin-top: 10px;"></el-input>
                </p>
            </div>
            <el-input-number :min="1" v-model="count"></el-input-number>
            <div class="btn">立即购买</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'detail',
    props: ['data'],
    data() {
        return {
            options: [
                {
                    label: '广东',
                    value: '广东',
                    children: [
                        {
                            label: '广州',
                            value: '广州',
                            children: [
                                {
                                    label: '天河',
                                    value: '天河'
                                }
                            ]
                        },
                        {
                            label: '佛山',
                            value: '佛山',
                            children: [
                                {
                                    label: '禅城',
                                    value: '禅城',
                                }
                            ]
                        }
                    ]
                }
            ],
            count: 1
        }
    }
}
</script>

<style scoped>
.container {
    margin-top: 20px;
    display: flex;
}
.el-carousel {
    flex: none;
    margin-right: 20px;
    width: 400px;
    height: 400px;
}
.btn {
    margin-top: 20px;
    width: 200px;
    cursor: pointer;
    height: 40px;
    line-height: 40px;;
    text-align: center;
    background: #eb1db7;
    color: #fff;
}
</style>