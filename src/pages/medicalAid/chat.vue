/* D4联系 */
<template>
    <div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>王医生的名字
                <svg class="icon person" aria-hidden="true" @click.stop="chatSetting">
                    <use xlink:href="#icon-label_wo"></use>
                </svg>
            </div>
        </div>
        <div class="container">
            <div class="chat-time">09/21 22:03</div>
            <div class="chat-msg">
                <div class="wrapper in">
                    <div class="avatar" :style="'backgroundImage: url('+ photo +')'"></div>
                    <div class="content-wrapper">
                        <div class="content-box in">
                            <div class="content">
                                <div>您好，请问活动什么时候开始？</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="chat-msg">
                <div class="wrapper out">
                    <div class="avatar" :style="'backgroundImage: url('+ photo +')'"></div>
                    <div class="content-wrapper">
                        <div class="content-box out">
                            <div class="content">
                                <div>9点</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer">
            <div class="left">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-wo_guanzhuwode"></use>
                </svg>
            </div>
            <div class="middle-text"><input type="text"/></div>
            <div class="right">发送</div>
        </div>
    </div>
</template>

<script>
    // 样式待优化
    // 1是医技互助来的，2是患者咨询来的
	export default {
		name: "medicalAid",
		data() {
			return {
                msg: "分类管理",
                type: 1,
                photo: require("@/public/images/swiper3.jpg"),
			}
		},
		created() {
            this.type = this.$router.currentRoute.params.type;
        },
        methods: {
            chatSetting() {
                let type = this.$router.currentRoute.params.type;
                this.$router.push({path: `/chatSetting/${type}`})
            }
        }
	};
</script>

<style lang="scss" scoped>
	@import "@/public/scss/common.scss";

	.page {
		@include body-bgColor();
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.header {
			.back-nav {
				@include nav-top;
                .person {
                    position: absolute;
                    top: 12px;
                    right: 15px;
                    left: auto;
                }
			}
		}
		.container {
			background-color: #eef1f6;
            height: calc(100vh - 93px);
			.chat-time {
                padding: 14px 0;
                text-align: center;
                font-size: 12px;
                color: #A9B5BC;
            }
            .chat-msg {
                padding: 8px 0;
                .wrapper {
                    @include flex();
                    &.out {
                        padding-left: 80px;
                        -webkit-box-orient: horizontal;
                        -webkit-box-direction: reverse;
                        -webkit-flex-direction: row-reverse;
                        -ms-flex-direction: row-reverse;
                        flex-direction: row-reverse;
                    }
                    &.in {
                        padding-right: 80px;
                    }
                }
                .avatar {
                    width: 40px;
                    height: 40px;
                    margin: 0 10px;
                    border: 1px solid #fff;
                    border-radius: 50%;
                    background-color: #eef1f6;
                    background-repeat: no-repeat;
                    background-attachment: scroll;
                    background-position: 50%;
                    background-size: 100% 100%;
                }
                .content-wrapper {
                    flex: 1;
                    .content-box {
                        @include flex();
                        &.out {
                            -webkit-box-orient: horizontal;
                            -webkit-box-direction: reverse;
                            -webkit-flex-direction: row-reverse;
                            -ms-flex-direction: row-reverse;
                            flex-direction: row-reverse;
                            .content {
                                background-color: #92E64A;
                            }
                        }
                        &.in {
                        }
                        .content {
                            background-color: #fff;
                            position: relative;
                            padding: 10px 16px;
                            line-height: 18px;
                            border-radius: 4px;
                            word-break: break-word;
                            color: #0A0A0A;
                        }
                    }
                }
            }
        }
        .footer {
            border-top: 1px solid #d7d7d7;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            background: hsla(0,0%,100%,.5);
            min-height: 49px;
            display: -webkit-box;
            display: -webkit-flex;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: end;
            -webkit-align-items: flex-end;
            -ms-flex-align: end;
            align-items: flex-end;
            -webkit-box-pack: center;
            -webkit-justify-content: center;
            -ms-flex-pack: center;
            justify-content: center;
            padding: 4px 2px 8px;
            .left {
                margin-left: 8px;
                margin-right: 8px;
                svg {
                    width: 28px;
                    height: 28px;
                }
            }
            .right {
                width: 53px;
                height: 28px;
                text-align: center;
            }
            .middle-text {
                flex: 1;
                overflow: hidden;
                background-color: #fff;
                border: 1px solid #e2e2e2;
                border-radius: 4px;
                input {
                    padding: 5px;
                    height: 28px;
                }
            }
        }
	}
</style>