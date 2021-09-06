import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export default function Input({ name, label }: InputProps) {
  return (
    <div className="input-group">
      <input id={name} type="text" className="input" />

      <label htmlFor={name} className="label">
        {label}
      </label>
    </div>
  );
}
