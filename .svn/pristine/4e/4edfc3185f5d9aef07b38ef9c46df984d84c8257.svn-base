/* O1 关注查询 */
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

			<div class="search">
				<input type="text" placeholder="搜索">
				<div class="btn-search">搜索</div>
			</div>
			<!-- 概要 -->
			<div class="list">
				<div class="person-info">
					<div class="left" @click="detail('fick')">
						<div class="photo" :style="'backgroundImage: url('+ photo +')'"></div>
						<div class="name">
							<div>
								张大生
								<span class="nickname">(Fick)</span>
							</div>
							<div class="detail">加油努力只为更好的服务！</div>
						</div>
					</div>
					<div class="right" @click="watcher('fick')">
						<div class="watch">+ 关注</div>
					</div>
				</div>
			</div>

		</div>
		<watcher-info :opened.sync='viewMsg'></watcher-info>
	</div>
</template>

<script>
import WatcherInfo from './child/watch-info';
export default {
	name: "Search",
	components: {
        WatcherInfo
    },
	data() {
		return {
			msg: "关注查询",
			photo: require("@/public/images/swiper3.jpg"),
			viewMsg: false
		};
	},
	// computed: {
	// },
	methods: {
		detail(id) {
			this.$router.push({path: `/personDetail/${id}`})
		},
		watcher(id) {
			this.viewMsg = true;
		}
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
		}
		.search {
			@include item-padding-between;
			display: flex;
			align-items: center;
			input {
				@include txt-deep-gray;
				@include item-bgColor;
				@include border-radius;
				@include item-margin-top;
				@include item-margin-bottom;
				flex: 2;
				padding: 0 10px;
				margin-right: 12px;
				height: 36px;
				text-align: left;
				border: none;
				outline: none;
			}
			.btn-search {
				color: #7BCF33;
				font-size: 16px;
			}
		}
		.container {
			height: calc(100% - 44px);
			overflow-y: auto;
			.list {
				.person-info {
					height: 94px;
					@include item-bgColor();
					@include spacebetween();
					@include bd-bottom(15px,F8F8F8);
					@include item-padding-between();
					.left {
						@include flex();
						@include align-item();
						.photo {
							@include photo(60px, 60px);
						}
						.name {
							.nickname {
								color: #888888;
								font-size: 13px;
							}
							> div {
								line-height: 1;
								margin-left: 12px;
								&:first-child {
									font-size: 17px;
									color: #333333;
								}
								&.detail {
									color: #888888;
									margin-top: 10px;
									@include fontsize13();
								}
							}
						}
					}
					.right {
						@include fontsize14();
						color: #BABABA;
						width: 70px;
						text-align: center;
						.watch {
							width:70px;
							height:30px;
							line-height: 30px;
							background:rgba(255,255,255,1);
							border-radius:3px;
							font-size: 14px;
							border: 1px solid #DBDBDB;
							color: #333333;
						}
					}
				}
			}
		}
	}

</style>
