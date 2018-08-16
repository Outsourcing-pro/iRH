// export const mutations = {
//     getUser(state, user) {
//         console.log('root mumation:',state);
//         state.loginUser = user;
//     },
//     setUser(state, user) {
//         state.loginUser = user;
//     }
// }

// console.log('mutation.js:', mutations)

//设置token
export const set_token = function (state, params) {
    state.token = params;
}