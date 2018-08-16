/* O1关注弹窗 */
<template>
    <action-sheet 
        v-show="opened"
        @close="close"
        class="group-edit"
        position="center">
        <div class="actionsheet-bd">
            <textarea v-model="msg" placeholder="请输入关注的内容..."></textarea>
        </div>
        <div slot="footer" class="actionsheet-ft">
            <div @click="close">取消</div>
            <div class="" @click="submit">确定</div>
        </div>
    </action-sheet>
</template>

<script>
import {popupWindowRouteMixin} from '../../../plugin/mixin';
    export default {
        name: "GroupEdit",
	    mixins: [popupWindowRouteMixin],
        props: {
            opened: {}
        },
        data() {
            return {
                msg: '',
            };
        },
        methods: {
            chooseLabor() {

            },
            submit() {
                this.close();
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.group-edit {
        @include position-absolute;
        input {
            border: none;
            padding: 0 5px;
            -webkit-appearance: none;
            -webkit-user-select: text;
            -webkit-font-smoothing: antialiased;
            -wekbit-box-sizing: border-box;
            width: 100%;
            height: 44px;
            border-radius: 2px;
            outline: none;
            font-size: 14px;
            background-color: #EFEFF4;
        }
        .actionsheet-bd {
            padding: 27px 24px 31px 24px;
            text-align: center;
            line-height: 1;
            .title1 {
                font-size: 17px;
                color: #333333;
            }
            .title2 {
                font-size: 15px;
                color: #666666;
                margin: 10px 0 23px 0;
            }
            svg {
                position: absolute;
                top: 10px;
                right: 10px;
                width: 15px;
                height: 15px;
            }
        }
        .actionsheet-ft {
            @include bd-top(#E6E6E6);
            display: flex;
            height: 50px;
            line-height: 50px;
            text-align: center;
            font-size: 17px;
            color: #7BCF33;
            background-color: #ffffff;
            > div {
                flex: 1;
                &:last-child {
                    background-color: #7BCF33;
                    color: #ffffff;
                }
            }
        }
    }
</style>