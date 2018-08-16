/* L2 投诉与建议详情*/

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
		
		<div class="container">
			<div class="from-item-multi">
				<div>
					<div>内容</div>
					<div>客户给我的问题反馈我为什么没有收到，这是什么原因？</div>
				</div>
			</div>
			<div class="separate"></div>

			<div class="from-item-single">
				<div>
					<div>联系方式</div>
					<div>13566655566</div>
				</div>
				<div>
					<div>创建日期</div>
					<div>2015-12-24</div>
				</div>
				<div>
					<div>状态</div>
					<div class="light-red">未回复</div>
				</div>
			</div>

			<div class="separate-title">回复</div>
			<div class="from-item-multi">
				<div>2018-7-26 16:15:55</div>
				<div>电话沟通，确认电池问题，更换后开机正常</div>
			</div>

			<div class="separate"></div>
		</div>
	</div>
</template>

<script>
export default {
  name: "ComplaintDetail",
  data() {
    return {
      msg: "详情",
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
	
	.light-red {
		color: red;
	}
  }
}
</style>
