import React, { ComponentType } from 'react';
import { Store } from '@reduxjs/toolkit';

type WithReduxProps = {
  children: React.ReactNode;
  storename: string;
};

const withRedux = ({children, storename}: WithReduxProps) => {
  console.log('withRedux', storename);
  return (
    children
  )
};


export default withRedux;