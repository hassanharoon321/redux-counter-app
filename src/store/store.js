import {createStore} from 'redux';

function counter(state = {count:0,user:{}},action) {
    const newState = {...state};
    if(action.type==="increment"){
        newState.count += action.count
        return newState
    }else if(action.type==="decrement"){
        newState.count -= action.count
        return newState
    }
    return state
}

export const store = createStore(counter);
// store.subscribe( ()=>console.log("update value",store.getState()) )

// store.dispatch({
//     type:"increment"
// })

// store.dispatch({
//     type:"increment"
// })

// store.dispatch({
//     type:"decrement"
// })