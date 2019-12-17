import React from "react";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";
<<<<<<< HEAD
=======

>>>>>>> 395d5e59091273bfe71d5e9e8d7fa74fcaed14c1
// GraphQL
import { productsU } from "../../../queries"; // brings in the data from the grapql query
import { useQuery } from "urql"; //comes default from urql

const DashboardHome = () => {
  const [results] = useQuery({ query: productsU });
  const { data, fetching, error } = results;

  if (fetching || !data) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
<<<<<<< HEAD
      <p className="warning">{error}&nbsp;</p>
      <div data-testid="dash" className="admin-dashboard-container">
        <ProductList products={data.products} />
        <DashboardContent products={data.products} />
      </div>
=======
          <p className="warning">{error}&nbsp;</p>
          <div data-testid="dash" className="admin-dashboard-container">
              <ProductList products={data.products} />
              <DashboardContent products={data.products} />
          </div>
>>>>>>> 395d5e59091273bfe71d5e9e8d7fa74fcaed14c1
    </>
  );
};

export default DashboardHome;
