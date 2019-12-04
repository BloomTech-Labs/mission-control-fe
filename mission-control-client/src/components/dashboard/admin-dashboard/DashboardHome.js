import React, { useEffect } from "react";
import { getProducts } from "../../../actions/productActions";
import { getProjects } from "../../../actions/projectActions";
import { connect } from "react-redux";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";

import { productsU } from '../../../queries';
import { useQuery } from 'urql';

const DashboardHome = props => {
  const [results] = useQuery({query:productsU})
  const { data, fetching, error } = results;
  
  useEffect(() => {
    props.getProducts();
  }, []);

  if(!data){
    return <h2>Loading...</h2>
  }
  return (
    <>
      {/* {data.products.map(product => {
        return <p>{product.name}</p>
      })} */}
      <p className="warning">{error}</p>
      <div data-testid="dash" className="admin-dashboard-container">
        <ProductList products={data.products} />
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
