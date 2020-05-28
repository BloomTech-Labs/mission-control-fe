/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useContext } from 'react';
import { ProjectSearchContext } from '../../contexts/FilterBarContext';
import './FilterBar.scss';

const FilterBar = () => {
  // const classes = useStyles();
  const [searchFilter, setSearchFilter] = useState('');
  const [filterList, setFilterList] = useState([]);

  const projectSearchContext = useContext(ProjectSearchContext);

  // initialize the timer var
  let timer;
  const handleChange = e => {
    // reset timer on each key stroke
    e.persist();
    window.clearTimeout(timer);
    setSearchFilter(e.target.value);
  }; // end handleChange

  const handleSubmit = e => {
    // hitting enter key submits immediately
    // eslint-disable-next-line no-unused-expressions
    e && e.preventDefault();
    // clear the submit timer and submit form automatically
    window.clearTimeout(timer);
    if (searchFilter !== '') {
      // eslint-disable-next-line no-console
      console.log('send new or update query to BE');
      projectSearchContext.setSearchTerm(searchFilter);
      setFilterList([...filterList, searchFilter]);
    } // end if
    // reset searchFilter to empty str
    setSearchFilter('');
  }; // end handleSubmit

  const removeTag = item => {
    // eslint-disable-next-line no-console
    console.log('Remove tag from backend query');
    const newFilterList = filterList.filter(ele => {
      return ele !== item;
    });
    // console.log('newList: ', newFilterList);
    projectSearchContext.setSearchTerm(searchFilter);
    return setFilterList(newFilterList);
  }; // end removeTag

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
  }; // end handleFocus

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
          <i className="fas fa-search" />
        </div>
      </form>
    </>
  );
};

export default FilterBar;
