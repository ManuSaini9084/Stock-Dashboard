import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

// Define the chart data directly in your component
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  prices: [
    298.84, 310.20, 350.30, 395.00, 410.30, 562.00, 674.00, 404.00, 150.00, 200.00, 342.00, 498.84,
    450.00, 470.00, 490.00, 510.00, 530.00, 550.00, 570.00, 590.00, 610.00, 630.00, 650.00, 670.00
  ],
  movingAverage: [
    200.00, 220.00, 240.00, 260.00, 280.00, 300.00, 340.00, 380.00, 360.00, 340.00, 320.00, 270.00,
    290.00, 310.00, 330.00, 350.00, 370.00, 390.00, 410.00, 430.00, 450.00, 470.00, 490.00, 510.00
  ]
};

const ChartSection = () => {
  const chartRef = useRef(null);
  let myChart = null;

  useEffect(() => {
    if (myChart) {
      myChart.destroy(); // Destroy the existing chart if it exists
    }

    const { labels, prices, movingAverage } = chartData;

    const ctx = chartRef.current.getContext('2d');
    myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'S&P 500',
            data: prices,
            borderColor: 'rgba(255, 255, 255, 1)',  // White color
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            fill: false,
          },
          {
            label: 'Moving Average',
            data: movingAverage,
            borderColor: 'rgba(255, 165, 0, 1)',  // Orange color
            backgroundColor: 'rgba(255, 165, 0, 0.2)',
            fill: false,
          }
        ]
      },
      options: {
        responsive: true,
        scales: {
          x: {
            type: 'category',
            labels,
          },
          y: {
            beginAtZero: false,
          }
        },
        elements: {
          line: {
            tension: 0.4  // Adjust tension for curves (0 = straight lines, 1 = very curved)
          }
        }
      }
    });

    // Return a cleanup function to destroy the chart when the component unmounts
    return () => {
      if (myChart) {
        myChart.destroy();
      }
    };
  }, []);

  return (
    <section className="col-span-1 lg:col-span-1 mb-4 p-4 bg-zinc-900 rounded">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-xl text-white">SPDR S&P 500 ETF Trust</h2>
        <div className="flex space-x-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-white rounded-full mr-2"></div>
            <span className="text-gray-500">S&P 500</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-400 rounded-full mr-2"></div>
            <span className="text-gray-500">Moving Average</span>
          </div>
        </div>
      </div>
      <div className="text-gray-500 mb-4">498.84</div>
      <canvas ref={chartRef}></canvas>
    </section>
  );
};

export default ChartSection;
