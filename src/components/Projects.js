import React from 'react';
import './Projects.css'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Flexbox from 'flexbox-react'
import creature from '../Port-Assets/creature.png';
import staticPic from '../Port-Assets/static.png';
import pokemon from '../Port-Assets/pokemon.jpg';
import nissan from '../Port-Assets/nissan.jpg';
import red from '../Port-Assets/red.jpg';

const useStyles = makeStyles({
  card: {
    maxWidth: 300,
    backgroundColor: '#0A0908',
    margin: 10,
    border: '1px solid #A3A9AA',
    boxShadow: '2px 6px 6px 2px rgba(0, 0, 0, .5)'
  },
  content: {
    fontFamily: 'Inconsolata',
    fontSize: 14,
    color: '#F0F7EE'
  },
  title: {
    fontFamily: 'Marker',
    color: '#FFF07C'
  }
});

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
      <Flexbox>
    <Card className={classes.card} onClick={() => window.open("https://codepen.io/jhiggins3231/full/yLBxgby")}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="creature"
          height="140"
          image={creature}
          title="CSS Creature"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            CSS Creature
          </Typography>
          <Typography variant="body2" component="p" className={classes.content}>
            Our very first project at EFA. A simple CSS Creature.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card} onClick={() => window.open("https://jhiggins3231.github.io/staticLayout/")}>
    <CardActionArea>
      <CardMedia
        component="img"
        alt="static"
        height="140"
        image={staticPic}
        title="static"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
          Static Layout
        </Typography>
        <Typography variant="body2" component="p" className={classes.content}>
          Our second project at EFA. A static layout of a website from our instructors list..
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  <Card className={classes.card} onClick={() => window.open("https://pokemonarenaapi.firebaseapp.com")}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="pokemon"
          height="140"
          image={pokemon}
          title="Catch Em"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Catch 'Em
          </Typography>
          <Typography variant="body2" component="p" className={classes.content}>
            For my third project at EFA I made a Pokemon API. This API was deployed using FireBase.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card} onClick={() => window.open("https://jh-wishlistclient.herokuapp.com")}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="nissan"
          height="140"
          image={nissan}
          title="Nissan"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Nissan 240sx
          </Typography>
          <Typography variant="body2" component="p" className={classes.content}>
            Blue Badge project created with Node.JS and React.JS. Deployed on Heroku. I made a wishlist generator for car parts for a very specific chassis.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.card} onClick={() => window.open("https://jke-1150-projects-client.herokuapp.com/")}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="redBadge"
          height="140"
          image={red}
          title="Project/1150"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            Project/1150
          </Typography>
          <Typography variant="body2" component="p" className={classes.content}>
            A group project that required 2 CRUD Tables. As a group we decided to create a website to store past and future EFA projects. Hopefully, this will enable students to have a place to go and view others projects/code.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Flexbox>
  );
}