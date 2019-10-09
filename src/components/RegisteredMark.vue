<template>
    <div class="hello">
        <div class="header">
            <div class="logo">
                <img src="../assets/logo.png" alt />
                <span class="name">临港长兴</span>
            </div>
            <div class="desc">
                <span>
                    <i class="iconfont icon-icon_safety"></i>品质保证
                </span>
                <span>
                    <i class="iconfont icon-shandianfahuo"></i>闪电响应
                </span>
                <span>
                    <i class="iconfont icon-zhifubao"></i>支付安全
                </span>
                <span>
                    <i class="iconfont icon-icon_service_fill"></i>全程服务
                </span>
            </div>
        </div>
        <div class="tap-wrap">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item>财政扶持</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body">
            <div class="article" v-if="id == 1">
                <h3>税收扶持</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;上海作为中国主要的的经济中心之一，政策好，位置佳，尤其是上海政府给予的返税扶持政策，对于创业者来说上海市创业的不二选择。临港长兴经济园能够最高给到创业者高达地方所得部分50%</p>
                <img src="../assets/ff.png" style="height:300px;width:500px " />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'RegisteredMark',
    data() {
        return {
            id: '1'
        }
    },

    mounted() {
        this.id = this.$route.query.id ? this.$route.query.id : 1 //接受参数关键代码
    },

    methods: {
        goTo(routerName) {
            this.$router.push({
                name: routerName
            })
        }
    }
}
</script>


<style scoped lang="scss">
.header {
    width: 1004px;
    height: 70px;
    .logo {
        float: left;
        img {
            height: 65px;
            float: left;
        }
        .name {
            float: left;
            font-size: 13px;
            font-weight: bold;
            margin-top: 37px;
            color: #003371;
        }
    }
    .desc {
        float: right;
        height: 70px;
        line-height: 50px;
        span {
            display: inline-block;
            margin: 10px;
            font-size: 12px;
            i {
                margin-right: 3px;
                color: #ed5736;
                font-size: 13px;
            }
        }
    }
}
.el-header {
    // width: 1004px;
    // margin-top: -4px;
    background-color: #f5f7f8;
    color: #333;
    text-align: center;
    line-height: 45px;
    height: 45px !important;
}
.tap-wrap {
    width: 1004px;
    margin-top: 30px;
    margin-left: -18px;
}
.body {
    padding-bottom: 30px;
}

.body p {
    text-align: justify !important;
    // line-height: 20px;
    // height: 20px;
    letter-spacing: 1px;
}
</style>
