import React from 'react';
import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Cell,
} from 'recharts';

const AppRatingChart = ({ ratings }) => {
    const chartData = [...ratings].reverse();

    return (
        <div className="w-full h-64 md:h-80 border-2 rounded-lg border-green-500 p-5">
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    layout="vertical"
                    data={chartData}
                    margin={{ top: 20, right: 30, left: 50, bottom: 20 }}>
                    <XAxis type="number" />
                    <YAxis
                        dataKey="name"
                        type="category"
                        axisLine={false}
                        tickLine={false}
                        width={60}
                        style={{ fontWeight: '500', fontSize: '14px' }}
                    />
                    <Tooltip formatter={(value) => `${value} reviews`} />
                    <Bar
                        dataKey="count"
                        barSize={20}
                        fill="#ff8811"
                        radius={[5, 5, 5, 5]}>
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill="#ff8811" />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default AppRatingChart;
