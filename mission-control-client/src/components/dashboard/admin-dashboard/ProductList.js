import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

import Product from "./Product";

// testing with dummy data for products
import res from "../../../data/projects";

const ProductList = () => {
  return (
    <div className="product-list-container">
        <div className="product-list-header">
          <p className="product-list-title">Products</p>
          <p className="grade-filter">Grade</p>
        </div>
        <TextField
          variant="outlined"
          placeholder="Search here"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon fontSize="large" />
              </InputAdornment>
            )
          }}
        />
        <div className="products-scroll-container">
          {res.data.projects.map((el, i) => (
            <Product key={i}/>
          ))}
        </div>
      </div>
  );
};

export default ProductList;
