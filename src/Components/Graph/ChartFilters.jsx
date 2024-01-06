// GraphFilters.js
import React from 'react';

const GraphFilters = ({ selectedGender, setSelectedGender, selectedAge, setSelectedAge }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2">
      {/* Gender Filter */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600">Gender:</label>
        <select
          className="form-select text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedGender}
          onChange={(e) => setSelectedGender(e.target.value)}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>

      {/* Age Filter */}
      <div className="flex flex-col">
        <label className="text-sm font-medium text-gray-600">Age:</label>
        <select
          className="form-select text-black mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          value={selectedAge}
          onChange={(e) => setSelectedAge(e.target.value)}
        >
          <option value="">Select Age</option>
          <option value="15-25">15-25</option>
          <option value=">25">Above 25</option>
        </select>
      </div>
    </div>
  );
};

export default GraphFilters;
