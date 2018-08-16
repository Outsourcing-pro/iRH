import actionSheet from './actionsheet/actionsheet.vue';
import dateBar from './date-bar/date-bar.vue';
import scrollerBase from './scroller/scroller-base.vue';
import scrollerLoad from './scroller/scroller-load.vue';
import scrollerSuper from './scroller/scroller-super.vue';
import Calendar from './calendar/calendar-actionsheet.js';

import base from './base.js';
import * as dom from './dom.js';

const app = {
    ...base,
    dom
}
const vueComponents = {
    actionSheet,
    dateBar,
	scrollerBase,
	scrollerLoad,
    scrollerSuper
}

app.install = function(Vue, options) {
    Object.assign({}, options);
    
    Vue.use(Calendar, options, this);
    Vue.mixin({
        components: vueComponents
    });

    Vue.prototype.app = window.app = app;
};

export default app;