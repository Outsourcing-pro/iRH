/* A7-2 作业明细*/

<template>
	<div class="page">
		<!-- A7-1作业明细汇总 -->
		<div class="container">
			<div class="list">
				<div class="item" @click="routerDetail">
					<div class="title">2018-7-16 10:44:23</div>
					<div class="info">
						<div>
							<span>收缩压(高)</span>
							<span>116</span>
						</div>
						<div>
							<span>舒张压(低)</span>
							<span>89</span>
						</div>
						<div>
							<span>心率</span>
							<span>90</span>
						</div>
					</div>
				</div>
				<div class="separate"></div>
				<div class="item">
					<div class="title">2018-7-16 10:44:23</div>
					<div class="info">
						<div>
							<span>收缩压(高)</span>
							<span>116</span>
						</div>
						<div>
							<span>舒张压(低)</span>
							<span>89</span>
						</div>
						<div>
							<span>心率</span>
							<span>90</span>
						</div>
					</div>
				</div>
				<div class="separate"></div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeworkList2",
  data() {
    return {
      msg: "阶段作业明细2",
	  	type: "cfmx",
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
			height: 115px;
			border-radius: 5px;
			overflow: hidden;
			.title {
				@include fontsize14();
				@include deeper-gray();
				background:rgba(244,254,236,1);
				height: 35px;
				line-height: 35px;
				padding: 0 20px;
			}
			.info {
				@include spaceevenly();
				height: 80px;
				>div {
					@include flex-column();
					width: 33.333%;
					&:not(:first-child) {
						@include bd-left();
					}
					>span{
						&:first-child {
							font-size: 15px;
							@include txt-light-gray();
						}
						&:last-child {
							font-size: 20px;
							@include deeper-gray();
						}
					}
				}
			}
		}
	}
  }
}
</style>
