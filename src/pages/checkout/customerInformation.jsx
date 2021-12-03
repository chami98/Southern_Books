import ValidatedInput from "./../../common/ValidatedInput";

const CustomerInformation = ({ inputs, setInputs, errors, setErrors, schema }) => {

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
      <p style={{ textAlign: "left" }}> CUSTOMER INFORMATION</p>
      <div className="row">
        <div className="col">
          <ValidatedInput
            placeholder="First name"
            field="firstName"
            value={inputs.firstName}
            onChange={(e) => handleChange(e, "firstName")}
            errorText={errors.firstName}
          />
        </div>
        <div className="col">
          <ValidatedInput
            placeholder="Last name"
            field="lastName"
            value={inputs.lastName}
            onChange={(e) => handleChange(e, "lastName")}
            errorText={errors.lastName}
          />
        </div>
      </div>

      <div className="row" style={{ marginTop: "10px" }}>
        <div className="col-12">
          <ValidatedInput
            placeholder="Email"
            field="email"
            type="email"
            value={inputs.email}
            onChange={(e) => handleChange(e, "email")}
            errorText={errors.email}
          />
        </div>
      </div>
    </>
  );
};

export default CustomerInformation;

// const k = "key3";

// const obj = {
//   key1 : "value1",
//   [k] : "value2",
//   k: k
// }

// console.log(obj.key1); // => "value1"
// console.log(obj.key2); // => undefined
// console.log(obj.key3); // => "value1"
// console.log(obj.k); // => "key3"
