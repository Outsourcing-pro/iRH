/* D4-2简介弹窗 */
<template>
    <action-sheet 
        class="intro-actionsheet"
        position="center">
        <div class="actionsheet-bd" slot="header">
            <div class="photo" :style="'backgroundImage: url('+ data.Photo +')'"></div>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-danchuang-quxiao"></use>
            </svg>
            <div class="name">{{data.CustName}}</div>
            <div class="from-item-single">
                <div>
                    <div>设置好友分组</div>
                    <div>xxxxxx分组</div>
                </div>
                <div>
                    <div>签名</div>
                    <div>{{data.UserMark}}</div>
                </div>
                <div>
                    <div>个人简介</div>
                    <div>{{data.Resume}}</div>
                </div>
                <div>
                    <div>姓名</div>
                    <div>{{data.UserName}}</div>
                </div>
                <div>
                    <div>性别</div>
                    <div>{{data.Sex}}</div>
                </div>
            </div>
        </div>
    </action-sheet>
</template>

<script>
	import {GetMyFriendInfo} from '../../../api/interface';

    export default {
        name: "IntroActionsheet",
        data() {
            return {
                photo: require("@/public/images/swiper3.jpg"),
                data: null
            };
        },
        created() {
        },
        methods: {
            getInfo () {
                GetMyFriendInfo({
                    userId: ''
                }).then(res => {
                    this.data = res.data;
                })
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.intro-actionsheet {
        @include position-absolute;
        .actionsheet-bd {
            padding: 31px 0 41px 0;
            .photo {
                position: absolute;
                top: -28px;
                left: 0;
                right: 0;
                margin: 0 auto;
            }
            .name {
                text-align: center;
                line-height: 50px;
                @include bd-bottom(0,#DDDDDD);
            }
            svg {
                position: absolute;
                right: 7px;
                top: 7px;
                width: 18px;
                height: 18px;
            }
        }
    }
</style>