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
    <li className={classes.list}>Hello! My name is James Higgins and I'm a Junior Full Stack Developer with a certain affinity towards React.JS. I currently live in Indianapolis, IN and spent most of my younger life here. In 2010 I decided to pack up my life and move away to join the US Navy. After spending a little over 7 years in the Navy and travelling the world I decided to step away. I thoroughly enjoyed most of my time in the Navy and am grateful for all the experiences I had. Feel free to ask me about some of them some day! In 2017 I moved back to Indianapolis in hopes of finding a job.. No such luck was to be had. So, I packed up again and moved to Manassas, VA to work as a sub-contractor for Lockheed Martin. Once I heard The Eleven Fifty Academy was accepting the GI Bill I packed my things up again and moved back to Indianapolis to enroll. My year and a half in Virginia helped me further my skillset and reintroduce me into the civilian work style/life.</li>
    <h3 className={classes.hobbies}>Hobbies and Interest</h3>
    <li className={classes.list}>Car Enthusiast. Have had my share of custom/modified cars but gave up that lifestyle temporarily to pursue this career change.</li>
    <li className={classes.list}>Traveler. A few of my favorites: Australia, Japan, San Juan, and Guam</li>
    <li className={classes.list}>Video Gamer.</li>
    </ul>
</div>

    )
}

