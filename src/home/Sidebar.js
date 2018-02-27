import React from 'react';
import Profile from '../workouts/Profile'

import {
  Route,
  Link
} from 'react-router-dom'

import { routes } from './_routes';


let id = window.localStorage.getItem("currentUser")

const Sidebar = () => (

  <div className="sidebar">
    <div className="sidebar-list-styling">
      <ul className="sidebar-list list-unstyled">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><a href={`/profile/${id}`}>Profile</a> </li>
        <li><Link to="/settings">Settings</Link></li>


        </ul>
     
    </div>
    <div className="sidebar-route">
    <Route exact path="/profile/:id" component={Profile} />
      {routes.map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ))}
    </div>
  </div>
)

export default Sidebar;