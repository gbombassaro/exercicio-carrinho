import React from 'react';
import {Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Container from '../../components/Container';
import {map} from 'lodash';
import CartProduct from '../../components/CartProduct';
import {getProductContainerStyles} from '../../styles/productContainerStyle'

const styles = (theme) => ({
  totalContainer: getProductContainerStyles(theme),
})

const Carrinho = ({classes, cart}) => {
  return (
    <Container state={cart} title='Finalizar pedido'>
      {map(cart, (entry, key) => <CartProduct key={key} data={entry}/>)}
      <Box className={classes.totalContainer}>
        Testando 12345
      </Box>
    </Container>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Carrinho));