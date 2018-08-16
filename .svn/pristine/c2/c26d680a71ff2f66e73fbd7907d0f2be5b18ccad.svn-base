// 该mixin用于解决点击弹出层
export const popupWindowRouteMixin = {
    methods: {
        close(type) {
            // 防止在关闭动画时多次点击,造成路由多次回退;
            if (this.isCloseing) {
                return;
            } else {
                this.isCloseing = true;
                setTimeout(() => {
                    this.isCloseing = false;
                }, app.config.duration)
            }
            this.cancel();
        },
        cancel() {
            this._cancel();
        },
        _cancel() {
            this.interiorClose = true;
            if (this.$props && this.$props.opened !== undefined){
            	this.$emit('update:opened', false);
            } else {
            	this.opened = false;
            }
        }
    },
    watch: {
        opened(newVal) {
            if (newVal) {
                this.interiorClose = false;
            } else {
                // if (!this.interiorClose) {
                //     // this.$router.back();
                // }
            }
        }
    }
};