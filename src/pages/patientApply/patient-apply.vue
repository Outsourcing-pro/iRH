/* F患者申请
P1关注我的
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
		<scroller-base class="container" :data="data">
            <router-link tag="div" 
                class="person-info" 
                v-for="(item,index) in data"
                :to="{path:`/patientInfo/1/${item.UsersId}`}" 
                :key="index">
				<div class="left">
					<div class="photo" :style="'backgroundImage: url('+ item.UsersHead +')'"></div>
					<div class="name">
						<div>{{item.UsersName}}</div>
						<div class="detail">关注说明：{{item.sRemark}}</div>
						<div class="detail">申请关注时间：{{item.dActionTime}}</div>
					</div>
				</div>
				<div class="right">
					<div class="agree" @click.stop="agreeApply(item.UsersId)">同意</div>
                    <div @click.stop="rejectApply(item.UsersId)">已拒绝</div>
				</div>
			</router-link>
		</scroller-base>
	</div>
</template>

<script>
	import {GetApplyPatientList} from '../../api/interface';

    /**
     * TODO:同意/拒绝申请
     */
    export default {
        name: "PatientApply",
        data() {
            return {
                msg: "患者申请",
                photo: require("@/public/images/swiper3.jpg"),
                data: []
            };
        },
        computed: {
        },
        created() {
            GetApplyPatientList().then(res => {
                this.data = res.data;
            })
        },
        methods: {
            agreeApply(id) {

            },
            rejectApply(id) {

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "@/public/scss/common.scss";

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
                    .agree {
                        height: 30px;
                        line-height: 30px;
                        border-radius: 3px;
                        color: #ffffff;
                        background-color: #7BCF33;
                    }
                }
            }
        }
    }
</style>