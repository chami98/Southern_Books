const ValidatedInput = ({
  errorText,
  placeholder,
  onChange,
  field,
  type = "text",
  value,
}) => {
  const getClass = () => {
    if (errorText) {
      return "form-control is-invalid";
    } else if (value) {
      return "form-control is-valid";
    } else {
      return "form-control ";
    }
  };

  return (
    <form style={{ textAlign: "left" }}>
      <input
        type={type}
        //  class={errorText ? "form-control is-invalid" : value ? "form-control is-valid" : "form-control"}
        class={getClass()}
        id={`${field}-id`}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      { (
        <div class="form-text" style={{ color: "red", fontSize: 9, padding:0 }}>
          {errorText}
        </div>
      )}
    </form>
  );
};

export default ValidatedInput;
