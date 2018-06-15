import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import RootRoutes from './RootRoutes'

const mapStateToProps = state => {
    return {
        userAndToken: state.userAndToken
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}
const RoutesContainer = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(RootRoutes))

export default RoutesContainer