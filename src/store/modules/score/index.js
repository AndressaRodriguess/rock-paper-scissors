import mutations from './mutations.js';

export default {
    namespaced: true,
    state(){
        return{
            score: 0
        }
    },
    mutations,
}
