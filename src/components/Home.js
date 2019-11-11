import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import CardOne from './CardOne';
import CardTwo from './CardTwo';
import Skills from './Skills';
import About from './About';
import Projects from './Projects';
import Flexbox from 'flexbox-react'
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import navy from '../Port-Assets/navy.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Link } from '@material-ui/core';
import mountain from '../Port-Assets/mountain.jpeg';



const useStyles = makeStyles(theme => ({
    mainDiv: {
        padding: 50,
    },
    mainIMG: {
        background: '#5D737E',
        height: 500,
        width: 500,
        marginLeft: 20,
        marginRight: 30,
        borderRadius: '50%',
        border: '3px solid #A3A9AA',
        fontFamily: 'Inconsolata',
        fontSize: 18,
        boxShadow: '2px 6px 6px 2px rgba(30, 30, 66, .5)'

    },
    h2: {
        color: '#f2f4f3',
        textAlign: "center"
    },
    p1: {
        color: '#f2f4f3',
        textAlign: "center"
    },
    container: {
        margin: 0
    },
    bigAvatar: {
        margin: 10,
        width: 110,
        height: 110,
    },
    icon: {
        marginLeft: 85
    },
    icons: {
        margin: 10,
        width: 75,
        height: 75,
        marginLeft: 20
    }
  }))

export default function Home() {
    const classes=useStyles();
  return (
      <div className={classes.mainDiv}>
    <React.Fragment>
      <CssBaseline />
      <Grid container justify="center" alignItems="center">
      <Flexbox flexDirection="row" minHeight='50vh' padding='10px' justify="center">
    <div>
      <CardOne />
    </div>
      <Container maxWidth="sm" className={classes.container} justify="center">
        <Typography component="div" className={classes.mainIMG} >
            <br />
            <br />
            <Grid container justify="center" alignItems="center">
            <Avatar alt="Remy Sharp" src={navy} className={classes.bigAvatar} />
            </Grid>
            <h2 className={classes.h2}>James Higgins</h2>
            <p className={classes.p1}>Junior Full Stack Developer</p>
            <div className={classes.icon}>      
            <FacebookIcon className={classes.icons} onClick={() => window.open("https://www.facebook.com/james.higgins.3139")} />
            <GitHubIcon className={classes.icons} onClick={() => window.open("https://www.https://github.com/jhiggins3231/")} />
            <LinkedInIcon className={classes.icons} onClick={() => window.open("https://www.linkedin.com/in/jhiggins3231/")} />
            </div>
        </Typography>
      </Container>
    <div>
      <CardTwo />  
    </div>
      </Flexbox>
      </Grid>
      <About />
      <Skills />
      <Projects />
    </React.Fragment>
    </div>
  );
}