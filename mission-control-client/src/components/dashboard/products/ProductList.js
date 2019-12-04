import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import AddProduct from "./AddProduct";
import Product from "./Product";
import { connect } from "react-redux";
import { setActiveProduct } from "../../../actions/activeProductActions";
import { useHistory, useLocation } from 'react-router-dom' 
import { set } from "react-ga";

const ProductList = props => {

  // getting the current location and splitting into array to check for current location later
  const location = useLocation().pathname.split('/')

  const history = useHistory()

  useEffect(() => {

    setFiltered({ products: props.products });
    // if the user has matching products in the search bar and if there isn't already a product currently active
    if (filtered.products.length > 0 && !props.activeProductStore.active) {
      props.setActiveProduct(filtered.products[0]);

    // if there is already an active product in the store render that product until user has clicked on that card
    // ! important for use on any other route other then the default dashboard
    } else if (props.activeProductStore.active){
      return

    //if the user hasn't selected any current product render the first product by default
    }else{
      props.setActiveProduct(props.products[0]);
    }

  }, [props.products, props.activeProductStore.active]);

  const [filtered, setFiltered] = useState({ products: [] });

  const setProductHandler = el => {
    // if the user isn't on the dashboard view and a product is selected set the active product then push the user to the dashboard
    if(location[location.length - 1] !== 'dashboard'){
      props.setActiveProduct(el) 
      history.push(`/admin/dashboard`)

      // if the user is on the dashboard just set the active product to the card selected
    }else{
      props.setActiveProduct(el);
    }
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

        {/* <div className="add-product-icon">
          <AddCircleOutlineIcon fontSize="large" />
        </div> */}
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
              active={props.activeProductStore.active}
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

const mapStateToProps = state => {
  return {
    activeProductStore: state.activeProductStore
  };
};

export default connect(mapStateToProps, { setActiveProduct })(ProductList);
