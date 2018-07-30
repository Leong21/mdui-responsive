import React from 'react';
import {Settings} from '@material-ui/icons';
import {IconButton} from '@material-ui/core';

const TopBarActions = props => {
  return (
    <div>
      <IconButton color="inherit">
        <Settings />
      </IconButton>
    </div>
  );
}

export default TopBarActions;

