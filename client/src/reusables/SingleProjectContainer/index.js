import React, { Component } from 'react'
import Relay from 'react-relay'
import Project from 'reusables/Project'
import NewProjectCreator from 'reusables/NewProjectCreator'

class SingleProjectContainer extends Component {

  get showProjectOrCreator () {
    if (this.props.project.new) {
      return (
        <NewProjectCreator
          user={this.props.user}
          project={this.props.project}
        />
      )
    } else {
      return (
        <Project
          user={this.props.user}
          project={this.props.project}
        />
      )
    }
  }

  render() {
    return (
      <div>

        {this.showProjectOrCreator}
      </div>
    )
  }
}

export default Relay.createContainer(
  SingleProjectContainer,
  {
    fragments: {
      user: () => Relay.QL`
        fragment on User {
          placename
          longitude
          latitude
          website
          experience
          email
          name
          profilePicUrl
          profilePicThumb
          handle
          summary
          id
        }
      `,
    },
  }
)
