// select dom element
const counterEl=document.getElementById("counter")
const incrementEl=document.getElementById("increment")
const decrementEl=document.getElementById('decrement')
// action identifiers
const INCREMENT="increment";
const DECREMENT="decrement"
// action creator
const increment=(value)=>{
    return{
        type:INCREMENT,
        playload:value,
    }
   
}
const decrement=(value)=>{
    return{
        type:DECREMENT,
        playload:value
    }
}
// initialState
const initialState={
    value:0,
}
// create reducer function
function counterReducer(state=initialState,action){
if(action.type === INCREMENT){
    return{
        ...state,
        value:state.value+action.playload,
    }
}else if(action.type ===DECREMENT){
    return{
        ...state,
        value:state.value-action.playload,
    }
}else{
    return state;
}

}

// create store
const store=Redux.createStore(counterReducer);
const render=()=>{
    const state=store.getState();
    counterEl.innerText=state.value.toString();
}
// update ui initially
render();
store.subscribe(render)
// button click listeners
incrementEl.addEventListener('click',()=>{
    store.dispatch(increment(5))
})
decrementEl.addEventListener('click',()=>{
    store.dispatch(decrement(3))
})