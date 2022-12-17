import React, { useState } from "react";
import { Dropdown, Option } from "./Dropdown";
import "./style.css";

export default function App() {

  const [optionValue, setOptionValue] = useState("");
  
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
    
  };

  return (
    <div>
      <h1>Should you use a dropdown?</h1>
      <Dropdown
        formLabel="Choose Dropdown to submit:"
        buttonText="Submit"
        onChange={handleSelect}
        // action="/"
      >
        <Option selected value="Select" input={optionValue} />
        <Option value="Yes" />
        <Option value="Probably not" />
      </Dropdown>
    </div>
  );
}
