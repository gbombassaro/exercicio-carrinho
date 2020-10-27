import {Grid} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import {Link, useHistory} from 'react-router-dom';

import BackButton from './BackButton';
import CartButton from './CartButton';
import CartMenu from './CartMenu';


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
});

const Topbar = ({classes, data}) => {
  const history = useHistory();
  const {pathname} = history.location;

  const renderBackButton = () => {
    if (pathname === '/') return null;
    return <BackButton />;
  };

  return (
    <Grid className={classes.container}>
      {renderBackButton()}
      <Grid className={classes.brandContainer}>
        <img src='/bulbasaur.png' className={classes.brand}/>
      </Grid>
      <Link to='/carrinho'>
        <CartButton path='/carrinho' data={data} />
      </Link>
      <CartMenu data={data} />
    </Grid>
  );
};

Topbar.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.array.isRequired
};

Topbar.defaultProps = {
  data: []
};

export default withStyles(styles)(Topbar);