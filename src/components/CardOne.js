import React from 'react';
import './CardOne.css';
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
import indy from '../Port-Assets/indy.jpg';

const useStyles = makeStyles(theme => ({
  card: {
    width: 300,
    maxWidth: 345,
    minHeight: 400,
    margin: 0,
    border: '1px solid #A3A9AA',
    fontFamily: 'Inconsolata',
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
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: '#ACBEA3',
  },
}));

export default function CardOne() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader className={classes.content}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            JH
          </Avatar>
        }
        
        title="Professional Experience"
        subheader="2010-2019"
      />
      <CardMedia
        className={classes.media}
        image={indy}
        title="Indianapolis Skyline"
      />
      <CardContent className={classes.content}>
        <Typography variant="body2" className={classes.content} component="p">
          Professional Experience
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography className={classes.content} paragraph variant="h5">Title: Sonar Technician Submarines</Typography>
          <Typography paragraph className={classes.content}>
            <ul>
              <li>
            Date:2010-2017 </li>
            <li>Company: United States Navy
              </li>
            <h3>Responsibilities: </h3>
              <li>
              Work Leader responsible for guiding workers in the completion of Task Group Instructions.
              </li>
              <li>Responsible for repairs of outboard cables and components.</li>
              <li>Demonstrated a detailed knowledge of modern nuclear submarine construction to include, pneumatic, hydraulic, fresh and seawater systems, electrical distribution, weapons delivery, propulsion, communications, navigation, network and electronic systems.</li>
              <li> Entry level sonar operator. Gained experience to reinforce theoretical training to develop critical, methodical analytical skills to interpret and classify complex data and make solid tactical recommendations based on this information.</li>
            </ul>
          </Typography>
          <Typography paragraph className={classes.content} variant="h5">
            Title: Test and Evaluation Team Lead
          </Typography>
          <Typography paragraph className={classes.content}>
            <ul>
              <li>
            Date:2018-2019 </li>
            <li>Company: Gromelski and Associates
              </li>
            <h3>Responsibilities: </h3>
              <li>
              Team Leader responsible for system stress testing, kit installations, system testing, FFR activities, and documenting failure reports.
              </li>
              <li>Efficient at performing system operations, running health checks, and error recovery.</li>
            </ul>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}