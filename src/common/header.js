import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-solid-svg-icons";

import { useHistory } from "react-router";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
} from "firebase/auth";
import { initializeFirebase } from "./../firebase/init";
import { Popover } from "react-tiny-popover";

initializeFirebase();
const provider = new GoogleAuthProvider();
const auth = getAuth();

const handleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log("Successfully Logged", result);
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log("Error Login", error);

      // ...
    });
};

const Header = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);
  const [displayName, setDN] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [profilePopoverOpen, setProfilePopoverOpen] = useState(false);

  const [loggedIn, setloggedIn] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("user >>> iside header ", user);
      setDN(user.displayName);
      setloggedIn(true);
      setPhotoUrl(user.photoURL);
      // ...
    } else {
      // User is signed out
      setloggedIn(false);
      console.log("No user");
      setDN("");
    }
  });

  const handleLogout = () => {
    setloggedIn(false);
    auth.signOut();
  };

  const onChangeHandler = (value) => {
    setTimeout(() => {
      dispatch({
        type: "SET_SEARCH_STRING",
        payload: value,
      });
    }, 200);
  };

  return (
    <header
      className="p-2 bg-dark text-white"
      style={{ position: "fixed", width: "100%", top: 0 }}
    >
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-start">
          {/* <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </a> */}

          <ul
            className="nav col-4 me-sm-auto justify-content-center mb-md-0"
            style={{ fontFamily: "Roboto Mono" }}
          >
            <li>
              <Link to="/home" className="nav-link px-1 text-white ">
                Home
              </Link>
            </li>

            <li>
              <Link to="/faq" className="nav-link px-1 text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link to="/about" className="nav-link px-1 text-white">
                About
              </Link>
            </li>
          </ul>

          <form className="col-4 mb-sm-0 me-sm-3">
            <input
              type="search"
              className="form-control form-control-sm form-control-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => onChangeHandler(e.target.value)}
            />
          </form>

          <div className="text-end">
            {!loggedIn ? (
              <>
                <Popover
                  isOpen={profilePopoverOpen}
                  positions={["bottom"]} // preferred positions by priority
                  onClickOutside={() => setProfilePopoverOpen(false)}
                  content={
                    <div
                      style={{
                        width: "100%",
                        background: "#212529",
                        color: "#fff",
                        float: "left",
                        padding: "4px 6px",
                        marginTop: 4,
                        borderRadius: 12,
                        minWidth: 240,
                      }}
                    >
                      <div style={{ padding: "18px 0", paddingBottom: "19px" }}>
                        {" "}
                        <h6
                          style={{
                            textAlign: "center",
                            fontFamily: "Quicksand",
                            fontSize: "15.5px",
                          }}
                        >
                          <i class="fas fa-user-check" style={{marginRight:"6px"}}></i> Choose a Sign in
                          Method{" "}
                        </h6>
                      </div>
                      <div
                        style={{
                          padding: "5px 0",
                          // borderBottom: "1px solid white",
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-sm btn-danger me-2"
                          onClick={() => handleLogin()}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "96%",
                            fontFamily: "Quicksand",
                            fontSize: "15px",
                            textAlign: "left",
                            marginLeft: "5px",
                          }}
                        >
                          <i
                            class="fab fa-google"
                            style={{ marginRight: "8px" }}
                          ></i>
                          Sign in with Google
                        </button>
                      </div>
                      <div style={{ paddingBottom: "4px " }}>
                        {" "}
                        <button
                          type="button"
                          className="btn btn-sm btn-info me-2"
                          // onClick={() => handleLogin()}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "96%",
                            fontSize: "15px",
                            fontFamily: "Quicksand",
                            textAlign: "left",
                            marginLeft: "5px",
                          }}
                        >
                          <i
                            class="fab fa-twitter"
                            style={{ marginRight: "8px" }}
                          ></i>
                          Sign in with Twitter
                        </button>
                      </div>

                      <div
                        style={{
                          paddingBottom: "3px ",
                          //  borderBottom: "1px solid white",
                        }}
                      >
                        <button
                          type="button"
                          className="btn btn-sm btn-primary me-2"
                          // onClick={() => handleLogin()}
                          style={{
                            textDecoration: "none",
                            color: "white",
                            width: "96%",
                            fontFamily: "Quicksand",
                            fontSize: "15px",
                            textAlign: "left",
                            marginLeft: "5px",
                          }}
                        >
                          <i
                            class="fab fa-facebook-f"
                            style={{ marginRight: "12px" }}
                          ></i>
                          Sign in with Facebook
                        </button>
                      </div>
                    </div>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-warning "
                    onClick={() => setProfilePopoverOpen(!profilePopoverOpen)}
                  >
                    Login
                  </button>
                </Popover>
                {/* {displayName} */}
              </>
            ) : null}

            {loggedIn ? (
              <>
                <Popover
                  isOpen={profilePopoverOpen}
                  positions={["bottom"]} // preferred positions by priority
                  onClickOutside={() => setProfilePopoverOpen(false)}
                  content={
                    <div
                      style={{
                        width: "100%",
                        background: "#212529",
                        color: "#fff",
                        float: "left",
                        padding: "8px 16px",
                        marginTop: 5,
                        borderRadius: 3,
                        minWidth: 150,
                      }}
                    >
                      <div
                        style={{
                          padding: "5px 0",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        Profile
                      </div>
                      <div
                        style={{
                          padding: "5px 0",
                          borderBottom: "1px solid #ddd",
                        }}
                      >
                        My Orders
                      </div>
                      <div style={{ padding: "5px 0", paddingTop: "10px" }}>
                        {" "}
                        <button
                          style={{ width: "100%" }}
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => handleLogout()}
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                  }
                >
                  <button
                    type="button"
                    className="btn btn-sm btn-link me-2"
                    onClick={() => setProfilePopoverOpen(!profilePopoverOpen)}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    <img
                      src={photoUrl}
                      width="30"
                      style={{ marginRight: "5px", borderRadius: "14px" }}
                    />
                    {displayName}
                  </button>
                </Popover>
                {/* {displayName} */}
              </>
            ) : null}
          </div>
          <div>
            <Link to="/faq" className="nav-link px-1 text-white">
              <FontAwesomeIcon
                icon={faShoppingCart}
                style={{
                  marginLeft: "20px",
                  fontSize: "21px",
                  marginBottom: "0px",
                }}
              />{" "}
              <span class="position-absolute top-1 start-70 translate-middle badge rounded-pill bg-danger">
                {selectedBooks.length}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
