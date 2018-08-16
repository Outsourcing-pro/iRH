<!-- 选择组件 -->
<template>
    <action-sheet
        v-show="opened" 
        @close="close" 
        :position="'bottom'">
        <div class="sheet">
            <!-- <div 
                class="cs-item between"
                v-for="(item,index) in types"
                :class="[{'active': currentType==index}]"
                @click="changeType(index)">
                <span>{{item}}</span>
                <svg class="icon" aria-hidden="true">
                    <use :xlink:href="currentType==index?'#icon-xuanzhong':'#icon-weixuanzhong'"></use>
                </svg>
            </div> -->

            <div class="cs-item" v-for="(item,index) in types" :key="index" @click="selectType(item,index)">
                {{item}}
            </div>
        </div>
    </action-sheet>
</template>

<script>
    import {popupWindowRouteMixin} from '../../../plugin/mixin';
    import {mapMutations} from 'vuex'

    export default {
        name: 'WorkTypeActionsheet',
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {},
            // currentType: {
            //     type: Number
            // }
        },
        data() {
            return {
                types: ['医嘱作业','非医嘱作业']
            };
        },
        methods: {
            selectType(item,index) {
                console.log('000000000----------------')
                this.$emit('typeAction',index)
                this.close();
            }
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