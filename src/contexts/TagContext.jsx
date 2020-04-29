

import React from 'react';
import { tagReducer, tagState } from '../reducers';

export const TagStateContext = React.createContext();
export const TagDispatchContext = React.createContext();

export const TagProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(tagReducer, tagState);

  return (
    <TagStateContext.Provider value={state}>
      <TagDispatchContext.Provider value={dispatch}>
        {children}
      </TagDispatchContext.Provider>
    </TagStateContext.Provider>
  );
};
