import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import * as actions from './action.js'
import * as mutations from './mutation.js'
import * as Login from './module/login.js'

console.log('store/index.js>>>>', mutations, Login)

const state = {
    // 当前登录用户
    loginUser: {},
    // 用户token
    token: ''
}
export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        Login: Login.default
    }
})
