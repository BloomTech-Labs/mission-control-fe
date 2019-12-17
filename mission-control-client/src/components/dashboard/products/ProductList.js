import React, { useState, useEffect, useContext } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddProduct from "./AddProduct";
import Product from "./Product";
// Context to be used
import {ProductContext} from '../../../context/ProductContext'
// import { connect } from "react-redux";
// import { setActiveProduct } from "../../../actions/activeProductActions";

const ProductList = props => {
  const [filtered, setFiltered] = useState({ products: [] });
  const [active, setActive] = useState("");

  // Context
  const {productState, setActiveProduct} = useContext(ProductContext)

  useEffect(() => { 
    //  set Filtered State data; alphabetical rendering.
    setFiltered({
      products: props.products.sort((a, b) =>
        a.name.toUpperCase() > b.name.toUpperCase() ? 1 : -1
      )
    });

    if (filtered.products.length > 0) {
      // Locate active Product element
      const activeElement = filterloop(filtered.products);
      // Pass active Product element to redux state.
      setActiveProduct(filtered.products[activeElement || 0]);
    } else {
      // default active product to be element 0 within product array.
      setActiveProduct(props.products[0]);
    }
  }, [props.products]);

  // Function to locate active element index within an array
  const filterloop = arr => {
    for (let i = 0; i < arr.length; i++) {
      if (active.id === arr[i].id) {
        return i;
      }
    }
  };

  const setProductHandler = async el => {
    await setActiveProduct(el);
    setActive(el);
    // console.log(productState)
  };

  const handleChange = e => {
    const products = props.products;
    const re = /^[a-z0-9\s]+$/i;

    if (
      e.target.value !== "" &&
      re.test(e.target.value) &&
      products.length > 0
    ) {
      setFiltered({
        products: products.filter(item => {
          return (
            item.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
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
        <AddProduct />
      </div>
      <span className="admin-product-search-wrapper">
        <SearchIcon fontSize="large" className="admin-product-search-icon" />
        <input
          className="admin-product-search"
          placeholder="Search here"
          onChange={handleChange}
        />
      </span>
      {filtered.products.length ? (
        <div className="products-scroll-container">
          {filtered.products.map((el, i) => (
            <Product
              active={productState.active}
              setActiveProduct={setProductHandler}
              key={i}
              el={el}
              i={el.id}
            />
          ))}
        </div>
      ) : (
        <p className="products-no-products">No products</p>
      )}
    </div>
  );
};

// const mapStateToProps = state => {
//   return {
//     activeProductStore: state.activeProductStore
//   };
// };
export default ProductList
// export default connect(mapStateToProps, { setActiveProduct })(ProductList);
