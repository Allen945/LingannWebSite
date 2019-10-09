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
                <el-breadcrumb-item>政策法规</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="body">
            <div class="article" v-if="id == 1">
                <h3>公司注册后不经营却不注销，会有什么影响？</h3>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;如果一家公司已经不经营了，但是觉得公司注销很麻烦就没去办理注销，这公司不注销会有什么后果和影响？一起来看看吧！</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1、第一，根据公司的规定，除因公司分立合并外，其他原因需要解散注销的，都应成立清算组，有限责任公司的清算组由股东组成，股份有限公司的清算组由董事或者股东大会确定的人员组成。公司歇业后未办理注销登记，也无清算组织负责清理债权债务的，公司和清算主体为共同诉讼主体;公司歇业后，虽办理注销登记，但无清算组织负责清理债权债务的，负有清算之责的主体为诉讼主体。故经营者退市时不办理工商注销程序，则今后公司发生诉讼时就会成为共同被告承担诉讼责任。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2、第二，如公司在工商年报的时间内(即每年的1月1号至每年的6月30号)完成注销程序，则还应按时参加企业工商年报。若不按规定参加企业工商年报，根据国务院《公司登记管理条例》、《企业信息公示暂行条例》等法律法规的规定，将由市场监管部门依法列入经营异常名录，列入经营异常名录的企业超过3年未依照规定履行公示义务的，将被列入严重违法企业名单，逾期仍不接受年度检验的，将被吊销营业执照，企业的法定代表人3年内不得担任其他企业的法定代表人、负责人</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3、企业清算的所得税处理，是指企业不再持续经营，发生结束自身业务、处置资产、偿还债务以及向所有者分配剩余财产等经济行为时，对清算所得清算所得税、股息分配等事项的处理。了解企业注销清算，首先要知道需进行企业所得税清算的企业，其次是企业停止经营开始清算的日期确定，除此之外，还要明确企业注销清算的要求和标准等知识。</p>
                <img src="../assets/policy.png" style="height:300px;width:500px " />
                <p>&nbsp;&nbsp;&nbsp;&nbsp;二、需进行企业所得税清算的企业</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1、按公司法、企业破产法等规定，需要进行清算的企业(即公司除特殊原因合并或分立而解散外，其余原因引起的解散，均须经过清算程序);</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;2、企业重组中需要按清算处理的企业(视同清算)。
                    不符合《财政部、国家税务总局关于企业重组业务企业所得税处理若干问题的通知》(财税〔2009〕59号)规定的适用特殊税务处理原则的重组业务，如企业由法人转变为个人独资企业、合伙企业、个体工商户等非法人组织、或将登记注册地转移至中华人民共和国境外(包括港澳台地区);不适用特殊性税务处理的企业合并、分立等，改组企业不需要履行上述清算程序，但需要视同清算进行所得税处理。
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;三、企业终止生产经营开始清算之日的确定</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;1、企业章程规定的经营期限届满之日;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;2、企业股东会、股东大会或类似机构决议解散之日;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;3、企业依法被吊销营业执照、责令关闭或者被撤销之日;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;4、企业被人民法院依法予以解散或宣告破产之日。</p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;四、清算期确定、清算备案和时间要求
                    根据《财政部、国家税务总局关于企业清算业务企业所得税处理若干问题的通知》(财税〔2009〕60号)文件规定，企业应将整个清算期作为一个独立的纳税年度计算清算所得。因此，企业清算期所在的年度内，有两个所得税纳税年度，第一个纳税年度为1月1日到终止生产经营之日，第二个纳税年度为终止生产经营之日到注销税务登记之日。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;1、第一个纳税年度
                    企业在年度中间终止生产经营，按照公司法、企业破产法等规定需要进行清算的，依据企业所得税法第五十五条规定，应将终止生产经营当年度1月1日至实际经营终止之日作为一个纳税年度，于实际经营终止之日起60日内完成当年度企业所得税汇算清缴，结清当年度应缴(应退)企业所得税税款。
                </p>
                <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;2、第二个纳税年度
                    进入清算期的企业应对清算事项，报主管税务机关备案。企业应当自终止生产经营活动开始清算之日起15日内向主管税务机关提交《企业清算所得税事项备案表》并附送以下备案资料：
                </p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(1)纳税人终止正常生产经营活动并开始清算的证明文件或材料。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(2)管理人或清算组联络人员名单及联系方式。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(3)清算方案或计划书。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(4)欠税报告表。</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;五、具体有以下几方面影响：</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(1)法人代表不能贷款买房;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(2)法人代表不能办移民;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(3)法人代表不能领养老保险;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(4)公司会每年被税务局罚款2000至1万元;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(5)有欠税，企业法人代表会被阻止出境;搭不了飞机和高铁;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(6)长期不申报税收，税务局会上门检查;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(7)长期不申报税收，发票会被锁机;</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;(8)工商信用网进经营异常名录，所有对外申办业务全部限制，如：银行开户、进驻商城等等。</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Policy',
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
