import React from "react";

// import React from 'react';

const GenderCheckbox = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex gap-4">
      <div className="form-control">
        <label
          htmlFor="male"
          className={`cursor-pointer flex items-center gap-2 text-blue-800 font-bold ${
            selectedGender === "male" ? "selected" : ""
          }`}
        >
          <span>Male</span>
          <input
            type="checkbox"
            id="male"
            className="border-slate-900 rounded-lg"
            checked={selectedGender === "male"}
            onChange={() => onCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          htmlFor="female"
          className={`cursor-pointer flex items-center gap-2 text-blue-800 font-bold ${
            selectedGender === "female" ? "selected" : ""
          }`}
        >
          <span>Female</span>
          <input
            type="checkbox"
            id="female"
            className="border-slate-900 rounded-lg"
            checked={selectedGender === "female"}
            onChange={() => onCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};

export default GenderCheckbox;
