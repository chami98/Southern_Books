import ValidatedInput from "./../../common/ValidatedInput";
import { useState } from "react";
import * as yup from "yup";

let schema = yup.object().shape({
  streetAddress: yup.string().required().min(3),
  townCity: yup.string().required().min(3),
  postcode: yup.string().required(),
  district: yup.string().required(),
  state: yup.string().required(),
  phoneNumber: yup.number().required().min(9),
});

const AddressSection = ({ title }) => {
  const [inputs, setInputs] = useState({
    streetAddress: "",
    townCity: "",
    district: "",
    postcode: "",
    state: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    streetAddress: "",
    townCity: "",
    district: "",
    postcode: "",
    state: "",
    phoneNumber: "",
  });

  const handleChange = (e, field) => {
    setInputs({
      ...inputs,
      [field]: e.target.value,
    });

    const error = {};

    try {
      schema.validateSync(
        {
          ...inputs,
          [field]: e.target.value,
        },
        { abortEarly: false }
      );
    } catch (err) {
      for (let i = 0; i < err.inner.length; i++) {
        error[err.inner[i].path] = err.inner[i].message;
      }
    } finally {
      setErrors(error);
    }
  };

  return (
    <>
      <p style={{ textAlign: "left", marginTop: "15px" }}>{title}</p>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col">
          <ValidatedInput
            placeholder="Street Address"
            field="streetAddress"
            value={inputs.streetAddress}
            onChange={(e) => handleChange(e, "streetAddress")}
            errorText={errors.streetAddress}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Town/City"
            field="townCity"
            value={inputs.townCity}
            onChange={(e) => handleChange(e, "townCity")}
            errorText={errors.townCity}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col">
          <ValidatedInput
            placeholder="District"
            field="district"
            value={inputs.district}
            onChange={(e) => handleChange(e, "district")}
            errorText={errors.district}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Postcode"
            field="postcode"
            value={inputs.postcode}
            onChange={(e) => handleChange(e, "postcode")}
            errorText={errors.postcode}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="State"
            field="state"
            value={inputs.state}
            onChange={(e) => handleChange(e, "state")}
            errorText={errors.state}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-12">
          <ValidatedInput
            placeholder="Phone Number"
            field="phoneNumber"
            value={inputs.phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
            errorText={errors.phoneNumber}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default AddressSection;
