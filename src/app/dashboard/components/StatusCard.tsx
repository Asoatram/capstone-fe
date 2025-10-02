import { manrope } from '@/app/layout';
import { StatusMetric } from '../../type/Compost';

interface StatusCardProps {
  metric: StatusMetric;
  index: number;
}

export default function StatusCard({ metric, index }: StatusCardProps) {
  const changeColorClass = {
    positive: 'text-green-400',
    negative: 'text-red-400',
    neutral: 'text-gray-400'
  }[metric.changeType || 'neutral'];

  return (
    <div 
      className="bg-[#2E362B] backdrop-blur-sm border border-white/10 rounded-xl p-6 transition-all duration-300 hover:bg-[#384132] hover:-translate-y-0.5 hover:shadow-xl hover:shadow-black/30 animate-fade-in-up"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className={`text-slate-300 text-base mb-2 font-normal ${manrope.className}`}>
        {metric.label}
      </div>
      <div className={`text-white text-4xl font-semibold mb-2 ${manrope.className}`}>
        {metric.value}
      </div>
      {metric.change && (
        <div className={`text-sm font-medium ${changeColorClass} ${manrope.className}`}>
          {metric.change}
        </div>
      )}
      {metric.status && (
        <div className={`text-green-400 text-lg font-bold`}>
          {metric.status}
        </div>
      )}
    </div>
  );
}