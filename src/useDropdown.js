import React, { useState } from "react";

// Custom Generic Hook for dropdown in the menu
const useDropdown = (label, initialState, options) => {
  const [state, setState] = useState(initialState);

  const id = `use-dropdown-${label.replace(" ", "").toLowerCase()}`;

  const Dropdown = () => (
    <label htmlFor={id}>
      {label}
      <select
        id={id}
        value={state}
        onBlur={(e) => setState(e.target.value)}
        onChange={(e) => setState(e.target.value)}
        disabled={options.length === 0}
      >
        <option value="All">All</option>
        {options.map((item) => {
          return (
            <option key={item} value={item}>
              {item}
            </option>
          );
        })}
      </select>
    </label>
  );

  return [state, Dropdown, setState];
};

export default useDropdown;
