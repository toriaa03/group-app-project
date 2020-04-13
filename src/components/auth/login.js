import React, { Component } from 'react'
import axios from 'axios';

export default class extends Component {
  constructor(props) {
      super(props)

      this.state = {
        username: "",
        password: "",
        errorText: ""
      }

      
      this.handleChange= this.handleChange.bind(this);
      this.handleSubmit= this.handleSubmit.bind(this);
  }

handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      errorText: ""
    })
}

handleSubmit(event) {
    axios.post("https://www.instagram.com/",
    {
        client: {
            username: this.state.username,
            password: this.state.password
        }
    },
    { withCredentials: true }
    ).then(response => {
        if (response.data.status === 'created') {
          this.props.handleSuccessfulAuth();
        } else {
            this.setState({
                errorText: "Wrong email or password"
            });
            this.props.handleUnsuccessfulAuth();

        }

    })
    .catch(error => {
        this.setState({
            errorText: "An error occurred"
        });
        this.props.handleUnsuccessfulAuth();
    });
    


    event.preventDefault();
}

  render() {
      return (
          <div>

              <h1>SIGN IN</h1>

              <div>{this.state.errorText}</div>

              <form onSubmit={this.handleSubmit}>
                <input
                    type="username"
                    name="username"
                    placeholder="Your username"
                    value={this.state.email}
                    onChange={this.handleChange}
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />

                <div>
                    <button type="submit">Sign In</button>
                </div>

              </form>
              
          </div>
      )
  }
}