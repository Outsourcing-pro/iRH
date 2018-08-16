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
            <div class="from-item-single">
                <div>
                    <div class="name">姓名：</div>
                    <div class="name">Fick</div>
                </div>
                <div>
                    <div>年龄：</div>
                    <div>90</div>
                </div>
                <div>
                    <div>性别：</div>
                    <div>男</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>健康状况</div>
                <div>良好,了谁看见对方skdllskdf ，塑料袋看风景流口水的房间里是的速度快放假是的良好,了谁看见对方skdllskdf ，塑料袋看风景流口水的房间里是的速度快放假是的</div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PatientManagement",
	data() {
		return {
            msg: "详情",
		};
    },
    created() {
        console.log(this.msg)
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.page {
        @include body-bgColor();
        .header {
            .back-nav {
                @include nav-top;
            }
        }
	}

</style>
