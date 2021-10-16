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
            <input
              class="form-control"
              type="text"
              value="Default input"
              aria-label="default input example"
            />
          </div>
        </div>
      </Modal.Body>
      {/* <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer> */}
    </Modal>
  );
}

function EditBooks({ book }) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button
        variant="outline-primary btn-sm"
        onClick={() => setModalShow(true)}
        style={{ marginRight: "5px" }}
      >
        <i class="fas fa-edit"></i>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        book={book}
      />
    </>
  );
}

export default EditBooks;
