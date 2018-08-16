/* O3 个人信息 */

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
                    <div>账号：</div>
                    <div>4567890</div>
                </div>
                <div>
                    <div>昵称：</div>
                    <div>Fick</div>
                </div>
                <div>
                    <div>性别：</div>
                    <div>男</div>
                </div>
                <div>
                    <div>生日：</div>
                    <div>2018-8-6</div>
                </div>
                <div>
                    <div>第一执业医院</div>
                    <div>湘雅附一医院</div>
                </div>
                <div>
                    <div>从事工作专业：</div>
                    <div>临床</div>
                </div>
                <div>
                    <div>第二执业医院</div>
                    <div>客服主管</div>
                </div>
                <div>
                    <div>科室：</div>
                    <div>心血管内科</div>
                </div>
                <div>
                    <div>职称：</div>
                    <div>无</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>签名</div>
                <div>无</div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>个人简介</div>
                <div>无</div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>所属地</div>
                <div>湖南省·长沙·雨花</div>
            </div>
		</div>
	</div>
</template>

<script>
export default {
	name: "StarDetail",
	data() {
		return {
            msg: "医生信息",
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
        .container {
            height: calc(100vh - 44px);
            overflow-y: auto;
        }
	}

</style>
