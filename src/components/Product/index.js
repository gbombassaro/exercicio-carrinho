import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {getProductContainerStyles} from '../../styles/components'

const styles = theme => ({
  container: getProductContainerStyles(theme)
})

const Product = ({classes, data, addProductAction}) => {
  const {name} = data;
  return (
    <Box className={classes.container}>
      <Typography>{name}</Typography>
      <Button color="primary" onClick={addProductAction}>Adicionar ao Carrinho + </Button>
    </Box>
  )
}

export default withStyles(styles)(Product);