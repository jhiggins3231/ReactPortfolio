import React from 'react';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Typography from '@material-ui/core/Typography'
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
  toolbar: {
    background: '#5D737E',
  }

}))

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}


const Navbar = (props) => {
  const classes = useStyles();
  return(
    <React.Fragment>
    <CssBaseline />
    <HideOnScroll {...props}>
      <AppBar>
          <Toolbar className={classes.toolbar}>
          <Typography variant="title">
            </Typography>
            </Toolbar>
      </AppBar>
      </HideOnScroll>
      </React.Fragment>
  )
}

export default Navbar;