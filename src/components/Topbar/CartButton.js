import React from 'react';
import {Chip} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons';
import {withStyles} from '@material-ui/core/styles';

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
})

const CartButton = ({classes, data}) => {
  return (
    <div className={classes.container}>
      <Chip label={data.length} className={classes.amountBadge} classes={{label: classes.badgeLabel}} />
      <ShoppingCart className={classes.icon}/>
    </div>
  )
}

export default withStyles(styles)(CartButton);