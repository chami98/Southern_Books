import React from "react";

import Layout from "./../../common/layout";

const Employee = () => {
  return (
    <Layout hideSideBar>
      <h1 style={{ marginTop: "80px" }}>
        {" "}
        <i class="fas fa-user-shield" style={{ marginRight: "5px" }}></i>
        Employee Section
      </h1>
    </Layout>
  );
};

export default Employee;
