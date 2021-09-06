import React, { ChangeEvent } from "react";
import { SingleInputFormProps } from "../../interfaces";
import "./style.scss";

export default function SingleInputForm({
  onDelete,
  inputs,
  containerStyles,
}: SingleInputFormProps) {
  return (
    <div className="form__input-container" style={containerStyles}>
      {inputs.map(
        (
          { value, label: placeholder, onChange, validator, helperText },
          index
        ) => {
          return (
            <input
              key={index}
              value={value}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                onChange(e.target.value)
              }
            />
          );
        }
      )}

      <button onClick={onDelete} className="form__input-container-icon">
        Delete
      </button>
    </div>
  );
}
