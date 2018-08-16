import axios from 'axios'

export const getUser = ({commit}) => {
    axios.get('https://api.test.gitinn.com/repos/u177841/resetdb/issues/6').then(resp => {
        let example = resp.data;
        commit('getUser', {
            username: example.pull_request.base_repo.owner.full_name,
            warename: example.pull_request.base_repo.lower_name
        })
    }).catch(err => console.error(err))
}

export const setUser = ({commit}, obj) => {
    setTimeout(() => {
        commit('setUser', obj)
    }, 2000);
}