<template>
    <action-sheet 
        v-show="opened" 
        class="labor-select"
        position="center">
        <div slot="header" class="actionsheet-hd">
            <div class="search-box">
                <input placeholder="请输入会员姓名、账号、或手机号" v-model="query"/>
                <div class="search-icon" @click="search">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-sousuo"></use>
                    </svg>
                </div>
            </div>
        </div>
        <div class="actionsheet-bd">
            <div class="from-item-single">
				<router-link tag="div" :to="{path:'/recordDailyWork'}" v-for="(item,index) in data" :key="index">
					<div>{{item.CustName}}{{item.CardNo}}</div>
					<div>{{item.Mobile}}</div>
				</router-link>
            </div>
        </div>
        <div slot="footer" class="actionsheet-ft">
            <div @click="close">取消</div>
            <div class="" @click="submit">确定</div>
        </div>
    </action-sheet>
</template>

<script>
	import {MyCustomerList} from '../../../api/interface';
    import {popupWindowRouteMixin} from '../../../plugin/mixin';

    /*todo 刷新滚动条 */
    export default {
        name: "LaborSelect",
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {}
        },
        data() {
            return {
                query: '',
                data: []
            };
        },
        created() {
        },
        methods: {
            renderPage() {
                MyCustomerList({
                    query: this.query
                }).then(res => {
                    this.data = res.data;
                })
            },
            search() {

            },
            chooseLabor() {

            },
            submit() {
                // this.$emit('medicalAction',index);
            }
        },
        watch: {
            opened(newVal,oldVal) {
                if (newVal) {
                    this.renderPage();
                }
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    @import '@/public/scss/common.scss';

	.labor-select {
        .actionsheet-hd {
            padding: 12px 15px;
            background-color: #EFEFF4;
            .search-box {
                display: flex;
                height: 36px;
                line-height: 36px;
                border-radius: 5px;
                border: 1px solid #E5E5E5;
                input {
                    flex: 1;
                    border: none;
                    padding: 0 5px;
                    -webkit-appearance: none;
                    -webkit-user-select: text;
                    -webkit-font-smoothing: antialiased;
                    -wekbit-box-sizing: border-box;
                    outline: none;
                    font-size: 14px;
                    // height: ;
                }
                .search-icon {
                    width: 40px;
                    text-align: center;
                    background-color: #ffffff;
                }
            }

        }
        .actionsheet-bd {
            min-height: 270px;
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