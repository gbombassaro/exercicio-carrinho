import React from 'react';
import {connect} from 'react-redux';
import {Box, Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {find} from 'lodash';
import {getProductContainerStyles} from '../../styles/components'

const styles = theme => ({
  container: getProductContainerStyles(theme)
})

const Product = ({classes, cart, data, addProductAction}) => {
  const {name, id} = data;
  const productInCart = find(cart, {id: id}) ? true : false;
  return (
    <Box className={classes.container}>
      <Typography>{name}</Typography>
      <Button color="primary" disabled={productInCart} onClick={addProductAction}>{productInCart ? "Produto já adicionado" : "Adicionar ao Carrinho +" }</Button>
    </Box>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Product));