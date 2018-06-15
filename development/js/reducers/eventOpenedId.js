export const eventOpenedId = (state = null, action) => {
    switch (action.type) {
        case 'EVENT_OPENED_ID':
            return action.eventOpenedId
        default:
            return state
    }
}