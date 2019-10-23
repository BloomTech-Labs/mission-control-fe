import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Product from "./Product";

// testing with dummy data for products
import res from "../../../data/projects";

const ProductList = () => {
  // Create a state object to hold the projects array
  // This data will most likely be passed down as props from DashboardHome
  const [filtered, setFiltered] = useState({ items: res.data.projects });

  const handleChange = e => {
    // If the search param is not an empty string and our data array has length(matchers)
    if (e.target.value !== "" && filtered.items.length) {
      let items = filtered.items;
      // Filter through the items and return each item.name that matches the search params
      items = items.filter(item => {
        return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      })
      // Then set the filtered array to state
      setFiltered({ items: items });
    } else {
      // If the search params are an empty string and the data array has no matchers, reset array
      setFiltered({ items: res.data.projects });
    }
  };

  return (
    <div className="product-list-container">
        <div className="product-list-header">
          <p className="product-list-title">Products</p>
          <p className="grade-filter">Grade</p>
        </div>
        <TextField
          variant="outlined"
          placeholder="Search here"
          onChange={handleChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            )
          }}
        />
        <div className="products-scroll-container">
          {filtered.items.map((el, i) => (
            <Product key={i}/>
          ))}
        </div>
      </div>
  );
};

export default ProductList;
