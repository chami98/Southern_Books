import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.book.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4">
            {" "}
            <img src={props.book.imageUrl} alt="" style={{ width: "250px" }} />
          </div>
          <div className="col-8">
            <p>Author: {props.book.authors}</p>
            <p>{props.book.description}</p>
            <p>ISBN: {props.book.isbn}</p>
            <p> Pages: {props.book.pages}</p>
            <p> Price: Rs.{props.book.price}/=</p>
            <p>
              {" "}
              Available Quantity:{" "}
              <span class="badge rounded-pill bg-warning text-dark ">
                {props.book.availableQuantity} in Stock!
              </span>
            </p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ViewBooks({ book }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-success btn-sm"
        onClick={() => setModalShow(true)}
        style={{ marginRight: "5px" }}
      >
        <i class="fas fa-eye"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
      />
    </>
  );
}

export default ViewBooks;
