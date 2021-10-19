import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function MyVerticallyCenteredModal(props) {
  const categories = useSelector((state) => state.app.categories);

  const handleSave = () => {
    toast.success("Book is successfully deleted!", {
      position: "top-right",
      autoClose: 5500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <span class="badge rounded-pill bg-success  ">
            <i class="fas fa-plus" style={{ marginRight: "5px" }}></i>Add Books
          </span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-6">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Name"
            />
          </div>

          <div className="col-6">
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Author"
            />
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <select class="form-control" id="category">
              {categories
                .filter((category) => category.id)
                .map((category) => (
                  <option>{category.name}</option>
                ))}
            </select>
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="ISBN"
            />
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Dimensions"
            />
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Pages"
            />
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Price"
            />
          </div>

          <div className="col-6" style={{ marginTop: "10px" }}>
            <input
              class="form-control"
              type="text"
              aria-label="default input example"
              placeholder="Rating"
            />
          </div>

          <div className="col-12" style={{ marginTop: "10px" }}>
            <textarea
              class="form-control"
              type="text"
              aria-label="default input example"
              rows="2"
              placeholder="Description"
            />
          </div>
        </div>

        <div className="row" style={{ marginTop: "10px" }}>
          <div className="col-9" style={{marginTop:"8px" }}>
            <span style={{ fontFamily: "Courgette", fontSize: "16.7px"}}>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/southernbooks-b34af.appspot.com/o/southern%20books%20logo.png?alt=media&token=2e03010c-09ba-4fb8-8fbb-ef502ca854e3"
                style={{
                  width: "26px",
                  padding: "0px",
                  marginBottom: "3px",
                  marginRight: "0px",
                }}
              />
              SouthernBooks
            </span>
          </div>

          <div
            className="col-3"
            style={{ paddingRight: "0px", textAlign: "center" }}
          >
            <button
              className="btn  btn"
              style={{ color: "black" }}
              onClick={props.onHide}
            >
              Cancel
            </button>
            <button className="btn btn-success " onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function AddBooks({ book }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Link
        to="#"
        className="nav-link px-1 text-white"
        onClick={() => setModalShow(true)}
      >
        Add Books
      </Link>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
      />
    </>
  );
}

export default AddBooks;
