/* 
A16代录iRH服务
B2代劳_irh服务
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
		<scroller-base class="container">
            <div class="from-item-single">
                <div v-if="type==1">
                    <div>需代劳人</div>
                    <div >
                        <span>{{NickName}}</span>
                    </div>
                </div>
                <div v-if="type==1">
                    <div>联系方式</div>
                    <div>{{Contacts}}
                    </div>
                </div>
                <div @click="chooseLabor" v-if="type==2">
                    <div>需代劳人</div>
                    <div >
                        <span>{{NickName}}</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div v-if="type==3">
                    <div>联系方式</div>
                    <div>
                        <input type="number" v-model="Contacts">
                    </div>
                </div>
                <div>
                    <div>服务起始时间</div>
                    <div>
                        <span>请选择</span>
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiantou-you"></use>
                        </svg>
                    </div>
                </div>
                <div>
                    <div>服务结束时间</div>
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
                <div>服务地点</div>
                <div>
                    <textarea placeholder="请输入服务地点" v-model="Address"></textarea>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>问题</div>
                <div>
                    <textarea placeholder="请输入问题信息" v-model="Title"></textarea>
                </div>
            </div>
            <div class="separate"></div>
            <div class="from-item-multi">
                <div>附加说明</div>
                <div>
                    <textarea placeholder="请输入附加说明" v-model="Remark"></textarea>
                </div>
            </div>
		</scroller-base>

        <labor-select class="as-label" 
            ref="filter"
            :opened.sync="openAsIRH"
            @labelAction="labelAction"></labor-select>
	</div>
</template>

<script>
    import {AddFeedback} from '../../api/interface';
    import LaborSelect from './child/labor-select';
    import {mapState} from 'vuex';

    export default {
        name: "recordEditWork",
        data() {
            return {
                msg: "iRH服务",
                openAsIRH: false,
                type: 1,
                NickName: '',
                PkId: '', //患者记录ID
                CustId: '', //患者客户ID
                Title: '', //问题
                Contacts: '', //联系方式
                BeginTime: '', //服务开始时间
                EndTime: '', //服务结束时间
                Address: '', //服务地址
                Remark: '', //Remark
                projectItem: [] //作业项目
            };
        },
        created() {
            // this.getProject();
            this.type = this.$router.currentRoute.params.type;
            if (this.type == 1) { //代录
                this.PkId = this.iRHService.PK_ID;
                this.CustId = this.iRHService.FK_CustID;
                this.NickName = this.iRHService.NickName;
                this.Contacts = this.iRHService.OfficeTel;
            }else if (this.type == 2) { //代劳
                
            }
        },
        computed: {
            ...mapState(['iRHService']),
        },
        methods: {
            // getProject(){
            //     GetHomeworkProjectItem().then(res => {
            //         this.projectItem = res.data;
            //     })
            // },
            chooseLabor() {
                this.openAsLabel = true;
            },
            labelAction () {

            },
            submit() {
                AddFeedback({
                    PkId: this.PkId, //患者记录ID
                    CustId: this.CustId, //患者客户ID
                    Title: this.Title, //问题
                    Contacts: this.Contacts, //联系方式
                    BeginTime: '2018-08-11', //服务开始时间
                    EndTime: '2018-08-12', //服务结束时间
                    Address: this.Address, //服务地址
                    Remark: this.Remark //Remark
                }).then(res => {
                    if (res.code == app.errok) {
                        this.$router.back();
                    }else {
                        alert(res.msg);
                    }
                })
            }
        },
        components: {
            LaborSelect
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
            height: calc(100vh - 44px);
            // overflow-y: auto;
            // .from-item-single > div,
            // .from-item-multi,
            textarea {
                font-size: 16px !important;
                padding: 13px 0;
            }
            input {
                text-align: right;
            }
        }
        .as-label {
            @include position-absolute();
            z-index: 2;
        }
	}

</style>
