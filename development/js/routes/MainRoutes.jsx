import React from 'react'
import PropTypes from 'prop-types'
import { Route, Switch } from 'react-router-dom'

import EventViewContainer from '../containers/EventViewContainer'

import Menu from '../components/nav/Menu'
import Navbar from '../components/nav/Navbar'

class MainRoutes extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.history.push('/main/home');
    }

    render() {
        return (
            <div>
                <Menu userAndToken={this.props.userAndToken} />
                <Navbar userAndToken={this.props.userAndToken} />

                <Switch location={this.props.location}>
                    <Route path='/main/home' component={EventViewContainer} />
                </Switch>
            </div>
        );
    }
}

MainRoutes.propTypes = {
    userAndToken: PropTypes.object
}

export default MainRoutes

