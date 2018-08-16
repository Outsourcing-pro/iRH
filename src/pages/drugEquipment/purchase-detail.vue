/**
E5详情_未支付
E6详情_租金到期
 */
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
            <!-- <div>
                <div class="from-item-single">
                    <div>
                        <div>名称</div>
                        <div>青霉素</div>
                    </div>
                    <div>
                        <div>规格型号</div>
                        <div>MK53654</div>
                    </div>
                    <div>
                        <div>单位</div>
                        <div>台</div>
                    </div>
                    <div>
                        <div>数量</div>
                        <div>1</div>
                    </div>
                    <div>
                        <div>状态</div>
                        <div>已过期</div>
                    </div>
                </div>
                <div class="separate"></div>
                <div class="from-item-multi">
                    <div>备注</div>
                    <div>无</div>
                </div>
            </div> -->

            <div>
                <div class="from-item-single">
                    <div>
                        <div>名称</div>
                        <div>青霉素</div>
                    </div>
                    <div>
                        <div>规格型号</div>
                        <div>MK53654</div>
                    </div>
                    <div>
                        <div>生产厂家</div>
                        <div>上古药业</div>
                    </div>
                    <div>
                        <div>产地</div>
                        <div>山东</div>
                    </div>
                    <div>
                        <div>销售商</div>
                        <div>健康大药房</div>
                    </div>
                </div>
                <div class="separate"></div>
                <div class="from-item-single">
                    <div>
                        <div>单位</div>
                        <div>台</div>
                    </div>
                    <div>
                        <div>数量</div>
                        <div>1</div>
                    </div>
                    <div>
                        <div>购买日期</div>
                        <div>2017-10-11</div>
                    </div>
                    <div>
                        <div>生产日期</div>
                        <div>2017-10-11</div>
                    </div>
                </div>
                <div class="separate"></div>
                <div class="from-item-single">
                    <div>
                        <div>批号</div>
                        <div>65878997</div>
                    </div>
                    <div>
                        <div>药品电子监管码</div>
                        <div>65987754899001</div>
                    </div>
                    <div>
                        <div>有效期至</div>
                        <div>2017-10-11</div>
                    </div>
                    <div>
                        <div>储存条件</div>
                        <div>无</div>
                    </div>
                    <div>
                        <div>零售价</div>
                        <div>无</div>
                    </div>
                 </div>
                <div class="separate"></div>
                <div class="from-item-multi">
                    <div>备注</div>
                    <div>无</div>
                </div>
            </div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "DrugEquipment",
        data() {
            return {
                msg: "药品与设备",
                photo: require("@/public/images/swiper3.jpg")
            };
        },
        created() {
            console.log(this.msg)
        },
        methods: {
        }
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