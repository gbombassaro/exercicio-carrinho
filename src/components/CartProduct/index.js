import React from 'react';
import {Box, Button, Typography, IconButton} from '@material-ui/core';
import {Add, Remove} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';
import {getProductContainerStyles} from '../../styles/productContainerStyle'

const styles = theme => ({
  container: getProductContainerStyles(theme),
  icon: {
    fill: theme.palette.primary.main
  }
})

const CartProduct = ({classes, data, addProductAction}) => {
  const {name} = data;
  return (
    <Box className={classes.container}>
      <div>
        <IconButton>
          <Remove className={classes.icon}/>
        </IconButton>
        <IconButton>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <Typography>{name}</Typography>
      <Typography>R$ </Typography>
    </Box>
  )
}

export default withStyles(styles)(CartProduct);