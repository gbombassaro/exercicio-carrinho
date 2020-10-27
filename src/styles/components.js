export const getProductContainerStyles = theme => ({
  width: 'calc(100% - 32px)',
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
});