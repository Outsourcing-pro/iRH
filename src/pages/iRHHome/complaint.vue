/* L1投诉与建议 */

<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <router-link tag="div" :to="{path: '/addComplaint'}">
                    <svg class="icon add" aria-hidden="true">
                        <use xlink:href="#icon-nav_xinzeng"></use>
                    </svg>
                </router-link> 
            </div>
            <div class="separate"></div>
        </div>
		<div class="container">

            <div class="list">

                <!-- 查看全部 -->
                <div class="item" @click="toDetail('0xowierwe')">
                    <div class="title">
                        <span class="name">创建日期：2018-7-26 16:04:47</span>
                        <span class="date light-red">未处理</span>
                    </div>
                    <div class="main-info">
                        内容：客户给我的问题反馈我为什么没有收到，这是什么原因？
                    </div>
                </div>
                <div class="separate"></div>
                <div class="item">
                    <div class="title">
                        <span class="name">创建日期：2018-7-26 16:04:47</span>
                        <span class="date">已处理</span>
                    </div>
                    <div class="main-info">
                        内容：客户给我的问题反馈我为什么没有收到，这是什么原因？
                    </div>
                </div>
                <div class="separate"></div>
            </div>
		</div>
	</div>
</template>

<script>

export default {
    name: "Complaint",
	data() {
		return {
            msg: "投诉与建议",
		};
    },
    created() {
        console.log(this.msg)
    },
    methods: {
        toDetail(id) {
            this.$router.push({path: `/complaintDetail/${id}`});
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
                        background-color: #F4FEEC;
                        height: 35px;
                        .name {
                            @include deeper-gray();
                            @include fontsize14();
                            padding: 12px 0;
                        }
                        .date {
                            @include txt-light-gray();
                            @include fontsize14();
                        }
                        .light-red {
                            color: red;
                        }
                    }
                    .main-info {
                        @include fontsize16();
                        padding: 20px;
                        color: #212121;
                    }
                }
            }
        }
	}

</style>
