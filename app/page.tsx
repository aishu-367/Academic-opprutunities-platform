'use client'
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import FilterBar from '../components/FilterBar';

interface Opportunity {
  id: string;
  title: string;
  description: string;
  degree?: string;
}

export default function OpportunitiesPage() {
  const [data, setData] = useState<Opportunity[]>([]);
  const [filters, setFilters] = useState<{ degree?: string }>({});

  const fetchData = async () => {
    let query = supabase.from('opportunities').select('*');

    if (filters.degree) {
      query = query.eq('degree', filters.degree);
    }

    const { data: results, error } = await query;
    if (error) console.error(error);
    else setData(results || []);
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <main className="p-8">
      <h1>Academic Opportunities</h1>
      <FilterBar onFilterUpdate={setFilters} />
      
      <div className="mt-6">
        {data.map((item) => (
          <div key={item.id} className="p-4 border-b">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}