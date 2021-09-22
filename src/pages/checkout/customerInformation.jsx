import ValidatedInput from "./../../common/ValidatedInput";
import { useState } from "react";

const CustomerInformation = () => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();

  const handleChange = (e, field) => {
    if (field == "firstName") {
      setFirstName(e.target.value);
    } else if (field == "lastName") {
      setLastName(e.target.value);
    } else if (field == "email") {
      setEmail(e.target.value);
    }
  };

  return (
    <>
      <p style={{ textAlign: "left" }}> CUSTOMER INFORMATION</p>
      <div className="row">
        <div className="col">
          <ValidatedInput
            placeholder="First name"
            field="firstName"
            value={firstName}
            onChange={(e) => handleChange(e, "firstName")}
            errorText={firstName == "cha" && " ljkljk"}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Last name"
            field="lastName"
            value={lastName}
            onChange={(e) => handleChange(e, "lastName")}
            errorText={lastName == "cha" && " ljkljk"}
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-12">
          <ValidatedInput
            placeholder="Email"
            field="email"
            type="email"
            value={email}
            onChange={(e) => handleChange(e, "email")}
            errorText={email == "cha" && " ljkljk"}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerInformation;
