import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

function MyVerticallyCenteredModal(props) {
  const [bookName, setbookName] = useState(props.book.name);
  const [authorName, setAuthorName] = useState(props.book.authors[0]);
  const [categoryName, setCategoryName] = useState(props.book.category.name);
  const [isbn, setIsbn] = useState(props.book.isbn);
  const [quantity, setQuantity] = useState(props.book.availableQuantity);
  const [price, setPrice] = useState(props.book.price);
  const [dimensions, setDimensions] = useState(props.book.dimensions);
  const [description, setDescription] = useState(props.book.description);
  const [rating, setRating] = useState(props.book.rating);

  const handleBookName = (event) => {
    setbookName(event.target.value);
  };

  const handleAuthorName = (event) => {
    setAuthorName(event.target.value);
  };

  const handleCategoryName = (event) => {
    setCategoryName(event.target.value);
  };

  const handleIsbn = (event) => {
    setIsbn(event.target.value);
  };

  const handleQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const handlePrice = (event) => {
    setPrice(event.target.value);
  };

  const handleDimensions = (event) => {
    setDimensions(event.target.value);
  };

  const handleDescription = (event) => {
    setDescription(event.target.value);
  };

  const handleRating = (event) => {
    setRating(event.target.value);
  };

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
          <span class="badge rounded-pill bg-success  ">{props.book.name}</span>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="row">
          <div className="col-4">
            {" "}
            <img src={props.book.imageUrl} alt="" style={{ width: "100%" }} />
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <label for="bookName">Book Name</label>
                <input
                  class="form-control"
                  type="text"
                  value={bookName}
                  aria-label="default input example"
                  onChange={handleBookName}
                />
              </div>

              <div className="col-6">
                <label for="authorName">Author Name</label>

                <input
                  class="form-control"
                  type="text"
                  value={authorName}
                  aria-label="default input example"
                  onChange={handleAuthorName}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="isbn">ISBN </label>

                <input
                  class="form-control"
                  type="text"
                  value={isbn}
                  aria-label="default input example"
                  onChange={handleIsbn}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="Category">Category</label>

                <input
                  class="form-control"
                  type="text"
                  value={categoryName}
                  aria-label="default input example"
                  onChange={handleCategoryName}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="quantity">Quantity</label>

                <input
                  class="form-control"
                  type="text"
                  value={quantity}
                  aria-label="default input example"
                  onChange={handleQuantity}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="price">Price</label>

                <input
                  class="form-control"
                  type="text"
                  value={price}
                  aria-label="default input example"
                  onChange={handlePrice}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="dimension">Dimensions</label>

                <input
                  class="form-control"
                  type="text"
                  value={dimensions}
                  aria-label="default input example"
                  onChange={handleDimensions}
                />
              </div>

              <div className="col-6" style={{ marginTop: "5px" }}>
                <label for="rating">Rating</label>

                <input
                  class="form-control"
                  type="text"
                  value={rating}
                  aria-label="default input example"
                  onChange={handleRating}
                />
              </div>

              <div className="col-12" style={{ marginTop: "5px" }}>
                <label for="description">Description</label>

                <textarea
                  class="form-control"
                  type="text"
                  value={description}
                  aria-label="default input example"
                  onChange={handleDescription}
                  rows="2"
                />

                <div className="row" style={{ marginTop: "10px" }}>
                  <div className="col-8" style={{ marginTop: "8px" }}>
                    <span
                      style={{ fontFamily: "Courgette", fontSize: "16.7px" }}
                    >
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

                  <div className="col-4">
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
                    {/* <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                  /> */}
                  </div>
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
