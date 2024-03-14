const defaultState={
    counter:0
}

 function reducer(state=defaultState,actions) {
    switch (actions.payload) {
        case "ADD":
            return{...state,counter:state.counter+1};
        case "REMOVE":
            return{...state,counter:state.counter-1};
        case "CHOOSE":
            return{...state,counter:actions.payload};
    
        default:
            return state;
    }
}

export default reducer;