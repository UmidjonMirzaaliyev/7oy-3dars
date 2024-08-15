import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [formData, setFormData] = useState([{ name: "", number: "", remarks: "" }]);

  const handleAddRow = () => {
    setFormData([...formData, { name: "", number: "", remarks: "" }]);
  };

  const handleRemoveRow = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleChange = (index, e) => {
    const updatedFormData = [...formData];
    updatedFormData[index][e.target.name] = e.target.value;
    setFormData(updatedFormData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formData", JSON.stringify(formData));
    alert("Ma'lumot saqlandi");
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="form">
        {formData.map((item, index) => (
          <div key={index} className="form-row">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={item.name}
              onChange={(e) => handleChange(index, e)}
              className="input"
            />
            <input
              type="text"
              name="number"
              placeholder="Number"
              value={item.number}
              onChange={(e) => handleChange(index, e)}
              className="input"
            />
            <input
              type="text"
              name="remarks"
              placeholder="Remarks"
              value={item.remarks}
              onChange={(e) => handleChange(index, e)}
              className="input"
            />
            <button
              type="button"
              onClick={() => handleRemoveRow(index)}
              className="remove-button"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="form-actions">
          <button type="button" onClick={handleAddRow} className="add-button">
            Add More
          </button>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
