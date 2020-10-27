import {Chip} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import {ShoppingCart} from '@material-ui/icons';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  container: {
    cursor: 'pointer',
    width: 32,
    height: 32,
  },
  amountBadge: {
    position: 'absolute',
    top: 8,
    right: 60,
    width: 24,
    height: 24,
    backgroundColor: 'white'
  },
  badgeLabel: {
    padding: 0,
    color: theme.palette.primary.main,
    fontWeight: 'bold'
  },
  icon: {
    width: 32,
    height: 32,
    fill: theme.palette.primary.main
  }
});

const CartButton = ({classes, data}) => {
  return (
    <div className={classes.container}>
      <Chip label={data.length} className={classes.amountBadge} classes={{label: classes.badgeLabel}} />
      <ShoppingCart className={classes.icon}/>
    </div>
  );
};

CartButton.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object.isRequired
};

export default withStyles(styles)(CartButton);