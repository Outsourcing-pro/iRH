/* A7-2 */
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
		<!-- A7-1作业明细汇总 -->
		<div class="container">
			<!-- <div class="tab-bar">
				<div class="tab-item selected"><span>医嘱作业</span></div>
				<div class="tab-item"><span>非医嘱作业</span></div>
			</div>
			<div class="separate"></div> -->
			<div class="list">
				<div class="item">
					<div class="title">葡萄糖1111</div>
					<div class="date">
						<span>测量时间：</span>
						<span>2018-7-9</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeworkList",
  data() {
    return {
      msg: "阶段作业明细",
	  type: "cfmx",			//	A4-1，A5-1，A6-1的类别
    };
  },
  computed: {
  },
  created() {
  },
  methods: {
	  routerDetail() {
		  this.$router.push({path: '/homeworkDetail'});
	  },
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
