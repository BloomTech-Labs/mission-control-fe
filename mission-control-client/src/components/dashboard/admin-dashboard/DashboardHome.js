import React, { useEffect } from "react";
import { getProducts } from '../../../actions/productActions';
import { connect } from "react-redux";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div data-testid="dash" className="admin-dashboard-container">
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
