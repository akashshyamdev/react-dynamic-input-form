import React, { useState } from "react";
import ReactDOM from "react-dom";

import SingleInputForm from "react-dynamic-input-form";

function App() {
  const [formData, setFormData] = useState({
    steps: [],
  });

  const addStep = (type) => {
    handleClose();

    setFormData({
      ...formData,
      steps: [...formData.steps, { type, [type]: "" }],
    });
  };

  const updateStep = (val, key, idx) => {
    const { steps } = formData;

    const updatedSteps = steps.map((step, i) => ({
      ...step,
      [key]: i === idx ? val : steps[i][key],
    }));

    setFormData({ ...formData, steps: updatedSteps });
  };

  const deleteStep = (index) => {
    const { steps } = formData;

    steps.splice(index, 1);
    setFormData({ ...formData, steps });
  };

  return (
    <div>
      <h1>Example</h1>
      <SingleInputForm
        inputs={[
          {
            value: "A",
            label: "Command",
            onChange: (value) => updateStep(value, "command", index),
          },
          {
            value: "A",
            label: "Path",
            onChange: (value) => updateStep(value, "path", index),
          },
        ]}
        onDelete={(i) => deleteStep(i)}
        containerStyles={{ gridTemplateColumns: "2fr 2fr 1fr" }}
      />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
