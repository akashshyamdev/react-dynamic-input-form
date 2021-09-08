import React from "react";
import { SingleInputFormProps } from "../../interfaces";
import Input from "../Input";
import "./style.scss";

export default function SingleInputForm({
  list,
  setList,
}: SingleInputFormProps) {
  const onChange = (value: string, i: number) => {
    const newList = [...list];
    const item = newList[i];
    item.value = value;

    setList(newList);
  };

  const addItem = () => {
    setList([...list, { value: "" }]);
  };

  return (
    <div>
      <button onClick={addItem}>Add</button>

      {list.map((item, i) => (
        <div key={i}>
          <Input
            label=""
            name=""
            onChange={(val) => onChange(val, i)}
            value={item.value}
          />
        </div>
      ))}
    </div>
  );
}
