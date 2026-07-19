
'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function Results() {
  const searchParams = useSearchParams();
  const degree = searchParams.get('degree');
  const year = searchParams.get('year');
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      // Fetch all, then filter in code to avoid strict matching issues
      const { data, error } = await supabase.from('opportunities').select('*');
      
      if (error) {
        console.error("Error:", error);
      } else if (data) {
        // This filtering is robust because of .trim()
        const filtered = data.filter(item => 
          item.degree?.trim() === degree?.trim() && 
          item.year?.trim() === year?.trim()
        );
        setOpportunities(filtered);
      }
      setLoading(false);
    }
    fetchData();
  }, [degree, year]);

  if (loading) return <main className="p-10 text-white">Loading...</main>;

  return (
    <main className="p-10 max-w-2xl mx-auto">
      {/* Changed to text-white so it is visible on the dark background */}
      <h1 className="text-2xl font-bold mb-6 text-white">
        Opportunities for {degree} ({year})
      </h1>
      
      {opportunities.length === 0 ? (
        <p className="text-white">No opportunities found for {degree} {year}.</p>
      ) : (
        <ul className="space-y-4">
          {opportunities.map((opp) => (
            <li key={opp.id} className="border p-4 rounded shadow-sm bg-white">
              <h2 className="text-xl font-semibold text-black">{opp.title}</h2>
              <p className="text-gray-800">{opp.provider}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}