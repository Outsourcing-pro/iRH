<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <span class="btn" @click.stop="deletemsg">清空</span>
            </div>
        </div>
		<div class="container">
            <router-link class="item" tag="div" :to="{path:`/memoEdit/1/${item.PK_ID}`}" v-for="(item,index) in data" :key="index">
                <div class="item-title txt-hide">{{item.Content}}</div>
                <div class="item-date">{{item.CreateTime}}</div>
            </router-link>
		</div>
        <router-link class="footer" tag="div" :to="{path:'/memoEdit/0/0'}">新增</router-link>
	</div>
</template>

<script>
	import {GetPatientNoteList,DeletePatientNote} from '../../api/interface';

    export default {
        name: "MemoList",
        data() {
            return {
                msg: "我的备忘录",
                data: []
            };
        },
        created() {
            this.renderPage();
        },
        methods: {
            renderPage() {
                GetPatientNoteList().then(res => {
                    this.data = res.data;
                })
            },
            deletemsg() {
                if (this.data.length == 0) {
                    return;
                }

                let arr = [];
                for (let index = 0; index < this.data.length; index++) {
                    arr.push(this.data[index].PK_ID)
                }
                //TODO
                // let ids = this.data.forEach()
                DeletePatientNote({
                    PK_ID: arr.join()
                }).then(res => {
                    if (res.code == 200) {
                        this.$router.go(-1);
                    }else {
                        alert(res.msg);
                    }
                })
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
                .btn {
                    position: absolute;
                    right: 15px;
                    top: 0;
                    bottom: 0;
                    width: 32px;
                    line-height: 44px;
                    @include fontsize16;
                }
            }
        }
		.container {
            height: calc(100vh - 94px);
            overflow-y: auto;
            .item {
                @include item-bgColor;
                @include bd-bottom;
                overflow: hidden;
                padding: 17px 18px 18px 11px;
                line-height: 1;
                .item-title {
                    @include fontsize16;
                    @include deeper-gray;
                    padding-bottom: 13px;
                }
                .item-date {
                    @include fontsize14;
                    color: #666666;
                }
            }
        }
        .footer {
            height: 50px;
            line-height: 50px;
            text-align: center;
            color: #057042;
            @include fontsize18;
            @include item-bgColor;
            @include bd-top(#A7A7AB);
        }
	}

</style>
