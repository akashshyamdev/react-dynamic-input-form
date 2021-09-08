import React from "react";
import { InputProps } from "../../interfaces";
import "./style.scss";

export default function Input({ value, className, onChange }: InputProps) {
  return (
    <input
      value={value}
      type="text"
      className={`input ${className}`}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}
