import React from 'react';
import {Button, Dialog as MuiDialog, Typography} from '@material-ui/core'
import {CheckCircle} from '@material-ui/icons'
import {useHistory} from 'react-router-dom';
import {withStyles} from '@material-ui/core/styles'

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
})

const Dialog = ({classes, open, onClose}) => {

  const history = useHistory();

  const handleClick = () => {
    onClose();
    // clearState();
    history.goBack();
  }

  return (
    <MuiDialog open={open} onClose={onClose} disableBackdropClick disableEscapeKeyDown>
      <div className={classes.content}>
        <CheckCircle className={classes.icon}/>
        <Typography className={classes.text}>Pedido realizado com sucesso!</Typography>
        <Button variant='contained' color='secondary' onClick={handleClick}>Fechar</Button>
      </div>
    </MuiDialog>
  )
}

export default withStyles(styles)(Dialog);