import React from "react";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";

import { productsU } from "../../../queries"; // brings in the data from the grapql query
import { useQuery } from "urql"; //comes default from urql

const DashboardHome = () => {
  const [results] = useQuery({ query: productsU });
  const { data, fetching, error } = results;

  if (fetching) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <p className="warning">{error}&nbsp;</p>
      <div data-testid="dash" className="admin-dashboard-container">
        <ProductList products={data.products} />
        <DashboardContent products={data.products} />
      </div>
    </>
  );
};

export default DashboardHome;
