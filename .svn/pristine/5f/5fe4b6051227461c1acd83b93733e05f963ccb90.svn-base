<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
            <div class="separate"></div>
        </div>
		<div class="container">

            <div class="list">

                <!-- 健康管理明细 -->
                <div class="item" @click="filterList('zymx')">
                    <div class="title">
                        <span class="name">检查</span>
                        <span class="place">2018-7-17至2018-7-17</span>
                    </div>
                    <div class="main-info">
                        <div>
                            <span class="name">数据信息：</span>
                            <span class="info">血常规</span>
                        </div>
                        <div>
                            <span class="name">医院/科室：</span>
                            <span class="info">省人民第一医院/呼吸科</span>
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
    name: "HealthManageDetail",
	data() {
		return {
            msg: "健康管理明细",
		};
    },
    computed: {
        getRouter() {
            return this.$router.currentRoute;
        }
    },
    created() {
        this.type = this.getRouter.params.type;
        console.log(this.msg, this.type)
    },
    methods: {
        filterList(type) {
            // let path = type === 'iRHService' ? 'iRHForm' : 
            //     type === 'zymx' ? `caseHistoryDetail/${type}` : ''
            // this.$router.push({path: `/${path}`})
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
                        .name {
                            @include deeper-gray();
                            @include fontsize18();
                            padding: 12px 0;
                        }
                        .place {
                            @include txt-light-gray();
                            @include fontsize14();
                        }
                    }
                    .main-info {
                        @include fontsize15();
                        padding: 15px;
                        >div {
                            @include flex();
                            min-height: 24px;
                            line-height: 24px;
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
                    }
                }
            }
        }
	}

</style>
