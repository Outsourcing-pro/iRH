<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <span class="btn" @click.stop="deletemsg" v-if="type==1">删除</span>
            </div>
        </div>
		<div class="container">
            <textarea placeholder="请输入信息..." v-model="Content"></textarea>
		</div>
        <div class="footer" @click="submitmsg">保存</div>
	</div>
</template>

<script>
	import {GetPatientNoteInfo,DeletePatientNote,SavePatientNote} from '../../api/interface';

    export default {
        name: "MemoEdit",
        data() {
            return {
                msg: "新增备忘录",  //新增备忘录/详情
                Content: '', //内容
                type: 0
            };
        },
        created() {
            this.type = this.$router.currentRoute.params.type;
            if (this.type == 1) { //修改
                this.msg = '详情';
                GetPatientNoteInfo({
                    pkid: this.$router.currentRoute.params.id
                }).then(res => {
                    this.Content = res.data.Content;
                })
            }
        },
        methods: {
            deletemsg() {
                DeletePatientNote({
                    PK_ID: this.$router.currentRoute.params.id
                }).then(res => {
                    if (res.code == 200) {
                        this.$router.go(-1);
                    }else {
                        alert(res.msg);
                    }
                })
            },
            submitmsg() {
                if (this.Content == '') {
                    alert('请输入信息...');
                    return;
                }
                SavePatientNote({
                    PK_ID: this.$router.currentRoute.params.id, //新增时传0 修改传当前备忘录记录PK_ID
                    Content: this.Content
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
            // overflow-y: auto;
            textarea {
                padding: 20px 17px;
                @include fontsize16;
                color: #212121;
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