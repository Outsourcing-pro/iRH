/* S4 知识库详情 */
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
			详情。。。
		</div>

	</div>
</template>

<script>
export default {
	name: "IRHHome",
	data() {
		return {
			msg: "详情",
		};
	},
	// computed: {
	// },
	// mounted() {
	// 	console.log(this.swiper)
	// },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '../../public/scss/common.scss';

	.page {
		@include body-bgColor();
		height: 100%;
		.header {
			.back-nav {
				@include nav-top;
			}
			.search {
                @include item-padding-between;
                input {
                    @include txt-deep-gray;
                    @include item-bgColor;
                    @include border-radius;
                    @include item-margin-top;
                    @include item-margin-bottom;
                    width: 100%;
                    height: 36px;
                    text-align: center;
                    border: none;
                    outline: none;
                }
            }
		}
		.container {
			height: calc(100% - 49px);
			overflow-y: auto;
		}
	}

</style>
