import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleOnSubmit = (e) => {

        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.onLogin(user);
    }


    render() {

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <div>
                        <input type="email" placeholder="Email" onChange={(e) => this.setState({ email: e.target.value })} />
                        <input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} />
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onLogin: PropTypes.func
};

export default withRouter(Login)