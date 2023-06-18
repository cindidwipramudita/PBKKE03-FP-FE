import React from "react";
import PassHeader from "./PassHeader";
import PassContent from "./PassContent";
import PassSidebar from "./PassSidebar";

const PassDashboardPage = () => {
  return (
    <div>
      <PassHeader />

      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-2">
            <PassSidebar />
          </div> */}
          <div className="col-lg-10">
            <PassContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassDashboardPage;
