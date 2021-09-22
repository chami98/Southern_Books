import Layout from "./../../common/layout";
import { useSelector } from "react-redux";

const Checkout = () => {
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);
  let shippingCost = 480;
  let totalPrice = shippingCost;
  selectedBooks.forEach((book) => {
    totalPrice += book.price * book.selectedBookQty;
  });

  return (
    <Layout hideSideBar>
      <h2 style={{ marginTop: "80px" }}>Checkout</h2>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div
            className="col-7"
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            <p style={{ textAlign: "left" }}> CUSTOMER INFORMATION</p>
            <div className="row">
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="email"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Email"
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Phonenumber"
                    />
                  </div>
                </form>
              </div>
            </div>
            <p style={{ textAlign: "left", marginTop: "15px" }}>
              CUSTOMER ADDRESS
            </p>
            <div className="row">
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Firstname"
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Lastname"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Street Address"
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Town/City"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="District"
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Postcode"
                    />
                  </div>
                </form>
              </div>
              <div className="col">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="State"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-12">
                <form style={{ textAlign: "left" }}>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Phone Number"
                    />
                  </div>
                </form>
              </div>
            </div>
            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-8"></div>
              <div className="col-4">
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ width: "100%", borderRadius: "5px" }}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <p style={{ textAlign: "center" }}>YOUR ORDER SUMMARY</p>

            <div
              style={{
                border: "2px solid #bbb",
                padding: "10px",
                marginTop: "0px",
              }}
            >
              <table
                class="table table-borderless  "
                style={{ marginBottom: "4px", textAlign: "left" }}
              >
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Qty</th>
                    <th scope="col" style={{ textAlign: "right" }}>
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedBooks.map((book) => (
                    <tr>
                      <td> {book.name}</td>
                      <td>{book.selectedBookQty}</td>
                      <td align="right">{`Rs. ${(
                        book.selectedBookQty * book.price
                      ).toFixed(2)}`}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3"></td>
                  </tr>
                  <tr style={{ borderTop: "2px dashed #aaa" }}>
                    <td colSpan="2">Shipping</td>
                    <td align="right">Rs. {shippingCost.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td>Sub Total </td>
                    <td></td>
                    <td align="right"> Rs. {totalPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
