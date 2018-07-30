import React, {Component} from 'react';
import { AppBar, Toolbar, IconButton, Typography, withStyles, Hidden } from '../../node_modules/@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SideBar from './SideBar';
import classNames from 'classnames';

const drawerWidth = '250px';

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar : {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth})`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  appToolBar: {
    paddingLeft: '24px'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }, 
  title: {
    flex: 1
  }, 
  hide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: '36px'
  }, 
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: '#252525',
    color: 'white',
    whiteSpace: 'nowrap',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
    '& .menu-items': {
      '& .menu-item': {
        padding: '10px',
        marginRight: '15px',
        '& .menu-item-text': {
          visibility: 'hidden'
        }
      },
      '& .selected .menu-item': {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        '& .menu-icon': {
          color: theme.palette.primary.main
        }
      }
    }
  },
  logo: {
    flexGrow: 1,
    lineHeight: 0,
    marginLeft: '24px',
    color: 'white'
  },
  toolbarLabel: {
    color: "#fff",
  },
  content: {
    flexGrow: 1,
    overflow: 'auto',
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MainLayout extends Component {
  constructor(props){
    super(props);

    this.state = {
      mobileSideBarOpen: false, 
      sideBarOpen: true
    }
  }

  handleDrawerToggle = event => {
    this.setState(state => ({ 
      mobileSideBarOpen: !state.mobileSideBarOpen,
      sideBarOpen: !state.sideBarOpen
    }));
  }
  
  render(){
    const TopBarActions = this.props.topBarActions;
    const Logo = this.props.logo;
    const {classes, theme} = this.props;

    return (
      <div className={classes.root}>
        <AppBar className={classNames(classes.appBar, this.state.sideBarOpen && classes.appBarShift)}>
          <Toolbar 
            disableGutters={true}
            className={classNames(this.state.sideBarOpen && classes.appToolBar)}>
            <IconButton
              className={classNames(classes.menuButton, this.state.sideBarOpen && classes.hide)}
              color="inherit"
              onClick={this.handleDrawerToggle}
            >
              <MenuIcon/>
            </IconButton>
            <Typography 
              className={classes.title}
              variant="title" 
              color="inherit">App Title</Typography>
            <TopBarActions />
          </Toolbar>
        </AppBar>
        <Hidden mdUp>
          <SideBar 
            theme={theme}
            classes={classes}
            drawerClasses={{
              paper: classes.drawerPaper,
            }}
            open={this.state.mobileSideBarOpen}
            onClose={this.handleDrawerToggle}
            logo={<Logo/>}
            menuItems={this.props.menuItems}
          /> 
        </Hidden>
        <Hidden smDown implementation="css">
          <SideBar 
            variant="permanent"
            open={this.state.sideBarOpen}
            onClose={this.handleDrawerToggle}
            theme={theme}
            classes={classes}
            drawerClasses={{
              paper: classNames(classes.drawerPaper, !this.state.sideBarOpen && classes.drawerPaperClose),
            }}
            logo={<Logo/>}
            menuItems={this.props.menuItems}
          />
        </Hidden>
        <div className={classes.content}>
          <div className={classes.toolbar} />
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withStyles(styles, {withTheme:true})(MainLayout);