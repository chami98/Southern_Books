import React from "react";
import { useState } from "react";
import Layout from "./../../common/layout";
import axios from "axios";
import { BASE_URL } from "./../../constants";
import { ToastContainer, toast } from "react-toastify";

const Admin = () => {
  const [email, setemail] = useState("");

  const handleEmail = (event) => {
    setemail(event.target.value);
  };

  console.log("Email ", email);

  const [userRole, setUserRole] = useState("Admin");

  const handleUserRole = (event) => {
    setUserRole(event.target.value);
  };

  console.log("User role", userRole);

  const [uid, setuid] = useState("");

  const handleSave = () => {
    axios
      .get(BASE_URL + `/users/${email}`)
      .then((result) => {
        setuid(result.data[0].uid);

        if (userRole == "Admin") {
          axios
            .post(BASE_URL + "/user-claim-admin", { uid: result.data[0].uid })
            .then(() => console.log("Successfully added"))
            .catch(() => console.log("Something went wrong"));

          toast.success(
            `Successfully added ${result.data[0].name} as an admin`,
            {
              position: "top-center",
              autoClose: 5500,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
        }

        if (userRole == "Employee") {
          axios
            .post(BASE_URL + "/user-claim-employee", {
              uid: result.data[0].uid,
            })
            .then(() =>
              toast.success(
                `Successfully added ${result.data[0].name} as an Employee`,
                {
                  position: "top-center",
                  autoClose: 5500,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                }
              )
            )
            .catch(() =>
              toast.warning("Something went wrong", {
                position: "top-center",
                autoClose: 5500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
              })
            );
        }
      })
      .catch(function (error) {
        console.log(error);
      })
      .catch(() =>
        toast.warning("Something went wrong", {
          position: "top-center",
          autoClose: 5500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      );

    // if (userRole == "Admin") {
    //   axios
    //     .post(BASE_URL + "/user-claim-admin", { uid: uid })
    //     .then(() => console.log("Successfully added"))
    //     .catch(() => console.log("Something went wrong"));
    // }

    // if (userRole == "Employee") {
    //   axios
    //     .post(BASE_URL + "/user-claim-employee", { uid: uid })
    //     .then(() => console.log("Successfully added"))
    //     .catch(() => console.log("Something went wrong"));
    // }
  };

  return (
    <Layout hideSideBar>
      <div style={{ marginTop: "150px" }}>
        <h1>
          {" "}
          <i
            class="fas fa-user-shield"
            style={{ marginRight: "5px", marginBottom: "20px" }}
          ></i>
          Admin Section
        </h1>

        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div class="mb-3">
              <p style={{ textAlign: "left" }}>Enter Your email</p>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={handleEmail}
              />
            </div>
            <div>
              <p style={{ textAlign: "left" }}>Select Your your user Role</p>

              <select
                class="form-control mb-3"
                id="category"
                value={userRole}
                onChange={handleUserRole}
              >
                <option>Admin</option>
                <option>Manager</option>
                <option>Employee</option>
              </select>
            </div>

            <button
              className="btn btn-primary"
              style={{ width: "100%" }}
              onClick={handleSave}
            >
              Save
            </button>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
