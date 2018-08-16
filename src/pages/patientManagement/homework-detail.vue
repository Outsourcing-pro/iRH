/* A7-2 作业明细*/

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
			<div class="from-item-single">
				<div>
					<div>收缩压·(高)</div>
					<div>120</div>
				</div>
				<div>
					<div>舒张压·(低)</div>
					<div>80</div>
				</div>
				<div>
					<div>心率(次/分)</div>
					<div>70</div>
				</div>
			</div>
			<div class="separate"></div>
			<div class="from-item-single">
				<div>
					<div>测量日期</div>
					<div>2018-7-16</div>
				</div>
				<div>
					<div>测量时间</div>
					<div>11:24:14</div>
				</div>
				<div>
					<div>操作者</div>
					<div>本人</div>
				</div>
				<div>
					<div>测量设备</div>
					<div>手臂</div>
				</div>
				<div>
					<div>测量体位</div>
					<div>座位</div>
				</div>
				<div>
					<div>测量场所</div>
					<div>居家</div>
				</div>
			</div>

			<div class="separate"></div>
			<div class="from-item-multi">
				<div>描述</div>
				<div>该患者一切正常</div>
			</div>

			<div class="separate"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeworkList1",
  data() {
    return {
      msg: "作业详情",
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
