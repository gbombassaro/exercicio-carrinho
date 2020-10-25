import React from 'react';
import Topbar from '../../components/Topbar';

const Container = ({children, state}) => {
  return (
    <React.Fragment>
      <Topbar data={state} />
      {children}
    </React.Fragment>
  )
}

export default Container;