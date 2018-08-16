/* 我的 */
<template>
	<div class="page">
		<div class="container">
            <!-- 顶部大背景 -->
			<div class="header-bg">
                <router-link tag="div" class="notify" :to="{path: '/noticeList'}">
                    <svg class="icon icon-wo_xiaoxi" aria-hidden="true">
                        <use xlink:href="#icon-wo_xiaoxi"></use>
                    </svg>
                    <div class="badge">13</div>
                </router-link>
                <div class="photo"></div>
                <div class="nickname">Fick</div>
            </div>

            <!-- 提示 -->
            <div class="tips">
                <div>
                    <svg class="icon icon-zhishiku-yixuezhishi" aria-hidden="true">
                        <use xlink:href="#icon-zhishiku-yixuezhishi"></use>
                    </svg>
                    您的资料未完善，请继续完善！
                </div>
                <svg class="icon icon-danchuang-quxiao" aria-hidden="true">
                    <use xlink:href="#icon-danchuang-quxiao"></use>
                </svg>
            </div>

            <div class="separate"></div>
            <div class="from-item-single">
				<router-link tag="div" :to="{path: '/noticeList'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_zuijinxiaoxi"></use>
                        </svg>
                        最近消息
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
				<router-link tag="div" :to="{path: '/medicalAid'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_wodehaoyou"></use>
                        </svg>
                        我的好友
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
				<router-link tag="div" :to="{path: '/search'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_guanzhuchaxun"></use>
                        </svg>
                        关注查询
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
				<router-link tag="div" :to="{path: '/patientApply'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_guanzhuwode"></use>
                        </svg>
                        关注我的
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
			</div>

            <div class="separate"></div>
            <div class="from-item-single">
				<router-link tag="div" :to="{path: '/myInfo'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_wodexinxi"></use>
                        </svg>
                        我的信息
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
				<router-link tag="div" :to="{path: '/setting'}">
					<div class="flex">
                        <svg class="icon big-icon" aria-hidden="true">
                            <use xlink:href="#icon-wo_shezhi"></use>
                        </svg>
                        设置
                    </div>
					<div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
				</router-link>
            </div>

		</div>

        <!-- 底部导航 -->
		<div class="nav-bar">
			<router-link tag="div" :to="{path:'/'}">
				<svg class="icon icon-label_wodezuoye" aria-hidden="true">
                  <use xlink:href="#icon-label_wodezuoye"></use>
                </svg>
				我的工作室
			</router-link>
			<router-link tag="div" :to="{path:'/patientConsult'}">
				<svg class="icon icon-label_huanzhezixun" aria-hidden="true">
                  	<use xlink:href="#icon-label_huanzhezixun"></use>
                </svg>
				患者咨询
			</router-link>
			<router-link tag="div" :to="{path:'/library'}">
				<svg class="icon icon-label_zhishiku" aria-hidden="true">
                  	<use xlink:href="#icon-label_zhishiku"></use>
                </svg>
				知识库
			</router-link>
			<div class="active">
				<svg class="icon icon-label_wo_xiangying" aria-hidden="true">
                  	<use xlink:href="#icon-label_wo_xiangying"></use>
                </svg>
				我
			</div>
		</div>

	</div>
</template>

<script>
export default {
	name: "IRHHome",
	data() {
		return {
			msg: "iRH服务",
		};
	},
	// computed: {
	// },
	// mounted() {
	// 	console.log(this.swiper)
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../public/scss/common.scss';

	.page {
		@include body-bgColor();
		height: 100%;
		.header {
			.back-nav {
				@include nav-top;
			}
        }
        .nav-bar {
			@include nav-bar;
			@include spacearound;
			@include bd-top;
			@include item-bgColor;
			>div {
				@include flex-column();
				font-size: 11px;
				color: #999999;
			}
			.active {
				color: #7BCF33;
			}
		}
		.container {
            .big-icon {
                width: 18px;
                height: 18px;
                margin-right: 10px;
            }
            .flex {
                display: flex;
                align-items: center;
            }
			height: calc(100% - 49px);
            overflow-y: auto;
            .header-bg {
                background-color: #7BCF33;
                height: 189px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                .notify {
                    position: absolute;
                    top: 10px;
                    right: 15px;
                    .badge {
                        position: absolute;
                        top: 0;
                        right: -10px;
                        width: 22px;
                        height: 16px;
                        background-color: #F23737;
                        text-align: center;
                        line-height: 15px;
                        color: #ffffff;
                        font-size: 11px;
                        border-radius: 10px;
                    }
                }
                .photo {
                    width: 80px;
                    height: 80px;
                }
                .nickname {
                    font-size: 17px;
                    color: #ffffff;
                    margin-top: 13px;
                }
            }
            .tips {
                height: 35px;
                padding: 0 10px;
                background-color: #F3FAED;
                color: #05703D;
                font-size: 14px;
                font-family: PingFangSC-Light;
                display: flex;
                justify-content: space-between;
                align-items: center;
                .icon-danchuang-quxiao {
                    width: 15px;
                }
            }
		}
	}

</style>
