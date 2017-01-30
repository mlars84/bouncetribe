import React from 'react'
import Relay from 'react-relay'
import {Route, IndexRoute} from 'react-router'
import auth from 'utils/auth'
import Template from 'containers/Template'
import Feed from 'containers/Feed'
import Profile from 'containers/Profile'
import Project from 'containers/Project'
import ProjectList from 'containers/ProjectList'
import ProjectNew from 'containers/ProjectNew'
import Tribe from 'containers/Tribe'
import TribeAll from 'containers/TribeAll'
import TribeRequests from 'containers/TribeRequests'
import TribeFind from 'containers/TribeFind'
import Login from 'containers/Login'
import {Loading} from 'styled/Spinner'

const ViewerQuery = {
  viewer: (Component, variables) => Relay.QL`
    query {
      viewer {
        ${Component.getFragment('viewer', variables)}
      }
    }
  `,
}


const userOnly = (nextState, replace) => {
  if (!auth.getToken()) {
    replace({
      pathname: '/login'
    })
  }
}

const createRoutes = () => {
  return (
    <Route
      path='/'
      component={Template}
      queries={ViewerQuery}
    >
      <IndexRoute
        component={Feed}
        queries={ViewerQuery}
        onEnter={userOnly}
        render={({ props }) => props ? <Feed {...props} /> : <Loading />}
      />

      <Route
        path={'/login'}
        component={Login}
        queries={ViewerQuery}
        auth={auth}
      />

      <Route
        path={'/:userHandle'}
        onEnter={userOnly}
      >
        <IndexRoute
          component={Profile}
          queries={ViewerQuery}
          render={({ props }) => props ? <Profile {...props} /> : <Loading />}
        />
        <Route
          path={'/:userHandle/tribe'}
          component={Tribe}
          queries={ViewerQuery}
          render={({ props }) => props ? <Tribe {...props} /> : <Loading />}
        >
          <IndexRoute
            component={TribeAll}
            queries={ViewerQuery}
            render={({ props }) => props ? <TribeAll {...props} /> : <Loading />}
          />
          <Route
            path={'/:ownHandle/tribe/requests'}
            component={TribeRequests}
            queries={ViewerQuery}
            render={({ props }) => props ? <TribeRequests {...props} /> : <Loading />}
          />
          <Route
            path={'/:ownHandle/tribe/find'}
            component={TribeFind}
            queries={ViewerQuery}
            render={({ props }) => props ? <ViewerQuery {...props} /> : <Loading />}
          />
        </Route>
        <Route
          path={'/:ownHandle/sessions'}
          onEnter={userOnly}
        >
          <IndexRoute

          />
          <Route
            path={'/:ownHandle/sessions/find'}
          />
        </Route>
        <Route
          path={'/:userHandle/projects'}
          component={ProjectList}
          queries={ViewerQuery}
          onEnter={userOnly}
          render={({ props }) => props ? <ProjectList {...props} /> : <Loading />}
        />
        <Route
          path={'/:ownHandle/projects/new'}
          component={ProjectNew}
          queries={ViewerQuery}
          onEnter={userOnly}
          render={({ props }) => props ? <ProjectNew {...props} /> : <Loading />}
        />
        <Route
          path={'/:userHandle/:projectTitle'}
          onEnter={userOnly}
        >
          <IndexRoute
            component={Project}
            queries={ViewerQuery}
            render={({ props }) => props ? <Project {...props} /> : <Loading />}
          />

          <Route
            path={'/:ownHandle/:ownProject/:otherHandle/:otherProject'}
          />
        </Route>

      </Route>


    </Route>
  )
}

const Routing = createRoutes()

export default Routing