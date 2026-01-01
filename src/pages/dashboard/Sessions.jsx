import React from 'react';

const Sessions = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-heading">Try-On Sessions</h1>
                    <p className="text-body mt-1">History of all virtual try-on activities in your store.</p>
                </div>
                <div className="flex items-center gap-2">
                    <input
                        type="text"
                        placeholder="Search items..."
                        className="border border-border-gray rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    />
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border-gray rounded-lg text-heading font-medium hover:bg-page transition-colors">
                        <span className="material-symbols-outlined text-[20px]">filter_list</span>
                        Filter
                    </button>
                    <button className="flex items-center gap-2 px-3 py-2 bg-white border border-border-gray rounded-lg text-heading font-medium hover:bg-page transition-colors">
                        <span className="material-symbols-outlined text-[20px]">download</span>
                        Export
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-page border-b border-border-gray text-xs uppercase tracking-wider text-body font-semibold">
                                <th className="px-6 py-4">Session ID</th>
                                <th className="px-6 py-4">Time</th>
                                <th className="px-6 py-4">Items Tried</th>
                                <th className="px-6 py-4">Duration</th>
                                <th className="px-6 py-4">Device</th>
                                <th className="px-6 py-4">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-gray">
                            <SessionRow
                                id="#TR-4829"
                                time="Today, 10:42 AM"
                                items={['Blue Denim Jacket', 'Classic White Tee']}
                                duration="4m 12s"
                                device="Kiosk #1"
                                status="Completed"
                                statusColor="text-green-600 bg-green-50"
                            />
                            <SessionRow
                                id="#TR-4828"
                                time="Today, 10:15 AM"
                                items={['Floral Summer Dress']}
                                duration="8m 45s"
                                device="Tablet #3"
                                status="Completed"
                                statusColor="text-green-600 bg-green-50"
                            />
                            <SessionRow
                                id="#TR-4827"
                                time="Today, 09:55 AM"
                                items={['Leather Biker Jacket', 'Slim Fit Chinos']}
                                duration="2m 30s"
                                device="Kiosk #2"
                                status="Abandoned"
                                statusColor="text-red-600 bg-red-50"
                            />
                            <SessionRow
                                id="#TR-4826"
                                time="Yesterday, 06:20 PM"
                                items={['Beige Trench Coat']}
                                duration="5m 10s"
                                device="Kiosk #1"
                                status="Completed"
                                statusColor="text-green-600 bg-green-50"
                            />
                            <SessionRow
                                id="#TR-4825"
                                time="Yesterday, 05:45 PM"
                                items={['Slim Fit Jeans', 'Classic White Tee', 'Denim Jacket']}
                                duration="12m 05s"
                                device="Tablet #1"
                                status="Completed"
                                statusColor="text-green-600 bg-green-50"
                            />
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="bg-white px-6 py-4 border-t border-border-gray flex items-center justify-between">
                    <span className="text-sm text-body">Showing 1-5 of 124 sessions</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-border-gray rounded hover:bg-page disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 text-sm border border-border-gray rounded hover:bg-page">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SessionRow = ({ id, time, items, duration, device, status, statusColor }) => (
    <tr className="hover:bg-page/50 transition-colors">
        <td className="px-6 py-4 font-mono text-sm text-primary font-medium">{id}</td>
        <td className="px-6 py-4 text-sm text-heading">{time}</td>
        <td className="px-6 py-4">
            <div className="flex flex-col gap-1">
                {items.map((item, idx) => (
                    <span key={idx} className="text-sm text-body flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-body/40"></span>
                        {item}
                    </span>
                ))}
            </div>
        </td>
        <td className="px-6 py-4 text-sm text-heading">{duration}</td>
        <td className="px-6 py-4 text-sm text-body">{device}</td>
        <td className="px-6 py-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                {status}
            </span>
        </td>
    </tr>
);

export default Sessions;
