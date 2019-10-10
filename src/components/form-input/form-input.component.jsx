import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ formInputOnChange, label, ...otherProps }) => {
  return (
    <div className="group rtlDirection">
      <input
        onChange={formInputOnChange}
        {...otherProps}
        className="form-input"
      />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label rtlDirection`}
          htmlFor={otherProps.id}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
