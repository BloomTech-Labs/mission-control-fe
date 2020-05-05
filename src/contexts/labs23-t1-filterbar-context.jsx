import React, {useState} from 'react';

export const ProjectSearchContext = React.createContext();

export const ProjectSearchProvider = props => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterList, setFilterList] = useState([])
  return (
    <ProjectSearchContext.Provider
      value={{ searchTerm, setSearchTerm,filterList, setFilterList}}
    >
      {props.children}
    </ProjectSearchContext.Provider>
  );
};
