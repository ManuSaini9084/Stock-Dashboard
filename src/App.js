import React from 'react';
import './App.css';
import MarketSummary from './components/MarketSummary';
import SectorPerformance from './components/SectorPerformance';
import MarketsOverview from './components/MarketsOverview';
import ChartSection from './components/ChartSection';
import Sidebar from './components/Sidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const App = () => {
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
            <button className="p-3 bg-zinc-900 rounded-full">For You</button>
            <button className="p-3 bg-zinc-900 rounded-full">Screener</button>
            <FontAwesomeIcon icon={faSearch} className="text-gray-400 mt-3" />
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
