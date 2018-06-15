import React from 'react'
import PropTypes from 'prop-types'

import ProfileHeader from './ProfileHeader'

class Profile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <ProfileHeader />
            </div>
        )
    }
}

Profile.propTypes = {
    userAndToken: PropTypes.object
};

export default Profile