<!-- 选择组件 -->
<template>
    <action-sheet
        v-show="opened" 
        @close="close" 
        :position="'center'">
        <div class="sheet">
            <div class="cs-header">代录
                <svg class="icon" aria-hidden="true" @click="close()">
                    <use xlink:href='#icon-danchuang-quxiao'></use>
                </svg>
            </div>
            <div class="cs-item active" @click="gotoIRHService">iRH服务</div>
            <div class="cs-item" @click="gotoDailyWork">每日作业</div>
            <router-link tag="div" class="cs-item" :to="{path:`/dataEntry/${patient.FK_CustID}`}">数据录入</router-link>
        </div>
    </action-sheet>
</template>

<script>
    import {popupWindowRouteMixin} from '../../../plugin/mixin';
    import {mapMutations} from 'vuex'

    export default {
        name: 'medicalActionsheet',
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {},
            patient: {
                type: Object
            }
        },
        data() {
            return {
            };
        },
        methods: {
            ...mapMutations(['set_iRHService']),
            gotoIRHService(index) {
                this.$router.push({path: '/recordIRHService/1'})
                this.set_iRHService(this.patient);
                // this.$emit('medicalAction',index);
                // this.close();
            },
            gotoDailyWork() {
                this.$router.push({path:`/recordDailyWork/${this.patient.FK_CustID}/${this.patient.UsersId}`});
                this.set_iRHService(this.patient);
            }
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/public/scss/common.scss";

    .sheet {
        padding: 0 24px 27px 24px;
        text-align: center;
        .cs-header {
            height: 56px;
            line-height: 56px;
            font-size: 18px;
            color: #333;
            .icon {
                position: absolute;
                // top: 15px;
                right: 0px;
                padding: 15px;
                width: 14px;
                height: 14px;
            }
        }
    }
    .cs-item {
        height: 44px;
        line-height: 44px;
        border: 1px solid #7BCF33;
        border-radius: 2px;
        margin-bottom: 11px;
        font-size: 17px;
        &.active {
            background-color:#7BCF33;
            color: #ffffff;
        }
    }
</style>