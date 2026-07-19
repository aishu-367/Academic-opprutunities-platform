'use client' 
import { useState } from 'react';

// Define the "contract" for your props
interface FilterBarProps {
  onFilterUpdate: (filters: any) => void;
}

// Tell the function to use that contract
export default function FilterBar({ onFilterUpdate }: FilterBarProps) {
  const [degree, setDegree] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setDegree(selectedValue);
    onFilterUpdate({ degree: selectedValue });
  };

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <label>Filter by Degree: </label>
      <select value={degree} onChange={handleChange} className="p-2 border rounded">
        <option value="">All Degrees</option>
        <option value="Bachelors">Bachelors</option>
        <option value="Masters">Masters</option>
      </select>
    </div>
  );
}