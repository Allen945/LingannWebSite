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
                <el-breadcrumb-item>人事社保</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body">
            <div class="article" v-if="id == 1">
                <h3>社保开户</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;单位社保开户，是指公司在社保管理部门设立登记的行为，是企业注册过程中必不可少的一步
                    新型的人事管理和服务模式
                    将人力资源管理中琐碎、复杂且需要专业操作的人事事务工作转移的一种外包模式
                    让企业为更好的发展，集中精力在战略核心上。
                </p>
                <img src="../assets/ss.png" style="height:300px;width:500px " />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AgencySocialSecurity',
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
