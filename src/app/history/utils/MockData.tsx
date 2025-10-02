export interface DataPoint {
    time: string;
    value: number;
}
  
export function generateMockData(baseValue: number, variance: number = 5): DataPoint[] {
    const data: DataPoint[] = [];
    const hours = ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'];
    
    for (let i = 0; i < 24; i++) {
      const variation = (Math.random() - 0.5) * variance;
      data.push({
        time: i < hours.length ? hours[i] : `${i}:00`,
        value: baseValue + variation + Math.sin(i / 4) * (variance / 2),
      });
    }
    
    return data;
  }
  