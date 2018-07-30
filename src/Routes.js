import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {Dashboard, Assignment, List} from '@material-ui/icons';
import DashboardPage from './containers/Dashboard';
import RegisterPage from './containers/Register';
import TasksPage from './containers/Tasks';

export const navigationRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: Dashboard, 
    component: DashboardPage
  }, 
  {
    path: '/register',
    name: 'Register',
    icon: List,
    component: RegisterPage
  }, 
  {
    path: '/tasks',
    name: 'Tasks',
    icon: Assignment,
    component: TasksPage
  }
];

export default () =>
  <Switch>
    {navigationRoutes.map((r, i) => <Route key={i} exact path={r.path} component={r.component} />)}
  </Switch>