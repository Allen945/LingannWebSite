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
                <el-breadcrumb-item>商标注册</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body">
            <div class="article">
                <h3>商标申请</h3>
                <img src="../assets/mm.png" style="height:800px;width:1000px " />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TrademarkApplication',
    data() {
        return {}
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
