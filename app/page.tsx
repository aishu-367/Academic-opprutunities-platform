'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');

  const handleNavigation = () => {
    if (degree && year) {
      router.push(`/results?degree=${degree}&year=${year}`);
    } else {
      alert("Please select both options.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-4">Discover Your Next Academic Opportunity</h1>
      <div className="bg-white p-8 rounded-lg shadow-md border w-full max-w-md space-y-4 text-black">
        <select className="w-full p-2 border rounded" value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">Select Degree</option>
          <option value="BTech CSE">BTech CSE</option>
          <option value="BTech ECE">BTech ECE</option>
        </select>
        <select className="w-full p-2 border rounded" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
        </select>
        <button onClick={handleNavigation} className="w-full bg-blue-600 text-white p-3 rounded font-bold">
          Find Opportunities
        </button>
      </div>
    </main>
  );
}