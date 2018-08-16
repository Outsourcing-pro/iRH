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
        <scroller-load 
        class="container"
        :data="items"
        ref="pagingScroller"
        @loadData="renderData"
        :pagingOption="pagingOption">
            <div v-for="(item,index) in items" :key="index">
                <div class="item">
                    <div @click="toDetail">
                        <div class="item-header">{{index}}.{{item.NickName}}</div>
                        <div class="item-body">
                            <div>年龄：<span>{{item.Age}}岁</span></div>
                            <div>性别：<span>{{item.Sex}}</span></div>
                        </div>
                    </div>
                    <div class="item-footer">
                        <div @click="toHealthRecord(item.FK_CustID)">健康档案</div>
                        <div @click="toRecord(item)">待录</div>
                    </div>
                </div>
                <div class="separate"></div>
            </div>
        </scroller-load>
			<!-- <div class="list">
                <div class="item">
                    <div @click="toDetail">
                        <div class="item-header">1.许文龙</div>
                        <div class="item-body">
                            <div>年龄：<span>28岁</span></div>
                            <div>性别：<span>男</span></div>
                        </div>
                    </div>
                    <div class="item-footer">
                        <div @click="toHealthRecord">健康档案</div>
                        <div @click="toRecord">待录</div>
                    </div>
                </div>
                <div class="separate"></div>
                <div class="item">
                    <div @click="toDetail">
                        <div class="item-header">1.许文龙</div>
                        <div class="item-body">
                            <div>年龄：<span>28岁</span></div>
                            <div>性别：<span>男</span></div>
                        </div>
                    </div>
                    <div class="item-footer">
                        <div>健康档案</div>
                        <div>待录</div>
                    </div>
                </div>
                <div class="separate"></div>
                <div class="item">
                    <div @click="toDetail">
                        <div class="item-header">1.许文龙</div>
                        <div class="item-body">
                            <div>年龄：<span>28岁</span></div>
                            <div>性别：<span>男</span></div>
                        </div>
                    </div>
                    <div class="item-footer">
                        <div>健康档案</div>
                        <div>待录</div>
                    </div>
                </div>
                <div class="separate"></div>
            </div> -->

        <record-actionsheet class="as-record" 
            ref="filter"
            :patient="patient"
            :opened.sync="openAsRecord"></record-actionsheet>
	</div>
</template>

<script>
	import {GetMyPatientList} from '../../api/interface';
    import RecordActionsheet from './child/record-actionsheet.vue';

    export default {
        name: "PatientManagement",
        data() {
            return {
                msg: "患者管理",
                openAsRecord: false,
                items: [],
                patient: null,
				pagingOption: {
                    api: GetMyPatientList,
                    params: {
                        id: "16", //当前登录医生用户的ID
                        name: '' //按患者姓名或者账号模糊查询
                    }
				}
            };
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
                        this.items = this.items.concat(res.data.items)
                        
					}
				})
            },
            toDetail() {
                this.$router.push({path: '/patientDetail'})
            },
            toHealthRecord(cid) {
                this.$router.push({path: `/healthRecord/${cid}`})
            },
            toRecord(obj) {
                this.openAsRecord = true;
                this.patient = obj;
                console.log(this.patient)
            }
        },
        components: {
            RecordActionsheet
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
            @include item-padding-between;
            height: calc(100vh - 112px);
            overflow-y: auto;
            .item {
                @include border-radius;
                @include item-bgColor;
                @include bd-color;
                overflow: hidden;
                .item-header {
                    @include deeper-gray;
                    height: 50px;
                    @include spacebetween;
                    background-color: rgba(245,245,245,1);
                    padding: 0 20px;
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
                            margin:  10px 0 20px;
                        }
                    }
                }
                .item-footer {
                    @include flex;
                    @include txt-deepgreen;
                    @include bd-top;
                    @include fontsize15;
                    height: 46px;
                    font-weight: 600;
                    >div {
                        width: 50%;
                        line-height: 46px;
                        text-align: center;
                        &:last-child {
                            @include bd-left();
                        }
                    }
                }
            }
		}
        .as-record {
            @include position-absolute();
            z-index: 2;
        }
	}

</style>
