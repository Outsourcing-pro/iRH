/* R2 忘记密码 */

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
                <div>
                    <div>
						<input type="text" class="single-input ipt-pw" placeholder="原密码">
					</div>
                </div>
                <div>
                    <div>
						<input type="text" class="single-inputipt-pw" placeholder="新密码">
					</div>
                </div>
                <div>
                    <div>
						<input type="text" class="single-inputipt-pw" placeholder="确认密码">
					</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="login-out">确定</div>
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
            .ipt-pw {
                text-align: left;
            }
        }
	}

</style>
