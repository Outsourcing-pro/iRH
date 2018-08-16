/* T3详情 */
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
        <scroller-base class="container" :data="data.sTitle">{{data.sTitle}}</scroller-base>
    </div>
</template>

<script>
	import {GetMsgInfo} from '../../api/interface';

    export default {
        name: "NoticeDetail",
        data() {
            return {
                msg: "详情",
                data: null
            }
        },
        created() {
            GetMsgInfo({
                pkid: this.$router.currentRoute.params.id,
                iCategory: this.$router.currentRoute.params.type
            }).then(res => {
                this.data = res.data;
            })
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
        .container {
            background-color: #FFFFFF;
            height: calc(100vh - 44px);
            padding: 20px 16px;
            font-size: 16px;
            color: #333333;
        }
    }
</style>
