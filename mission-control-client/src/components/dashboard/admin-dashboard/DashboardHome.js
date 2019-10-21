import React, { useEffect } from "react";
import ProductList from "./ProductList";
import DashboardContent from "./DashboardContent";
import { getProducts } from "../../../actions/productActions";
import { getProjectGroups } from '../../../actions/projectActions';
import { connect } from "react-redux";

const DashboardHome = ({ getProducts, getProjectGroups, products }) => {

  useEffect(() => {
    getProducts();
    getProjectGroups();
  }, [])

  return (
    <div className="admin-dashboard-container">
      <ProductList />
      <DashboardContent />
      {products && products.map(el => (
        <p key={el.id}>{el.productName}</p>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    products: state.productStore.products
  };
};

export default connect(
  mapStateToProps,
  { getProducts, getProjectGroups }
)(DashboardHome);
