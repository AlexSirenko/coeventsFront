import React from 'react'
import { connect } from 'react-redux'

import { loginUser , signupUser } from '../actions/index'

import Auth from '../components/auth/Auth'

const mapStateToProps = state => {
    return {
        userAndToken: state.userAndToken
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => {
            dispatch(loginUser(user))
        },
        onSignup: user => {
            dispatch(signupUser(user))
        }
    }
}

const AuthContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Auth)

export default AuthContainer