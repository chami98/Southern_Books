import ValidatedInput from "./../../common/ValidatedInput";
import { useState } from "react";

const AddressSection = ({ title }) => {
  const [streetAddress, setStreetAddress] = useState();
  const [townCity, setTownCity] = useState();
  const [district, setDistrict] = useState();
  const [postcode, setPostcode] = useState();
  const [state, setState] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handleChange = (e, field) => {
    if (field == "streetAddress") {
      setStreetAddress(e.target.value);
    } else if (field == "townCity") {
      setTownCity(e.target.value);
    } else if (field == "district") {
      setDistrict(e.target.value);
    } else if (field == "postcode") {
      setPostcode(e.target.value);
    } else if (field == "state") {
      setState(e.target.value);
    } else if (field == "phoneNumber") {
      setPhoneNumber(e.target.value);
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
            value={streetAddress}
            onChange={(e) => handleChange(e, "streetAddress")}
            errorText={streetAddress == "cha" && " ljkljk"}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Town/City"
            field="townCity"
            value={townCity}
            onChange={(e) => handleChange(e, "townCity")}
            errorText={townCity == "cha" && " ljkljk"}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col">
          <ValidatedInput
            placeholder="District"
            field="district"
            value={district}
            onChange={(e) => handleChange(e, "district")}
            errorText={district == "cha" && " ljkljk"}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Postcode"
            field="postcode"
            value={postcode}
            onChange={(e) => handleChange(e, "postcode")}
            errorText={postcode == "cha" && " ljkljk"}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="State"
            field="state"
            value={state}
            onChange={(e) => handleChange(e, "state")}
            errorText={state == "cha" && " ljkljk"}
          />
        </div>
      </div>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-12">
          <ValidatedInput
            placeholder="Phone Number"
            field="phoneNumber"
            value={phoneNumber}
            onChange={(e) => handleChange(e, "phoneNumber")}
            errorText={phoneNumber == "cha" && " ljkljk"}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default AddressSection;
