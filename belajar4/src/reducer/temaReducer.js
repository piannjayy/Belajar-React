const intialstate = {
    tema : "terang",
};

function temaReducer(state=intialstate, action) {
    switch(action.type) {
        case "GANTI_TEMA" : 
            return {
                ...state,
                tema : action.payload,
            };
            default:
                return state;
    }
}

export default temaReducer;
