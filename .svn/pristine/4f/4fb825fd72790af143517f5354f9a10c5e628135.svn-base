/* J iRH之星 */

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

            <div class="list">
                <div class="item">

                    <div class="person" @click="toDetail('0xowierwe')">
                        <div class="photo"></div>          
                        <div class="name">卫护士</div>          
                    </div>
                    <div class="watcher" @click="addWatcher">+ 关注</div>          
                    
                </div>
                <div class="item">

                    <div class="person" @click="toDetail('0xowierwe')">
                        <div class="photo"></div>          
                        <div class="name">卫护士</div>          
                    </div>
                    <div class="watcher">取消关注</div>          
                    
                </div>
            </div>

		</div>

        <watcher-info :opened.sync='viewMsg'></watcher-info>

	</div>
</template>

<script>
import WatcherInfo from './child/watch-info'

export default {
    name: "IRHStar",
    components: {
        WatcherInfo
    },
	data() {
		return {
            msg: "iRH之星",
            viewMsg: false
		};
    },
    created() {
        console.log(this.msg)
    },
    methods: {
        toDetail(id) {
            this.$router.push({path: `/starDetail/${id}`});
        },
        addWatcher() {
            this.viewMsg = true;
            console.log(this.viewMsg)
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
                    @include bd-color();
                    margin: 15px 10px;
                    padding: 0 15px 0 20px;
                    height: 78px;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    border-radius: 5px;
                    .person {
                        flex: 2;
                        display: flex;
                        align-content: center;
                        line-height: 55px;
                        .name {
                            margin-left: 11px;
                        }
                    }
                    .watcher {
                        @include bd-color();
                        font-size: 14px;
                        color: #333333;
                        border-radius: 3px;
                        width: 70px;
                        height: 30px;
                        line-height: 30px;
                        text-align: center;
                    }
                }
            }
        }
	}

</style>
