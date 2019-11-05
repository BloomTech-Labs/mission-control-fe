import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Product from "./Product";

const ProductList = props => {
  console.log(props)
  useEffect(() => {
    setFiltered({ products: props.products });
  }, [props]);

  const [filtered, setFiltered] = useState({ products: [] });

  const [active, setActive] = useState(null);

  useEffect(() => {
    if(filtered.products.length > 0) {
      setActive(filtered.products[0].id)
    }
  }, [filtered.products])

  const setActiveProduct = i => {
    setActive(i);
  };

  const handleChange = e => {
    const products = props.products;
    const re = /^[a-z0-9]+$/i;

    if (e.target.value !== "" && re.test(e.target.value)) {
      setFiltered({
        products: products.filter(item => {
          return (
            item.productName
              .toLowerCase()
              .search(e.target.value.toLowerCase()) !== -1
          );
        })
      });
    } else if (!re.test(e.target.value) && e.target.value !== "") {
      setFiltered({ products: [] });
    } else {
      setFiltered({ products: props.products });
    }
  };

  return (
    <div className="product-list-container">
      <div className="product-list-header">
        <p className="product-list-title">Products</p>
        <div className="add-product-icon">
          <AddCircleOutlineIcon fontSize="large" />
        </div>
      </div>
      <span className="admin-product-search-wrapper">
        <SearchIcon fontSize="large" className="admin-product-search-icon" />
        <input
          className="admin-product-search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </span>
      <div className="products-scroll-container">
        {filtered.products.length &&
          filtered.products.map((el, i) => (
            <Product
              active={active}
              setActiveProduct={setActiveProduct}
              key={i}
              el={el}
              i={el.id}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
