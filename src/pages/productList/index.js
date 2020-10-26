import React from 'react';
import {connect} from 'react-redux';
import {map} from 'lodash';
import Product from '../../components/Product'
import Container from '../../components/Container';
import productsList from '../../mock.json';

const ListaDeProdutos = ({cart, dispatch}) => {

  const addProduct = entry => {
    dispatch({type: 'ADD_TO_CART', payload: entry})
    //DISPTACH INCREASE AMOUNT
  }

  return (
    <Container state={cart}>
      {map(productsList, (entry, key) => <Product key={key} data={entry} addProductAction={() => addProduct(entry)} /> )}
    </Container>
  )
}

const mapStateToProps = ({cart}) => {
  return {cart};
}

export default connect(mapStateToProps, null)(ListaDeProdutos);