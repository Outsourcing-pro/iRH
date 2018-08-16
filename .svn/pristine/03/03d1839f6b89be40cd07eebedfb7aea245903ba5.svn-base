/* H1新闻咨询 */

<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav">
                <svg class="icon" aria-hidden="true" @click="$router.back()">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <router-link tag="div" :to="{path: '/addService'}">
                    <svg class="icon add" aria-hidden="true">
                        <use xlink:href="#icon-nav_xinzeng"></use>
                    </svg>
                </router-link> 
            </div>
        </div>
		<div class="container">

            <div class="list">
                <div class="item" @click="toDetail('0xowierwe')">
                    <div class="row1">
                        <div class="status">未读</div>
                        <div class="title">iRH注册账号流程</div>
                    </div>
                    <div class="row2">
                        <div class="source">新闻咨询</div>
                        <div class="date">2018-8-6 11:33</div>
                    </div>
                </div>
                <div class="item" @click="toDetail('0xowierwe')">
                    <div class="row1">
                        <div class="status readed">未读</div>
                        <div class="title">iRH注册账号流程</div>
                    </div>
                    <div class="row2">
                        <div class="source">新闻咨询</div>
                        <div class="date">2018-8-6 11:33</div>
                    </div>
                </div>
            </div>

		</div>
	</div>
</template>

<script>

export default {
    name: "NewsList",
	data() {
		return {
            msg: "新闻咨询",
		};
    },
    created() {
        console.log(this.msg)
    },
    methods: {
        toDetail(id) {
            this.$router.push({path: `/newsDetail/${id}`});
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
            height: calc(100vh - 44px);
            overflow-y: auto;
            .list {
                .item {
                    @include item-bgColor();
                    @include bd-bottom(10px);
                    padding: 0 10px;
                    height: 78px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    .row1 {
                        display: flex;
                        .status {
                            width: 50px;
                            height: 22px;
                            background-color: #BDE799;
                            text-align: center;
                            line-height: 22px;
                            font-size: 14px;
                            color: #333333;
                            border-radius: 2px;
                        }
                        .readed {
                            color: #878787;
                            background-color: #ededed;
                        }
                        .title {
                            font-size: 18px;
                            color: #202020;
                            margin-left: 10px;
                        }
                    }
                    .row2 {
                        display: flex;
                        font-size: 13px;
                        color: #888888;
                        margin-top: 7px;
                        .date {
                            margin-left: 10px;
                        }
                    }
                }
            }
        }
	}

</style>
