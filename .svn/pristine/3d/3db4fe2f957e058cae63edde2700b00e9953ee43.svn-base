/* D4-1聊天设置 */
<template>
    <div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
        </div>
        <div class="container">
            <div class="item" @click="showIntro">
                <div class="left">
                    <div class="photo" :style="'backgroundImage: url('+ photo +')'"></div>
                    <div class="detail">
                        <div>王涛医生<span>(wtd9899)</span></div>
                        <div class="txt-hide">为您提供优质服务</div>
                    </div>
                </div>
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jiantou-you"></use>
                </svg>
            </div>
            <div v-if="type==1">
                <div class="separate"></div>
                <div class="chat-group">设置好友分组
                    <div>我的好友
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div class="chat-group">屏蔽
                    <div><input type="checkbox" class="switch" id="switch" value="Mike" v-model="checkedNames"></div>
                </div>
                <div class="separate"></div>
                <div class="cancel-btn">取消关注</div>
            </div>

            <div v-if="type==2">
                <div class="separate"></div>
                <div class="chat-group">特别关注
                    <div><input type="checkbox" class="switch" id="switch" value="Mike" v-model="checkedNames"></div>
                </div>
                <div class="separate"></div>
                <div class="from-item-single">
                    <div>健康事件
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                    <div>健康管理
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                    <div>生理参数
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                    <div>就医记录
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div class="separate"></div>
                <router-link class="from-item-single" tag="div" :to="{path:'/drugEquipment/111'}">
                    <div>药品与设备
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </router-link>
            </div>
        </div>

        <!-- <intro-actionsheet></intro-actionsheet> -->
    </div>
</template>

<script>
    import IntroActionsheet from './child/intro-actionsheet';

	export default {
		name: "chatSetting",
		data() {
			return {
                msg: "聊天设置",
                type: 1, //1是医技互助来的，2是患者咨询来的
                photo: require("@/public/images/swiper3.jpg"),
			}
		},
		created() {
            this.type = this.$router.currentRoute.params.type;
        },
        methods: {
            showIntro() {
                if (this.type == 1) {
                    
                }else if(this.type == 2) {
                    this.$router.push({path: `/patientInfo/${this.type}`})
                }
            }
        },
        components: {
            IntroActionsheet
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
			}
		}
		.container {
			background-color: #eef1f6;
            height: calc(100vh - 44px);
			.item {
				border-radius: 5px;
                height: 85px;
                padding: 0 16px;
				background-color: #ffffff;
                @include spacebetween;
                .left {
                    @include flex();
                    @include align-item();
                    // .photo {
                    //     @include photo(60px, 60px);
                    // }
                    .detail {
                        > div {
                            margin-left: 15px;
                            &:first-child {
                                @include fontsize16();
                                color: #333333;
                                span {
                                    font-size: 14px;
                                    color: #666666;
                                }
                            }
                            &:last-child {
                                margin-top: 12px;
                                @include fontsize13();
                                color: #888888;
                            }
                        }
                    }
                }
                svg {
                    width: 14px;
                    height: 14px;
                }
            }
            .chat-group {
                height: 50px;
                @include item-bgColor();
                @include spacebetween();
                @include item-padding-between();
                @include bd-bottom(15px,#dddddd);
                svg {
                    width: 14px;
                    height: 14px;
                }
                .switch {
                    -webkit-appearance: none;
                    appearance: none;
                    position: relative;
                    width: 52px;
                    height: 32px;
                    border: 1px solid #DFDFDF;
                    outline: 0;
                    border-radius: 16px;
                    box-sizing: border-box;
                    background-color: #DFDFDF;
                    -webkit-transition: background-color 0.1s, border 0.1s;
                    transition: background-color 0.1s, border 0.1s;
                }
                .switch:before {
                    content: " ";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 50px;
                    height: 30px;
                    border-radius: 15px;
                    background-color: #FDFDFD;
                    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                    transition: -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                    transition: transform 0.35s cubic-bezier(0.45, 1, 0.4, 1), -webkit-transform 0.35s cubic-bezier(0.45, 1, 0.4, 1);
                }
                .switch:after {
                    content: " ";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 30px;
                    height: 30px;
                    border-radius: 15px;
                    background-color: #FFFFFF;
                    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
                    -webkit-transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                    transition: -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                    transition: transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35), -webkit-transform 0.35s cubic-bezier(0.4, 0.4, 0.25, 1.35);
                }
                .switch:checked {
                    border-color: #ffe26d;
                    background-color: #ffe26d;
                }
                .switch:checked:before {
                    -webkit-transform: scale(0);
                    transform: scale(0);
                }
                .switch:checked:after {
                    -webkit-transform: translateX(20px);
                    transform: translateX(20px);
                }
            }
            .cancel-btn {
                height: 50px;
                @include flex-column;
                @include item-bgColor();
            }
		}
	}
</style>