import React, { useState } from 'react';
import './App.css';
import MarketSummary from './components/MarketSummary';
import SectorPerformance from './components/SectorPerformance';
import MarketsOverview from './components/MarketsOverview';
import ChartSection from './components/ChartSection';
import Sidebar from './components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Filter search results based on searchTerm
    // For simplicity, I'll just filter markets and sectors based on name
    const filteredMarkets = markets.filter((market) =>
      market.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const filteredSectors = sectors.filter((sector) =>
      sector.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults([...filteredMarkets, ...filteredSectors]);
  };


    // Perform search in both MarketOverview and SectorPerformance data
    const sectors = [
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
    ];

    const markets = [
      { name: 'S&P 500', value: 498.84, change: 4.76, percentChange: 0.96 },
      { name: 'Nasdaq', value: 433.35, change: 4.80, percentChange: 1.12 },
      { name: 'Dow Jones', value: 384.31, change: 1.49, percentChange: 0.30 },
      { name: 'Russell 2000', value: 199.45, change: 4.84, percentChange: 2.49 },
      { name: 'Crude Oil', value: 71.54, change: -1.11, percentChange: -1.53 },
      { name: 'Gold', value: 184.42, change: -0.10, percentChange: -0.05 },
      { name: 'Silver', value: 20.44, change: 0.24, percentChange: 1.21 },
      { name: '10-Year Bond', value: 93.88, change: 0.34, percentChange: 0.36 },
      { name: 'Bitcoin', value: 24527, change: 1.14, percentChange: 4.89 }
    ];

    return (
      <div className="min-h-screen text-white flex">
        <Sidebar />
        <div className="flex-1 p-6 text-white">
        <header className="flex justify-between items-center mb-4">
  <div>
    <h1 className="text-2xl font-bold">Hello, Jane</h1>
    <p className="text-xl">Thursday, February 15</p>
  </div>
  <div className="flex space-x-4">
    <div className="flex space-x-4">
      <button className="p-3  bg-black  rounded-full">For You</button>
      <button className="p-3 bg-black rounded-full">Screener</button>
    </div>
    <div className="flex space-x-4 relative">
      <input
        type="text"
        placeholder="Search stocks or market "
        className="p-3 bg-zinc-900 rounded-full text-white"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      {searchTerm && (
        <ul className="absolute bg-gray-800 w-full mt-12 py-1 rounded">
          {searchResults.map((item, index) => (
            <li key={index} className="px-3 py-1 hover:bg-gray-700">
              {item.name}
            </li>
          ))}
        </ul>
      )}
      <FontAwesomeIcon icon={faSearch} className="text-gray-400 mt-3" />
    </div>
  </div>
</header>

          <hr className="border-gray-600 my-4" />
          <div className="grid grid-cols-2 gap-4">
            <MarketSummary className="col-span-1 p-4 rounded" />
            <SectorPerformance className="col-span-2 p-4 rounded" />
          </div>
          <div className="mb-4 mt-2 text-2xl text-gray-400">Markets</div>
          <div className="grid grid-cols-2 gap-4 bg-zinc-900">
            <MarketsOverview className="col-span-1" />
            <ChartSection className="col-span-2" />
          </div>
        </div>
      </div>
    );
  };
  
  export default App;