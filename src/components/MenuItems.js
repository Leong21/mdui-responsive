import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';
import {NavLink, withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';

import cx from 'classnames';

const styles = theme => ({
  label: {
    color: 'white'
  }, 
  icon: {
    color: 'white'
  }
});

const MenuItems = props => {
  const {classes} = props;
  return (
    <List>
      {props.navigationRoutes.map((r, i) => {

        return (
          <NavLink key={i} to={r.path} exact >
            <ListItem>
              <ListItemIcon className={classes.icon}>
                <r.icon/>
              </ListItemIcon>
              <ListItemText 
                disableTypography={true} 
                className={classes.label} 
                primary={r.name}></ListItemText>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  );
}

export default withStyles(styles)(MenuItems);