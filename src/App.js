import React, { Component } from 'react';
import './App.css';
import MainLayout from './components/MainLayout';
import TopBarActions from './components/TopBarActions';
import Routes from './Routes';
import MenuItems from './components/MenuItems';
import { navigationRoutes } from './Routes';
import { MuiThemeProvider, CssBaseline, createMuiTheme } from '@material-ui/core';
import DeepPurple from '@material-ui/core/colors/deepPurple';

const Logo = props => (
  <div>Logo</div>
);


class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: DeepPurple
      }
    })

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <MainLayout
          menuItems={<MenuItems navigationRoutes={navigationRoutes} />}
          topBarActions={TopBarActions}
          logo={Logo}
        >
          <Routes />
        </MainLayout>
      </MuiThemeProvider>

    );
  }
}

export default App;
