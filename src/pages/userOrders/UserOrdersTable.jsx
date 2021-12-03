import { useSelector } from "react-redux";

const addressToStr = (a) => {
  return `${a.streetAddress}, ${a.townCity}, ${a.district}, ${a.state}, ${a.postcode}, ${a.phoneNumber}`;
};

const UserOrdersTable = ({ orders }) => {
  return (
    <div className="container">
      <table class="table" style={{ textAlign: "left" }}>
        <thead>
          <tr>
            <th scope="col"></th>
            <th
              scope="col"
              style={{
                paddingRight: "118px ",
                textAlign: "left",
              }}
            >
              Items
            </th>
            <th scope="col">Shipping Address</th>
            <th scope="col">Billing Address</th>
            <th scope="col">Status</th>
            <th scope="col">Total Price</th>
          </tr>
        </thead>
        {orders.map((order) => (
          <tbody>
            <tr key={order.id}>
              <td>
                {/* {
                                                        new Date()
                                                } */}
              </td>
              <td>
                {order.items.map((book) => (
                  <div className="row">
                    <div className="col" style={{ marginLeft: "0px" }}>
                      <span class="badge rounded-pill bg-success  ">
                        {book.name}
                      </span>
                      <span class="" style={{ margin: "0 10px" }}>
                        Rs. {book.price}
                      </span>
                      <span class="badge rounded-pill bg-warning  ">
                        {book.selectedBookQty}
                      </span>
                    </div>
                  </div>
                ))}
              </td>

              <td>{addressToStr(order.shippingAddress)}</td>
              <td>{addressToStr(order.billingAddress)}</td>
              <td>{order.status}</td>

              <td>{order.totalPrice}/=</td>
              {/*  */}
            </tr>
          </tbody>
        ))}{" "}
      </table>
    </div>
  );
};

export default UserOrdersTable;
