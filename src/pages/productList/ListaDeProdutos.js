import React from 'react';
import {map} from 'lodash';
import {useSelector, useDispatch} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Topbar from '../../components/Topbar';
import Product from '../../components/Product'
import {addToCart} from './cartReducer';

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

const ListaDeProdutos = ({classes}) => {

  const state = useSelector(state => state);
  console.log(state);
  const productsList = useSelector(state => state.productsList);

  const dispatcher = useDispatch();
  
  // console.log(productList);
  // const dispatch = useDispatch();

  return (
    <div className={classes.container}>
      <Topbar />
      <div className={classes.productsContainer}>
        {map(productsList, (entry, key) => <Product key={key} data={entry} addProductAction={() => dispatcher(addToCart())} /> )}
      </div>
    </div>
  )
}

export default withStyles(styles)(ListaDeProdutos);