import React from "react";
import { SingleInputFormProps } from "../../interfaces";
import Input from "../Input";
import "./style.scss";

export default function SingleInputForm({
  list,
  setList,
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
    <div>
      <button onClick={addItem}>Add</button>

      {list.map((item, i) => (
        <div key={i} className="input-container">
          <Input
            label=""
            name=""
            onChange={(val) => updateItem(val, i)}
            value={item.value}
          />

          <button onClick={() => deleteItem(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
