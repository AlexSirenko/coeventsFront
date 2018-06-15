import React from 'react'
import PropTypes from 'prop-types'

import config from '../../../../config/index.json'

import ProfileCounters from './ProfileCounters'

class ProfileHeader extends React.Component {

    constructor(props) {
        super(props);
    }


    //i'll take away that in simgle component
    userNameAndPhoto = () => {
        const user = this.user;
        const urlPhoto = !user.urlPhoto ? config.profileDefaultPhotoUrl : user.urlPhoto;
       
        return (
            <dir>
                <div>
                    <img src={urlPhoto}/>
                </div>
                <div>
                    <div>
                        <h4>{user.name.first +' '+ user.name.last}</h4>
                        <p>{user.nickname}</p>
                    </div>
                    <div>
                        <p>{user.userCity}</p>
                    </div>
                    <div>
                        <div>social links</div>
                    </div>
                </div>
            </dir>
        )
    }

    render() {
        return (
            <div>
                <div style = {}>
                    {this.userNameAndPhoto()}
                    <ProfileCounters />
                </div>
            </div>
        )
    }
}

ProfileHeader.propTypes = {
    user: PropTypes.object
};

export default ProfileHeader