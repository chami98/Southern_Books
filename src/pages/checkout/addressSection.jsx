import ValidatedInput from "./../../common/ValidatedInput";

const AddressSection = ({ handleChange, inputs, errors, title, type }) => {
  return (
    <>
      <p style={{ textAlign: "left", marginTop: "15px" }}>{title}</p>
      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col">
          <ValidatedInput
            placeholder="Street Address"
            field="streetAddress"
            value={inputs.streetAddress}
            onChange={(e) => handleChange(e, "streetAddress", type)}
            errorText={errors.streetAddress}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Town/City"
            field="townCity"
            value={inputs.townCity}
            onChange={(e) => handleChange(e, "townCity", type)}
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
            onChange={(e) => handleChange(e, "district", type)}
            errorText={errors.district}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Postcode"
            field="postcode"
            value={inputs.postcode}
            onChange={(e) => handleChange(e, "postcode", type)}
            errorText={errors.postcode}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="State"
            field="state"
            value={inputs.state}
            onChange={(e) => handleChange(e, "state", type)}
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
            onChange={(e) => handleChange(e, "phoneNumber", type)}
            errorText={errors.phoneNumber}
          />
        </div>
      </div>{" "}
    </>
  );
};

export default AddressSection;
