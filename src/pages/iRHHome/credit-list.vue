/* K1功劳簿 */
<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>

            <!-- 统计 -->
            <div class="rank">
                当前服务患者人数:11  付费人数:3  免费人数:8
            </div>
        </div>
		<div class="container">

            <div class="list">
                <div class="item">
					<div class="title">2018-07</div>
					<div class="info">
						<div>
							<span>4</span>
							<span>服务患者人数</span>
						</div>
						<div>
							<span>1</span>
							<span>按月收费患者人数</span>
						</div>
						<div>
							<span>￥8</span>
							<span>咨询劳务费总金额</span>
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
    name: "CreditList",
	data() {
		return {
            msg: "功劳簿",
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
            .rank {
                background-color: #F3FAED;
                height: 41px;
                line-height: 41px;
                font-size: 14px;
                color: #05703D;
                padding: 0 15px;
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
                    margin-top: 10px;
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
                                    font-size: 20px;
                                    @include deeper-gray();
                                }
                                &:last-child {
                                    font-size: 12px;
                                    @include txt-light-gray();
                                }
                            }
                        }
                    }
                }
            }
        }
	}

</style>
