import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';

const Chart = ({ appDetails }) => {
  if (!appDetails) {
    return <p>Loading...</p>;
  }

  return (
    <div className="  p-10 mb-10 py-20 h-100 border-b border-gray-400">
      <h2 className="font-semibold text-3xl mb-3">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={appDetails.ratings} layout="vertical">
          
          <CartesianGrid strokeDasharray="3 3" horizontal={false} />

          <XAxis type="number" />
          <YAxis type="category" dataKey="name" />

          <Tooltip />

          <Bar
            dataKey="count"
            fill="#f97316"
            radius={[0, 10, 10, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;