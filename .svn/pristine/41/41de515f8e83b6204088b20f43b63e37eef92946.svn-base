/* A9-2 iRH服务执行*/

<template>
	<div class="page">
		<!-- A7-1作业明细汇总 -->
		<div class="container">
			<div class="from-item-single">
				<div>
					<div>服务状态</div>
					<div>完成关闭</div>
				</div>
				<div>
					<div>开始时间</div>
					<div>2018-7-17 14:58:03</div>
				</div>
				<div>
					<div>结束时间</div>
					<div>2018-7-17 14:58:13</div>
				</div>
			</div>
			<div class="separate"></div>

			<div class="from-item-multi">
				<div>服务说明</div>
				<div>该服务已执行到位</div>
			</div>
			<div class="separate"></div>

			<div class="from-item-multi">
				<div>结论/建议</div>
				<div>平时要注意养护</div>
			</div>
			<div class="separate"></div>

			<div class="annex">附件下载</div>
			<div class="separate"></div>

		</div>
	</div>
</template>

<script>
export default {
  name: "IRHService",
  data() {
    return {
      msg: "服务执行",
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
		  .annex {
			  @include item-bgColor();
			  height: 50px;
			  line-height: 50px;
			  text-align: center;
			  font-size: 16px;
			  color: #05703D;
		  }
  	}
}
</style>
