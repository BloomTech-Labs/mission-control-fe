import React, { useState, createContext } from 'react';

export const ColumnContext = createContext();

export const ColumnProvider = props => {
  const [column, setColumn] = useState({ id: '', name: '' });
  return (
    <ColumnContext.Provider value={{ column, setColumn }}>
      {props.children}
    </ColumnContext.Provider>
  );
};
