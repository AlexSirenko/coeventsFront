import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import AuthContainer from '../containers/AuthContainer'
import MainRoutesContainer from './MainRoutesContainer'

class RootRoutes extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Route path='/auth' component={AuthContainer} />
                <Route path='/main' component={MainRoutesContainer} />
            </div>
        );
    }
}

RootRoutes.propTypes = {
    userAndToken: PropTypes.object
}

export default RootRoutes

