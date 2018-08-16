<!-- 处方选择组件 -->
<template>
    <action-sheet
        v-show="opened" 
        :maskToClose="true"
        @close="close" 
        :position="'top'">
        <div 
            class="cs-item between"
            v-for="(item,index) in types"
            :class="[{'active': currentType==index}]"
            @click="changeType(index)">
            <span>{{item}}</span>
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="currentType==index?'#icon-xuanzhong':'#icon-weixuanzhong'"></use>
            </svg>
        </div>
    </action-sheet>
</template>

<script>
    import {popupWindowRouteMixin} from '../../../plugin/mixin';

    export default {
        name: 'medicalActionsheet',
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {},
            currentType: {
                type: Number
            }
        },
        data() {
            return {
                types: ['全部','药物类','医嘱类','运动类','一般治疗类','专项治疗类','康复类','护理类']
            }
        },
        methods: {
            changeType(index) {
                this.$emit('prescriptionAction',index);
                this.close();
            },
        }
    };
</script>

<style lang="scss" scoped>
    @import "@/public/scss/common.scss";

    .cs-item {
        height: 44px;
        line-height: 44px;
        padding: 0 15px;
        @include bd-bottom;
        &.between {
            @include spacebetween;            
        }
        &.active {
            background-color: #F3FAED;
            @include txt-deepgreen;
        }
    }
</style>