/** 就医记录_处方*/
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
        <div class="filter" @click="changeType">全部
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xialakuangjiantou"></use>
            </svg>
        </div>
		<div class="container">
            <div v-for="(item,index) in data" :key="index">
				<div class="item">
                    <div class="item-hd">{{item.TypeName}}</div>
                    <div class="item-bd">
                        <div>场所：<span>{{item.PlaceName}}</span></div>
                        <div>原始处方号：<span>{{item.sOriginalNo}}</span></div>
                        <div>扫描件编号：<span>{{item.sScanNo}}</span></div>
                        <div>处方目标：<span>{{item.sDemandNames}}</span></div>
                        <div>医院：<span>{{item.sHospital}}</span></div>
                        <div>科室：<span>{{item.sDepartment}}</span></div>
                    </div>
                    <div class="item-ft">
                        <div class="date">{{item.dDateTime}}</div>
                        <div>医生：<span>{{item.sDoctor}}</span></div>
                    </div>
                </div>
				<div class="separate"></div>
			</div>
		</div>

        <prescription-actionsheet ref="filter"
			class="as-prescription"
            :currentType="type"
            :opened.sync="openAsPrescription"
            @prescriptionAction="prescriptionAction"></prescription-actionsheet>
	</div>
</template>

<script>
	import {GetHealthEventPrescriptionList} from '../../api/interface';
    import prescriptionActionsheet from './child/prescription-actionsheet.vue';

	export default {
		name: "medicalRecordsPrescription",
		data() {
			return {
                msg: "就医记录",
                openAsPrescription: false,
				data: [],
				type: 0
			}
		},
		created() {
            this.renderPage();
        },
        methods: {
			changeType(index){ //打开切换类型弹窗
                this.openAsPrescription = !this.openAsPrescription;
            },
            renderPage(){
				GetHealthEventPrescriptionList({
					pkid: this.$router.currentRoute.params.id,
					type: this.type
                }).then(res => {
                    this.data = res.data;
                })
            },
            prescriptionAction(index){ //切换类型
				this.type = index;
                this.data = [];
                this.renderPage();
            }
        },
        components: {
            prescriptionActionsheet
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
		}
        .filter {
			height: 40px;
			line-height: 40px;
			text-align: center;
			background-color: #ffffff;
			@include bd-top;
			@include fontsize15;
		}
		.container {
			padding: 10px;
            background-color: #eef1f6;
            height: calc(100vh - 84px);
			.item {
				border-radius: 5px;
				background-color: #ffffff;
				.item-hd {
					font-size: 18px;
					height: 50px;
					padding: 0 20px;
					font-weight: bold;
                    @include spacebetween;
                    @include bd-bottom;
                    border-left: 1px solid #7BCF33;
				}
				.item-bd {
					padding: 20px 0;
					@include fontsize15;
					> div {
						@include txt-light-gray;
						> span {
							@include txt-deep-gray;
						}
						padding: 0 20px 16px 20px;
						&:last-child {
							padding-bottom: 0;
						}
					}
				}
				.item-ft {
					height: 45px;
					line-height: 45px;
                    padding: 0 20px;
                    font-size: 14px;
                    background-color: #F8F8F8;
					@include spacebetween;
					@include bd-top;
					@include txt-light-gray;
					.date {
						color: #333333;
					}
					span {
						@include txt-deep-gray;
					}
				}
			}
		}
		/*todo*/
        .as-prescription {
            @include position-absolute(84px, 0, 0, 0);
            z-index: 2;
        }
	}
</style>