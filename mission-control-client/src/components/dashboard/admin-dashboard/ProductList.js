import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import { Input } from 'semantic-ui-react'

import Product from "./Product";

const ProductList = props => {
  
  useEffect(() => {
    setFiltered({ products: props.products });
  }, [props]);

  const [filtered, setFiltered] = useState({ products: [] });

  const handleChange = e => {
    const products = props.products;
    const re = /^[a-z0-9]+$/i;

    if (e.target.value !== "" && re.test(e.target.value)) {
      setFiltered({
        products: products.filter(item => {
          return item.productName.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
        })
      });
    } else if (!re.test(e.target.value) && e.target.value !== "") {
      setFiltered({ products: [] });
    } else {
      setFiltered({ products: props.products });
    };
  };

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
          {filtered.products.length && filtered.products.map((el, i) => (
            <Product key={i} el={el} />
          ))}
        </div>
      </div>
  );
};

export default ProductList;
