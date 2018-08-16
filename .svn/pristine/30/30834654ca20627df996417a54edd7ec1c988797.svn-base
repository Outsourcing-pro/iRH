/** 就医记录_详情*/
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
		<scroller-base class="container" v-if="detail" data="detail">
            <div class="from-item-single">
                <div>
                    <div>场所</div>
                    <div>{{detail.PlaceName}}</div>
                </div>
                <div>
                    <div>病种</div>
                    <div>{{detail.DemandName}}</div>
                </div>
                <div>
                    <div>手机号码</div>
                    <div>{{detail.sFromNO}}</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-single">
                <div>
                    <div>医院/诊所</div>
                    <div>{{detail.Hospital}}</div>
                </div>
                <div>
                    <div>科室</div>
                    <div>{{detail.Room}}</div>
                </div>
                <div>
                    <div>主治医生</div>
                    <div>{{detail.MainDoctor}}</div>
                </div>
                <div>
                    <div>开始时间</div>
                    <div>{{detail.StartDate}}</div>
                </div>
                <div>
                    <div>结束时间</div>
                    <div>{{detail.EndDate}}</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-single">
                <div>
                    <div>状态</div>
                    <div class="status">{{detail.Status}}</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>备注</div>
                <div>{{detail.Remarks}}</div>
            </div>
		</scroller-base>
	</div>
</template>

<script>
	import {GetMyPatientMedicalRecords} from '../../api/interface';

    export default {
        name: "medicalRecordsDetail",
        data() {
            return {
                msg: "就医记录",
                detail: null
            };
        },
        created() {
			GetMyPatientMedicalRecords({
                pkid: this.$router.currentRoute.params.id
            }).then(res => {
                this.detail = res.data;
            })
        }
    }
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
            height: calc(100vh - 44x);
            .status {
                @include txt-deepgreen;
            }
        }
	}

</style>
