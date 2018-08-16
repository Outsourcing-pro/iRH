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
                <div class="item" @click="routerDetail">
					<div class="title">2018-7-16 10:44:23</div>
					<div class="info">
						<div>
							<span>收缩压(高)</span>
							<span>116</span>
						</div>
						<div>
							<span>舒张压(低)</span>
							<span>89</span>
						</div>
						<div>
							<span>心率</span>
							<span>90</span>
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
    name: "HealthPyh",
	data() {
		return {
            msg: "生理参数",
		};
    },
    computed: {
        getRouter() {
            return this.$router.currentRoute;
        },
        setActive() {
            return '生理参数'
            // return this.type === 'jcmx' ? '检查明细' : this.type === 'cfhz' ? '处方汇总' 
            //         : this.type === 'blhz' ? '病历汇总' : this.type === 'zyhz' ? '作业汇总'
            //         : '全部';
        }
    },
    created() {
        this.type = this.getRouter.params.type;
        console.log(this.msg, this.type)
    },
    methods: {
        routerDetail() {
		  this.$router.push({path: '/homeworkDetail'});
	  },
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
                margin: 0 10px;
                .item {
                    @include item-bgColor();
                    height: 115px;
                    border-radius: 5px;
                    overflow: hidden;
                    .title {
                        @include fontsize14();
                        @include deeper-gray();
                        background:rgba(244,254,236,1);
                        height: 35px;
                        line-height: 35px;
                        padding: 0 20px;
                    }
                    .info {
                        @include spaceevenly();
                        height: 80px;
                        >div {
                            @include flex-column();
                            width: 33.333%;
                            &:not(:first-child) {
                                @include bd-left();
                            }
                            >span{
                                &:first-child {
                                    font-size: 15px;
                                    @include txt-light-gray();
                                }
                                &:last-child {
                                    font-size: 20px;
                                    @include deeper-gray();
                                }
                            }
                        }
                    }
                }
            }
        }
	}

</style>
