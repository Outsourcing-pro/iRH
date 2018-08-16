<template>
	<div class="page">
		<div class="header">
			<div class="back-nav" @click="$router.back()">
				<svg class="icon" aria-hidden="true">
					<use xlink:href="#icon-nav_fanhui_baise"></use>
				</svg>{{ msg }}
			</div>
		</div>
		<div class="container">
				<!-- 导航 -->
			<!-- router menu -->
			<div class="main-menu">
				<router-link class="menu" tag="div" :to="{path:'/myService'}">
					<svg class="icon icon-shouye_huanzheguanli" aria-hidden="true">
						<use xlink:href="#icon-irhfuwu_woyaofuwu"></use>
					</svg>
					我要服务
				</router-link>
				<router-link class="menu" tag="div" :to="{path:'/NewsList'}">
					<svg class="icon icon-shouye_dailao" aria-hidden="true">
						<use xlink:href="#icon-irhfuwu_xinwenzixun"></use>
					</svg>
					新闻咨询
				</router-link>
				<router-link class="menu" tag="div" :to="{path:'/iRHStar'}">
					<svg class="icon icon-shouye_wodebeiwanglu" aria-hidden="true">
						<use xlink:href="#icon-irhfuwu_irhzhixing"></use>
					</svg>
					iRH之星
				</router-link>
				<router-link class="menu" tag="div" :to="{path:'/creditList'}">
					<svg class="icon icon-shouye_yijihuzhu" aria-hidden="true">
						<use xlink:href="#icon-irhfuwu_gonglaobao"></use>
					</svg>
					功劳簿
				</router-link>
				<router-link class="menu" tag="div" :to="{path:'/complaint'}">
					<svg class="icon icon-shouye_yijihuzhu" aria-hidden="true">
						<use xlink:href="#icon-irhfuwu_tousuyujianyi"></use>
					</svg>
					投诉与建议
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
			<router-link tag="div" :to="{path:'/'}">
				<svg class="icon icon-label_huanzhezixun" aria-hidden="true">
                  	<use xlink:href="#icon-label_huanzhezixun"></use>
                </svg>
				患者咨询
			</router-link>
			<router-link tag="div" :to="{path:'/library'}">
				<svg class="icon icon-label_zhishiku_xiangying" aria-hidden="true">
                  	<use xlink:href="#icon-label_zhishiku_xiangying"></use>
                </svg>
				知识库
			</router-link>
			<div class="active">
				<svg class="icon icon-label_wo" aria-hidden="true">
                  	<use xlink:href="#icon-label_wo"></use>
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
			height: calc(100% - 49px);
			overflow-y: auto;
			.main-menu {
				display: flex;
				justify-content: space-between;
				flex-wrap: wrap;
				height: 435px;
				margin: 15px;
				.menu {
					@include flex-column;
					@include item-bgColor;
					width: 48%;
					height: 127px;
					border-radius: 5px;
					border: 1px solid #D9D9D9;
				}
				.icon {
					width: 28.5px;
					height: 28.5px;
					margin-bottom: 10px;
				}
			}
		}
	}

</style>
