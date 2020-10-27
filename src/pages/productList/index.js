import {map} from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';

import Container from '../../components/Container';
import Product from '../../components/Product';
import productsList from '../../mock.json';


const ListaDeProdutos = ({cart, dispatch}) => {

  const addProduct = entry => {
    dispatch({type: 'ADD_TO_CART', payload: entry});
  };

  return (
    <Container state={cart}>
      {map(productsList, (entry, key) => <Product key={key} data={entry} addProductAction={() => addProduct(entry)} /> )}
    </Container>
  );
};

ListaDeProdutos.propTypes = {
  cart: PropTypes.object,
  dispatch: PropTypes.func
};

const mapStateToProps = ({cart}) => {
  return {cart};
};

export default connect(mapStateToProps, null)(ListaDeProdutos);