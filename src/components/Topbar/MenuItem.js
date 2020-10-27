import {Box, Chip, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

const styles = theme => ({
  menuItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1)
  },
  menuItemTitle: {
    marginRight: theme.spacing(1)
  },
  chip: {
    width: 32,
    height: 32
  },
  chipLabel: {
    padding: 0,
  },
});

const MenuItem = ({classes, title, amount}) => {
  return (
    <Box className={classes.menuItem}>
      <Typography className={classes.menuItemTitle}>{title}</Typography>
      {amount && <Chip className={classes.chip} label={amount} classes={{label: classes.chipLabel}} />}
    </Box>
  );
};

MenuItem.propTypes = {
  classes: PropTypes.object,
  title: PropTypes.string,
  amount: PropTypes.number
};

export default withStyles(styles)(MenuItem);