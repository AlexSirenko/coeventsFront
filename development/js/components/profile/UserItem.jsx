import React from 'react'
import PropTypes from 'prop-types'
import config from '../../../../config/index.json'

class UserItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const user = this.props.user;
        const urlPhoto = !user.urlPhoto ? config.profileDefaultPhotoUrl : user.urlPhoto;
        
        return (
            <div>
                <div>
                    <img src={urlPhoto} style={{width: '60px'}}/>
                </div>
                <div>
                    <p>{user.nickname}</p>
                    <p>{user.name.first + ' ' + user.name.last}</p>
                </div>
            </div>
        )
    }
}

UserItem.propTypes = {
    user: PropTypes.object
};

export default UserItem