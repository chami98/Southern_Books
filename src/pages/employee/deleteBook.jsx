import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { BASE_URL } from "../../constants";

function MyVerticallyCenteredModal(props) {
  const DeleteBook = () => {
    axios
      .delete(BASE_URL + `/books/delete/${props.book.id}`)
      .then(() => {
        console.log("Book deleted successfully");
      })
      .catch((err) => {
        console.log("Book is not deleted", err.response.status);
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
          <span class="badge rounded-pill bg-success  ">{props.book.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4">
            {" "}
            <img src={props.book.imageUrl} alt="" style={{ width: "250px" }} />
          </div>
          <div className="col-8">
            <div style={{ textAlign: "center" }}>
              <i
                class="fas fa-trash-alt"
                style={{
                  fontSize: "100px",
                  textAlign: "center",
                  color: "#dc3545",
                  marginTop: "15px",
                }}
              ></i>

              <h4
                style={{
                  textAlign: "center",
                  marginTop: "35px",
                  fontFamily: "Roboto",
                  fontSize: "25px",
                }}
              >
                You are about to delete "{props.book.name}"
              </h4>

              <p
                style={{
                  textAlign: "center",
                  marginBottom: "0px",
                  fontFamily: "Averia Libre",
                  fontSize: "18px",
                }}
              >
                This will delete your product from the Southern Books!
              </p>
              <p
                style={{
                  textAlign: "center",
                  fontFamily: "Averia Libre",
                  fontSize: "18px",
                }}
              >
                Are you sure?
              </p>

              <div className="row">
                <div className="col-6"></div>

                <div
                  className="col-6"
                  style={{ marginTop: "45px", paddingRight: "0px" }}
                >
                  <button
                    className="btn  btn"
                    style={{ marginRight: "5px", color: "black" }}
                    onClick={props.onHide}
                  >
                    Cancel
                  </button>
                  <button
                    className="btn btn-danger btn"
                    onClick={() => DeleteBook()}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function DeleteBook({ book }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-danger btn-sm"
        onClick={() => setModalShow(true)}
        style={{ marginRight: "5px" }}
      >
        <i class="fas fa-trash-alt"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
      />
    </>
  );
}

export default DeleteBook;
