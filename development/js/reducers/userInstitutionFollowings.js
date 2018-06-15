export const userInstitutionFollowings = (state = null, action) => {
    switch (action.type) {
        case 'GET_USER_INSTITUTION_FOLLOWINGS':
          return action.userInstitutionFollowings;
        default:
          return state
      }
}
