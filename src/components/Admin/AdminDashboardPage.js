import React from "react";
import AdminContent from "./AdminContent";
import AdminHeader from "./AdminHeader";

// import PassHeader from "./PassHeader";
// import PassContent from "./PassContent";
// import PassSidebar from "./PassSidebar";

const AdminDashboardPage = () => {
  return (
    <div>
      <AdminHeader />

      <div className="container-fluid">
        <div className="row">
          {/* <div className="col-lg-2">
            <PassSidebar />
          </div> */}
          <div className="col-lg-10">
            <AdminContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
