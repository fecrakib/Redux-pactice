// defining constants
const INCREMENT='INCREMENT'
const DECREMENT='DECREMENT'
// state
const initialCountState={
    count:0
}
// action-object -type ,playlod
// increment counter
const incrementCounter=()=>{
    return{
        type:INCREMENT,
    }
}
// decrement counter
const decrementCounter=()=>{
    return{
        type:DECREMENT
    }
}
// reducer 
const counterReducer=(state=initialCountState,action)=>{
switch (action.type) {
    case INCREMENT:
        return{
            ...state,
            count:state.count+1,
        }
        case DECREMENT:
            return{
                ...state,
                count:state.count-1,
            }

    default:
        state;
}
}