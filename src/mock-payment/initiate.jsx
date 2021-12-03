import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ValidatedInput from "../common/ValidatedInput";
import CreditCardInput from "react-credit-card-input";
import { toast } from "react-toastify";
import { auto } from "@popperjs/core";

const validCard = {
  number: "4242 4242 4242 4242",
  cvc: "111",
};

const MockInitiate = () => {
  const show = useSelector((state) => state.payment.show);
  const amount = useSelector((state) => state.payment.amount);
  const callBack = useSelector((state) => state.payment.callBack);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const initInputs = {
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  };
  const [inputs, setInputs] = useState(initInputs);

  const [errors, setErrors] = useState({
    name: "",
    number: "",
    expiry: "",
    cvc: "",
  });

  const handleNameChange = (name) => {
    setInputs({ ...inputs, name });
  };
  const handleExpiryChange = (e) => {
    setInputs({ ...inputs, expiry: e.target.value });
  };
  const handleCVCChange = (e) => {
    setInputs({ ...inputs, cvc: e.target.value });
  };
  const handleNumberChange = (e) => {
    setInputs({ ...inputs, number: e.target.value });
  };

  const handleCancel = () => {
    dispatch({
      type: "CANCLE_PAYMENT",
    });
    setInputs(initInputs);
  };
  const handlePayment = () => {
    if (!inputs.number || !inputs.cvc || !inputs.expiry) {
      toast.warning("Please fill data", {
        position: "top-right",
        autoClose: 5500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    setLoading(true);
    console.log(inputs);
    if (inputs.number === validCard.number && inputs.cvc === validCard.cvc) {
      setTimeout(() => {
        setLoading(false);
        toast.success("Transaction Completed Successfully", {
          position: "top-right",
          autoClose: 5500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        dispatch({
          type: "END_PAYMENT",
        });
        setInputs(initInputs);
        callBack();
      }, 2000);
    } else {
      setTimeout(() => {
        setLoading(false);
        toast.warning("Credit card is invalid", {
          position: "top-right",
          autoClose: 5500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }, 2000);
    }
  };

  if (!show) {
    return <></>;
  }

  return (
    <div
      className="container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      {/* backgorund */}
      <div
        style={{
          position: "relative",
          top: 0,
          left: -10,
          width: "100vw",
          height: "100vh",
          background: "#bbb",
          opacity: 0.5,
        }}
      ></div>

      <div
        className="row"
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <div className="col-4"></div>
        <div
          className="col-4"
          style={{
            background: "white",
            marginTop: 100,
            marginBottom: 100,
            // maxWidth: 400,
            padding: "0 30px",
          }}
        >
          <div
            className="row"
            style={{
              textAlign: "center",
              margin: "0 0px",
              marginTop: "45px",
              textAlign: "left",
              fontWeight: "bold",
              fontSize: 30,
            }}
          >
            <div
              className="row"
              style={{ marginLeft: "70px", marginBottom: "10px" }}
            >
              <div className="col-1">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/southernbooks-b34af.appspot.com/o/southern%20books%20logo.png?alt=media&token=2e03010c-09ba-4fb8-8fbb-ef502ca854e3"
                  style={{
                    width: "28px",
                    padding: "0px",
                    marginBottom: "25px",
                    marginRight: "0px",
                  }}
                />
              </div>

              <div className="col">
                <h3 style={{ fontFamily: "Courgette", fontSize: "26.7px" }}>
                  {" "}
                  SouthernBooks
                </h3>
              </div>
            </div>
            <div className="col-xs-12" style={{ fontFamily: "Quicksand" }}>
              Pay with card
            </div>
          </div>
          <div
            className="row"
            style={{
              textAlign: "center",
              margin: "0px 0px",
              marginBottom: "40px",
              textAlign: "left",
              fontWeight: "bold",
            }}
          >
            <div className="col-xs-12" style={{ fontFamily: "Quicksand" }}>
              Amount
              <span
                class="badge rounded-pill bg-success  "
                style={{ fontFamily: "Quicksand", marginLeft: "2px" }}
              >
                Rs.{amount.toFixed(2)}
              </span>
            </div>
          </div>
          {/* <div
						className="row"
						style={{ paddingTop: 10, paddingBottom: 10 }}
					>
						<ValidatedInput
							placeholder="Name On card"
							field="name"
							value={inputs.name}
							onChange={(e) => handleChange(e, 'name', 'name')}
							errorText={errors.name}
						/>
					</div> */}

          <input
            class="form-control"
            type="text"
            placeholder="Cardholder Name"
          />

          <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
            <CreditCardInput
              onError={({ inputName, err }) =>
                console.log(`credit card input error: ${err}`)
              }
              cardNumberInputProps={{
                value: inputs.number,
                onChange: handleNumberChange,
              }}
              cardExpiryInputProps={{
                value: inputs.expiry,
                onChange: handleExpiryChange,
              }}
              cardCVCInputProps={{
                value: inputs.cvc,
                onChange: handleCVCChange,
              }}
              fieldClassName="input"
            />
          </div>
          <div className="row" style={{ paddingTop: 10, paddingBottom: 0 }}>
            <div className="col-sm-12">
              <button
                className="btn btn-primary"
                style={{ marginTop: "20px", width: "70%" }}
                onClick={handlePayment}
              >
                Pay Rs.{amount.toFixed(2)}
              </button>
            </div>
          </div>
          <div className="row" style={{ paddingTop: 10, paddingBottom: 10 }}>
            <div className="col-sm-12">
              <button
                className="btn btn-secondary"
                style={{ marginTop: "0px", width: "70%" }}
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>

            <div className="col-sm-12">
              {" "}
              <img
                style={{ width: "220px", marginTop: "15px" }}
                src="https://www.stmalachi.org/wp-content/uploads/2018/08/credit-card-png-hd-major-credit-card-logo-png-clipart-8552.png"
                alt=""
              />
            </div>
          </div>

          <div className="d-flex justify-content-center">
            {loading && (
              <div
                className="spinner-border text-primary "
                style={{
                  width: "2.5rem",
                  height: "2.5rem",
                  fontSize: "20px",
                  marginTop: "1vh",
                  marginBottom: "2vh",
                }}
                role="status"
              >
                <span className="sr-only"></span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MockInitiate;
