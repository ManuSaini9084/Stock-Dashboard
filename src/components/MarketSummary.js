import React from 'react';

const MarketSummary = () => {
  const data = {
    summary: 'Jan Inflation Surges, Squeezing Budgets; S&P 500 Rallies as Markets Face Bumpy 2% Path',
    sentiment: 'bullish'
  };

  return (
    <section className="col-span-1 lg:col-span-1 mb-4 p-4 bg-black rounded">
      <div className="flex items-center">
        <p className="font-mono font-bold  bg-gray-700 rounded-full py-1 px-2 mr-2">The markets are <span className='text-green-400'>{data.sentiment}</span></p>
        <span className='text-green-400 border-2 border-gray-700 bg-gray-700 rounded-full px-2'>➚</span>
      </div>
      <div className='mt-40'>
        <p className='text-gray-500 text-sm font-mono'>What you need to know today</p>
        <br/>
        <p className='font-mono text-2xl'>{data.summary}</p>
      </div>
    </section>
  );
};

export default MarketSummary;
