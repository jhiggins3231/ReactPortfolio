import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  app: {
    backgroundColor: '#BBBBBF'
  }
})


function App() {
const classes = useStyles();
  return (
    <div className={classes.app}>
     <Navbar />
     <Home />
    </div>
  );
} 

export default App;
