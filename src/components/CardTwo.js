import React from 'react';
import './CardTwo.css';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import sub from '../Port-Assets/sub.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    maxWidth: 345,
    minHeight: 400,
    margin: 0,
    border: '1px solid #A3A9AA',
    boxShadow: '2px 6px 6px 2px rgba(0, 0, 0, .5)'
  },
  content:{
    fontFamily: 'Inconsolata',
    fontSize: 12
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand1: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen1: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#ACBEA3',
  },
}));

export default function CardTwo() {
  const classes = useStyles();
  const [expanded1, setExpanded1] = React.useState(false);

  const handleExpandClick1 = () => {
    setExpanded1(!expanded1);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            JH
          </Avatar>
        }
        title="Pride Runs Deep"
        subheader="Brother of the 'Phin"
      />
      <CardMedia
        className={classes.media}
        image={sub}
        title="The Sooner The Better"
      />
      <CardContent>
        <Typography variant="body2" className={classes.content} component="p">
          A little about my time in the United States Navy.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand1, {
            [classes.expandOpen1]: expanded1,
          })}
          onClick={handleExpandClick1}
          aria-expanded={expanded1}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded1} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.content} paragraph>Dive, Dive</Typography>
          <Typography paragraph className={classes.content} >
            I joined the Navy at 19 years of age with dreams of working on aircraft. Most people tend to ask me "why did you join the Navy to work on aircraft"? Well, the Navy actually has and maintains more aircraft than the Air Force. I went through the process of enlisting and taking the ASVAB to see what jobs I may qualify for. After a few hours of test taking I discovered that I would be able to do almost anything I wanted. Yes, I would be able to work on aircraft. However, I did not know at the time that needs of the Navy came first. The Navy needed Submariners so a Submariner I became. I shipped out for boot camp shortly before July 4th and spent the next 2 months going through training. Overall basic training was pretty easy but I wouldn't want to do it again. Once that was done they shipped me off to Groton, CT to go through Basic Enlisted Submarine School. Here is where I was taught the basics of being a submariner and a Sonar Technician. At the end of my time there I was given the option of where I wanted to go next. Those options were Washington State, Georgia, Virgina, Connecticut, or Guam. I never was a fan of anywhere that became even remotely cold in the winter so I jumped on the opportunity to go to Guam. I spent the next 4.5 years attached to the USS Oklahoma City and went on 3 deployments with that ship. I went through a rigorous 9 month qualification process that I managed to finish in 7 months. At the end of this process you earn what we submariners call 'Fish'. It is a very prestigious honor and very few people can call themselves 'Brothers of the 'Phin'. I spent months underwater and traveled 75,000+ nautical miles throughout my time with them. At the end of my time with the submarine and crew I picked orders to come back state side and work in Virginia. After a slow 2 years in Virginia I decided to exit the Navy and start my life over in Indiana. 
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}