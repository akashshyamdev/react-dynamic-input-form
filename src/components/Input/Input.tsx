import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export default function Input({ name, label }: InputProps) {
  return (
    <div className="input-group">
      <label htmlFor={name}>{label}</label>
      <input id={name} type="text" className="input" />
    </div>
  );
}
