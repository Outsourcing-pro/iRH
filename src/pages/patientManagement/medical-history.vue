/* A4-4住院病历病史 */

<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
            <div class="separate"></div>
        </div>
		<div class="container">

            <div class="list">

                <!-- 查看全部 -->
                <div class="item">
                    <div class="title">
                        <span class="name">1.现病史现病史</span>
                    </div>
                    <div class="main-info">
                        <div>
                            <span class="name">数据信息：</span>
                            <span class="info">3-4年前发现高血脂症，未系统治疗。 无肝炎、结核病史。无外伤史，无药物史，无输血史。</span>
                        </div>
                        <div>
                            <span class="name">备注：</span>
                            <span class="info">曾行面部右颌“粉廇”手术。</span>
                        </div>
                    </div>
                </div>
                <div class="separate"></div>

            </div>
		</div>
	</div>
</template>

<script>

export default {
    name: "HealthEventList",
	data() {
		return {
            msg: "住院病史",
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
            height: calc(100vh - 154px);
            overflow-y: auto;
            .list {
                .item {
                    @include item-bgColor();
                    @include border-radius();
                    @include bd-color();
                    @include item-margin(0, 10px, 0, 10px);
                    .title {
                        @include bd-bottom();
                        @include spacebetween();
                        @include item-padding-between(20px);
                        .name {
                            @include deeper-gray();
                            @include fontsize18();
                            padding: 12px 0;
                        }
                    }
                    .main-info {
                        @include fontsize15();
                        padding: 20px;
                        >div {
                            @include flex();
                            min-height: 24px;
                            line-height: 24px;
                            &:last-child {
                                margin-top: 10px;
                            }
                        }
                        .name {
                            @include txt-light-gray();
                            min-width: 75px;
                        }
                        .info {
                            @include deeper-gray();
                        }
                    }
                }
            }
        }
	}

</style>
