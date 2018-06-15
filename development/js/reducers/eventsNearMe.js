export const eventsNearMe = (state = null, action) => {
    switch (action.type) {
        case 'GET_EVENTS_NEAR_ME':
            return action.eventsNearMe
        case 'ADD_EVENT': 
            return [
                ...state,
                action.event
            ]
        default:
            return state
    }
}