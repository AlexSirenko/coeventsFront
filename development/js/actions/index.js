import config from '../../../config/index.json'

const getUserAndToken = userAndToken => ({
    type: 'GET_USER_AND_TOKEN',
    userAndToken
})

export const loginUser = (user) => {

    return (dispatch) => {

        let path = config.serverUrl + '/auth/login';

        let options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(userAndTokenJson => {
                dispatch(getUserAndToken(userAndTokenJson))
            })
    }
}

export const signupUser = (user) => {

    return (dispatch) => {

        let path = config.serverUrl + '/auth/signup';

        let options = {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
        };


        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(userAndTokenJson => {
                console.log(userAndTokenJson);
                dispatch(getUserAndToken(userAndTokenJson))
            })
    }
}

export const logOut = () => ({
    type: 'LOG_OUT'
})

//evetns
const eventsNearMe = eventsNearMe => ({
    type: 'GET_EVENTS_NEAR_ME',
    eventsNearMe
})

const currentUserLocation = location => ({
    type: 'GET_USER_LOCATION',
    userLocation: location
})

export const getEventsNearMe = (metadata) => {
    //metadata = {location:{latitude, longitude}, scope: 12}

    return (dispatch) => {

        dispatch(currentUserLocation(metadata.location));

        let path = config.serverUrl + '/api/getEventsNearMe';
        let options = {
            method: 'POST',
            body: JSON.stringify(metadata),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + metadata.userAndToken.token
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(events => {
                console.log(events);
                dispatch(eventsNearMe(events))
            })
    }
}

export const eventOpenedId = (id) => ({
    type: 'EVENT_OPENED_ID',
    eventOpenedId: id
})

export const addEventBtnClicked = (isOpen) => ({
    type: 'ADD_EVENT_BTN_OPENED',
    isOpen
})

const addEvent = (event) => ({
    type: 'ADD_EVENT',
    event
})

export const fetchAddEvent = (event) => {

    return (dispatch) => {

        let path = config.serverUrl + '/api/getUserFollowers';

        let options = {
            method: 'POST',
            body: JSON.stringify({userId: userAndToken.user.userId}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userAndToken.token
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(users => {
                console.log(users);
                dispatch(userFollowers(users))
            })
    }
}
//evetns

//profile
const userFollowers = (userFollowers) => ({
    type: 'GET_USER_FOLLOWERS',
    userFollowers
})

export const fetchUserFollowers = (userAndToken) => {

    return (dispatch) => {

        let path = config.serverUrl + '/api/getUserFollowers';

        let options = {
            method: 'POST',
            body: JSON.stringify({userId: userAndToken.user.userId}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userAndToken.token
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(users => {
                console.log(users);
                dispatch(userFollowers(users))
            })
    }
}

const userFollowings = (userFollowings) => ({
    type: 'GET_USER_FOLLOWINGS',
    userFollowings
})

export const fetchUserFollowings = (userAndToken) => {

    return (dispatch) => {

        let path = config.serverUrl + '/api/getUserFollowings';

        let options = {
            method: 'POST',
            body: JSON.stringify({userId: userAndToken.user.userId}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userAndToken.token
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(users => {
                console.log(users);
                dispatch(userFollowings(users))
            })
    }
}

const userInstitutionFollowings = (userInstitutionFollowings) => ({
    type: 'GET_USER_INSTITUTION_FOLLOWINGS',
    userInstitutionFollowings
})

export const fetchUserInstitutionFollowings = (userAndToken) => {

    return (dispatch) => {

        let path = config.serverUrl + '/api/getUserFollowings';

        let options = {
            method: 'POST',
            body: JSON.stringify({userId: userAndToken.user.userId}),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + userAndToken.token
            }
        };

        return fetch(path, options)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(records => {
                console.log(records);
                dispatch(userInstitutionFollowings(records))
            })
    }

}

//profile
