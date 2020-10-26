import React, {useState} from 'react';
import {map} from 'lodash';
import {IconButton, Menu, Typography} from '@material-ui/core';
import {KeyboardArrowDown} from '@material-ui/icons';
import MenuItem from './MenuItem';

const CartMenu = ({classes, data}) => {

  const [menuAnchor, setMenuAnchor] = useState(null);
  const setAnchor = ({currentTarget}) => setMenuAnchor(currentTarget);
  const closeMenu = () => setMenuAnchor(null);

  const renderMenuContent = () => {
    if (data.length < 1) return <MenuItem title='Não há itens no carrinho'/>;
    return map(data, entry => <MenuItem key={entry.id} title={entry.name} amount={entry.productAmount}/>)
  }

  return (
    <React.Fragment>
      <IconButton onClick={setAnchor}>
        <KeyboardArrowDown/>
      </IconButton>
      <Menu open={menuAnchor ? true : false} anchorEl={menuAnchor} onClose={closeMenu} anchorOrigin={{horizontal: 'left'}}>
        {renderMenuContent()}
      </Menu>
    </React.Fragment>
  )
}

export default CartMenu;