import React, { useEffect, useState } from 'react';
import { useQuery } from "urql";
import gql from "graphql-tag";
// import { makeStyles } from '@material-ui/core';
// import Autocomplete from '@material-ui/lab/Autocomplete';
import Project from "./Project";
import './FilterBar.scss';

// const useStyles = makeStyles({
//   root: {
//     margin: "2% auto"
//   }
// })

const FEED_SEARCH = gql`
  query FeedSearchQuery($filter: String!) {
    # feed(filter: $filter) {
    #   id
    #   name
    #   description
    # }
      products{
        id
        name
      }
}
`

const FilterBar = () => {
  // const classes = useStyles();
  const [filter, setFilter] = useState('');
  const [filterList, setFilterList] = useState([]);

  const [result, executeQuery] = useQuery({
    query: FEED_SEARCH,
    variables: { filter },
    pause: true
  })

  const execSearch = React.useCallback(() => {
    executeQuery();
  }, [executeQuery])

  const projects = result.data ? result.data.feed : [];

  //initialize the timer var
  let timer;
  const handleChange = e => {
    //reset timer on each key stroke
    e.persist();
    window.clearTimeout(timer);
    setFilter(e.target.value);
  }//end handleChange

  const handleSubmit = e => {
    //hitting enter key submits immediately
    e && e.preventDefault();
    //clear the submit timer and submit form
    window.clearTimeout(timer);
    if (filter !== '') {
      console.log('send new or update query to BE')
      setFilterList([
        ...filterList,
        filter
      ])
    }//end if
    execSearch();
    setFilter('');
  }//end handleSubmit

  const removeTag= (item) => {
    console.log("Remove tag from backend query");
    let newFilterList= filterList.filter( ele => {
      return ele !== item;
    })
    // console.log('newList: ', newFilterList);
    return setFilterList(newFilterList);
  }//end removeTag

  const handleFocus = () => {
    // handles the search icon
    const searchInput = document.getElementById('search');
    const icon = document.querySelector('i');

    searchInput.addEventListener('focus', () => {
      icon.classList.add('hide');
    })
    searchInput.addEventListener('blur', () => {
      icon.classList.remove('hide')
    })
  }//end handleFocus


  useEffect(() => {
    //delay then submit form/or hit enter to submit immediately
    //eslint-disable-next-line
    timer = window.setTimeout(() => {
      // execSearch();
      handleSubmit();
    }, 2000)
  }, [filter])

  return (
    <div>
      <form onSubmit={handleSubmit} autoComplete='off'>
        <div className='inputCont'>
          {
            filterList.map(filterItem => {
              return (
                <span className='tag'
                  key= {`${filterItem}_{Math.random()}`}
                  >
                  {`${filterItem}`}
                  <span className='closeTag'
                    onClick= {() => {removeTag(`${filterItem}`)}}
                  >X
                  </span>
                </span>
              )
            })
          }

          <input
            onFocus={handleFocus}
            onBlur={handleFocus}
            onChange={handleChange}
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            value={filter}
          />
          <i className="fas fa-search"></i>
        </div>
        {/* <button type= 'submit'>submit</button> */}
      </form>
      {/* {console.log('filterList: ', filterList)} */}

      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </div>
  )
}

export default FilterBar;