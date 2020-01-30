import React from 'react';
import { projectReducer, projectState } from '../reducers';

export const ProjectStateContext = React.createContext();
export const ProjectDispatchContext = React.createContext();

export const ProjectProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(projectReducer, projectState);

  return (
    <ProjectStateContext.Provider value={state}>
      <ProjectDispatchContext.Provider value={dispatch}>
        {children}
      </ProjectDispatchContext.Provider>
    </ProjectStateContext.Provider>
  );
};
