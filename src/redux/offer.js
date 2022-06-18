const initial_state = {
};

const offer = (state = initial_state, action) => {
    switch (action.type) {
        case "SET_OFFERS":
            return { ...state, ...action.payload };
        default:
            return state;
    }
};

export default offer;
