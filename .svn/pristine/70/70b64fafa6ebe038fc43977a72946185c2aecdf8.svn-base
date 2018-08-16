/* A4-1门诊病历病历详情	 */
/* A4-3住院病历 */
/* A5-1实验室|专项|体格检查明细 */
/* A6-1处方明细 */

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
		<div class="container" v-if="type != 'zymx'">
			<!-- 个人信息概要 -->
			<div class="person-info">
				<div class="left">
					<div class="photo" :style="'backgroundImage: url('+ photo +')'"></div>
					<div class="name">
						<div>张大生</div>
						<div>门诊号：15258624</div>
					</div>
				</div>
				<div class="right">
					患者详情
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-jiantou-you"></use>
					</svg>
				</div>
			</div>
			<div class="separate"></div>

			<!-- A4-1门诊病历详情 -->
			<div v-if="type==='mzbl'">
				<div class="from-item-single">
					<div>
						<div>治疗病种</div>
						<div>继发性高血压，肺气肿</div>
					</div>
					<div>
						<div>病历原始号</div>
						<div>62534678928374</div>
					</div>
					<div>
						<div>iRH扫描件编号</div>
						<div>sdw123456</div>
					</div>
					<div>
						<div>医院</div>
						<div>湘雅附二医院</div>
					</div>
					<div>
						<div>科室</div>
						<div>呼吸内科</div>
					</div>
					<div>
						<div>主治医生</div>
						<div>吴医生</div>
					</div>
					<div>
						<div>门诊日期</div>
						<div>2018-7-4</div>
					</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>主述</div>
					<div>无</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>病史</div>
					<div>病人无不良病史</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>体检</div>
					<div>健康</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>实验室及特殊检查</div>
					<div>无</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>初步诊断</div>
					<div>高血压病</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>处理意见</div>
					<div>无</div>
				</div>
			</div>

			<!-- A4-3住院病历 -->
			<div v-else-if="type==='zybl'">
				<div class="from-item-single">
					<div>
						<div>治疗病种</div>
						<div>继发性高血压，肺气肿继发性高血压，肺气肿继发性高血压，肺气肿继发性高血压，肺气肿继发性高血压，肺气肿</div>
					</div>
					<div>
						<div>病历原始号</div>
						<div>62534678928374</div>
					</div>
					<div>
						<div>iRH扫描件编号</div>
						<div>sdw123456</div>
					</div>
					<div>
						<div>医院</div>
						<div>湘雅附二医院</div>
					</div>
					<div>
						<div>科室</div>
						<div>呼吸内科</div>
					</div>
					<div>
						<div>主治医生</div>
						<div>吴医生</div>
					</div>
					<div>
						<div>主管护士</div>
						<div>李孝利</div>
					</div>
					<div>
						<div>入院日期</div>
						<div>2018-7-4</div>
					</div>
					<div>
						<div>病历记录日期</div>
						<div>2018-7-4</div>
					</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>病历摘要</div>
					<div>无</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>诊断</div>
					<div>病人无不良病史</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>处理方案</div>
					<div>健康</div>
				</div>

				<div class="separate"></div>
				<div class="from-item-single">
					<div @click="routerDetail('bs')">
						<div>病史</div>
						<div>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-jiantou-you"></use>
							</svg>
						</div>
					</div>
					<div @click="routerDetail('tgjc')">
						<div>体格检查</div>
						<div>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-jiantou-you"></use>
							</svg>
						</div>
					</div>
					<div @click="routerDetail('qxjc')">
						<div>实验室及器械检查结果</div>
						<div>
							<svg class="icon" aria-hidden="true">
								<use xlink:href="#icon-jiantou-you"></use>
							</svg>
						</div>
					</div>
				</div>
			</div>

			<!-- A5-1实验室|专项|体格检查明细 -->
			<div v-else-if="type==='jcmx'">
				<div class="from-item-single">
					<div>
						<div>关联病种</div>
						<div>继发性高血压，肺气肿</div>
					</div>
					<div>
						<div>检查类型</div>
						<div>血常规</div>
					</div>
					<div>
						<div>原始检查单号</div>
						<div>46525853</div>
					</div>
					<div>
						<div>iRH扫描件编号</div>
						<div>sdw123456</div>
					</div>
					<div>
						<div>医院/门诊</div>
						<div>湘雅附二医院</div>
					</div>
					<div>
						<div>检查科室</div>
						<div>呼吸内科</div>
					</div>
					<div>
						<div>报告人</div>
						<div>吴医生</div>
					</div>
					<div>
						<div>门诊日期</div>
						<div>2018-7-4</div>
					</div>
				</div>

				<div class="separate"></div>
				<div class="from-item-multi">
					<div>检查结论</div>
					<div>健康</div>
				</div>

				<div class="separate"></div>
				<div class="report-detail" @click="routerCheckProject">
					检查项目
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-jiantou-you"></use>
					</svg>
				</div>
			</div>
			
			<!-- A6-1处方明细 -->
			<div v-else-if="type==='cfmx'">
				<div class="from-item-single">
					<div>
						<div>处方目标</div>
						<div>继发性高血压，肺气肿</div>
					</div>
					<div>
						<div>原始检查单号</div>
						<div>46525853</div>
					</div>
					<div>
						<div>扫描件编号</div>
						<div>sdw123456</div>
					</div>
					<div>
						<div>医院</div>
						<div>湘雅附二医院</div>
					</div>
					<div>
						<div>科室</div>
						<div>呼吸内科</div>
					</div>
					<div>
						<div>医生</div>
						<div>吴医生</div>
					</div>
					<div>
						<div>创建日期</div>
						<div>2018-7-4</div>
					</div>
				</div>
				
				<div class="separate"></div>
				<div class="report-detail" @click="routerPrescription">
					处方明细
					<svg class="icon" aria-hidden="true">
						<use xlink:href="#icon-jiantou-you"></use>
					</svg>
				</div>
			</div>
            <div class="separate"></div>

			<!-- 附件 -->
			<div class="annex">
				<div>附件</div>
				<div>查看</div>
			</div>

			<div class="separate"></div>
		</div>

		<!-- A7-1作业明细汇总 -->
		<div class="container" v-else>
			<div class="tab-bar">
				<div class="tab-item selected"><span>医嘱作业</span></div>
				<div class="tab-item"><span>非医嘱作业</span></div>
			</div>
			<div class="separate"></div>
			<!-- A7-2， A7-3 -->
			<router-view name="homeworkDetails"></router-view>
		</div>
	</div>
</template>

<script>
export default {
  name: "CaseHistoryDetail",
  data() {
    return {
      msg: "门诊病历",
      photo: require("@/public/images/swiper3.jpg"),
	  type: "cfmx",
    };
  },
  computed: {
	getRouter() {
		return this.$router.currentRoute;
	},
	setActive() {
		return this.type === 'jcmx' ? '检查明细' : this.type === 'cfmx' ? '药物处方' 
				: this.type === 'zybl' ? '住院病历' : 'mzbl';
	}
},
  created() {
	  this.type = this.getRouter.params.type;
    console.log(this.msg, this.getRouter);
  },
  methods: {
	  routerDetail(type) {
		  this.$router.push({path: '/medicalHistory'});
	  },
	  routerCheckProject() {
		  this.$router.push({path: '/checkProject'});
	  },
	  routerPrescription() {
		  this.$router.push({path: '/prescription'});
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
    .annex {
      @include item-bgColor();
      @include item-padding-between();
      @include spacebetween();
      height: 50px;
      :last-child {
        width: 70px;
        height: 30px;
        background-color: #efeff4;
        text-align: center;
        line-height: 30px;
        color: #05703d;
        font-size: 16px;
        border: 1px solid #05703d;
        border-radius: 2px;
        box-sizing: content-box;
      }
    }
    .person-info {
      @include item-bgColor();
      @include item-padding-between();
      @include spacebetween();
      height: 80px;
      .left {
        @include flex();
        @include align-item();
        .photo {
          @include photo(60px, 60px);
        }
        .name {
          > div {
            margin-left: 12px;
            &:first-child {
              @include fontsize18();
              color: #333333;
            }
            &:last-child {
              @include fontsize15();
              color: #666666;
            }
          }
        }
      }
      .right {
        @include fontsize16();
        color: #888888;
      }
	}
	.report-detail {
		@include item-bgColor();
		@include spacebetween();
		@include item-padding-between();
		height: 50px;
	}
	/* 作业明细列表 */
	.list {
		margin: 0 10px;
		.item {
			@include item-bgColor();
			@include flex();
			flex-direction: column;
			justify-content: center;
			padding: 15px 20px;
			border-radius: 5px;
			min-height: 80px;
			.title {
				@include fontsize18();
				@include deeper-gray();
			}
			.date {
				@include fontsize15();
				color: #888888;
				margin-top: 5px;
				>span{
					&:last-child {
						@include deeper-gray();
					}
				}
			}
		}
	}
  }
}
</style>
