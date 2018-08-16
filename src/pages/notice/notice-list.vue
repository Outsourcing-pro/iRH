/* T1我的消息
T2我的消息_公告通知
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
        <div class="tab-bar">
            <div class="tab-item" :class="{selected:activePage == 0}">
                <span>系统消息</span>
                <div class="tab-item-amount" v-show="msgUnRead > 0">{{msgUnRead}}</div>
            </div>
            <div class="tab-item" :class="{selected:activePage == 1}"><span>公告通知</span></div>
        </div>
        <div class="separate"></div>
        <scroller-super class="container"
            :pagingOption="pagingOption" 
			ref="myScroller"
			@loadData="loadData">
            <router-link class="item" tag="div" :to="{path:`/noticeDetail/${item.iCategory}/${item.PK_ID}`}" v-for="(item,index) in list" :key="index">
                <div><div><span class="tag">{{item.bRead}}</span>{{item.sType}}</div><span class="date">{{item.dTime}}</span></div>
                <div>{{item.sTitle}}</div>
            </router-link>
        </scroller-super>
    </div>
</template>

<script>
	import {GetMyMessageList,GetMyNoticeList} from '../../api/interface';
    
    let tmpPage = 0,
        activeAPI = function (){
            return tmpPage == 1 ? GetMyMessageList(...arguments) : GetMyNoticeList(...arguments);
        }
    
    export default {
        name: "NoticeList",
        data() {
            return {
                msg: "我的消息",
                list: [],
                msgUnRead: 0, //未读
                activePage: 0, //0消息1通知
                pagingOption: {
					api: activeAPI,
					params: {
						sid:'',
						// starttime: '1990-01-01',
						// endtime: app.tool.getDatesByIndex(3,app.localTimeToServer).edate,
					}
				}
            };
        },
        created() {
            tmpPage = this.$router.currentRoute.params.type;
        },
        methods: {
			loadData(ajaxPromise){
				ajaxPromise.then(res => {
					if (res.code == app.errok) {
						if (res.page.pageindex === 1) {
							this.list = [];
						}
						this.list = this.list.concat(res.data);
						this.activePage = tmpPage;
						//统计未读的消息
					}
				})
            },
            changeTab(num){
				tmpPage = num;
				let params = this.pagingOption.params;
				this.$refs.myScroller.refresh(params);	
			}
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
            }
        }
        .tab-bar {
            .tab-item-amount{
                // @include flex-center;
                background-color: #ff3c00;
                color: #ffffff;
                font-size: 12px;
                margin-top: -10px;
                height: 16px;
                line-height: 16px;
                padding: 0 4px;
                min-width: 16px;
                border-radius: 8px;
            }
        }
        .container {
            background-color: #eef1f6;
            height: calc(100vh - 94px);
            .item {
                line-height: 1;
                padding: 14px 10px;
                background-color: #ffffff;
                > div {
                    &:first-child {
                        @include fontsize18();
                        @include deeper-gray();
                        @include spacebetween();
                        padding-bottom: 15px;
                        line-height: 22px;
                        .tag {
                            display: inline-block;
                            width: 50px;
                            height: 22px;
                            text-align: center;
                            line-height: 22px;
                            background-color: #BDE799;
                            color: #333333;
                            font-size: 14px;
                            border-radius: 2px;
                            margin-right: 10px;
                            &.readed {
                                background-color: #EDEDED;
                                color: #878787;
                            }
                        }
                        .date {
                            font-size: 13px;
                            color: #888888;
                        }
                    }
                    &:last-child {
                        color: #888888;
                        font-size: 14px;
                    }
                }
                @include bd-bottom(10px,#DDDDDD);
            }
        }
    }
</style>
