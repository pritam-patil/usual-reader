import React from 'react';
import { object } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ErrorReporter from '../components/core';
import Home from './Home';
import '../index.scss';

const styles = theme => ({
  content: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    margin: 'auto',
  },
});

const HomeScreen = props => {
  return (
    <ErrorReporter>
      <div className="App">
        <Home />
      </div>
    </ErrorReporter>
  );
};

HomeScreen.propTypes = {
  classes: object.isRequired,
};

export default withStyles(styles)(HomeScreen);
