import React from "react";

const SelectBox = ({ name, label, options, error, ...rest }) => {
  //select boxes
  return (
    <div className="inputSelect">
      <label htmlFor={name}>{label}</label>
      <select className="select" id={name} name={name} {...rest}>
        {options.map((optionInfo) => (
          <option value={optionInfo._id} key={optionInfo._id}>
            {optionInfo.name}
          </option>
        ))}
      </select>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default SelectBox;
