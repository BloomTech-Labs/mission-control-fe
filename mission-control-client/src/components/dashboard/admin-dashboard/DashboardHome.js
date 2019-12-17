import React from "react";
import ProductList from "../products/ProductList";
import DashboardContent from "./DashboardContent";
// Context API
// import { ProductContext } from '../../../context/ProductContext'
// Axios
import axiosLabsGraphQL from "../../../utils/axiosLabsGraphQL";
import axios from "axios";
// GraphQL
import { productsU } from "../../../queries"; // brings in the data from the grapql query
import { useQuery } from "urql"; //comes default from urql
import { fullProjectDetailsById, peopleByProjectId } from "../../../queries";

const DashboardHome = () => {
  const [results] = useQuery({ query: productsU });
  const { data, fetching, error } = results;
  
  // // State for context
  // const [productState, setProductState] = React.useState(
  //   {
  //     isLoading: false,
  //     err: null,
  //     active: null,
  //     project: null
  //   }
  // )

  // // Product Context fn's
  // const setActiveProduct = el => {
  //   setProductState({...productState, active: el})
  // }

  // const setSelectedProject = id => {
  //   axios
  //       .all([
  //         axiosLabsGraphQL.post("", { query: fullProjectDetailsById(id) }),
  //         axiosLabsGraphQL.post("", { query: peopleByProjectId(id) })
  //       ])
  //       .then(
  //         axios.spread((res, res2) => {
  //           const project = {
  //             project: res.data.data.projects,
  //             people: res2.data.data.projectRoles
  //           }
  //           // dispatch({ type: SET_ACTIVE_PROJECT_SUCCESS, payload: project });
  //           setProductState({...productState, project: project})
  //         })
  //       )
  //       .catch(err => {
  //         // dispatch({ type: SET_ACTIVE_PROJECT_FAILURE, payload: err.response });
  //         console.log(err)
  //       });
  // }



  if (fetching || !data) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      {/* <ProductContext.Provider value={{productState, setActiveProduct, setSelectedProject}}> */}

          <p className="warning">{error}&nbsp;</p>
          <div data-testid="dash" className="admin-dashboard-container">
            <ProductList products={data.products} />
            <DashboardContent products={data.products} />
          </div>
        
      {/* </ProductContext.Provider> */}
    </>
  );
};

export default DashboardHome;
