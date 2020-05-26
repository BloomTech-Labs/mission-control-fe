import React, { useState, createContext } from 'react';

export const TagContext = createContext();

export const TagProvider = props => {
  const [tag, setTag] = useState({ id: '', name: '', isUsed:false });
  const [tagArray, setTagArray] = useState([]);
  return (
    <TagContext.Provider
      value={{ tag, setTag, tagArray, setTagArray }}
    >
      {props.children}
    </TagContext.Provider>
  );
};