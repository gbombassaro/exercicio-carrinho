import {Button, Dialog as MuiDialog, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {CheckCircle} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';
import {useHistory} from 'react-router-dom';

const styles = theme => ({
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'calc(100% - 32px)',
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    [theme.breakpoints.up('md')]: {
      minWidth: 500,
    }
  },
  text: {
    margin: theme.spacing(2, 0, 2, 0)
  },
  icon: {
    width: 50,
    height: 50,
    fill: theme.palette.secondary.main
  }
});

const Dialog = ({classes, clearState, open, onClose}) => {

  const history = useHistory();

  const handleClick = () => {
    onClose();
    clearState();
    history.goBack();
  };

  return (
    <MuiDialog open={open} onClose={onClose} disableBackdropClick disableEscapeKeyDown>
      <div className={classes.content}>
        <CheckCircle className={classes.icon}/>
        <Typography className={classes.text}>Pedido realizado com sucesso!</Typography>
        <Button variant='contained' color='secondary' onClick={handleClick}>Fechar</Button>
      </div>
    </MuiDialog>
  );
};

Dialog.propTypes = {
  classes: PropTypes.object,
  clearState: PropTypes.func.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};

export default withStyles(styles)(Dialog);