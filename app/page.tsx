'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Homepage() {
  const router = useRouter();

  const [degree, setDegree] = useState('');
  const [year, setYear] = useState('');
  const [interests, setInterests] = useState('');
  const [oppType, setOppType] = useState('');
  const [region, setRegion] = useState('');
  const [funding, setFunding] = useState('');

  const handleNavigation = () => {
    const query = new URLSearchParams({
      degree, year, interests, oppType, region, funding
    }).toString();
    router.push(`/results?${query}`);
  };

  const inputStyle = "w-full p-2 border rounded text-black mb-4";

  return (
    <main className="p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-white">Find Opportunities</h1>
      
      <input placeholder="Degree" className={inputStyle} value={degree} onChange={(e) => setDegree(e.target.value)} />
      <input placeholder="Year" className={inputStyle} value={year} onChange={(e) => setYear(e.target.value)} />
      <input placeholder="Interests" className={inputStyle} value={interests} onChange={(e) => setInterests(e.target.value)} />
      <input placeholder="Opportunity Type" className={inputStyle} value={oppType} onChange={(e) => setOppType(e.target.value)} />
      <input placeholder="Region" className={inputStyle} value={region} onChange={(e) => setRegion(e.target.value)} />
      <input placeholder="Funding" className={inputStyle} value={funding} onChange={(e) => setFunding(e.target.value)} />

      <button 
        onClick={handleNavigation}
        className="w-full bg-blue-600 text-white p-3 rounded font-bold hover:bg-blue-700 transition"
      >
        Search
      </button>
    </main>
  );
}