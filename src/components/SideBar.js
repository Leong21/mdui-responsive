import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { Drawer, IconButton, Divider } from '../../node_modules/@material-ui/core';

const SideBar = props => {
  const {theme, classes} = props;

  return (
    <Drawer
      variant={props.variant}
      anchor={theme.direction === 'rtl' ? 'right' : 'left'}
      open={props.open}
      onClose={props.onClose}
      classes={props.drawerClasses}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <div className={classes.toolbar}>
        <div className={classes.logo}>
          {props.logo}
        </div>

        <IconButton 
          classes={{ root: classes.toolbarLabel }} 
          onClick={props.onClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </div>
      <Divider />
      {props.menuItems}
    </Drawer>
  );
}

export default SideBar;