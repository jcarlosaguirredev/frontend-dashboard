"use client";

import React, { useState } from "react";

export function RefInputComponent(label, type, placeholder) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      Formularios:
      <p>Current Input: {inputValue}</p>
    </div>
  );
}

export function StateInputComponent(label, type, placeholder) {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type={type}
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
      />
      Formularios:
      <p>Current Input: {inputValue}</p>
    </div>
  );
}
