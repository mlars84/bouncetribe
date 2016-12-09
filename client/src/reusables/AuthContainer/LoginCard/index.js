import React, {Component} from 'react'
import Relay from 'react-relay'
import {auth0Login} from '../auth0SignupLogin'
import SigninUserMutation from 'mutations/SigninUserMutation'
import BTButton from 'reusables/BTButton'

class LoginCard extends Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      loginError: ''
    }
  }

  handleCreatePerson = async () => {
    const {
      attemptLogin,
      loginSuccess
    } = this.props

    const email = this.state.email
    const password = this.state.password

    try {

      attemptLogin()

      const loggedinUser = await auth0Login(email, password)

      this.props.relay.commitUpdate(
        new SigninUserMutation({
          authToken: loggedinUser['id_token'],
          viewer: this.props.viewer
        }), {
          onSuccess: (response) => {
            console.log('success', response)
            this.setState({
              email: '',
              password: ''
            })
            loginSuccess(loggedinUser['id_token'])
          },
          onFailure: (error) => {
            console.log('SigninUserMutation failure', error)
            throw error
          }
        }
      )


    } catch (error) {
      console.log('logincard error', error)
      this.setState({
        loginError: error['error_description']
      })
    }

  }

  handleEmailChange(e) {
    this.setState({
      email: e.target.value,
    })
  }

  handlePasswordChange(e) {
    this.setState({
      password: e.target.value,
    })
  }

  render() {
    return (
      <div>
          <div>
            Email:
            <input
              type="text"
              value={this.state.email}
              onChange={(e) => this.handleEmailChange(e)}
            />
          </div>
          <div>
            Password:
            <input
              type="password"
              value={this.state.password}
              onChange={(e) => this.handlePasswordChange(e)}
            />
          </div>

          <div>
            {this.state.loginError ? this.state.loginError.toString() : null}
          </div>

          <div>
            <BTButton
              onClick={this.handleCreatePerson}
              text={'login'}
            />
          </div>
      </div>
    )
  }

}

export default Relay.createContainer(
  LoginCard,
  {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user
        }
      `,
    },
  }
)
