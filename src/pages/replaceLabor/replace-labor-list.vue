/* B首页_代劳 */
<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <svg class="icon add" aria-hidden="true" @click.stop="operate">
                    <use xlink:href="#icon-nav_xinzeng"></use>
                </svg>
            </div>
        </div>
		<div class="container">
            <div v-for="(item,index) in data" :key="index">
                <div class="item">
                    <div class="item-header">{{item.ReplyDate}}<span class="status1">{{item.Status}}</span></div>
                    <router-link class="item-body" tag="div" :to="{path:'/replaceLaborDetail'}">
                        <div>需代劳人：<span>xxxxxxxxxxxxxxxxxxxxxx</span></div>
                        <div>问题：<span>{{item.Content}}</span></div>
                    </router-link>
                </div>
                <div class="separate"></div>
            </div>
            <!-- <div class="item">
                <div class="item-header">2017-08-16 14:31:51<span class="status">已完成</span></div>
                <router-link class="item-body" tag="div" :to="{path:'/replaceLaborDetail'}">
                    <div>需代劳人：<span>金星星</span></div>
                    <div>问题：<span>客户回访</span></div>
                </router-link>
            </div>
            <div class="separate"></div>
            <div class="item">
                <div class="item-header">2017-08-16 14:31:51<span class="status">已转iRH服务</span></div>
                <router-link class="item-body" tag="div" :to="{path:'/replaceLaborDetail'}">
                    <div>需代劳人：<span>金星星</span></div>
                    <div>问题：<span>客户回访</span></div>
                </router-link>
            </div>
            <div class="separate"></div> -->
		</div>
        <div class="operate-mask" v-show="opened">
            <div class="operate-box">
                <router-link tag="div" :to="{path:'/recordEditWork/1'}">iRH服务</router-link>
                <router-link tag="div" :to="{path:'/replaceLaborSearch/1'}">每日作业</router-link>
                <router-link tag="div" :to="{path:'/replaceLaborSearch/2'}">数据录入</router-link>
            </div>
        </div>
	</div>
</template>

<script>
	import {GetIRHServiceList} from '../../api/interface';

    export default {
        name: "ReplaceLaborList",
        data() {
            return {
                msg: "代劳",
                opened: false,
                data: []
            };
        },
        created() {
            console.log(this.msg)
            GetIRHServiceList().then(res => {
                this.data = res.data;
            })
        },
        methods: {
            operate() {
                this.opened = true;
            },
            toHealthRecord() {
                this.$router.push({path: '/healthRecord'})
            }
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
                .add {
                    position: absolute;
                    top: 12px;
                    right: 15px;
                    left: auto;
                }
            }
        }
		.container {
            @include item-padding-between;
            height: calc(100vh - 44px);
            padding-top: 16px;
            overflow-y: auto;
            .item {
                @include border-radius;
                @include item-bgColor;
                @include bd-color;
                overflow: hidden;
                line-height: 1;
                .item-header {
                    height: 50px;
                    background-color: #F5F5F5;
                    padding: 0 16px 0 20px;
                    @include deeper-gray;
                    @include spacebetween;
                    .status,
                    .status1 {
                        @include fontsize15;
                        @include txt-light-gray();
                    }
                    .status1 {
                        color: #F62F2F;
                    }
                }
                .item-body {
                    padding: 0 20px;
                    @include fontsize15;
                    >div {
                        @include txt-light-gray;
                        >span {
                            @include txt-deep-gray;
                        }
                        &:first-child {
                            margin-top: 20px;
                        }
                        &:last-child {
                            margin:  16px 0 25px 0;
                        }
                    }
                }
            }
        }
        .operate-mask {
            @include position-absolute;
            background-color: rgba(0,0,0,0.5);
            .operate-box {
                position: absolute;
                top: 40px;
                right: 11px;
                width: 144px;
                height: 135px;
                border-radius: 3px;
                background-color: #ffffff;
            }
            .operate-box:before {
                content: '';
                position: absolute;
                top: -6px;
                right: 7px;
                width: 0;
                height: 0;
                border-right: 7px solid transparent;
                border-bottom: 7px solid #E6E6E6;
                border-left: 7px solid transparent;
            }
            .operate-box:after {
                content: '';
                position: absolute;
                top: -5px;
                right: 7px;
                width: 0;
                height: 0;
                border-right: 6px solid transparent;
                border-left: 6px solid transparent;
                border-bottom: 6px solid #fff;
            }
            .operate-box div {
                height: 45px;
                line-height: 45px;
                text-align: center;
                @include bd-bottom(0,#E6E6E6);
                color: #212121;
                font-size: 17px;
            }
            .operate-box div:last-child {
                border-bottom: none;
            }
        }
	}
</style>