const initial_state = {
    selectedTime: "3 Anos",
    selectedPlan: "Plano P",
};

const state = (state = initial_state, action) => {
    switch (action.type) {
        case "SET_SELECTED_TIME":
            return { ...state, selectedTime: action.payload };
        case "SET_SELECTED_PLAN":
            return { ...state, selectedPlan: action.payload };
        default:
            return state;
    }
};

export default state;
