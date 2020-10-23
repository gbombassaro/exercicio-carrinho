import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import {Box} from '@material-ui/core';

const styles = (theme) => ({
  container: {
    width: '100%',
    height: 70,
    backgroundColor: theme.palette.secondary.main
  }
})

const Topbar = ({classes}) => {
  return (
    <Box className={classes.container}>Topbar</Box>
  )
}

export default withStyles(styles)(Topbar);