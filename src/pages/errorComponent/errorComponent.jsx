import React from "react";
import Layout from "../../common/layout";
import { Link } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <Layout hideSideBar>
      {" "}
      <div
        className="container"
        style={{
          marginLeft: "30px",
          marginRight: "0px",
          paddingRight: "0px",
        }}
      >
        <div className="row">
          <div className="col-6" style={{ marginTop: "150px" }}>
            <h1 style={{ fontFamily: "Handlee", fontSize: "60px" }}>
              We sincerely apologize.
            </h1>
            <p
              style={{
                marginTop: "35px",
                fontFamily: "Comfortaa",
                fontSize: "23px",
              }}
            >
              The page you are looking for is no longer here. Maybe it was never
              here in the first place. In any case, we are sorry you were sent
              on this wild goose chase, and have already taken steps to have the
              person responsible fired.
            </p>
            <Link class="btn btn-outline-primary" to="/home" role="button">Return to Home</Link>
              
            
          </div>
          <div className="col-6">
            <img
              style={{ marginLeft: "25px", marginTop: "45px" }}
              src="https://raker.kemendag.go.id/assets/img/404.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorComponent;
