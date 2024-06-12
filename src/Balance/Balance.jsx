
import React from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import UsePayCart from '../CartProvider/usePayCart';
import subsCart from '../CartProvider/subsCart';

const Balance = () => {
    const [payData, loading] = UsePayCart();
    const [subsData] = subsCart();

    if (loading) {
        return <div className="text-white">Loading...</div>;
    }

    if (!payData || payData.length === 0) {
        return <div className="text-white">No transactions available.</div>;
    }

    if (!subsData) {
        return <div className="text-white">No subscription data available.</div>;
    }

    const totalMoney = payData.reduce((acc, payment) => acc + (payment.price || 0), 0);
    const lastSixTransactions = payData.slice(-6).reverse();

    const totalSubscribers = subsData.length || 0;
    const totalPaidMembers = payData.length || 0;

    const data = [
        { name: 'Subscribers', value: totalSubscribers },
        { name: 'Paid Members', value: totalPaidMembers },
    ];

    const COLORS = ['#4bc0c0', '#ff6384'];

    return (
        <div className="p-4 bg-transparent text-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Balance Summary</h2>
            <p className="text-xl mb-4">Total Money: ${totalMoney.toFixed(2)}</p>
            <h3 className="text-xl font-semibold mb-2">Last Six Transactions</h3>
            <ul>
                {lastSixTransactions.map((transaction, index) => (
                    <li key={index} className="mb-2 border-b border-gray-700 pb-2">
                        <div className="flex justify-between items-center">
                            <span>{new Date(transaction.date).toLocaleDateString()}</span>
                            <span>${transaction.price ? transaction.price.toFixed(2) : 0}</span>
                        </div>
                        <div className="text-sm text-gray-400">{transaction.selectedPackage}</div>
                        <div className="text-sm text-gray-400">Transaction ID: {transaction.trainerId}</div>
                    </li>
                ))}
            </ul>
            <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Subscribers vs Paid Members</h3>
                <div className="relative h-64">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                outerRadius={80}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                            </Pie>
                            <Tooltip />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Balance;






