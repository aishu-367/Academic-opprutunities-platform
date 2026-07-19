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
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Academic Opportunities</h1>
      {/* You can add your form inputs here */}
      <button 
        onClick={handleNavigation}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Search
      </button>
    </main>
  );
}