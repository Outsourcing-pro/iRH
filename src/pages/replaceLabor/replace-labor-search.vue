/* B3代劳_每日作业
B3-1患者选择 */
<template>
    <div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
            <div class="search">
                <input type="text" placeholder="搜索" v-model="query">
            </div>
        </div>
		<div class="title-bar">
			<div>客户名称</div>
			<div>电话</div>
		</div>
        <scroller-base class="container" :data="data">
            <div class="from-item-single">
				<router-link tag="div" :to="{path:'/recordDailyWork'}" v-for="(item,index) in data" :key="index">
					<div>{{item.CustName}}{{item.CardNo}}</div>
					<div>{{item.Mobile}}</div>
				</router-link>
            </div>
        </scroller-base>
    </div>
</template>

<script>
	import {MyCustomerList} from '../../api/interface';

	export default {
		name: "ReplaceLaborSearch",
		data() {
			return {
				msg: "每日作业",
				query: '',
				data: []
			};
		},
		created() {
			this.renderPage();
		},
		methods: {
            renderPage() {
                MyCustomerList({
                    query: this.query
                }).then(res => {
                    this.data = res.data;
                })
			},
			search() {

            },
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
			.search {
				@include item-padding-between;
				background-color: #ffffff;
				input {
					@include txt-deep-gray;
					@include border-radius;
					background-color: #efeff4;
					margin: 6px 0;
					width: 100%;
					height: 36px;
					text-align: center;
					border: none;
					outline: none;
				}
			}
		}
		.title-bar {
			padding: 0 68px 0 59px;
			height: $itemHeight;
			line-height: $itemHeight;
			font-weight: bold;
			@include item-bgColor;
			@include spacebetween;
			@include bd-bottom(15px, $c: #d9d9d9);
		}
		.container {
			background-color: #eef1f6;
            height: calc(100vh - 142px);
		}
	}
</style>