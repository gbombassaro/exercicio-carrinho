import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box, Grid} from '@material-ui/core';
import {ShoppingCart} from '@material-ui/icons'

const styles = (theme) => ({
  container: {
    width: 'calc(100% - 48px)',
    height: 70,
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 24,
    paddingLeft: 24
  },
  brandContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center'
  },
  brand: {
    width: 56,
    heigth: 56
  },
  icon: {
    width: 40,
    height: 40
  }
})

const Topbar = ({classes}) => {
  return (
    <Grid className={classes.container}>
      <Grid className={classes.brandContainer}>
        <img src='/bulbasaur.png' className={classes.brand} />
      </Grid>
      <Grid>
        <ShoppingCart className={classes.icon} />
      </Grid>
    </Grid>
  )
}

export default withStyles(styles)(Topbar);