import React from "react";
import DashboardBanner from "./DashboardBanner";
import DashboardMetrics from "./DashboardMetrics";
import PracticeMetrics from './PracticeMetrics';


const DashboardContent = (props) => {

  return (
    <div className="dashboard-content-container">
      <DashboardBanner />
       {/* //testing out the dealy */}
      <PracticeMetrics products={props.products} />

      <DashboardMetrics products={props.products}/>
    </div>
  );
};

export default DashboardContent;
