/* D3-1新增好友_添加分组
D3-2新增好友_编辑分组
 */
<template>
    <action-sheet
        v-show="opened" 
        @close="close" 
        class="group-edit"
        :position="'center'">
        <div class="actionsheet-bd">
            <div class="title1">{{type==1?'添加分组':'编辑分组'}}</div>
            <div class="title2">请为新分组输入名称</div>
            <input type="text" v-model="name"/>
            <svg class="icon" aria-hidden="true" @click="cancel">
                <use xlink:href="#icon-danchuang-quxiao"></use>
            </svg>
        </div>
        <div slot="footer" class="actionsheet-ft">
            <div @click="cancel">取消</div>
            <div @click="submit">确定</div>
        </div>
    </action-sheet>
</template>

<script>
    import {popupWindowRouteMixin} from '../../../plugin/mixin';
	import {AddGroupManager,UpdatetGroupManager} from '../../../api/interface';

    export default {
        name: "GroupEdit",
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {},
            type: {
                type: Number
            },
            groupObj: {
                type: Object,
                default: {
                    PK_ID: '',
                    GroupName: ''
                }
            }
        },
        data() {
            return {
                name: this.groupObj.GroupName
            };
        },
        created() {
        },
        methods: {
            cancel () {
                this.close();
            },
            submit() {
                console.log('...............',this.name)
                if (this.name == '') {
                    alert('请为新分组输入名称');
                    return;
                }
                if (this.type == 1) {
                    AddGroupManager({
                        GroupName: this.name
                    }).then(res => {
                        if (res.code == app.errok) {
                            this.$emit('refreshGroup');
                        }else {
                            alert(res.msg);
                        }
                    })
                }else if (this.type == 2) {
                    UpdatetGroupManager({
                        GroupName: this.name,
                        PK_ID: this.groupObj.PK_ID
                    }).then(res => {
                        if (res.code == app.errok) {
                            this.$emit('refreshGroup');
                        }else {
                            alert(res.msg);
                        }
                    })
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.group-edit {
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
                padding: 10px;
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