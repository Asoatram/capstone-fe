'use client'
import { LineChart, Line, XAxis, ResponsiveContainer, Tooltip, YAxis} from 'recharts';
import { manrope } from '@/app/layout';
 


interface DataPoint {
  time: string;
  value: number;
}

interface MetricCardProps {
  title: string;
  value: number;
  unit: string;
  change: number;
  data: DataPoint[];
  size: string;
}

export default function MetricCard({ title, value, unit, change, data }: MetricCardProps) {
  const isPositive = change >= 0;
  const changeColor = isPositive ? 'text-green-400' : 'text-red-400';

  return (
    <div className="rounded-lg p-6 border-[#42523D] border-[0.25px]">
      <h3 className={`text-gray-300 text-sm font-medium mb-2 ${manrope.className}`}>{title}</h3>
      
      <div className="flex items-baseline justify-between mb-4">
        <span className="text-white text-3xl font-bold">
          {value}{unit}
        </span>
      </div>

      <div className="mb-4">
        <span className="text-gray-400 text-xs">Last 24 Hours </span>
        <span className={`text-xs font-medium ${changeColor}`}>
          {isPositive ? '+' : ''}{change}%
        </span>
      </div>

      <div className="h-20">
      <ResponsiveContainer width="100%" height="100%">
  <LineChart data={data}>
    <Line 
      type="monotone" 
      dataKey="value" 
      stroke="#10b981" 
      strokeWidth={1.5}
      dot={false}
    />
    <XAxis 
      dataKey="time" 
      axisLine={false}
      tickLine={false}
      tick={{ fontSize: 10, fill: '#6b7280' }}
      interval="preserveStartEnd"
    />
    <YAxis 
      hide={true} 
      domain={[
        (dataMin: number) => dataMin - (dataMin * 0.001), // zooms in
        (dataMax: number) => dataMax + (dataMax * 0.001),
      ]}
    />
    <Tooltip 
      contentStyle={{ 
        backgroundColor: '#1f2937',
        border: 'none',
        borderRadius: '0.5rem',
        color: '#fff',
        fontSize: '12px',
        padding: '6px 8px'
      }}
      labelStyle={{ color: '#9ca3af' }}
      formatter={(value: number) => [`${value.toFixed(2)}`, 'Value']}
    />
  </LineChart>
</ResponsiveContainer>
      </div>
    </div>
  );
}
