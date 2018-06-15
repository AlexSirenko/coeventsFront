export const userAndToken = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER_AND_TOKEN':
          return Object.assign({}, state, action.userAndToken);
        default:
          return state
      }
}
