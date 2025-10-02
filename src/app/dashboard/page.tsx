'use client';

import { useState, useEffect } from 'react';
import StatusCard from './components/StatusCard';
import HealthIndicatorRow from './/components/HealthIndicatorRow';
import MaturitySection from './components/MaturitySection';
import LoadingSpinner from './components/LoadingSpinner';
import { CompostData } from '../type/Compost';
import { manrope } from '../layout';
import { Droplet, FlaskConical, Thermometer } from 'lucide-react';

// Mock data - in real app this would come from API
const mockCompostData: CompostData = {
  currentStatus: [
    {
      label: 'Temperature',
      value: '65°F',
      change: '+5%',
      changeType: 'positive'
    },
    {
      label: 'Moisture',
      value: '55%',
      change: '-2%',
      changeType: 'negative'
    },
    {
      label: 'Maturity',
      value: 'Almost Mature',
      status: 'Mature'
    }
  ],
  maturity: {
    level: 'Almost Mature',
    estimatedCompletion: '3 days',
    progressPercentage: 85
  },
  healthIndicators: [
    {
      name: 'Temperature',
      value: '65°F',
      optimalRange: '50-60°C',
      icon: Thermometer
    },
    {
      name: 'Moisture',
      value: '55%',
      optimalRange: '40-60%',
      icon: Droplet
    },
    {

      name: 'pH Level',
      value: '7.0',
      optimalRange: '6.5-7.5',
      icon: FlaskConical
    }
  ]
};

export default function DashboardPage() {
  const [data, setData] = useState<CompostData>(mockCompostData);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className={`text-4xl md:text-5xl font-bold text-white text-center my-10 tracking-tight ${manrope.className}`}>
        Compost Health Overview
      </h1>
      
      <div className="mb-12">
        <h2 className={`text-2xl font-bold text-white mb-6 ${manrope.className}`}>Current Status</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
          {data.currentStatus.map((metric, index) => (
            <StatusCard 
              key={metric.label} 
              metric={metric} 
              index={index} 
            />
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className={`text-2xl font-bold text-white mb-6 ${manrope.className}`}>Compost Maturity</h2>
        <MaturitySection 
          level={data.maturity.level}
          estimatedCompletion={data.maturity.estimatedCompletion}
          progressPercentage={data.maturity.progressPercentage}
        />
      </div>

      <div className="mb-12">
        <h2 className={`text-2xl font-bold text-white mb-6 ${manrope.className}`}>Health Indicators</h2>
        <div className="space-y-4">
          {data.healthIndicators.map((indicator, index) => (
            <HealthIndicatorRow 
              key={index} 
              indicator={indicator} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </div>
  );
}