import React from 'react'
import './Skills.css'
import Flexbox from 'flexbox-react'
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import reactpic from '../Port-Assets/react.png';
import node from '../Port-Assets/node.png';
import html from '../Port-Assets/html.png';
import css from '../Port-Assets/css.png';
import javascript from '../Port-Assets/javascript.png';
import github from '../Port-Assets/github.png';
import pgadmin from '../Port-Assets/pgadmin.png'; 
import postman from '../Port-Assets/postman.png';
import material from '../Port-Assets/material.png';
import angular from '../Port-Assets/angular.png';

const useStyles = makeStyles({
  bigAvatar: {
    marginTop: 0,
    margin: 10,
    width: 80,
    height: 80,
    boxShadow: '2px 6px 6px 2px rgba(0, 0, 0, .5)'
  },
  header: {
    textAlign: 'center',
    fontSize: 42,
    margin: 0,
    marginBottom: 0,
    padding: 0,
    fontFamily: 'Marker'
  },
  grid: {
    marginTop: 0,
    marginBottom: 0,
    padding: 0
  }
});

export default function Skills() {
  const classes = useStyles();

  return (
    <Flexbox flexDirection="row" minHeight='50vh' padding='10px'>
      <Grid container justify="center">
      <h1 className={classes.header}>Technical Skills</h1>
    <Grid className={classes.grid} container justify="center">
      <Avatar alt="JavaScript" src={javascript} className={classes.bigAvatar} title="JavaScript" />
      <Avatar alt="React" src={reactpic} className={classes.bigAvatar} title="React.js" />
      <Avatar alt="AngularJS" src={angular} className={classes.bigAvatar} title="AngularJS" />
      <Avatar alt="Node.js" src={node} className={classes.bigAvatar} title="Node.js" />
      <Avatar alt="HTML" src={html} className={classes.bigAvatar} title="HTML" />
      <Avatar alt="CSS" src={css} className={classes.bigAvatar} title="CSS" />
      <Avatar alt="Github" src={github} className={classes.bigAvatar} title="Github" />
      <Avatar alt="PgAdmin" src={pgadmin} className={classes.bigAvatar} title="PgAdmin" />
      <Avatar alt="Postman" src={postman} className={classes.bigAvatar} title="Postman" />
      <Avatar alt="Material-UI" src={material} className={classes.bigAvatar} title="Material-UI" />
    </Grid>
    </Grid>
    </Flexbox>
  );
}
