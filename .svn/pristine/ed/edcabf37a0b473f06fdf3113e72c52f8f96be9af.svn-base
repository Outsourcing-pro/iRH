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
                <input type="text" placeholder="搜索">
            </div>
        </div>
		<scroller-load class="container"
            :data="data"
			ref="pagingScroller"
			@loadData="renderData"
			:pagingOption="pagingOption">
            <div v-for="(item,index) in items" :key="index">
                <div class="item">
                    <div class="item-header">{{item.Name}}<span class="type1">{{item.Status==1?"已支付":item.Status==0?"未支付":""}}</span></div>
                    <div class="item-body">
                        <div>规格型号：<span>{{item.Style}}</span></div>
                        <div>生产厂家：<span>{{item.Manufacturer}}</span></div>
                        <div>序列号：<span>{{item.SerialNumber}}</span></div>
                        <div>经销商：<span>{{item.Seller}}</span></div>
                    </div>
                    <router-link class="item-footer" tag="div" :to="{path:`/drugEquipmentDetail/${item.sType}/${item.PK_ID}`}">
                        租金：<span>&yen;10</span><span>/天</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </router-link>
                </div>
                <div class="separate"></div>
            </div>
            <!-- <div class="item">
                <div class="item-header">新松呼吸D20<span class="type2">已付租金到期</span></div>
                <div class="item-body">
                    <div>规格型号：<span>D20 PLUS</span></div>
                    <div>生产厂家：<span>新松</span></div>
                    <div>序列号：<span>201725879</span></div>
                    <div>经销商：<span>yijia2217</span></div>
                </div>
                <router-link class="item-footer" tag="div" :to="{path:'/drugEquipmentDetail/111'}">
                    租金：<span>&yen;10</span><span>/天</span>
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jiantou-you"></use>
                    </svg>
                </router-link>
            </div> -->
		</scroller-load>
	</div>
</template>

<script>
	import {GetAllDeviceDrugFoodList} from '../../api/interface';

    export default {
        name: "DrugEquipment",
        data() {
            return {
                msg: "药品与设备",
                items: [],
                pagingOption: {
                    api: GetAllDeviceDrugFoodList,
                    params: {
                        custId: "custid", //患者客户ID this.$router.currentRoute.params.id
                    }
				}
            }
        },
        created() {
            console.log(this.msg)
        },
        methods: {
            renderData(ajaxPromise) {
                ajaxPromise.then(res => {
                    if (res.code === app.errok) {
                        if (res.PageIndex === 0) {
                            this.items = []
                        }
						this.items = this.data.concat(res.data.items)
					}
				})
            },
            // toDetail() {
            //     this.$router.push({path: '/patientDetail'})
            // },
            // toHealthRecord() {
            //     this.$router.push({path: '/healthRecord'})
            // }
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
		.container {
            height: calc(100vh - 112px);
            overflow-y: auto;
            .item {
                @include item-bgColor;
                overflow: hidden;
                line-height: 1;
                .item-header {
                    @include deeper-gray;
                    height: 50px;
                    @include spacebetween;
                    padding: 0 20px;
                    @include bd-bottom(0,#E0E0E0);
                    .type1,.type2,.type3,.type4 {
                        font-size: 14px;
                        padding: 6px 7px;
                        border-radius: 2px;
                        color: #333333;
                    }
                    .type1 {
                        background-color: #E0C393;
                    }
                    .type2 {
                        background-color: #E7AD99;
                    }
                    .type3 {
                        background-color: #BDE799;
                    }
                    .type4 {
                        @include txt-light-gray;
                        background-color: #EEEEEE;
                    }
                }
                .item-body {
                    padding: 20px 20px 23px 20px;
                    @include fontsize15;
                    @include bd-bottom(0,#E0E0E0);
                    >div {
                        margin-bottom: 16px;
                        @include txt-light-gray;
                        >span {
                            @include txt-deep-gray;
                        }
                        &:last-child {
                            margin-bottom: 0;
                        }
                    }
                }
                .item-footer {
                    @include flex;
                    // @include txt-deepgreen;
                    @include fontsize15;
                    @include txt-light-gray;
                    background-color: #F8F8F8;
                    height: 45px;
                    align-items: center;
                    justify-content: flex-end;
                    svg {
                        width: 12px;
                        height: 12px;
                        padding: 0 15px 0 8px;
                    }
                    // font-weight: 600;
                    // >div {
                    //     width: 50%;
                    //     line-height: 46px;
                    //     text-align: center;
                    //     &:last-child {
                    //         @include bd-left();
                    //     }
                    // }
                }
            }
		}
	}
</style>