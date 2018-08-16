/**
E5详情_未支付
E6详情_租金到期
 */
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
            <div class="info">
                <div class="img" :style="'backgroundImage: url('+ photo +')'"></div>
                <div class="type1">订单未支付</div>
            </div>
                <div class="item">
                    <div class="item-title">设备信息</div>
                    <div class="item-header fs">{{data.Name}}</div>
                    <div class="item-body">
                        <div>规格型号：<span>{{data.Style}}</span></div>
                        <div>生产厂家：<span>{{data.Manufacturer}}</span></div>
                        <div>序列号：<span>{{data.SerialNumber}}</span></div>
                        <div>经销商：<span>{{data.Seller}}</span></div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">购买信息</div>
                    <div class="item-header">
                        <span>租金：<span class="nums">&yen;10</span><span>/天</span></span>
                        <span class="fssmall">现金</span>
                    </div>
                    <div class="item-body">
                        <div>押金：<span>2017-10-2</span></div>
                        <div>上次交租日期：<span>新松</span></div>
                        <div>已付租金到期：<span>201725879</span></div>
                        <div>合同日期：<span>yijia2217</span></div>
                        <div>单据号：<span>yijia2217</span></div>
                    </div>
                </div>
                <div>
                    <div class="separate"></div>
                    <div class="from-item-multi">
                        <div>备注</div>
                        <div>无</div>
                    </div>
                </div>
                <div class="item">
                    <div class="item-title">服务信息记录</div>
                    <div class="item-body">
                        <div>类型：<span>2017-10-2</span></div>
                        <div>项目：<span>新松</span></div>
                        <div>服务时间：<span>201725879</span></div>
                        <div>服务地点：<span>yijia2217</span></div>
                        <div>状态：<span>yijia2217</span></div>
                        <div>结论/建议：<span>yijia2217</span></div>
                        <div>客服专员：<span>yijia2217</span></div>
                    </div>
                </div>
                <div>
                    <div class="separate"></div>
                    <router-link class="from-item-single" tag="div" :to="{path:'/purchaseDetail/111'}">
                        <div>协议内容
                            <svg class="icon" aria-hidden="true">
                                <use xlink:href="#icon-jiantou-you"></use>
                            </svg>
                        </div>
                    </router-link>
                </div>
		</div>
	</div>
</template>

<script>
	import {GetDeviceDrugFoodInfo} from '../../api/interface';

    /**
     * todo:貌似接口返回不对
     */
    export default {
        name: "DrugEquipment",
        data() {
            return {
                msg: "药品与设备",
                photo: require("@/public/images/swiper3.jpg"),
                data: null
            };
        },
        created() {
            console.log(this.msg)
            GetDeviceDrugFoodInfo({
                type: this.$router.currentRoute.params.type, //产品类型 DeviceProduct为设备产品DrugFood为药品产品OtherProduct为其他产品
                pkid: this.$router.currentRoute.params.id //记录id
            }).then(res => {
                this.data = res.data;
            })
        },
        methods: {
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
        }
		.container {
            height: calc(100vh - 44px);
            overflow-y: auto;
            .info {
                height: 100px;
                padding: 0 20px;
				background-color: #ffffff;
                @include flex();
                @include align-item();
                .img {
                    width: 74px;
                    height: 74px;
                    background-color: #EFEFF4;
                    background-position: 100%;
                    background-size: cover;
                    margin-right: 15px;
                    color: #333333;
                }
                .type1 {
                    color: #DB3838;
                }
            }
            .item {
                @include item-bgColor;
                overflow: hidden;
                line-height: 1;
                .item-title {
                    line-height: 36px;
                    padding: 0 20px;
                    font-size: 14px;
                    color: #666666;
                    background-color: #f0eff3;
                }
                .item-header {
                    height: 50px;
                    padding: 0 20px;
                    @include deeper-gray;
                    @include spacebetween;
                    @include bd-bottom(0,#E0E0E0);
                    &.fs {
                        font-size: 18px;
                    }
                    .fssmall {
                        @include fontsize15;
                    }
                    .nums {
                        color: #DB3838;
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
            }
		}
	}
</style>