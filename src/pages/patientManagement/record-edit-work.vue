/* 
A17-1作业编辑
A17-3作业布置 
*/
<template>
	<div class="page">
        <div class="header">
            <!-- 导航 -->
            <div class="back-nav" @click="$router.back()">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-nav_fanhui_baise"></use>
                </svg>{{ msg }}
                <span class="btn" @click="submit">保存</span>
            </div>
        </div>
		<div class="container">
            <div class="from-item-single">
                <div v-if="index==1">
                    <div>需代劳人</div>
                    <div >
                        <span>{{NickName}}</span>
                    </div>
                </div>
                <div @click="chooseLabor" v-if="index==2">
                    <div>需代劳人</div>
                    <div >
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div @click="selectType()">
                    <div>作业类型</div>
                    <div>
                        <span>{{types[Type]}}</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div @click="selectProject()">
                    <div>作业项目</div>
                    <div>
                        <span>{{Title}}</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>开始时间</div>
                    <div>
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>结束时间</div>
                    <div>
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>开始日期</div>
                    <div>
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>结束日期</div>
                    <div>
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>备注</div>
                <div>
                    <textarea placeholder="请输入备注信息" v-model="Remark"></textarea>
                </div>
            </div>
		</div>

        <!-- <labor-select class="as-label" 
            ref="filter"
            :opened.sync="openAsLabel"
            @labelAction="labelAction"></labor-select> -->

        <workproject-actionsheet 
            class="as-label" 
            :opened.sync="openAsProject"
            :projectItem="projectItem"
            @projectAction="projectAction">
        </workproject-actionsheet>

        <worktype-actionsheet
            class="as-label" 
            :opened.sync="openAsType"
            @typeAction="typeAction">
        </worktype-actionsheet>
	</div>
</template>

<script>
	import {GetHomeworkProjectItem,AddHomeWork} from '../../api/interface';
    // import LaborSelect from './child/labor-select';
    import WorkprojectActionsheet from './child/workproject-actionsheet';
    import WorktypeActionsheet from './child/worktype-actionsheet';
    import {mapState} from 'vuex';

    export default {
        name: "recordEditWork",
        data() {
            return {
                msg: "布置作业",
                // openAsLabel: false,
                openAsType: false,
                openAsProject: false,
                types: ['医嘱作业','非医嘱作业'],
                FK_FormID: '', //作业项目ID
                FK_CustID: '', //患者客户ID
                Type: 0, //作业类型 0为医嘱作业 1为非医嘱作业
                Title: '', //作业项目名称
                StartTime: '', //开始时间
                EndTime: '', //结束时间
                StartDate: '', //开始日期
                EndDate: '', //结束日期
                Remark: '', //Remark
                projectItem: [] //作业项目
            };
        },
        computed: {
            ...mapState(['iRHService']),
        },
        created() {
            this.getProject();

            this.index = this.$router.currentRoute.params.type;
            if (this.index == 1) { //新增
                this.FK_CustID = this.iRHService.FK_CustID;
                this.NickName = this.iRHService.NickName;
                // this.Contacts = this.iRHService.OfficeTel;
            }else if (this.index == 2) { //修改
                
            }
        },
        methods: {
            getProject(){
                GetHomeworkProjectItem().then(res => {
                    this.projectItem = res.data;
                })
            },
            chooseLabor() {
                this.openAsLabel = true;
            },
            // labelAction () {

            // },
            selectProject() {
                this.openAsProject = true;
            },
            selectType() {
                this.openAsType = true;
            },
            projectAction(item) {
                this.Title = item.sName;
                this.FK_FormID = item.PK_ID;
            },
            typeAction(index) {
                this.Type = index;
            },
            submit() {
                AddHomeWork({
                    FK_FormID: this.FK_FormID, //作业项目ID
                    FK_CustID: this.FK_CustID, //患者客户ID
                    Type: this.Type, //作业类型 0为医嘱作业 1为非医嘱作业
                    Title: this.Title, //作业项目名称
                    StartTime: this.StartTime, //开始时间
                    EndTime: this.EndTime, //结束时间
                    StartDate: this.StartDate, //开始日期
                    EndDate: this.EndDate, //结束日期
                    Remark: this.Remark //Remark
                }).then(res => {
                    
                })
            }
        },
        components: {
            // LaborSelect
            WorkprojectActionsheet,
            WorktypeActionsheet
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
            // height: calc(100vh - 112px);
            // overflow-y: auto;
            // .from-item-single > div,
            // .from-item-multi,
            textarea {
                font-size: 16px !important;
                padding: 13px 0;
            }
        }
        .as-label {
            @include position-absolute();
            z-index: 2;
        }
	}
</style>