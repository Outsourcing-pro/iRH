/* H1新闻咨询 */

<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
            </div>
        </div>
		<div class="container">

            随便一点什么

		</div>
	</div>
</template>

<script>

export default {
    name: "NewsDetail",
	data() {
		return {
            msg: "详情",
		};
    },
    created() {
        console.log(this.msg)
    },
    methods: {
        toDetail(id) {
            this.$router.push({path: `/serviceDetail/${id}`});
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
                .add {
                    position: absolute;
                    top: 12px;
                    right: 15px;
                    left: auto;
                }
            }
        }
        .container {
            height: 100vh;
            overflow-y: auto;
        }
	}

</style>
