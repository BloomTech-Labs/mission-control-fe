import React, { useEffect, useState } from 'react';
import { useQuery } from "urql";
import { PROJECT_LIST_VIEW } from '../../components/ProjectList/Queries/projectQueries';

export default function FilterPage() {
    const [filterTerm, setFilterTerm] = useState("");
    const [filterList, setFilterList] = useState([]);
    const [page, setPage] = useState(`page=1`);


    const [result, executeQuery] = useQuery({
        query:PROJECT_LIST_VIEW
    })
  
  function getPage(direction) {
    const numberPattern = /\d+/g;
    let num = page.match(numberPattern);
    //console.log(num);
    (direction === "next")? num++ : num--;
  
    if (num > 4) {
      num = 1;
    }
    if (num < 1) {
      num = 4;
  }
    //console.log(num);
    setPage(`page=${num}`);  
  }
  
  
    useEffect(() => {
axios
        .get(`${executeQuery}`)
        .then(res => {
          console.log(res);

          const filterQuery = res.data.results.filter(location =>
            location.name(filterTerm)
          );
          setFilterList(filterQuery);
        })
        .catch(err => {
          console.error("loc data", err);
        });
    }, [filterTerm, page]);
  
    const handleChange = e => {
      setFilterTerm(e.target.value);
    };
  
    return (
      <section className="filter-list-cta">
        <SearchWrap>
          <SearchForm handleChange={handleChange} filterTerm={filterTerm} />
        </SearchWrap>
  
        <ButtonCta>
          <button onClick={() => getPage("previous")}> Previous Page</button>
          <button onClick={() => getPage("next")}>Next Page </button>
        </ButtonCta>
  
        <CardsWrap>
          {filterList.map(term => {
            return (
              <FilterField       
                key={`${term}_{Math.random()}`}
                term={term}
              />
            );
          })}
        </CardsWrap>
      </section>
    );
  }