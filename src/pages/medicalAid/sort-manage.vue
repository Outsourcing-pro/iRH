/* D3分类管理 */
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
        <div class="group" @click="groupEdit(1)">新建分组1111111111</div>
        <div class="container">
            <div class="item" v-for="(item,index) in data" :key="index">{{item.GroupName}}
                <div><span class="btn" @click="groupEdit(2,item)">编辑</span><span class="btn" @click="groupDelete(item.PK_ID)">删除</span></div>
            </div>
        </div>

        <!-- <group-edit 
            class="as-group"
            :opened.sync="openEdit"
            :type="type"
            :groupObj="groupObj"
            @refreshGroup="renderPage"
        ></group-edit> -->
    </div>
</template>

<script>
	import {GetGroupManagerList,DeletetGroupManager} from '../../api/interface';
    import groupEdit from './child/group-edit';

	export default {
		name: "medicalAid",
		data() {
			return {
                msg: "分类管理",
                openEdit: false,
                type: 1, //1新增2修改
                data: [],
                groupObj: {
                    PK_ID: '',
                    GroupName: ''
                }
			}
		},
		created() {
            this.renderPage();
        },
        methods: {
            renderPage() {
                GetGroupManagerList().then(res => {
                    this.data = res.data;
                })
            },
            groupEdit(type, obj) {
                this.type = type;
                this.groupObj = obj;
                this.openEdit = true;
            },
            groupDelete(id) {
                DeletetGroupManager({
                    PK_ID: id //记录ID
                }).then(res => {
                    if (res.code == app.errok) {
                        alert('删除成功。');
                    }else {
                        console.log(res.msg)
                    }
                })
            }
        },
        components: {
            groupEdit
        }
	};
</script>

<style lang="scss" scoped>
	@import "@/public/scss/common.scss";

	.page {
		@include body-bgColor();
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		.header {
			.back-nav {
				@include nav-top;
                .btn {
                    position: absolute;
                    right: 15px;
                    top: 0;
                    bottom: 0;
                    width: 64px;
                    line-height: 44px;
                    @include fontsize16;
                }
			}
		}
		.group {
			height: 50px;
			line-height: 50px;
            text-align: center;
            margin: 12px 0;
            font-size: 17px;
            color: #057042;
			background-color: #ffffff;
		}
		.container {
			background-color: #eef1f6;
            height: calc(100vh - 118px);
			.item {
				border-radius: 5px;
                height: 50px;
                padding: 0 5px 0 17px;
				background-color: #ffffff;
                @include spacebetween();
                @include bd-bottom(16px);
                .btn {
                    display: inline-block;
                    width: 48px;
                    height: 24px;
                    text-align: center;
                    color: #666666;
                    @include fontsize16;
                    border-radius: 2px;
                    margin-right: 10px;
                    border: 1px solid #D4D4D4;
                }
            }
		}
        .as-group {
            @include position-absolute();
            z-index: 2;
        }
	}
</style>