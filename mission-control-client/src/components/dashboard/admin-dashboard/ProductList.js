import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from 'semantic-ui-react'

import Product from "./Product";

const ProductList = props => {
  console.log(props);
  useEffect(() => {
    setFiltered({ ...filtered, items: props.products });
  }, [props]);

  // This data will most likely be passed down as props from DashboardHome
  const [filtered, setFiltered] = useState({ items: [], filteredItems: [] });
  console.log(filtered);

  const handleChange = e => {
    console.log(filtered.searchParam);
    const re = /^[a-z0-9]+$/i;
    console.log(e.keyCode);
    
    if (e.target.value !== "" && re.test(e.target.value)) {
      setFiltered({ items: filtered.items.filter(item => {
        console.log(item);
        return item.productName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      })})
    } else {
      setFiltered({ items: props.products, filteredItems: [] });
    };
  };

  // const handleChange = e => {
  //   const re = /^[a-z0-9]+$/i;
  //   if (e.target.value !== "" && re.test(e.target.value) && filtered.items.length) {
  //     let items = filtered.items;
  //     console.log(items);
  //     items = items.filter(item => {
  //       console.log(item);
  //       return item.productName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
  //     });
  //     setFiltered({ items: items });
  //   } else {
  //     setFiltered({ items: props.products });
  //   };
  // };

  return (
    <div className="product-list-container">
        <div className="product-list-header">
          <p className="product-list-title">Products</p>
          <p className="grade-filter">Grade</p>
        </div>
        <span className="admin-product-search-wrapper">
        <SearchIcon fontSize="large" className="admin-product-search-icon"/>
        <input
          className='admin-product-search'
          placeholder="Search here"
          onChange={handleChange}
        />
        </span>
        <div className="products-scroll-container">
          {filtered.items.length && filtered.items.map((el, i) => (
            <Product key={i} el={el} />
          ))}
        </div>
      </div>
  );
};

export default ProductList;
