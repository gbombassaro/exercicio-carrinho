import React from 'react';
import {Button, Dialog as MuiDialog, Typography} from '@material-ui/core'
import {CheckCircle} from '@material-ui/icons'
import {useHistory} from 'react-router-dom';

const Dialog = ({open, onClose}) => {

  const history = useHistory();

  const handleClick = () => {
    onClose();
    // clearState();
    history.goBack();
  }

  return (
    <MuiDialog open={open} onClose={onClose} disableBackdropClick disableEscapeKeyDown>
      <div>
        <CheckCircle/>
        <Typography>Pedido realizado com sucesso!</Typography>
        <Button onClick={handleClick}>Fechar</Button>
      </div>
    </MuiDialog>
  )
}

export default Dialog;