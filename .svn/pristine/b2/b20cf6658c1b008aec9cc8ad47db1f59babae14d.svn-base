/* A7-2 作业明细*/

<template>
	<div class="page">
		<!-- A7-1作业明细汇总 -->
		<div class="container">
			<div class="from-item-single">
				<div>
					<div>系统事件流水号</div>
					<div>skdf213543123</div>
				</div>
				<div>
					<div>服务单号</div>
					<div>13543123</div>
				</div>
				<div>
					<div>服务类型</div>
					<div>健康器械</div>
				</div>
			</div>
			<div class="separate"></div>

			<div class="from-item-single">
				<div>
					<div>客户账号</div>
					<div>43123</div>
				</div>
				<div>
					<div>姓名</div>
					<div>丽丽</div>
				</div>
				<div>
					<div>性别</div>
					<div>男</div>
				</div>
				<div>
					<div>日期</div>
					<div>2018-7-16</div>
				</div>
				<div>
					<div>时间</div>
					<div>16:16:52</div>
				</div>
				<div>
					<div>服务场所</div>
					<div>家庭</div>
				</div>
			</div>
			<div class="separate"></div>

			<div class="from-item-single">
				<div>
					<div>金额</div>
					<div>200.00元</div>
				</div>
				<div>
					<div>本次服务费用</div>
					<div>366.00元</div>
				</div>
				<div>
					<div>客服专员工号</div>
					<div>gh354336</div>
				</div>
				<div>
					<div>客服专员姓名</div>
					<div></div>
				</div>
			</div>

			<div class="separate-title">服务费</div>
			<div class="from-item-single">
				<div>
					<div class="col">
						<span>试用</span>
						<span>商品编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
				<div>
					<div class="col">
						<span>安装</span>
						<span>商品编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
			</div>

			<div class="separate-title">零配件费</div>
			<div class="from-item-single">
				<div>
					<div class="col">
						<span>轮子</span>
						<span>商品编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
				<div>
					<div class="col">
						<span>螺丝</span>
						<span>商品编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
				<div>
					<div class="col">
						<span>把手</span>
						<span>商品编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
			</div>

			<div class="separate-title">预计费用汇总</div>
			<div class="from-item-single">
				<div>
					<div class="col">
						<span>iRH服务券</span>
						<span>服务券编号：215452554</span>
					</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
			</div>

			<div class="separate-title">收费汇总</div>
			<div class="from-item-single">
				<div>
					<div>应收项目</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
				<div>
					<div>预收项目</div>
					<div>
						<svg class="icon" aria-hidden="true">
							<use xlink:href="#icon-jiantou-you"></use>
						</svg>
					</div>
				</div>
				<div>
					<div>客服专员代收项目</div>
					<div>轮椅、把手</div>
				</div>
				<div>
					<div>客服专员代收金额</div>
					<div>100.00元</div>
				</div>
			</div>
			<div class="from-item-multi bd-top">
				<div>说明</div>
				<div>该服务执行到位！</div>
			</div>

			<div class="separate"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: "IRHForm1",
  data() {
    return {
      msg: "健康事件1",
	  type: "cfmx",
    };
  },
  computed: {
	getRouter() {
		return this.$router.currentRoute;
	},
  },
  created() {
  },
  methods: {
	  routerForm2() {
		  //   作业列表
		  //   this.$router.push({path: `${this.getRouter.path}/homeworkList2`});
	  }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import "@/public/scss/common.scss";

.page {
	@include body-bgColor();

  	.container {
		  .bd-top {
			  @include bd-top();
			  position: relative;
			  overflow: hidden;
			  &::before {
				  left: 15px;
			  }
		  }
  	}
}
</style>
