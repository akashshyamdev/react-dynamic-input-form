import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export default function Input({
  name,
  label,
  value,
  onChange,
  helperText,
  validator,
}: InputProps) {
  return (
    <div className="input-group">
      <input
        id={name}
        value={value}
        type="text"
        className="input"
        onChange={(e) => onChange(e.target.value)}
      />

      <label htmlFor={name} className="label">
        {label}
      </label>

      {validator && !validator(value) && <p>{helperText}</p>}
    </div>
  );
}
