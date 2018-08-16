/* L3 新增投诉与建议*/

<template>
	<div class="page">
		<div class="header">
            <!-- 导航 -->
            <div class="back-nav">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
				<div class="add" @click="confirm">确认</div> 
            </div>
        </div>
		
		<div class="container">
			<div class="from-item-multi">
				<div>内容</div>
				<textarea class="multi-area" placeholder="请输入投诉或建议内容"></textarea>
			</div>
			<div class="separate"></div>

			<div class="from-item-single">
				<div>
					<div>联系方式</div>
					<div>
						<input type="text" class="single-input" placeholder="请输入联系方式">
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script>
export default {
  name: "AddService",
  data() {
    return {
      msg: "新增",
	  type: "cfmx"
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
	  confirm() {
		  console.log('success')
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
	  .add {
		position: absolute;
		top: 12px;
		right: 15px;
		left: auto;
	}
    }
  }
  .container {
    height: calc(100vh - 44px);
    overflow-y: auto;
	
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
