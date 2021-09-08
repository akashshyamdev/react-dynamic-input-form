import React, { useState } from "react";
import ReactDOM from "react-dom";
import SingleInputForm from "react-dynamic-input-form";

function App() {
  const [list, setList] = useState([]);

  return (
    <div>
      <SingleInputForm
        list={list}
        heading="Example 1"
        setList={setList}
        containerStyles={{ gridTemplateColumns: "2fr 2fr 1fr" }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
