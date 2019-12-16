import React from "react";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";
// Context API
import { ProductContext } from '../../../context/ProductContext'

import { productsU } from "../../../queries"; // brings in the data from the grapql query
import { useQuery } from "urql"; //comes default from urql

const DashboardHome = () => {
  const [results] = useQuery({ query: productsU });
  const { data, fetching, error } = results;
  
  // State for context
  const [productState, setProductState] = React.useState(
    {
      isLoading: false,
      err: null,
      active: null,
      project: null
    }
  )

  // Product Context fn's
  const setActiveProduct = el => {
    setProductState({...productState, active: el})
  }



  if (fetching || !data) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <ProductContext.Provider value={{productState, setActiveProduct}}>

          <p className="warning">{error}&nbsp;</p>
          <div data-testid="dash" className="admin-dashboard-container">
            <ProductList products={data.products} />
            <DashboardContent products={data.products} />
          </div>
        
      </ProductContext.Provider>
    </>
  );
};

export default DashboardHome;
