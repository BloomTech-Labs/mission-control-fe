import React, { useEffect } from "react";
import ProductList from "../products/ProductList";
import { connect } from 'react-redux';
import { getProducts } from '../../../actions/productActions';
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="admin-dashboard-container">
      <ProductList products={props.productStore.products} />
      <DashboardContent />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    productStore: state.productStore
  };
};

export default connect(mapStateToProps, getProducts)(DashboardHome);
