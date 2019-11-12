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
    <li className={classes.list}>Hello! My name is James Higgins and I'm a Junior Full Stack Developer with a certain affinity towards React.JS. I attended the Eleven Fifty Academy JavaScript Course in the fall of 2019. I grew up in various parts of Indiana and Tennessee but will always call Indiana home. I graduated from Fishers High School in 2009 and shortly after decided to join the Navy. A brief history about my time in the Navy is shown above. I've always been more into the technical world and have really enjoyed learning to code/develop. I'm often known as the introvert of the group but once I get comfortable I'm quite the character. I have 2 pets that have been with me now for a few years. The first is a Boxer/Pitbull Mix named Layla. The second is a bearded dragon named Sobek.</li>
    <h3 className={classes.hobbies}>Hobbies and Interest</h3>
    <li className={classes.list}>Car Enthusiast. Have had my share of custom/modified cars but gave up that lifestyle temporarily to pursue this career change.</li>
    <li className={classes.list}>Traveler. A few of my favorites: Australia, Japan, San Juan, and Guam. Bucket List: France, Egypt, and Eastern Australia.</li>
    <li className={classes.list}>Video Gamer.</li>
    </ul>
</div>

    )
}

