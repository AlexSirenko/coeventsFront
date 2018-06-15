import React from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom'

class Signup extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password1: '',
            password2: '',
            nickname: ''
        }
    }

    handleOnSubmit = (e) => {

        e.preventDefault();

        let user = {
            email: this.state.email,
            nickname: this.state.nickname,
            password: this.state.password2
        };

        this.props.onSignup(user);
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleOnSubmit}>
                    <input placeholder="email"    type="email"    onChange = {(e)=>this.setState({email: e.target.value})}/>
                    <input placeholder="nickname" type="text"     onChange = {(e)=>this.setState({nickname: e.target.value})} />
                    <input placeholder="password" type="password" onChange = {(e)=>this.setState({password1: e.target.value})} />
                    <input placeholder="password" type="password" onChange = {(e)=>this.setState({password2: e.target.value})}/>
                    <input type="submit" value="Sign Up" />
                </form>
            </div>
        )
    }
}

Signup.propTypes = {
    onSignup: PropTypes.func
};

export default withRouter(Signup)