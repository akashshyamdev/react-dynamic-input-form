import React from "react";
import { SingleInputFormProps } from "../../interfaces";
import Input from "../Input";
import "./style.scss";

export default function SingleInputForm({
  onDelete,
  inputs,
  containerStyles,
}: SingleInputFormProps) {
  console.log("LINKED 2");
  return (
    <div className="form" style={containerStyles}>
      {inputs.map(
        (
          { value, label: placeholder, onChange, validator, helperText },
          index
        ) => {
          return (
            <Input
              key={index}
              name={placeholder}
              value={value}
              label={placeholder}
              onChange={onChange}
              validator={validator}
              helperText={helperText}
            />
          );
        }
      )}

      <button onClick={onDelete}>Delete</button>
    </div>
  );
}
