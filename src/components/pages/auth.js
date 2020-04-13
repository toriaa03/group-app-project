import React, { Component } from 'react'
import Login from '../auth/login';

export default class extends Component {
  constructor(props) {
      super(props)

      this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);

  }

  handleSuccessfulAuth() {
    this.props.handleSuccessfulLogin();
    this.props.history.push("/");
}

  render() {
      return (
          <div>

                <div>
            <Login
                handleSuccessfulAuth={this.handleSuccessfulAuth} />
              </div>
          </div>
      )
  }
}