import React from 'react';
import {Box} from '@material-ui/core';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Container from '../../components/Container';
import {map} from 'lodash';
import CartProduct from '../../components/CartProduct';
import {getProductContainerStyles} from '../../styles/productContainerStyle'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  totalContainer: getProductContainerStyles(theme),
  productsContainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 500
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 750
    }
  }
})

const Carrinho = ({classes, cart}) => {
  return (
    <Container state={cart}>
      <div className={classes.container}>
        <div className={classes.productsContainer}>
          {map(cart, (entry, key) => {
            return <CartProduct key={key} data={entry} />
          })}
          <Box className={classes.totalContainer}>
            Testando 12345
          </Box>
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Carrinho));