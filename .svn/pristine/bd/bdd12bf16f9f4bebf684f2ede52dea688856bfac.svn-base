/* R1 设置 */

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
            <div class="separate"></div>
            <div class="from-item-single">
                <router-link tag="div" :to="{path: '/forgetPassword'}">
                    <div>修改密码</div>
                    <div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>  
                    </div>
                </router-link>
                <div>
                    <div>意见反馈</div>
                    <div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>  
                    </div>
                </div>
                <div>
                    <div>关于我们</div>
                    <div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>  
                    </div>
                </div>
                <div>
                    <div>服务协议</div>
                    <div>
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>  
                    </div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="login-out">退出登录</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "StarDetail",
	data() {
		return {
            msg: "设置",
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
            .btn {
                position: absolute;
                right: 15px;
                top: 0;
                bottom: 0;
                width: 64px;
                line-height: 44px;
                @include fontsize16;
                text-align: right;
            }
        }
        .container {
            height: calc(100vh - 44px);
            overflow-y: auto;
            .login-out {
                @include item-bgColor();
                height: 50px;
                line-height: 50px;
                color: #202020;
                font-size: 17px;
                text-align: center;
            }
        }
	}

</style>
