/* A7-2 作业明细*/

<template>
	<div class="page">
		<!-- A7-1作业明细汇总 -->
		<div class="container">
			<div class="list">
				<div class="item" @click="routerHomeworkList">
					<div class="title">葡萄糖1111</div>
					<div class="date">
						<span>测量时间：</span>
						<span>2018-7-9</span>
					</div>
				</div>
				<div class="separate"></div>
				<div class="item" @click="routerHomeworkList">
					<div class="title">葡萄糖1111</div>
					<div class="date">
						<span>测量时间：</span>
						<span>2018-7-9</span>
					</div>
				</div>
				<div class="separate"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeworkList1",
  data() {
    return {
      msg: "阶段作业明细1",
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
	  routerHomeworkList() {
		  //   作业列表
		  this.$router.push({path: `${this.getRouter.path}/homeworkList2`});
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
