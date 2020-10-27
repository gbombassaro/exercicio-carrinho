import {Box, Typography, IconButton} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {Add, Remove} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

import {getProductContainerStyles} from '../../styles/components';

const styles = theme => ({
  container: {
    ...getProductContainerStyles(theme),
    justifyContent: 'flex-start'
  },
  labels: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between'
  },
  actionButtons: {
    width: 'max-content',
    display: 'flex',
    alignItems: 'center'
  },
  icon: {
    fill: theme.palette.primary.main
  }
});

const CartProduct = ({classes, data, addAction, removeAction}) => {
  const {name, price, productAmount} = data;
  return (
    <Box className={classes.container}>
      <div className={classes.actionButtons}>
        <IconButton onClick={removeAction}>
          <Remove className={classes.icon}/>
        </IconButton>
        <Typography>{productAmount}</Typography>
        <IconButton onClick={addAction}>
          <Add className={classes.icon} />
        </IconButton>
      </div>
      <div className={classes.labels}>
        <Typography>{name}</Typography>
        <Typography>R$ {price},00</Typography>
      </div>
    </Box>
  );
};

CartProduct.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array.isRequired,
  addAction: PropTypes.func.isRequired,
  removeAction: PropTypes.func.isRequired
};

export default withStyles(styles)(CartProduct);