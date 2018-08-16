/* F患者信息
P2患者信息
E3患者信息
 */
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
		<div class="container" :class="type==1?'type1':'type2'">
			<div>
				<div class="from-item-single">
					<div>
						<div>账号</div>
						<div>{{data.UserName}}</div>
					</div>
					<div>
						<div>昵称</div>
						<div>{{data.NickName}}</div>
					</div>
					<div>
						<div>性别</div>
						<div>{{data.Sex}}</div>
					</div>
					<div>
						<div>生日</div>
						<div>{{data.Birth}}</div>
					</div>
					<div>
						<div>职业</div>
						<div>{{data.Work}}</div>
					</div>
					<div>
						<div>职务</div>
						<div>{{data.Position}}</div>
					</div>
					<div>
						<div>学历</div>
						<div>{{data.Class}}</div>
					</div>
                    <div>
						<div>职称</div>
						<div>{{data.Professional}}</div>
					</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>签名</div>
					<div>{{data.UserMark}}</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>个人简历</div>
					<div>{{data.Resume}}</div>
				</div>
				<div class="separate"></div>
				<div class="from-item-multi">
					<div>所属地</div>
					<div>{{data.Address}}</div>
				</div>
			</div>
			<div class="separate"></div>
		</div>
        <div class="footer" v-if="type==1">
            <div @click="reject">拒绝</div>
            <div @click="agreeApply">同意</div>
        </div>
	</div>
</template>

<script>
	import {GetContactPatientInfo} from '../../api/interface';
    /**
     * TODO:同意/拒绝申请
     */
    export default {
        name: "PatientInfo",
        data() {
            return {
                msg: "患者信息",
                type: 1, //1是F患者申请P2患者信息,2是E3患者信息
                photo: require("@/public/images/swiper3.jpg"),
                data: null
            };
        },
        computed: {
        },
        created() {
            this.type = this.$router.currentRoute.params.type;
            GetContactPatientInfo({
                userId: this.$router.currentRoute.params.id
            }).then(res => {
                this.data = res.data;
            })
        },
        methods: {
            rejectApply() {

            },
            agreeApply() {

            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import "@/public/scss/common.scss";

    .page {
        @include body-bgColor();

        .header {
            .back-nav {
                @include nav-top;
            }
        }
        .container {
            overflow-y: auto;
            &.type1 {
                height: calc(100vh - 93px);
            }
            &.type2 {
                height: calc(100vh - 44px);
            }
            .list {
                margin: 0 10px;
                .item {
                    @include item-bgColor();
                    @include flex();
                    flex-direction: column;
                    justify-content: center;
                    padding: 15px 20px;
                    border-radius: 5px;
                    min-height: 80px;
                    .title {
                        @include fontsize18();
                        @include deeper-gray();
                    }
                    .date {
                        @include fontsize15();
                        color: #888888;
                        margin-top: 5px;
                        >span{
                            &:last-child {
                                @include deeper-gray();
                            }
                        }
                    }
                }
            }
        }
        .footer {
            height: 49px;
            font-size: 17px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            @include flex();
            div {
                flex: 1;
                line-height: 49px;
                text-align: center;
                &:first-child {
                    background-color: #ffffff;
                    color: #7BCF33;
                }
                &:last-child {
                    background-color: #7BCF33;
                    color: #ffffff;
                }
            }
        }
    }
</style>
