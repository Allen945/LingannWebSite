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
                <el-breadcrumb-item>知识产权</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body">
            <div class="article" v-if="id == 1">
                <h3>商标转让</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;商标转让的途径有三种，分别是合同转让、继受转让、因行政命令而发生的转让，这三种方式基本上涵盖了商标转让的所有范围，商标转让存在一定的经济收益，多余的商标拿出来卖掉可以回笼部分资金。那么接下来易开业小编来为在家就商标转让的三种途径为大家做一个详细的分析。
                    商标转让形式：
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(1)合同转让：转让人通过合同，规定转让注册商标的内容、相互间的权利、义务和违约责任等，这种形式的转让一般是有偿的，即转让人通过转让注册商标专用权而收取一定的转让费用。</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    (2)继受转让：注册商标的继受转让，有两种情况：注册所有人(自然人)死亡即其生命结束后，有继承人按继承程序继承死者生前所有的注册商标。作为注册商标所有人的企业被合并或被兼并时的继受移转。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(3)因行政命令而发生的转让：一般发生在公有制国家，这里说的行政命令主要是那些引起财产流转的计划和行政。例如我国国有企业根据行政命令发生分立、合并、解散或转产，必然会发生注册商标主体变化的问题。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Knowlege',
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
