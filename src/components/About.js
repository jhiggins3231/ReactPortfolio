import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './About.css'

const useStyles = makeStyles({
 header: {
     fontSize: 32,
     fontFamily: 'Marker'
 },
 paragraph: {
     fontSize: 16
 },
 list: {
    fontFamily: 'Inconsolata',
    fontSize: 18
 },
 hobbies:{
     fontSize: 24,
     fontFamily: 'Marker'
 }
}) 

export default function About() {
    const classes = useStyles();

    return(
    <div>
    <h1 className={classes.header}>About Me</h1>
    <ul>
    <li className={classes.list}>Junior Full Stack JavaScript developer seeking role within a team to continue growing and learning in my skill set. Strong team skills as gained from my time in the Naval service and willingness to continue to learn throughout my career.

Junior Full Stack developer with experience in HTML, CSS, APIs, React.js, Node.js, Intermediate Javascript, Github, Heroku, Express, Sequelize, PostgresQL Databases, Angular, Material UI, and Agile.

US Navy Submarine Sonar Technician Veteran. Experienced Test Technician with a demonstrated history of working in the information technology and services industry.

8 years of experience as a Sonar Technician with experience as a sonar operator onboard an SSN during mission operations. Detailed knowledge of system operations and functionality. Diverse technical background in system maintenance, testing, operations and troubleshooting of system functions and networks.
</li>
    <h3 className={classes.hobbies}>Hobbies and Interest</h3>
    <li className={classes.list}>Car Enthusiast. Have had my share of custom/modified cars but gave up that lifestyle temporarily to pursue this career change.</li>
    <li className={classes.list}>Traveler. A few of my favorites: Australia, Japan, San Juan, and Guam. Bucket List: France, Egypt, and Eastern Australia.</li>
    <li className={classes.list}>Video Gamer.</li>
    </ul>
</div>

    )
}

