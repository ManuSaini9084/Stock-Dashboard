import React from 'react';

const MarketsOverview = () => {
  const data = {
    markets: [
      { name: 'S&P 500', value: 498.84, change: 4.76, percentChange: 0.96 },
      { name: 'Nasdaq', value: 433.35, change: 4.80, percentChange: 1.12 },
      { name: 'Dow Jones', value: 384.31, change: 1.49, percentChange: 0.30 },
      { name: 'Russell 2000', value: 199.45, change: 4.84, percentChange: 2.49 },
      { name: 'Crude Oil', value: 71.54, change: -1.11, percentChange: -1.53 },
      { name: 'Gold', value: 184.42, change: -0.10, percentChange: -0.05 },
      { name: 'Silver', value: 20.44, change: 0.24, percentChange: 1.21 },
      { name: '10-Year Bond', value: 93.88, change: 0.34, percentChange: 0.36 },
      { name: 'Bitcoin', value: 24527, change: 1.14, percentChange: 4.89 }
    ]
  };

  return (
    <section className="col-span-1 lg:col-span-1 mb-4 p-4 bg-zinc-900 ">
      <ul>
        {data.markets.map((market, index) => (
          <li key={index} className="flex justify-between py-2 border-b border-gray-700">
            <span className="w-1/2">{market.name}</span>
            <div className="flex w-1/2 justify-end space-x-10">
              <span className="w-20 text-right">{market.value}</span>
              <span className={`w-20 text-right ${market.change > 0 ? 'text-green-500' : 'text-red-500'}`}>
                {market.change}
              </span>
              <span className={`w-20 text-center rounded ${market.percentChange > 0 ? 'text-green-500 bg-green-200 bg-opacity-25' : 'text-red-500 bg-red-200 bg-opacity-25'}`}>
                ({market.percentChange}%)
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MarketsOverview;
