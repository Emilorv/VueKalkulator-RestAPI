import {createStore} from 'vuex'

export default createStore({
    state: {
        review:{
            name:"",
            email:"",
        },
    },
    mutations:{
        UPDATE_NAME(state, name){
            state.review.name=name;
        },
        UPDATE_EMAIL(state, email){
            state.review.email=email;
        }
    },
})