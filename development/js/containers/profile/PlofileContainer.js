import React from 'react'
import { connect } from 'react-redux'

import Profile from '../components/auth/Auth'

const mapStateToProps = state => {
    return {
        userAndToken: state.userAndToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        
    }
}

const ProfileContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profile)

export default ProfileContainer