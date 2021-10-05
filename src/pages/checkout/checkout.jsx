import { useState } from "react";

import Layout from "./../../common/layout";
import AddressSection from "./addressSection";
import OrderSummary from "./orderSummary";
import CustomerInformation from "./customerInformation";

import * as yup from "yup";

const Checkout = () => {
  let schema = yup.object().shape({
    streetAddress: yup.string().required().min(3),
    townCity: yup.string().required().min(3),
    postcode: yup.string().required(),
    district: yup.string().required(),
    state: yup.string().required(),
    phoneNumber: yup.number().required().min(9),
  });

  const [inputs, setInputs] = useState({
    shippingAddress: {
      streetAddress: "",
      townCity: "",
      district: "",
      postcode: "",
      state: "",
      phoneNumber: "",
    },
    billingAddress: {
      streetAddress: "",
      townCity: "",
      district: "",
      postcode: "",
      state: "",
      phoneNumber: "",
    },
  });

  const [errors, setErrors] = useState({
    shippingAddress: {
      streetAddress: "",
      townCity: "",
      district: "",
      postcode: "",
      state: "",
      phoneNumber: "",
    },
    billingAddress: {
      streetAddress: "",
      townCity: "",
      district: "",
      postcode: "",
      state: "",
      phoneNumber: "",
    },
  });

  const handleAddressChange = (e, field, type) => {
    console.log("type", type);

    const newInputs = {
      ...inputs,
    };

    switch (type) {
      case "shipping":
        newInputs.shippingAddress = {
          ...newInputs.shippingAddress,
          [field]: e.target.value,
        };
        break;

        case "billing":
          newInputs.billingAddress = {
            ...newInputs.billingAddress,
            [field]: e.target.value,
          };
          break;
    }
    setInputs(newInputs);

    const error = {};

    const inputsToValidate = type === "shipping" ?  newInputs.shippingAddress :  newInputs.billingAddress;

    try {
      schema.validateSync(
        {
          ...inputsToValidate
        },
        { abortEarly: false }
      );
    } catch (err) {
      for (let i = 0; i < err.inner.length; i++) {
        error[err.inner[i].path] = err.inner[i].message;
      }
    } finally {

      const newErrors = {}
      switch (type) {
        case "shipping":
          newErrors.shippingAddress = {
            ...error,
          };
          // no need to change exsisting errors on other addresses
          newErrors.billingAddress = errors.billingAddress;
          break;
  
          case "billing":
            newErrors.billingAddress = {
              ...error,
            };
            // no need to change exsisting errors on other addresses
            newErrors.shippingAddress = errors.shippingAddress;
            break;
      }
      setErrors(newErrors);
    }
  };

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
            <AddressSection
              handleChange={handleAddressChange}
              inputs={inputs.shippingAddress}
              errors={errors.shippingAddress}
              title={"SHIPPING ADDRESS"}
              type={"shipping"}
            />
            <AddressSection
              handleChange={handleAddressChange}
              inputs={inputs.billingAddress}
              errors={errors.billingAddress}
              title={"BILLING ADDRESS"}
              type={"billing"}
            />

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
