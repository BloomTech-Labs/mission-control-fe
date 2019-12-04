import React, { useEffect } from "react";
import { getProducts } from "../../../actions/productActions";
import { getProjects } from "../../../actions/projectActions";
import { connect } from "react-redux";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";

const DashboardHome = props => {

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <>
      <p className="warning">{props.productStore.error}</p>
      <div data-testid="dash" className="admin-dashboard-container">
        <ProductList products={props.productStore.products} />
        <DashboardContent />
      </div>
    </>
  );
};

const mapStateToProps = state => {
  return {
    productStore: state.productStore
  };
};

export default connect(mapStateToProps, { getProducts })(DashboardHome);
