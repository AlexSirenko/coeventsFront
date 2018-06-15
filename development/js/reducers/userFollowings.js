export const userFollowings = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER_FOLLOWINGS':
          return action.userFollowings;
        default:
          return state
      }
}
