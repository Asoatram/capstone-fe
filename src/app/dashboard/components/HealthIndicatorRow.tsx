'use client';

import { manrope } from '@/app/layout';
import { HealthIndicator } from '../../type/Compost';

interface HealthIndicatorRowProps {
  indicator: HealthIndicator;
  index: number;
}

export default function HealthIndicatorRow({ indicator, index }: HealthIndicatorRowProps) {
  return (
    <div 
      className="flex items-center justify-between rounded-lg px-2 py-5"
      style={{ animationDelay: `${1000 + (index * 100)}ms` }}
    >
      <div className="flex items-center">
        {indicator.icon && (
          <div className="text-white mr-4 bg-[#2E362B] p-4 rounded-lg">
            <indicator.icon size={32} />
          </div>
        )}
        <div>
          <h3 className={`text-white text-lg font-medium mb-1 ${manrope.className}`}>
            {indicator.name}
          </h3>
          <div className={`text-[#A6B2A3] text-md ${manrope.className}`}>
            Optimal range: {indicator.optimalRange}
          </div>
        </div>
      </div>
      <div className={`text-white text-xl font-semibold ${manrope.className}`}>
        {indicator.value}
      </div>
    </div>
  );
}