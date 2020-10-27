import React from 'react';
import {connect} from 'react-redux';
import {map} from 'lodash';
import Product from '../../components/Product'
import Container from '../../components/Container';
import productsList from '../../mock.json';
import PropTypes from 'prop-types';

const ListaDeProdutos = ({cart, dispatch}) => {

  const addProduct = entry => {
    dispatch({type: 'ADD_TO_CART', payload: entry})
  }

  return (
    <Container state={cart}>
      {map(productsList, (entry, key) => <Product key={key} data={entry} addProductAction={() => addProduct(entry)} /> )}
    </Container>
  )
}

ListaDeProdutos.propTypes = {
  cart: PropTypes.object,
  dispatch: PropTypes.func
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(ListaDeProdutos);