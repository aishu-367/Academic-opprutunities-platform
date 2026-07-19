
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
<<<<<<< HEAD
      
      // 1. Get filter values from the URL
      const degree = searchParams.get('degree');
      const year = searchParams.get('year');
      const funding = searchParams.get('funding_type');
      // Note: Interests, OppType, and Region require database Joins to filter properly.

      // 2. Start building the query
      let query = supabase.from('opportunities').select('*');

      // 3. Apply filters only for columns that exist in your table
      if (degree) query = query.eq('degree', degree);
      if (year) query = query.eq('year', year);
      if (funding) query = query.eq('funding_type', funding);

      const { data, error } = await query;

      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setOpportunities(data || []);
      }
      setLoading(false);
    }

    fetchData();
  }, [searchParams]);

  return (
    <main className="p-10 min-h-screen bg-gray-50 text-black">
      <h1 className="text-3xl font-bold mb-6">Search Results</h1>
      
      {loading ? (
        <p className="text-gray-600">Searching...</p>
      ) : opportunities.length > 0 ? (
        <div className="grid gap-4">
          {opportunities.map((opp: any) => (
            <div key={opp.id} className="p-6 bg-white border rounded shadow-sm">
              <h2 className="text-xl font-semibold">{opp.title}</h2>
              <p className="text-sm text-gray-500">{opp.provider}</p>
              <div className="mt-2 text-sm text-gray-700">
                <p>Degree: {opp.degree || 'N/A'}</p>
                <p>Year: {opp.year || 'N/A'}</p>
                <p>Funding: {opp.funding_type || 'N/A'}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">No opportunities found matching these criteria.</p>
=======
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
>>>>>>> 3e899b8e50a2b40c38021e487ac5732d84aceb5f
      )}
    </main>
  );
}