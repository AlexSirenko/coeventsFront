import React from 'react'
import PropTypes from 'prop-types'

import UserItem from './UserItem'

class UserList extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        const users = this.props.users.map((item) => <UserItem key={item.userId} user={item}/>)
        
        return (
            <div>
                {users}
            </div>
        )
    }
}

UserList.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default UserList