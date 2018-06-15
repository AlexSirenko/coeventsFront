export const addEventBtnClicked = (state = false, action) => {
    switch (action.type) {
        case 'ADD_EVENT_BTN_OPENED':
            return action.isOpen
        default:
            return state
    }
}