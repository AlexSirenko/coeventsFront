import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'

import config from '../../../../config/index.json'
import LogOut from './LogOut'

class Menu extends React.Component {

    constructor(props) {
        super(props);

    }

    menuProfileAndEdit = () => {
        const user = this.props.userAndToken.user;
        let userPhoto = !user.urlPhoto ? config.profileDefaultPhotoUrl : user.urlPhoto;
        return (
            <div>
                <div>
                    <img src={userPhoto} style={{width: '50px'}}/>
                    <div>
                        <p>{user.nickname}</p>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        <button>
                            <Link to='/editProfile'>Edit</Link>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    menuList = () => {
        return (
            <div>
                <ul>
                    <li>
                        <Link to='/main/home'>Events</Link>
                    </li>
                    <li>
                        <Link to='/main/profile'>Profile</Link>
                    </li>
                    <li>
                        <Link to='/messages'>Messages</Link>
                    </li>
                    <li>
                        <Link to='/notifications'>Notifications</Link>
                    </li>
                    <li>
                        <Link to='/auth'>
                            <LogOut />
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.menuProfileAndEdit()}
                {this.menuList()}
            </div>
        )
    }
}

Menu.propTypes = {
    userAndToken: PropTypes.object
};

export default withRouter(Menu)