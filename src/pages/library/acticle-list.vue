/* S3 知识库 */
<template>
	<div class="page">

		<div class="container">
			 <div class="header">
				<!-- 导航 -->
				<div class="back-nav" @click="$router.back()">
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-nav_fanhui_baise"></use>
					</svg>{{ msg }}
				</div>
			</div>

			<!-- 列表 -->
			<div class="list">
				<router-link tag="div" :to="{path: '/acticleDetail/6789kdj'}" class="item" >
					<div class="pre-img"></div>
					<div class="acticle-info">
						<div class="title">血压，到底该量左手还是右手？出现这个问题，要小心了</div>
						<div class="date">2018-8-8</div>
					</div>
				</router-link>
				<div class="item">
					<div class="pre-img"></div>
					<div class="acticle-info">
						<div class="title">血压，到底该量左手还是</div>
						<div class="date">2018-8-8</div>
					</div>
				</div>
				<div class="item">
					<div class="pre-img"></div>
					<div class="acticle-info">
						<div class="title">血压，到底该量左手还</div>
						<div class="date">2018-8-8</div>
					</div>
				</div>
				<div class="item">
					<div class="pre-img"></div>
					<div class="acticle-info">
						<div class="title">血压，到底该量左手还是右手？出现这个问题，要小心了</div>
						<div class="date">2018-8-8</div>
					</div>
				</div>
				<div class="item">
					<div class="pre-img"></div>
					<div class="acticle-info">
						<div class="title">血压，到底该量左手还是右手？出现这个问题，要小心了</div>
						<div class="date">2018-8-8</div>
					</div>
				</div>
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
			<div>
				<svg class="icon icon-label_huanzhezixun" aria-hidden="true">
                  	<use xlink:href="#icon-label_huanzhezixun"></use>
                </svg>
				患者咨询
			</div>
			<div class="active">
				<svg class="icon icon-label_zhishiku_xiangying" aria-hidden="true">
                  	<use xlink:href="#icon-label_zhishiku_xiangying"></use>
                </svg>
				知识库
			</div>
			<div>
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
			msg: "",
		};
	},
	computed: {
		getRouter() {
            return this.$router.currentRoute;
		},
		getType() {
			return this.getRouter.params.type
		}
	},
	created() {
		this.msg = this.getType
	},
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
			.search {
                @include item-padding-between;
                input {
                    @include txt-deep-gray;
                    @include item-bgColor;
                    @include border-radius;
                    @include item-margin-top;
                    @include item-margin-bottom;
                    width: 100%;
                    height: 36px;
                    text-align: center;
                    border: none;
                    outline: none;
                }
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
			.list {
				@include item-bgColor();
				padding: 0 10px;
				.item {
					@include bd-bottom(10px);
					display: flex;
					height: 120px;
					align-items: center;
					.pre-img {
						@include body-bgColor();
						width: 108px;
						height: 79px;
						border-radius: 5px;
						background-size: 100% 100%;
					}
					.acticle-info {
						flex: 2;
						height: 79px;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						margin-left: 15px;
						.title {
							@include fontsize16;
							@include deeper-gray;
							overflow: hidden;
							text-overflow: ellipsis;
							display: -webkit-box;
							-webkit-line-clamp: 3;
							-webkit-box-orient: vertical;
						}
						.date {
							@include fontsize13;
							@include txt-light-gray;
						}
					}
					&:last-child {
						&::after {
							border: none;
						}
					}
				}
			}
		}
	}

</style>
