import React, { useEffect, useState, useContext } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { FILTERED_DATA as newQuery } from './FilterBarQueries';
import { ProjectSearchContext } from '../../contexts/FilterBarContext';
import './FilterBar.scss';

const FilterBar = () => {
  // const classes = useStyles();
  const [searchFilter, setSearchFilter] = useState('');
  const [filterList, setFilterList] = useState([]);

  const projectSearchContext = useContext(ProjectSearchContext);

  //initialize the timer var
  let timer;
  const handleChange = e => {
    //reset timer on each key stroke
    e.persist();
    window.clearTimeout(timer);
    setSearchFilter(e.target.value);
  }; //end handleChange

  const handleSubmit = e => {
    //hitting enter key submits immediately
    e && e.preventDefault();
    //clear the submit timer and submit form automatically
    window.clearTimeout(timer);
    if (searchFilter !== '') {
      console.log('send new or update query to BE');
      projectSearchContext.setSearchTerm(searchFilter);
      setFilterList([...filterList, searchFilter]);
    } //end if
    //reset searchFilter to empty str
    setSearchFilter('');
  }; //end handleSubmit

  const removeTag = item => {
    console.log('Remove tag from backend query');
    let newFilterList = filterList.filter(ele => {
      return ele !== item;
    });
    // console.log('newList: ', newFilterList);
    projectSearchContext.setSearchTerm(searchFilter);
    return setFilterList(newFilterList);
  }; //end removeTag

  const handleFocus = () => {
    // handles the search icon
    const searchInput = document.getElementById('search');
    const icon = document.querySelector('i');

    searchInput.addEventListener('focus', () => {
      icon.classList.add('hide');
    });
    searchInput.addEventListener('blur', () => {
      icon.classList.remove('hide');
    });
  }; //end handleFocus

  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="inputCont">
          {filterList.map(filterItem => {
            return (
              <span className="tag" key={`${filterItem}_{Math.random()}`}>
                {`${filterItem}`}
                <span
                  className="closeTag"
                  onClick={() => {
                    removeTag(`${filterItem}`);
                  }}
                >
                  X
                </span>
              </span>
            );
          })}

          <input
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
            type="text"
            name="search"
            id="search"
            placeholder="Search"
            value={searchFilter}
          />
          <i className="fas fa-search"></i>
        </div>
      </form>
    </>
  );
};

export default FilterBar;
