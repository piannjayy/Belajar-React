const intialstate = {
    bahasa : "Indonesia",
};

function bahasaReducer(state=intialstate, action) {
    switch(action.type) {
        case "GANTI_BAHASA" : 
            return {
                ...state,
                bahasa : action.payload,
            };
            default:
                return state;
    }
}

export default bahasaReducer;
