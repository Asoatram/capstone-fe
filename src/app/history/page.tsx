'use client'
import { useState, useEffect } from 'react';
import MetricCard from './components/MetricCard';
import { generateMockData } from './utils/MockData';
import { manrope } from '../layout';

export default function CompostDashboard() {
  const [data, setData] = useState({
    pH: generateMockData(6.5, 0.5),
    temperature: generateMockData(25, 3),
    methane: generateMockData(100, 15),
    moisture: generateMockData(60, 8),
    cnRatio: generateMockData(20, 2),
  });

  // Simulate live updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData({
        pH: generateMockData(6.5, 0.5),
        temperature: generateMockData(25, 3),
        methane: generateMockData(100, 15),
        moisture: generateMockData(60, 8),
        cnRatio: generateMockData(20, 2),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const metrics = [
    { title: 'pH', value: 6.5, unit: '', change: 0.2, data: data.pH, size: 'small' },
    { title: 'Temperature (°C)', value: 25, unit: '', change: 1, data: data.temperature , size: 'small'},
    { title: 'Methane (ppm)', value: 100, unit: '', change: -5, data: data.methane , size: 'small'},
    { title: 'Moisture (%)', value: 60, unit: '', change: 2, data: data.moisture , size: 'large'},
    { title: 'C/N Ratio', value: 20, unit: '', change: -1, data: data.cnRatio , size: 'large'},
  ];

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className={`text-white text-3xl font-bold mb-8 ${manrope.className}`}>
          Compost Data
        </h1>
        
        <div className="grid grid-cols-6 gap-6">
            {metrics.map((metric, index) => (
                <div 
                key={index} 
                className={metric.size === 'large' ? 'col-span-3' : 'col-span-2'}
                >
                <MetricCard {...metric} />
                </div>
            ))}
        </div>


      </div>
    </div>
  );
}
