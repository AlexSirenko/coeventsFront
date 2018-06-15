export const userFollowers = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER_FOLLOWERS':
          return action.userFollowers;
        default:
          return state
      }
}
