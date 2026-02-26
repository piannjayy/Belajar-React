const initialstate = {
    list : [],
}

function listReducer(state=initialstate, action) {
    switch(action.type) {
        case "ADD_LIST":
            return {
                ...state,
                list : action.payload
            };
            default:
                return state;
    }
}

export default listReducer;