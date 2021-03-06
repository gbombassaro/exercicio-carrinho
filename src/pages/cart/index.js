import {Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {map, sumBy} from 'lodash';
import PropTypes from 'prop-types';
import React, {useState} from 'react';
import {connect} from 'react-redux';

import CartProduct from '../../components/CartProduct';
import Container from '../../components/Container';
import Dialog from '../../components/Dialog';
import {getProductContainerStyles} from '../../styles/components';


const styles = (theme) => ({
  totalContainer: {
    ...getProductContainerStyles(theme),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: theme.spacing(2)
  }
});

const Carrinho = ({classes, cart, dispatch}) => {

  const [dialog, setDialog] = useState(false);
  const emptyCart = cart.length < 1;

  const openDialog = () => {
    setDialog(true);
  };

  const closeDialog = () => {
    setDialog(false);
  };

  const handleIncreaseAmount = entry => {
    dispatch({type: 'INCREASE_AMOUNT', payload: entry});
  };

  const handleDecreaseAmount = entry => {
    dispatch({type: 'DECREASE_AMOUNT', payload: entry});
  };

  const clearState = () => {
    dispatch({type: 'CLEAR'});
  };

  const renderTotalContent = () => {
    if (emptyCart) return <Typography>Não há produtos no seu carrinho.</Typography>;
    return (
      <React.Fragment>
        <Typography>Total</Typography>
        <Typography>R$ {sumBy(cart, 'totalPrice')},00</Typography>
      </React.Fragment>
    );
  };

  const renderCheckoutButton = () => {
    if (emptyCart) return null;
    return <Button color='primary' variant='contained' onClick={openDialog}>Finalizar compra</Button>;
  };

  return (
    <Container state={cart} title='Finalizar pedido'>
      {map(cart, (entry, key) => <CartProduct key={key} data={entry} addAction={() => handleIncreaseAmount(entry)} removeAction={() => handleDecreaseAmount(entry)}/>)}
      <div className={classes.totalContainer}>{renderTotalContent()}</div>
      <div className={classes.buttonContainer}>{renderCheckoutButton()}</div>
      <Dialog open={dialog} onClose={closeDialog} clearState={clearState} />
    </Container>
  );
};

Carrinho.propTypes = {
  classes: PropTypes.object,
  cart: PropTypes.array,
  dispatch: PropTypes.func
};

const mapStateToProps = ({cart}) => {
  return {cart};
};

export default connect(mapStateToProps, null)(withStyles(styles)(Carrinho));