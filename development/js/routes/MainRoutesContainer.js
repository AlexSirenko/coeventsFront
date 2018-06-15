import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import MainRoutes from './MainRoutes'

const mapStateToProps = state => {
    return {
        userAndToken: state.userAndToken
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const MainRoutesContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(MainRoutes)

export default withRouter(MainRoutesContainer)