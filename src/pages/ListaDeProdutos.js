import React from 'react';
import {withStyles} from '@material-ui/core/styles';
// import {Box} from '@material-ui/core';
import Topbar from '../components/Topbar';
import Product from '../components/Product'
import productList from '../mock.json'
import {map} from 'lodash';

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
  return (
    <div className={classes.container}>
      <Topbar />
      <div className={classes.productsContainer}>
        {map(productList, (entry, key) => <Product key={key} data={entry} /> )}
      </div>
    </div>
  )
}

export default withStyles(styles)(ListaDeProdutos);