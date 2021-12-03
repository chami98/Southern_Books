import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../common/layout";
import { BASE_URL } from "../../constants";
import Reports from "../employee/Reports";
import SalesReports from "../employee/SalesReports";
import UserOrdersTable from "./UserOrdersTable";

const UserOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState([]);
  const uid = useSelector((state) => state.user.userDetails.user.uid);

  useEffect(() => {
    setOrders([]);
    setLoading(true);
    axios.get(BASE_URL + "/orders/" + uid).then((res) => {
      setOrders(res.data);
    });
  }, [uid]);

  return (
    <Layout hideSideBar>
      <div>
        <h1
          style={{
            fontFamily: "Comfortaa",
            marginTop: "80px",

            textAlign: "center",
          }}
        >
          {" "}
          <i
            class="fas fa-book-reader"
            style={{ marginRight: "10px", fontSize: "33px" }}
          ></i>
          My orders
        </h1>
      </div>

      {orders.length ? <UserOrdersTable orders={orders} /> : `No Orders`}
    </Layout>
  );
};

export default UserOrders;
