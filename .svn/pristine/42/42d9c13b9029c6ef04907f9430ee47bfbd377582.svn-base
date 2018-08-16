<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
            <!-- 筛选 -->
            <div class="filter">
                <div class="filter">
                    {{ setActive }}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xialakuangjiantou"></use>
                    </svg>
                </div>
            </div>
            <div class="separate"></div>
            <div class="date">
                日期选择
            </div>
            <div class="separate"></div>
        </div>
		<div class="container">

            <div class="list">

                <!-- 查看全部 -->
                <div v-if="type === 'all'">
                    <div class="item" @click="filterList('jcmx')">
                        <div class="title">
                            <span class="name">检查</span>
                            <span class="date">2018-7-2</span>
                        </div>
                        <div class="main-info">
                            <div class="top">
                                <div>
                                    <span class="name">场所：</span>
                                    <span class="info">居家</span>
                                </div>
                                <div>
                                    <span class="name">数据信息：</span>
                                    <span class="info">血常规</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <div>
                                    <span class="name">档案来源：</span>
                                    <span class="info">省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科</span>
                                </div>
                                <div>
                                    <span class="name">档案编号：</span>
                                    <span class="info">4526822582</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separate"></div>
                    <div class="item" @click="filterList('blhz')">
                        <div class="title">
                            <span class="name">病历</span>
                            <span class="date">2018-7-2</span>
                        </div>
                        <div class="main-info">
                            <div class="top">
                                <div>
                                    <span class="name">场所：</span>
                                    <span class="info">居家</span>
                                </div>
                                <div>
                                    <span class="name">数据信息：</span>
                                    <span class="info">血常规</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <div>
                                    <span class="name">档案来源：</span>
                                    <span class="info">省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科</span>
                                </div>
                                <div>
                                    <span class="name">档案编号：</span>
                                    <span class="info">4526822582</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separate"></div>
                    <div class="item" @click="filterList('cfhz')">
                        <div class="title">
                            <span class="name">处方</span>
                            <span class="date">2018-7-2</span>
                        </div>
                        <div class="main-info">
                            <div class="top">
                                <div>
                                    <span class="name">场所：</span>
                                    <span class="info">居家</span>
                                </div>
                                <div>
                                    <span class="name">数据信息：</span>
                                    <span class="info">血常规</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <div>
                                    <span class="name">档案来源：</span>
                                    <span class="info">省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科</span>
                                </div>
                                <div>
                                    <span class="name">档案编号：</span>
                                    <span class="info">4526822582</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separate"></div>
                    <div class="item" @click="filterList('zyhz')">
                        <div class="title">
                            <span class="name">作业</span>
                            <span class="date">2018-7-2</span>
                        </div>
                        <div class="main-info">
                            <div class="top">
                                <div>
                                    <span class="name">场所：</span>
                                    <span class="info">居家</span>
                                </div>
                                <div>
                                    <span class="name">数据信息：</span>
                                    <span class="info">血常规</span>
                                </div>
                            </div>
                            <div class="bottom">
                                <div>
                                    <span class="name">档案来源：</span>
                                    <span class="info">省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科省人民医院呼吸科</span>
                                </div>
                                <div>
                                    <span class="name">档案编号：</span>
                                    <span class="info">4526822582</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="separate"></div>
                </div>

                <!-- 病历汇总：门诊病历/住院病历两种 -->
                <div class="item" v-else-if="type === 'blhz'">
                    <div class="title">
                        <span class="name maxW">病历汇总：特发性(原发性)高血压</span>
                        <span class="annex">附件</span>
                    </div>
                    <div class="main-info">
                        <div class="separate"></div>

                        <div class="click-area" @click="routeCaseHistory('zybl')">
                            <div class="details">
                                <span class="name">就诊日期：</span>
                                <span class="info">2018-7-3</span>
                            </div>
                            <div class="details">
                                <span class="name">场所：</span>
                                <span class="info">居家</span>
                            </div>
                            <!-- 需要控制显示和隐藏的部分 -->
                            <!-- <div class=""> -->
                            <div class="details">
                                <span class="name">诊断结论：</span>
                                <span class="info">很健康</span>
                            </div>
                            <div class="details">
                                <span class="name">病历号：</span>
                                <span class="info">6541252</span>
                            </div>
                            <div class="details">
                                <span class="name">医院/科室：</span>
                                <span class="info">省人民医院/呼吸科</span>
                            </div>
                        </div>

                        <div class="separate"></div>
                        <div class="show-all">
                            展开
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xialakuangjiantou"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- 检查明细 -->
                <div class="item" v-else-if="type === 'jcmx'">
                    <div class="title">
                        <span class="name maxW">检查明细：头颅，口，眼，鼻，颈部</span>
                        <span class="annex">附件</span>
                    </div>
                    <div class="main-info">
                        <div class="separate"></div>
                        <div class="click-area" @click="routeCaseHistory('jcmx')">

                            <div class="details">
                                <span class="name">检查日期：</span>
                                <span class="info">2018-7-3</span>
                            </div>
                            <div class="details">
                                <span class="name">场所：</span>
                                <span class="info">居家</span>
                            </div>
                            <div class="details">
                                <span class="name">诊断结论：</span>
                                <span class="info">很健康</span>
                            </div>
                            <div class="details">
                                <span class="name">医院/科室：</span>
                                <span class="info">省人民医院/呼吸科</span>
                            </div>
                            <div class="details">
                                <span class="name">档案编号：</span>
                                <span class="info">6541252</span>
                            </div>
                        </div>
                        <div class="separate"></div>
                        <div class="show-all">
                            展开
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xialakuangjiantou"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- 处方汇总 -->
                <div class="item" v-else-if="type === 'cfhz'">
                    <div class="title">
                        <span class="name maxW">处方汇总：运动类</span>
                        <span class="annex">附件</span>
                    </div>
                    <div class="main-info">
                        <div class="separate"></div>

                        <div class="click-area" @click="routeCaseHistory('cfmx')">
                            <div class="details">
                                <span class="name">日期：</span>
                                <span class="info">2018-7-3</span>
                            </div>
                            <div class="details">
                                <span class="name">场所：</span>
                                <span class="info">居家</span>
                            </div>
                            <div class="details">
                                <span class="name">处方目标：</span>
                                <span class="info">霍乱，肺气肿</span>
                            </div>
                            <div class="details">
                                <span class="name">医生：</span>
                                <span class="info">张山</span>
                            </div>
                            <div class="details">
                                <span class="name">医院/科室：</span>
                                <span class="info">省人民医院/呼吸科</span>
                            </div>
                        </div>

                        <div class="separate"></div>
                        <div class="show-all">
                            展开
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xialakuangjiantou"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <!-- 作业汇总 -->
                <div class="item" v-else-if="type === 'zyhz'">
                    <div class="title">
                        <span class="name">作业汇总：血压，氧气治疗，早餐</span>
                        <!-- <span class="annex">附件</span> -->
                    </div>
                    <div class="main-info">
                        <div class="separate"></div>

                        <div class="click-area" @click="routeCaseHistory('zymx')">
                            <div class="details">
                                <span class="name">开始日期：</span>
                                <span class="info">2018-7-4</span>
                            </div>
                            <div class="details">
                                <span class="name">结束日期：</span>
                                <span class="info">2018-7-5</span>
                            </div>
                            <div class="details">
                                <span class="name">天数</span>
                                <span class="info">7</span>
                            </div>
                            <div class="details">
                                <span class="name">备注：</span>
                                <span class="info">医生交代的已经全部完成，现在已经感觉到一些变化，期望越来越好，作业要继续坚持下去。</span>
                            </div>
                        </div>

                        <div class="separate"></div>
                        <div class="show-all">
                            展开
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-xialakuangjiantou"></use>
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="separate"></div>
            </div>
		</div>
	</div>
</template>

<script>

export default {
    name: "HealthEventList",
	data() {
		return {
            msg: "健康事件",
            // 列表的类型：病历汇总/检查明细/处方汇总/作业汇总
            type: 'all'
		};
    },
    computed: {
        getRouter() {
            return this.$router.currentRoute;
        },
        setActive() {
            return this.type === 'jcmx' ? '检查明细' : this.type === 'cfhz' ? '处方汇总' 
                    : this.type === 'blhz' ? '病历汇总' : this.type === 'zyhz' ? '作业汇总'
                    : '全部';
        }
    },
    created() {
        this.type = this.getRouter.params.type;
        console.log(this.msg, this.type)
    },
    methods: {
        filterList(type) {
            this.$router.push({path: `/healthEventList/${type}`})
        },
        routeCaseHistory(type) {
            // type为指定的详情页面
            this.$router.push({path: `/caseHistoryDetail/${type}`})
        }
    },
    beforeRouteUpdate(to, from, next) {
        console.log(to, from)
        this.type = to.params.type;
        next();
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.page {
        @include body-bgColor();
        .header {
            .back-nav {
                @include nav-top;
            }
            .filter {
                @include item-bgColor();
                @include flex-center();
                @include deeper-gray();
                font-size: 16px;
                height: 40px;
            }
            .date {
                @include item-bgColor();
                @include item-margin(0, 10px, 0, 10px);
                @include border-radius();
                height: 40px;
            }
        }
        .container {
            height: calc(100vh - 154px);
            overflow-y: auto;
            .list {
                .item {
                    @include item-bgColor();
                    @include border-radius();
                    @include bd-color();
                    @include item-margin(0, 10px, 0, 10px);
                    .title {
                        @include bd-left-extend(2px);
                        @include bd-bottom();
                        @include spacebetween();
                        @include item-padding-between(20px);
                        // @include itemHeight();
                        .maxW {
                            max-width: 82%;
                        }
                        .name {
                            @include deeper-gray();
                            @include fontsize18();
                            padding: 12px 0;
                        }
                        .date {
                            @include txt-light-gray();
                            @include fontsize14();
                        }
                        .annex {
                            width: 45px;
                            height: 27px;
                            line-height: 27px;
                            text-align: center;
                            background-color: #e0e0e0;
                            color: #888888;
                            border-radius: 5px;
                            font-size: 15px;
                        }
                    }
                    .main-info {
                        @include fontsize15();
                        @include item-padding-between();
                        >div>div {
                            @include flex();
                            min-height: 24px;
                            line-height: 24px;
                        }
                        .top {
                            @include bd-bottom();
                        }
                        .top,
                        .bottom {
                            padding: 15px 0;
                        }
                        .name {
                            @include txt-light-gray();
                            min-width: 75px;
                        }
                        .info {
                            @include deeper-gray();
                        }
                        .details {
                            min-height: 24px;
                        }
                        .show-all {
                            @include bd-top();
                            font-size: 13px;
                            height: 40px;
                            line-height: 40px;
                            text-align: center;
                            color: #888888;
                            .icon {
                                width: 10px;
                                height: 10px;
                            }
                        }
                    }
                }
            }
        }
	}

</style>
