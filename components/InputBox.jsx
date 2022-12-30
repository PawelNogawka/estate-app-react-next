import React from "react";
import { MdLabelOff } from "react-icons/md";

const InputBox = ({ element, onChange, value }) => {
  const { input, label, id, error, ...inputsAttr } = element;

  const HtmlEl = input ? (
    <input onChange={onChange} value={value} {...inputsAttr} />
  ) : (
    <textarea onChange={onChange} value={value} {...inputsAttr} />
  );
  const boxClass = input ? "form__input-box" : "form__area-box";
  return (
    <div className={boxClass}>
      <label htmlFor={element.name} className="form__label">
        {label}
      </label>
      {HtmlEl}
      <span className="form__error">{error}</span>
    </div>
  );
};

export default InputBox;
