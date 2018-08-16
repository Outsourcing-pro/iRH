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
			<div class="tab-bar">
				<div class="tab-item selected"><span>服务表单</span></div>
				<div class="tab-item"><span>服务执行</span></div>
			</div>
			<div class="separate"></div>
			<!-- 筛选 -->
            <div class="filter">
                <div class="filter" @click="toService">
                    {{ setActive }}
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-xialakuangjiantou"></use>
                    </svg>
                </div>
            </div>

			<div class="separate"></div>
			<router-view name="IRHFormR"></router-view>
		</div>
	</div>
</template>

<script>
export default {
  name: "HomeworkList1",
  data() {
    return {
	  msg: "iRH服务",
	  setActive: 'kkk'
    };
  },
  computed: {
	getRouter() {
		return this.$router.currentRoute;
	},
  },
  created() {
	  console.log('slkdjflksd')
  },
  methods: {
	  toService() {
		  //   iRH服务执行
		  this.$router.push({path: `${this.getRouter.path}/iRHService`});
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
		.filter {
			@include item-bgColor();
			@include flex-center();
			@include deeper-gray();
			font-size: 16px;
			height: 40px;
			margin: 0 10px;
			border-radius: 5px;
		}
  }
}
</style>
