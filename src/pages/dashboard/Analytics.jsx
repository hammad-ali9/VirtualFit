import React from 'react';

const Analytics = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-heading">Analytics</h1>
                    <p className="text-body mt-1">Deep insights into your outlet's performance.</p>
                </div>
                <div className="flex items-center bg-white border border-border-gray rounded-lg p-1">
                    <button className="px-3 py-1 bg-page text-heading text-sm font-medium rounded shadow-sm">7 Days</button>
                    <button className="px-3 py-1 text-body hover:text-heading text-sm font-medium rounded transition-colors">30 Days</button>
                    <button className="px-3 py-1 text-body hover:text-heading text-sm font-medium rounded transition-colors">90 Days</button>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Engagement Chart Placeholder */}
                <div className="bg-white p-6 rounded-xl border border-border-gray shadow-sm">
                    <h3 className="font-bold text-lg text-heading mb-6">Weekly Try-On Volume</h3>
                    <div className="h-64 flex items-end justify-between gap-2 px-2">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                            <div key={i} className="w-full bg-blue-50 rounded-t-lg relative group">
                                <div
                                    className="absolute bottom-0 left-0 w-full bg-primary rounded-t-lg transition-all duration-500 hover:opacity-90"
                                    style={{ height: `${height}%` }}
                                ></div>
                                <div className="hidden group-hover:block absolute -top-8 left-1/2 -translate-x-1/2 bg-heading text-white text-xs py-1 px-2 rounded">
                                    {height * 2} Sessions
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4 text-xs text-body uppercase font-medium">
                        <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                    </div>
                </div>

                {/* Categories Pie Chart Placeholder (Visual approximation) */}
                <div className="bg-white p-6 rounded-xl border border-border-gray shadow-sm">
                    <h3 className="font-bold text-lg text-heading mb-6">Popular Categories</h3>
                    <div className="flex items-center justify-center h-64">
                        <div className="relative size-48 rounded-full border-[16px] border-blue-100 flex items-center justify-center">
                            <div className="absolute inset-0 rounded-full border-[16px] border-primary border-l-transparent border-b-transparent transform rotate-45"></div>
                            <div className="absolute inset-0 rounded-full border-[16px] border-teal-400 border-l-transparent border-t-transparent border-r-transparent transform -rotate-12"></div>
                            <div className="text-center">
                                <span className="block text-3xl font-bold text-heading">148</span>
                                <span className="text-xs text-body uppercase tracking-wide">Total Items</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center gap-6 mt-4">
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-primary"></span>
                            <span className="text-sm text-body">Tops (45%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-teal-400"></span>
                            <span className="text-sm text-body">Bottoms (30%)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="size-3 rounded-full bg-blue-100"></span>
                            <span className="text-sm text-body">Other (25%)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Performing Items Table */}
            <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-border-gray">
                    <h3 className="font-bold text-lg text-heading">Top Performing Items</h3>
                </div>
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-page border-b border-border-gray text-xs uppercase tracking-wider text-body font-semibold">
                            <th className="px-6 py-3">Item</th>
                            <th className="px-6 py-3">Total Try-ons</th>
                            <th className="px-6 py-3">Conversion Rate</th>
                            <th className="px-6 py-3">Revenue (Est.)</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-border-gray">
                        <tr>
                            <td className="px-6 py-3 font-medium text-heading">Floral Summer Dress</td>
                            <td className="px-6 py-3 text-body">342</td>
                            <td className="px-6 py-3 text-green-600 font-medium">18.5%</td>
                            <td className="px-6 py-3 text-heading">$3,420</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 font-medium text-heading">Slim Fit Jeans</td>
                            <td className="px-6 py-3 text-body">289</td>
                            <td className="px-6 py-3 text-green-600 font-medium">12.2%</td>
                            <td className="px-6 py-3 text-heading">$2,100</td>
                        </tr>
                        <tr>
                            <td className="px-6 py-3 font-medium text-heading">Leather Biker Jacket</td>
                            <td className="px-6 py-3 text-body">156</td>
                            <td className="px-6 py-3 text-green-600 font-medium">8.4%</td>
                            <td className="px-6 py-3 text-heading">$4,500</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Analytics;
