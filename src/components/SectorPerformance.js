import React from 'react';

const SectorPerformance = () => {
  const data = {
    sectors: [
      { name: 'All sectors', change: 0.88 },
      { name: 'Industrials', change: 1.66 },
      { name: 'Communication Services', change: 1.55 },
      { name: 'Technology', change: 1.08 },
      { name: 'Consumer Cyclical', change: 1.02 },
      { name: 'Financial', change: 0.90 },
      { name: 'Healthcare', change: 0.84 },
      { name: 'Real Estate', change: 0.69 },
      { name: 'Basic Materials', change: 0.65 },
      { name: 'Utilities', change: 0.57 },
      { name: 'Energy', change: -0.05 },
      { name: 'Consumer Defensive', change: -0.12 }
    ]
  };

  return (
    <section className="col-span-1 lg:col-span-1 mb-4 p-4 bg-zinc-900 rounded">
      <h2 className="mb-2 text-xl">Sector Performance</h2>
      <div className="grid grid-cols-2 gap-4">
        <ul>
          {data.sectors.slice(0, Math.ceil(data.sectors.length / 2)).map((sector, index) => (
            <li 
              key={index} 
              className={`flex justify-between py-2 border-b border-gray-700 ${sector.change > 0 ? 'text-green-400' : 'text-red-400'} ${sector.name === "All sectors" ? 'text-white border-b-2 border-purple-500' : ''}`}
              
            >
              <span>{sector.name}</span>
              <span style={{ background: sector.change > 0 ? `rgba(0, 255, 0, ${Math.abs(sector.change) / 10})` : `rgba(255, 0, 0, ${Math.abs(sector.change) / 10})` }}>{sector.change}%</span>
            </li>
          ))}
        </ul>
        <ul>
          {data.sectors.slice(Math.ceil(data.sectors.length / 2)).map((sector, index) => (
            <li 
              key={index} 
              className={`flex justify-between py-2 border-b ${sector.name === "All sectors" ? 'border-purple-500' : 'border-gray-700'} ${sector.change > 0 ? 'text-green-400' : 'text-red-400'}`}
              
            >
              <span>{sector.name}</span>
              <span style={{ background: sector.change > 0 ? `rgba(0, 255, 0, ${Math.abs(sector.change) / 10})` : `rgba(255, 0, 0, ${Math.abs(sector.change) / 10})` }}>{sector.change}%</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectorPerformance;
