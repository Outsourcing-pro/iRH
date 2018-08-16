/* B1代劳_详情 */
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
                    <div>需代劳人</div>
                    <div>李丽</div>
                </div>
                <div>
                    <div>联系方式</div>
                    <div>13028492134</div>
                </div>
                <div>
                    <div>服务起始时间</div>
                    <div>2015-12-24 14:57</div>
                </div>
                <div>
                    <div>服务结束时间</div>
                    <div>2015-12-24 14:57</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>服务地点</div>
                <div>长沙市芙蓉区东庆街19号</div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>问题</div>
                <div>制氧机检测</div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>备注</div>
                <div>无</div>
            </div>
            <div class="reply-title">回复</div>
            <div class="reply-content">
                <div class="date">2015/12/24 15:56:37</div>
                <div class="content">电话沟通，确认电池问题，更换后正常开机。</div>
            </div>
		</div>
	</div>
</template>

<script>
    export default {
        name: "ReplaceLaborList",
        data() {
            return {
                msg: "代劳",
            };
        },
        created() {
            console.log(this.msg)
        },
        methods: {
            toHealthRecord() {
                this.$router.push({path: '/healthRecord'})
            }
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
            .reply-title {
                height: 35px;
                line-height: 35px;
                padding: 0 16px;
                color: #999999;
                @include fontsize14;
            }
            .reply-content {
                @include item-bgColor;
                @include fontsize16;
                padding: 18px 16px;
                min-height: 112px;
                line-height: 1;
                .date {
                    color: #555555;
                }
                .content {
                    color: #333333;
                    padding-top: 14px;
                }
            }
		}
	}
</style>