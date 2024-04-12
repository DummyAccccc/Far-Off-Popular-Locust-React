import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ProfilePage from './views/profile-page'
import CreatePackage from './views/create-package'
import Login from './views/login'
import EditProfile from './views/edit-profile'
import UIPackages from './views/ui-packages'
import Home from './views/home'
import SignUp from './views/sign-up'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ProfilePage} exact path="/profile-page" />
        <Route component={CreatePackage} exact path="/create-package" />
        <Route component={Login} exact path="/login" />
        <Route component={EditProfile} exact path="/edit-profile" />
        <Route component={UIPackages} exact path="/ui-packages" />
        <Route component={Home} exact path="/" />
        <Route component={SignUp} exact path="/sign-up" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
