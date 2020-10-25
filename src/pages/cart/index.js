import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Container from '../../components/Container';
import {map} from 'lodash';
import CartProduct from '../../components/CartProduct';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
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
        </div>
      </div>
    </Container>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(withStyles(styles)(Carrinho));