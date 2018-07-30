import React, { Component } from 'react';
import { Typography, Grid, withStyles, Paper } from '../../node_modules/@material-ui/core';
import ReactPlaceholder from 'react-placeholder';
import "react-placeholder/lib/reactPlaceholder.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
})

class Dashboard extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={'page ' + classes.root}>
        <Typography className="page-title" variant="title">Dashboard</Typography>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
                <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={3}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='media' rows={5} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='text' rows={8} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ReactPlaceholder type='text' rows={8} ready={false}>
              <div></div>
              </ReactPlaceholder>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);