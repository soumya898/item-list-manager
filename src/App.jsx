
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleAddItem = () => {
    if (input.trim() !== "") {
      setItems([...items, input]);
      setInput("");
    }
  };

  return (
    <div className="container">
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Enter item"
        className="input-field"
      />
      <button className="add-item-button" onClick={handleAddItem}>
        Add Item
      </button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
