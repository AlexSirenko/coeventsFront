import React from 'react'
import PropTypes from 'prop-types'

import UserList from './UserList'

class ProfileUserListAndFilters extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filter: 'USER_FOLLOWERS',
            currentUsers: this.props.userFollowers,
            searchString: ''
        }

    }
    
    onChangeFilter = (filter) => {
        if(this.state.filter == filter){
            return;
        }

        switch(filter){
            case 'USER_FOLLOWERS' : {
                this.setState({
                    currentUsers: this.props.userFollowers
                })
            }
            case 'USER_FOLLOWINGS': {
                this.setState({
                    currentUsers: this.props.userFollowings
                })
            }
            case 'USER_INSTITUTION_FOLLOWINGS': {
                this.setState({
                    currentUsers: this.props.userInstitutionFollowings
                })
            }
        }

    }


    //пока что тут, в дальшейшем вынесу в отдельный компонент
    filters = () => {
        return (
            <div> 
                <ul>
                    <li onClick={()=>this.onChangeFilter('USER_FOLLOWERS')}>Followers</li>
                    <li onClick={()=>this.onChangeFilter('USER_FOLLOWINGS')}>Followings</li>
                    <li onClick={()=>this.onChangeFilter('USER_INSTITUTION_FOLLOWINGS')}>Institution Followings</li>
                </ul>
            </div>
        )
    }

    searchHandle = (e) => {
        let str = e.target.value;
        let usersArrayAfterSearch = this.state.currentUsers.filter((item)=>{
            return ~item.nickname.indexOf(str);
        })

        this.setState({
            searchString: str,
            currentUsers: usersArrayAfterSearch
        })
    }

    serachComponent = () => {
        return (
            <div>
                <input type="text" onChange = {}/>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.filters()}
                <UserList users={this.state.currentUsers} />
            </div>
        )
    }
}

ProfileUserListAndFilters.propTypes = {
    userFollowers: PropTypes.arrayOf(
        PropTypes.object
    ),
    userFollowings: PropTypes.arrayOf(
        PropTypes.object
    ),
    userInstitutionFollowings: PropTypes.arrayOf(
        PropTypes.object
    )
};

export default ProfileUserListAndFilters