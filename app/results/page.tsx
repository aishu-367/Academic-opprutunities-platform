'use client';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';



export default function Results() {
  const searchParams = useSearchParams();
  const [opportunities, setOpportunities] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      
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
      )}
    </main>
  );
}