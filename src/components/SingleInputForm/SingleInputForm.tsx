import React from "react";
import { SingleInputFormProps } from "../../interfaces";
import Input from "../Input";
import "./style.scss";

export default function SingleInputForm({
  list,
  setList,
  heading,
  inputClass,
  containerClass,
  addButtonClass,
  inputContainerClass,
}: SingleInputFormProps) {
  const addItem = () => {
    setList([...list, { value: "" }]);
  };

  const updateItem = (value: string, i: number) => {
    const newList = [...list];
    const item = newList[i];
    item.value = value;

    setList(newList);
  };

  const deleteItem = (i: number) => {
    const newList = [...list];

    newList.splice(i, 1);
    setList(newList);
  };

  return (
    <div className={containerClass}>
      <h3>{heading}</h3>
      <button className={addButtonClass} onClick={addItem}>
        Add
      </button>

      {list.map((item, i) => (
        <div key={i} className={`input-container ${inputContainerClass}`}>
          <Input
            value={item.value}
            className={inputClass}
            onChange={(val) => updateItem(val, i)}
          />

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="input-delete-icon"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={() => deleteItem(i)}
          >
            <path
              fillRule="evenodd"
              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
