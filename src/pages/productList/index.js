import React from 'react';
import {connect} from 'react-redux';
import {map} from 'lodash';
import {withStyles} from '@material-ui/core/styles';
import Product from '../../components/Product'
import Container from '../../components/Container';
import productsList from '../../mock.json';

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

const ListaDeProdutos = (props) => {

  const {classes, cart, dispatch} = props;

  const addProduct = entry => {
    dispatch({type: 'ADD_TO_CART', payload: entry})
  }

  return (
    <Container state={cart}>
      <div className={classes.container}>      
        <div className={classes.productsContainer}>
          {map(productsList, (entry, key) => <Product key={key} data={entry} addProductAction={() => addProduct(entry)} /> )}
        </div>
        {/* {cart && <pre>{cart.description}</pre>} */}
      </div>
    </Container>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(withStyles(styles)(ListaDeProdutos));