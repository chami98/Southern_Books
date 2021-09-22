import { useSelector } from "react-redux";
import { SHIPPING_COST } from './../../constants';

const OrderSummary = () => {
  const selectedBooks = useSelector((state) => state.cart.selectedBooks);
  
  let totalPrice = SHIPPING_COST;

  selectedBooks.forEach((book) => {
    totalPrice += book.price * book.selectedBookQty;
  });

  return (
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
              <td align="right">Rs. {SHIPPING_COST.toFixed(2)}</td>
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
  );
};

export default OrderSummary;
