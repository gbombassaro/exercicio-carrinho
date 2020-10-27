import {Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {KeyboardArrowLeft} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import {useHistory} from 'react-router-dom';

const styles = theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  },
  icon: {
    fill: theme.palette.primary.main,
    width: 40,
    height: 40
  },
  typography: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
});

const BackButton = ({classes}) => {

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  };

  return (
    <div className={classes.container} onClick={handleClick}>
      <KeyboardArrowLeft className={classes.icon}/>
      <Typography className={classes.typography}>Voltar</Typography>
    </div>
  );
};

BackButton.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(BackButton);