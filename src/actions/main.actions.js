export const setOffers = (dispatch, offers) => {
    dispatch({
        type: "SET_OFFERS",
        payload: offers,
    });
};
