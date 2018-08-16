/* B4-2数据录入 */
<template>
    <div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
			<div class="tab-bar">
				<div class="tab-item selected"><span>就医记录</span></div>
				<div class="tab-item"><span>仪器设备</span></div>
				<div class="tab-item"><span>药品食品</span></div>
			</div>
            <div class="search">
                <input type="text" placeholder="搜索">
            </div>
        </div>
		<scroller-load 
			class="container"
			:data="items"
			ref="pagingScroller"
			@loadData="renderData"
			:pagingOption="pagingOption">
            <div class="separate"></div>
			<div v-for="(item,index) in items" :key="index">
				<div class="item">
					<div class="item-hd">
						<span class="tag" :class="{type1:item.iType==2}">{{item.iType==2?'住院':item.iType==3?'门诊':''}}</span>{{item.DemandName}}
					</div>
					<router-link class="item-bd" tag="div" :to="{path:'/medicalRecordsDetail/007'}">
						<div>住院/门诊号：<span class="content">{{item.Number}}</span></div>
						<div>医院/门诊：<span class="content">{{item.Hospital}}</span></div>
						<div>日期：<span class="content">{{item.StartDate}}</span></div>
					</router-link>
					<div class="item-ft">
						<router-link tag="div" :to="{path:`/medicalRecordsHistory/${item.PK_ID}`}">病例({{item.BLCount}})</router-link>
						<router-link tag="div" :to="{path:`/medicalRecordsCheck/${item.PK_ID}`}">检查({{item.JCCount}})</router-link>
						<router-link tag="div" :to="{path:`/medicalRecordsPrescription/${item.PK_ID}`}">处方({{item.CFCount}})</router-link>
					</div>
				</div>
	            <div class="separate"></div>
			</div>
		</scroller-load>
        <!-- <div class="container">
            <div class="separate"></div>
            <div class="item">
                <div class="item-hd">
					<div><span class="tag">门诊</span>肺气肿</div>
					<div><span class="btn">删除</span><span class="btn">编辑</span></div>
                </div>
				<router-link class="item-bd" tag="div" :to="{path:'medicalRecordsDetail'}">
                    <div>住院/门诊号：<span class="content">1111111</span></div>
                    <div>医院/门诊：<span class="content">省第一人民医院</span></div>
                    <div>日期：<span class="content">2017-11-05</span></div>
                </router-link>
                <div class="item-ft">
                    <router-link tag="div" :to="{path:'medicalRecordsHistory'}">病例(3)</router-link>
                    <router-link tag="div" :to="{path:'medicalRecordsHistory'}">检查(1)</router-link>
                    <router-link tag="div" :to="{path:'medicalRecordsPrescription'}">处方(2)</router-link>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
	import {GetMyPatientMedicalRecordsList,GetDeviceDrugFoodList} from '../../api/interface';

	export default {
		name: "DataEntry",
		data() {
			return {
				msg: "数据录入",
				currentIndex: 0,
				items: [],
				pagingOption: {
                    api: GetMyPatientMedicalRecordsList,
                    params: {
                        custid: "", //患者客户ID
                        type: 0,
                        recordNum:''
                    }
				}
			};
		},
		created() {
			this.pagingOption.params.custid = this.$router.currentRoute.params.cid;
		},
		methods: {
			renderData(ajaxPromise) {
                ajaxPromise.then(res => {
                    if (res.code === app.errok) {
                        if (res.PageIndex === 0) {
                            this.items = []
                        }
						this.items = this.items.concat(res.data.items)
					}
				})
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
		.container {
			padding: 0 10px;
			background-color: #eef1f6;
            // height: calc(100vh - 153px);
			.item {
				border-radius: 5px;
				font-size: 15px;
				background-color: #ffffff;
				.item-hd {
					font-size: 18px;
					font-weight: bold;
					height: 50px;
					line-height: 50px;
					@include deeper-gray;
					@include spacebetween();
					@include bd-bottom;
					@include item-padding-between(20px);
					.tag {
						display: inline-block;
						width: 50px;
						height: 22px;
						line-height: 22px;
						border-radius: 2px;
						text-align: center;
						margin-right: 10px;
						font-weight: normal;
						background-color: #bde799;
						@include txt-deep-gray;
						@include fontsize15;
					}
					.btn {
						display: inline-block;
						width: 45px;
						height: 27px;
						line-height: 27px;
						border-radius: 2px;
						text-align: center;
						font-weight: normal;
						color: #888888;
						@include txt-deep-gray;
						@include fontsize15;
						background-color: #F8F8F8;
						border: 1px solid #E0E0E0;
						&:first-child {
							margin-right: 15px;
						}
					}
				}
				.item-bd {
					padding: 20px 0;
					color: #888888;
					> div {
						padding: 0 20px 16px 20px;
						&:last-child {
							padding-bottom: 0;
						}
					}
					.content {
						color: #333333;
					}
				}
				.item-ft {
					@include flex;
					@include bd-top;
					@include fontsize15;
					height: 45px;
					color: #333333;
					background-color: #F8F8F8;
					> div {
						flex: 1;
						line-height: 45px;
						text-align: center;
						@include bd-left();
						&:first-child::before {
							content: "";
							position: absolute;
							height: 100%;
							left: 0;
							border-left: none;
						}
					}
				}
			}
		}
	}
</style>