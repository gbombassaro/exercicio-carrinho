import React from 'react';
import Topbar from '../../components/Topbar';
import {Box, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const styles = theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('md')]: {
      maxWidth: 500
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: 750
    }
  },
  titleContainer: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2)
  }
})

const Container = ({classes, children, state, title}) => {
  return (
    <React.Fragment>
      <Topbar data={state} />
      <div className={classes.container}>
        <div className={classes.contentContainer}>
          <Box className={classes.titleContainer}>
            {title && <Typography variant='h4'>{title}</Typography>}
          </Box>
          {children}
        </div>
      </div>
    </React.Fragment>
  )
}

Container.propTypes = {
  classes: PropTypes.object,
  children: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  title: PropTypes.string
}

export default withStyles(styles)(Container);