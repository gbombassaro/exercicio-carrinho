import React from 'react';
import {Box, Button, Typography} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';

const styles = theme => ({
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: theme.spacing(2),
    borderWidth: 1,
    borderColor: '#EAEAEA',
    borderStyle: 'solid',
    borderRadius: 5,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    '&:hover': {
      borderColor: theme.palette.primary.main
    }
  }
})

const Product = ({classes, data, addProductAction}) => {
  const {name} = data;
  return (
    <Box className={classes.container}>
      <Typography>{name}</Typography>
      <Button color="primary" onClick={addProductAction}>Adicionar ao Carrinho + </Button>
    </Box>
  )
}

export default withStyles(styles)(Product);