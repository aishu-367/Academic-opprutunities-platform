'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();
  
  // State for all fields
  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [interests, setInterests] = useState('');
  const [oppType, setOppType] = useState('');
  const [region, setRegion] = useState('');
  const [funding, setFunding] = useState('');

  const handleNavigation = () => {
    const query = new URLSearchParams({
      degree,
      year,
      interests,
      oppType,
      region,
      funding
    }).toString();

    router.push(`/results?${query}`);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Discover Your Next Academic Opportunity</h1>
      <div className="bg-white p-8 rounded-lg shadow-md border w-full max-w-md space-y-4 text-black">
        
        {/* Degree */}
        <select className="w-full p-2 border rounded" value={degree} onChange={(e) => setDegree(e.target.value)}>
          <option value="">Select Degree</option>
          <option value="BTech CSE">BTech CSE</option>
          <option value="BTech ECE">BTech ECE</option>
        </select>

        {/* Year */}
        <select className="w-full p-2 border rounded" value={year} onChange={(e) => setYear(e.target.value)}>
          <option value="">Select Year</option>
          <option value="First Year">First Year</option>
          <option value="Second Year">Second Year</option>
        </select>

        {/* Interests */}
        <select className="w-full p-2 border rounded" value={interests} onChange={(e) => setInterests(e.target.value)}>
          <option value="">Select Interest</option>
          <option value="AI">AI/ML</option>
          <option value="WebDev">Web Development</option>
        </select>

        {/* Opportunity Type */}
        <select className="w-full p-2 border rounded" value={oppType} onChange={(e) => setOppType(e.target.value)}>
          <option value="">Select Opportunity Type</option>
          <option value="Internship">Internship</option>
          <option value="Research">Research</option>
        </select>

        {/* Preferred Region */}
        <select className="w-full p-2 border rounded" value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="">Preferred Region</option>
          <option value="Global">Global</option>
          <option value="India">India</option>
        </select>

        {/* Funding Preference */}
        <select className="w-full p-2 border rounded" value={funding} onChange={(e) => setFunding(e.target.value)}>
          <option value="">Funding Preference</option>
          <option value="Fully Funded">Fully Funded</option>
          <option value="Partially Funded">Partially Funded</option>
        </select>

        <button onClick={handleNavigation} className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition">
          Find Opportunities
        </button>
      </div>
    </main>
  );
}