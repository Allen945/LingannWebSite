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
        <el-container>
            <el-header>
                <div class="tap-wrap">
                    <span class="tip">
                        <i class="el-icon-menu"></i>服务分类
                    </span>
                    <span class="item" @click="goTo('IndexPage')">首页</span>
                    <span class="item" @click="goTo('RegisteredCo')">注册公司</span>
                    <span class="item" @click="goTo('AgencyTax')">财税代理</span>
                    <span class="item" @click="goTo('OpenAccount')">银行开户</span>
                    <span class="item" @click="goTo('AgencySocialSecurity')">社保代理</span>
                    <span class="item" @click="goTo('Trade')">商标注册</span>
                </div>
            </el-header>
            <el-main>
                <div class="nav-left">
                    <div
                        class="nav-name"
                        @mouseenter="handleShowContent('1')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[0]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                    <div
                        class="nav-name"
                        @mouseenter="handleShowContent('2')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[1]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                    <div
                        class="nav-name"
                        @mouseenter="handleShowContent('3')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[2]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                    <div
                        class="nav-name"
                        @mouseenter="handleShowContent('4')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[3]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                    <div
                        class="nav-name"
                        @mouseenter="handleShowContent('5')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[4]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                    <div
                        class="nav-name"
                        @mouseover="handleShowContent('6')"
                        @mouseleave="handleHideContent"
                    >
                        <span>
                            {{titleLists[5]}}
                            <i class="el-icon-arrow-right"></i>
                        </span>
                    </div>
                </div>
                <div class="nav-right">
                    <div class="homepage-img" v-show="!showContent">
                        <img src="../assets/mainpage.jpg" alt="首页动图" />
                    </div>
                    <div class="content" v-show="showContent">
                        <img src="../assets/bg.jpg" />
                        <div class="text">
                            <h4>{{title}}</h4>
                            <p>{{content}}</p>
                        </div>
                    </div>
                </div>
            </el-main>
            <div class="animate-image">
                <img src="../assets/1.png" />

                <img src="../assets/2.png" />

                <img src="../assets/3.png" />

                <img src="../assets/4.png" />
            </div>
            <div class="animate-article">
                <h4>政策新闻</h4>
                <ul>
                    <li @click="goToArticle('1')">
                        <span>临港集团与崇明区政府签署临港长兴科技园合作开发协议</span>
                    </li>
                    <li @click="goToArticle('2')">
                        <span>坚持绿色发展、推进产城融合，崇明区听取临港长兴科技园项目进展汇报</span>
                    </li>
                    <li @click="goToArticle('3')">
                        <span>中共上海市委、上海市人民政府关于促进中国（上海）自由贸易试验区临港新片区高质量发展实施特殊支持政策的若干意见</span>
                    </li>
                    <li @click="goToArticle('4')">
                        <span>0190820中国（上海）自由贸易试验区临港新片区管理办法</span>
                    </li>
                    <li @click="goToArticle('5')">
                        <span>国务院关于同意设立中国（上海）自由贸易试验区临港新片区的批复</span>
                    </li>
                    <li @click="goToArticle('6')">
                        <span>中国（上海）自由贸易试验区临港新片区正式挂牌，13家企业获颁新片区首批营业执照</span>
                    </li>
                    <li @click="goToArticle('7')">
                        <span>崇明区两个国家级农业标准化示范区顺利通过验收</span>
                    </li>
                </ul>
            </div>
            <div class="introduce-news">
                <div class="left-title">
                    <div class="item" @click="hoverIntroNews('0')">
                        <img src="../assets/res1.png" class="logo" />
                        <span>公司注册</span>
                    </div>
                    <div class="item" @click="hoverIntroNews('1')">
                        <img src="../assets/fan1.png" class="logo" />
                        <span>财务代理</span>
                    </div>
                    <div class="item" @click="hoverIntroNews('2')">
                        <img src="../assets/help.png" class="logo" />
                        <span>财政扶持</span>
                    </div>
                    <div class="item" @click="hoverIntroNews('3')">
                        <img src="../assets/book.png" class="logo" />
                        <span>政策法规</span>
                    </div>
                    <div class="item" @click="hoverIntroNews('4')">
                        <img src="../assets/know.png" class="logo" />
                        <span>知识产权</span>
                    </div>
                    <div class="item" @click="hoverIntroNews('5')">
                        <img src="../assets/bao.png" class="logo" />
                        <span>人事社保</span>
                    </div>
                </div>
                <div class="right-title">
                    <ul>
                        <li
                            @click="goToIntroArticle(index)"
                            v-for="(item,index) in registCo[showIntroduceNews]"
                            :key="index"
                        >
                            <span>{{item}}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="footer">
                <h4>联系我们</h4>
                <div class="item">
                    <span class="title">地址：</span>
                    <span>上海市徐汇区天钥桥路567号615室</span>
                </div>
                <div class="item">
                    <span class="title">服务热线：</span>
                    <span>53521056</span>
                </div>
                <div class="item">
                    <div class="left">
                        <span class="title">联系人：</span>
                    </div>
                    <div class="right">
                        <span>夏小姐: 15221545020 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ: 121495317</span>
                        <span>汪小姐: 13127838983 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ: 499068173</span>
                        <span>杨先生: 13636656382 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QQ: 695059882</span>
                    </div>
                </div>
                <div class="ad">
                    <img src="../assets/ad1.png" />
                    <img src="../assets/ad2.png" />
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
export default {
    name: 'IndexPage',
    data() {
        return {
            showContent: false,
            titleLists: [
                '注册公司',
                '工商服务',
                '银行开户',
                '税务服务',
                '人事社保',
                '品牌建设'
            ],
            title: '',
            contentLists: [
                '内资设立、外资设立、临港新片区注册、香港公司',
                '工商年报公示、企业名称公关、公司各类变更公司名称、营业执照加急服务',
                '代开银行基本户',
                '内资代理记账、外资代理记账、税种核定、核定征收、核定一般纳税人、抄税清卡、发票代购、核税地址',
                '企业社保开户',
                '商标注册、专利申请'
            ],
            content: '',
            registCo: [
                [
                    '内资公司注册流程。',
                    '注册公司办理进出口权需要注意什么。',
                    '注册公司应该如何选择经营范围。',
                    '公司注册设立时分公司和子公司的区别。',
                    '上海公司注册应该避免哪些问题。',
                    '上海注册公司时公司营业执照丢失怎么办。',
                    '公司注册完成后还需要做什么。'
                ],
                [
                    '什么是财务代理。',
                    '中小企业做代理记账的好处？',
                    '服务业一般纳税人需要添加贸易类税种，如何操作？',
                    '哪些增值税进项税票不能抵扣？',
                    '如何进行税收筹划风险的防范？',
                    '注册“有限责任公司”与“合伙企业”，纳税有何差异？',
                    '企业所得税核定征收与查帐征收区别。'
                ],
                [
                    '上海作为中国主要的的经济中心之一，政策好，位置佳，尤其是上海政府给予的返税扶持政策...'
                ],
                ['公司注册后不经营却不注销，会有什么影响？'],
                ['商标转让的三种途径及其转让介绍'],
                [
                    '单位社保开户，是指公司在社保管理部门设立登记的行为，是企业注册过程中必不可少的一步...'
                ]
            ],
            showIntroduceNews: 0
        }
    },
    methods: {
        handleShowContent(index) {
            this.showContent = true
            this.content = this.contentLists[index - 1]
            this.title = this.titleLists[index - 1]
        },
        handleHideContent() {
            this.showContent = false
        },
        goTo(routerName) {
            this.$router.push({
                name: routerName
            })
        },
        goToArticle(index) {
            this.$router.push({
                name: 'PolicyNews',
                query: {
                    id: index
                }
            })
        },

        goToIntroArticle(index) {
            let routerName =
                this.showIntroduceNews == 0
                    ? 'RegisteredCo'
                    : this.showIntroduceNews == 1
                    ? 'AgencyTax'
                    : this.showIntroduceNews == 2
                    ? 'RegisteredMark'
                    : this.showIntroduceNews == 3
                    ? 'Policy'
                    : this.showIntroduceNews == 4
                    ? 'Knowlege'
                    : 'AgencySocialSecurity'
            this.$router.push({
                name: routerName,
                query: {
                    id: index + 1
                }
            })
        },

        hoverIntroNews(val) {
            this.showIntroduceNews = val
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
    width: 1004px;
    margin-top: -4px;
    background-color: #f5f7f8;
    color: #333;
    text-align: center;
    line-height: 45px;
    height: 45px !important;
    .tap-wrap {
        width: 1004px;
        margin-left: -18px;
        .tip {
            float: left;
            width: 167px;
            background-color: rgb(113, 115, 119);
            color: #fff;
            text-align: center;
            font-size: 14px;
            letter-spacing: 3px;
        }
        .active {
            background: #003371;
            color: #fff;
        }
        .item {
            display: inline-block;
            width: 132px;
            text-align: center;
            cursor: pointer;
            font-size: 14px;
            letter-spacing: 3px;
            &:hover {
                color: #ed5736;
            }
        }
    }
}

.el-main {
    width: 1004px;
    text-align: center;
    .nav-left {
        float: left;
        width: 167px;
        margin-left: -18px;
        margin-top: -20px;
        text-align: center;
        background: rgb(66, 69, 75);
        .nav-name {
            height: 55px;
            line-height: 55px;
            cursor: pointer;
            font-size: 14px;
            color: #fff;
            letter-spacing: 3px;
            border-bottom: 1px solid #e9eef3;
            z-index: 100;
            span {
                display: inline-block;
                height: 55px;
                line-height: 55px;
            }
            span:hover {
                color: #f36838;
            }
        }
    }
    .nav-right {
        margin-left: 151px;
        .homepage-img {
            img {
                width: 835px;
                height: 336px;
                margin-top: -21px;
                margin-left: -2px;
            }
        }
        .content {
            position: absolute;
            top: 108px;
            width: 812px;
            height: 336px;
            .text {
                position: relative;
                top: -325px;
                left: 22px;
                z-index: 99;
                p {
                    letter-spacing: 1px;
                }
                h4 {
                    color: #ed5736;
                }
            }
            img {
                position: relative;
                top: 1px;
                left: 22px;
                width: 812px;
                height: 336px;
            }
        }
    }
}
.animate-image {
    img {
        height: 120px;
        width: 230px;
    }
    img:nth-of-type(2) {
        margin: 0 20px;
    }
    img:nth-of-type(3) {
        margin-right: 20px;
    }
}
.animate-article {
    padding: 0 20px;
    margin: 20px 0;
    width: 963px;
    height: 295px;
    border: 1px dashed #ed5736;
    h4 {
        height: 20px;
        line-height: 20px;
        text-align: left;
    }
    ul {
        margin-left: -31px;
    }
    ul li {
        list-style: none;
        text-align: left;
        height: 30px;
        line-height: 30px;
        border-bottom: 1px solid #ccc;
        cursor: pointer;
        span {
            font-size: 13px;
        }
        &:hover span {
            color: #ed5736;
        }
    }
}
.introduce-news {
    // padding: 0 20px;
    margin: 10px 0;
    width: 1005px;
    height: 250px;
    // border: 1px dashed #003371;
    .left-title {
        float: left;
        width: 250px;
        height: 250px;
        // border: 1px dashed #003371;
        background: #fff;
        .item {
            margin-bottom: 7px;
            height: 35px;
            line-height: 35px;
            // border-bottom: 1px dashed #003371;
            text-align: center;
            cursor: pointer;
            background: url('../assets/bg1.png') no-repeat 0 0;
            &:hover span {
                color: #ed5736;
            }
            span {
                letter-spacing: 2px;
                font-weight: bold;
            }
            .logo {
                height: 35px;
                width: 35px;
                vertical-align: bottom;
                margin-right: 15px;
            }
        }
    }
    .right-title {
        float: right;
        width: 730px;
        height: 249px;
        border: 1px dashed #003371;
        overflow: auto;
        ul {
            margin-left: -31px;
        }
        ul li {
            list-style: none;
            text-align: left;
            height: 30px;
            line-height: 30px;
            border-bottom: 1px solid #ccc;
            padding-left: 17px;
            cursor: pointer;
            span {
                font-size: 13px;
            }
            &:hover span {
                color: #ed5736;
            }
        }
    }
}
.footer {
    // position: absolute;
    margin-top: 10px;
    background: rgb(60, 64, 67);
    width: 1005px;
    height: 230px;
    color: #fff;
    letter-spacing: 1px;
    .item {
        text-align: left;
        margin-top: 10px;
        margin-left: 50px;
        font-size: 14px;
        .title {
            display: inline-block;
            width: 100px;
            text-align: right;
        }
        .left {
            display: inline-block;
            vertical-align: top;
        }
        .right {
            display: inline-block;
            span {
                display: block;
                margin-top: 5px;
            }
        }
    }
    .ad {
        position: relative;
        top: -128px;
        right: -503px;
        width: 500px;
        img {
            margin: 0 10px;
            height: 141px;
            width: 213px;
        }
    }
}
</style>
