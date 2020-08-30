import React from "react";

const Input = ({ name, label, error, ...rest }) => {
  //input fields
  return (
    <div>
      <div className="input">
        <label htmlFor={name}>{label}</label>
        <input {...rest} id={name} name={name} className="form-control" />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
