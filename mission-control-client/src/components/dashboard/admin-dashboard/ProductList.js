import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Product from "./Product";

// testing with dummy data for products
import res from "../../../data/projects";

const ProductList = () => {
  // This data will most likely be passed down as props from DashboardHome
  const [filtered, setFiltered] = useState({ items: res.data.projects });

  const handleChange = e => {
    if (e.target.value !== "" && filtered.items.length) {
      let items = filtered.items;
      items = items.filter(item => {
        return item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
      });
      setFiltered({ items: items });
    } else {
      setFiltered({ items: res.data.projects });
    };
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
