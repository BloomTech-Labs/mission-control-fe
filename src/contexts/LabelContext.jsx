import React, { useState, createContext } from 'react';

export const LabelContext = createContext();

export const LabelProvider = props => {
  const [label, setLabel] = useState({ name: '', color: '' });
  const [labelArray, setLabelArray] = useState([]);
  return (
    <LabelContext.Provider
      value={{ label, setLabel, labelArray, setLabelArray }}
    >
      {props.children}
    </LabelContext.Provider>
  );
};
