import React, {Component} from 'react'
import Relay from 'react-relay'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import {Main} from 'styled'
import 'theme/global.css'
import TopNav from 'components/TopNav'
import MobileNav from 'components/MobileNav'
import {btTheme} from 'theme'
import {url} from 'config'
import Footer from 'components/Footer'

injectTapEventPlugin()

class Template extends Component {

  get userOnly () {
    let {
      user
    } = this.props.viewer
    if (user) {
      return (
        <TopNav
          handle={user.handle}
          user={user}
          portraitUrl={(user.portrait) ? user.portrait.url : `${url}/logo.png`}
        />
      )
    }
  }

  get mobileUserOnly () {
    let {
      user
    } = this.props.viewer
    if (user) {
      return (
        <MobileNav
          user={user}
          router={this.props.router}
          location={this.props.location}
        />
      )
    }
  }

  render () {
    return (
      <MuiThemeProvider
        muiTheme={btTheme}
      >
        <Main>
          {this.userOnly}
          {this.mobileUserOnly}
          {this.props.children}
          <Footer/>
        </Main>
      </MuiThemeProvider>
    )
  }
}

export default Relay.createContainer(
  Template, {
    fragments: {
      viewer: () => Relay.QL`
        fragment on Viewer {
          user {
            doNotEmail
            notifications (
              first: 5
              orderBy: createdAt_DESC
            ) {
              edges {
                node {
                  id
                  type
                  checked
                  triggeredBy {
                    id
                    handle
                  }
                  notificationFor {
                    id
                    handle
                  }
                  createdAt
                  project {
                    id
                    title
                  }
                  session {
                    id
                  }
                }
              }
            }
            id
            handle
            portrait {
              url
            }
            projects (
              first: 1
              orderBy: createdAt_DESC
              filter: {
                privacy: PUBLIC
              }
            ) {
              edges {
                node {
                  title
                }
              }
            }
          }
        }
      `,
    },
  }
)
