export const userLocation = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER_LOCATION':
            return action.userLocation
        default:
            return state
    }
}