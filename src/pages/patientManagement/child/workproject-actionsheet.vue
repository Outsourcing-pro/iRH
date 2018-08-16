<!-- 选择组件 -->
<template>
    <action-sheet
        v-show="opened" 
        @close="close" 
        :data="projectItem"
        :position="'bottom'">
        <div class="sheet">
            <div class="cs-item" v-for="(item,index) in projectItem" :key="index" @click="selectProject(item)">
                {{item.sName}}
            </div>
        </div>
    </action-sheet>
</template>

<script>
    import {popupWindowRouteMixin} from '../../../plugin/mixin';
    import {mapMutations} from 'vuex'

    export default {
        name: 'WorkProjectActionsheet',
        mixins: [popupWindowRouteMixin],
        props:{
            opened: {},
            projectItem: {
                type: Array,
                default: []
            }
        },
        data() {
            return {
            };
        },
        methods: {
            selectProject(item) {
                this.$emit('projectAction',item)
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