export const setSelectedTime = (dispatch, time) => {
    dispatch({
        type: 'SET_SELECTED_TIME',
        payload: time
    })
}