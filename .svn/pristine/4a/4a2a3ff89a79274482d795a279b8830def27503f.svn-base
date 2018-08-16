/* A5-2检查项目 */

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

                <!-- 查看全部 -->
                <div class="item">
                    <div class="title">
                        <div class="name">
                            1.脑脊液压力
                            <div class="description">Cell count leukocyte</div>
                        </div>
                    </div>
                    <div class="main-info">
                        <div class="top">
                            <div>
                                <span class="name">数值(结果)</span>
                                <span class="info"><span class="bigger">653</span>mol/L</span>
                            </div>
                            <div>
                                <span class="name">正常参考值</span>
                                <span class="info"><span class="bigger">524</span>mol/L</span>
                            </div>
                        </div>
                        <div class="bottom">
                            <div>
                                <span class="name">备注：</span>
                                <span class="info">正常，无异常状态。</span>
                            </div>
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
            msg: "检查项目",
		};
    },
    created() {
        console.log(this.msg)
    },
    methods: {
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
                        @include bd-bottom();
                        @include item-padding-between(20px);
                        .name {
                            @include deeper-gray();
                            @include fontsize18();
                            padding: 12px 0;
                        }
                        .description {
                            @include item-padding-between();
                            font-size: 13px;
                            color: #878787;
                        }
                    }
                    .main-info {
                        @include fontsize14();
                        @include item-padding-between(20px);
                        >div>div {
                            @include flex();
                            min-height: 24px;
                            line-height: 24px;
                        }
                        .top {
                            @include bd-bottom();
                            @include flex-center();
                            >div {
                                @include flex-column();
                                width: 50%;
                                .bigger {
                                    font-size: 20px;
                                }
                                &:last-child {
                                    @include bd-left-extend(1px, 100%, 0, 0, 0, #d9d9d9);
                                }
                            }
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
                    }
                }
            }
        }
	}

</style>
