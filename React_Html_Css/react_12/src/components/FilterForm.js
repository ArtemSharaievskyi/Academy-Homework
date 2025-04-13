import React from "react";

const FilterForm = () => {
  return (
    <div>
      <h2>Filter Form</h2>
      <form>
        <label>
          Product Type:
          <select>
            <option>Phone</option>
            <option>Laptop</option>
          </select>
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FilterForm;
