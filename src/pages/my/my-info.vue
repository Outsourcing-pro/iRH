/* Q 我的信息 */

<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <span class="btn">保存</span>
            </div>
        </div>
		<div class="container">
            <div class="photo-box">
                <div class="photo"></div>
            </div>
            <div class="separate"></div>
            <div class="from-item-single">
                <div>
                    <div>账号</div>
                    <div>4567890</div>
                </div>
                <div>
                    <div>昵称</div>
                    <div>Fick</div>
                </div>
                <div>
                    <div>姓名</div>
                    <div>Fick</div>
                </div>
                <div>
                    <div>性别</div>
                    <div>
                        男
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>生日</div>
                    <div>
                        2018-8-6
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>    
                    </div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-single">
                <div>
                    <div>身份证</div>
                    <div>5461365498213465</div>
                </div>
                <div>
                    <div>电话</div>
                    <div>54654</div>
                </div>
                <div class="bd-bottom">
                    <div>所属地</div>
                    <div>
                        湖南省·长沙·雨花
                        <svg class="icon icon-jiantou-you" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>    
                    </div>
                </div>
            </div>
             <div class="from-item-multi">
                <div>地址</div>
                <textarea class="multi-area" placeholder="请输入"></textarea>
             </div>
            <div class="separate"></div>
            <div class="from-item-single">
                <div>
                    <div>邮箱</div>
                    <div>
						<input type="text" class="single-input" placeholder="请输入">
					</div>
                </div>
                <div>
                    <div>攻读专业</div>
                    <div>临床</div>
                </div>
                <div>
                    <div>毕业学校</div>
                    <div>长沙医学院</div>
                </div>
                <div>
                    <div>毕业时间</div>
                    <div>2018-8-8</div>
                </div>
                <div>
                    <div>学历</div>
                    <div>硕士</div>
                </div>
                <div>
                    <div>医师资格号</div>
                    <div>3546842</div>
                </div>
                <div>
                    <div>第一执业医院</div>
                    <div>
						<input type="text" class="single-input" placeholder="请输入">
					</div>
                </div>
                <div>
                    <div>第二执业医院</div>
                    <div>
						<input type="text" class="single-input" placeholder="请输入">
					</div>
                </div>
            </div>
            <div class="separate"></div>
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
            .bd-bottom {
                @include bd-bottom(15px);
            }
            .photo-box {
                @include item-bgColor();
                height: 106px;
                display: flex;
                justify-content: center;
                align-items: center;
            }
        }
	}

</style>
