import Layout from "./../../common/layout";
import AddressSection from "./addressSection";
import OrderSummary from "./orderSummary";
import CustomerInformation from "./customerInformation";

const Checkout = () => {
  return (
    <Layout hideSideBar>
      <h2 style={{ marginTop: "80px" }}>Checkout</h2>
      <div className="container" style={{ marginTop: "30px" }}>
        <div className="row">
          <div
            className="col-7"
            style={{ paddingLeft: "30px", paddingRight: "30px" }}
          >
            <CustomerInformation />
            <AddressSection title={"SHIPPING ADDRESS"} type={"customer"} />
            <AddressSection title={"BILLING ADDRESS"} type={"customer"} />

            <div className="row" style={{ marginTop: "10px" }}>
              <div className="col-8"></div>
              <div className="col-4">
                <button
                  type="button"
                  class="btn btn-success"
                  style={{ width: "100%", borderRadius: "5px" }}
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
            
          </div>
          <OrderSummary />
        </div>
      </div>
    </Layout>
  );
};

export default Checkout;
