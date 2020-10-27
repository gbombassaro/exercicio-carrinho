import {map, filter} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Select, MenuItem} from '@material-ui/core'

import Container from '../../components/Container';
import Product from '../../components/Product';
import productsList from '../../mock.json';
import categoriesList from '../../categoriesMock.json'

const ListaDeProdutos = ({cart, dispatch}) => {

  const [select, setSelect] = useState("");
  const products = !select ? productsList : filter(productsList, {category: select});

  const addProduct = entry => {
    dispatch({type: 'ADD_TO_CART', payload: entry});
  };

  const handleChange = ({target}) => {
    setSelect(target.value);
  }
 
  return (
    <Container state={cart} title='Filtrar por'>
      <Select value={select} onChange={handleChange}>
        {map(categoriesList, (entry, key) => <MenuItem key={key} value={entry.id}>{entry.name}</MenuItem>)}
      </Select>
      {map(products, entry => <Product key={entry.id} data={entry} addProductAction={() => addProduct(entry)} /> )}
    </Container>
  );
};

ListaDeProdutos.propTypes = {
  cart: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = ({cart}) => {
  return {cart};
};

export default connect(mapStateToProps, null)(ListaDeProdutos);