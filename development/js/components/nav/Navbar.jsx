import React from 'react'
import PropTypes from 'prop-types'

import config from '../../../../config/index.json'

class Navbar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            searchString: ''
        }
    }

    search = () => {
        return (
            <div>
                <input type="text" onChange={(e) => this.setState({ searchString: e.target.value })} />
            </div>
        )
    }

    notifications = () => {
        return (
            <div>
                Notifications
            </div>
        )
    }

    messages = () => {
        return (
            <div>
                Messages
            </div>
        )
    }

    navProfile = () => {
        const user = this.props.userAndToken.user;
        let userPhoto = !user.urlPhoto ? config.profileDefaultPhotoUrl : user.urlPhoto;
        const userNameFirst = !user.name ? null : user.name.first;
        const userNameLast = !user.name ? null : user.name.last;

        return (
            <div>
                <div>
                    <div>
                        <p>{userNameFirst}</p>
                        <p>{userNameLast}</p>
                    </div>
                    <img src={userPhoto} style ={{width: '50px'}}/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.search()}
                {this.notifications()}
                {this.messages()}
                {this.navProfile()}
            </div>
        )
    }
}

Navbar.propTypes = {
    userAndToken: PropTypes.object
};

export default Navbar