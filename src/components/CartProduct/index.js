import React from 'react';
import {Box, Typography, IconButton} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import {getProductContainerStyles} from '../../styles/components'

const styles = theme => ({
  container: {
    ...getProductContainerStyles(theme),
    justifyContent: 'flex-start'
  },
  icon: {
    fill: theme.palette.primary.main
  }
})

const CartProduct = ({classes, data, addAction, removeAction}) => {
  const {name, price, productAmount} = data;
  return (
    <Box className={classes.container}>
      <div style={{width: 'max-content', display: 'flex'}}>
        <IconButton onClick={removeAction}>
          <Remove className={classes.icon}/>
        </IconButton>
        <Typography>{productAmount}</Typography>
        <IconButton onClick={addAction}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <div style={{width: '100%', display: 'flex', justifyContent: 'space-between'}}>
        <Typography>{name}</Typography>
        <Typography>R$ {price},00</Typography>
      </div>
    </Box>
  )
}

export default withStyles(styles)(CartProduct);