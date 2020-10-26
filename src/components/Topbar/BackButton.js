import React from 'react';
import {useHistory} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import {KeyboardArrowLeft} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';

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
})

const BackButton = ({classes}) => {

  const history = useHistory();

  const handleClick = () => {
    history.goBack();
  }

  return (
    <div className={classes.container} onClick={handleClick}>
      <KeyboardArrowLeft className={classes.icon}/>
      <Typography className={classes.typography}>Voltar</Typography>
    </div>
  )
}

export default withStyles(styles)(BackButton);