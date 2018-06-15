import { combineReducers } from 'redux'

import { userAndToken } from './userAndToken'
import { eventsNearMe } from './eventsNearMe'
import { eventOpenedId } from './eventOpenedId'
import { userLocation } from './userLocation'
import { userFollowers } from './userFollowers'
import { userFollowings } from './userFollowings';
import { userInstitutionFollowings } from './userInstitutionFollowings'
import { addEventBtnClicked } from './events/addEventBtnClicked'

const appReducer = combineReducers({
    userAndToken,
    eventsNearMe,
    eventOpenedId,
    userLocation,
    userFollowers,
    userFollowings,
    userInstitutionFollowings,
    eventAddFormIsOpen: addEventBtnClicked
});

export const rootReducer = (state, action) => {
    if (action.type === 'LOG_OUT') {
        state = undefined;
    }

    return appReducer(state, action)
}

