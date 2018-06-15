import React from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom'

import Login from './Login';
import Signup from './Signup'

class Auth extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loginOpen: true
        }

    }

    componentDidUpdate() {
        if(this.props.userAndToken && this.props.userAndToken.token){
            this.props.history.push('/main');
        }
    }

    onLoginBtnClick = () => {
        this.setState({
            loginOpen: true
        })
    }

    onSignupBtnClick = () => {
        this.setState({
            loginOpen: false
        })
    }

    render() {

        let form = this.state.loginOpen ?

            (<Login onLogin={this.props.onLogin} />)
            :
            (<Signup onSignup={this.props.onSignup} />)

        return (
            <div>
                {form}
                <footer>
                    <span onClick={this.onLoginBtnClick}>Login</span>
                    <span onClick={this.onSignupBtnClick}>Signup</span>
                </footer>
            </div>
        )
    }
}

Auth.propTypes = {
    onLogin: PropTypes.func,
    onSignup: PropTypes.func
};

export default withRouter(Auth)