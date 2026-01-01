import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const DashboardHome = () => {
    const [channel, setChannel] = useState(null);

    useEffect(() => {
        const newChannel = new BroadcastChannel('virtual-fit-app');
        setChannel(newChannel);
        return () => newChannel.close();
    }, []);

    const openCustomerScreen = () => {
        // Open the Try-On URL in a new popup window
        window.open('/try-on', 'CustomerScreen', 'width=1280,height=720,menubar=no,toolbar=no,location=no');
    };

    const sendToCustomerScreen = (item) => {
        if (channel) {
            channel.postMessage({ type: 'SELECT_ITEM', payload: item });
        }
    };

    return (
        <div className="max-w-7xl mx-auto">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-heading">Overview</h1>
                    <p className="text-body mt-1">Welcome back, here's what's happening at your outlet today.</p>
                </div>
                <div className="flex gap-3">
                    {/* Placeholder for action buttons */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-border-gray rounded-lg text-heading font-medium hover:bg-page transition-colors shadow-sm">
                        <span className="material-symbols-outlined text-[20px]">add</span>
                        Add Item
                    </button>
                    <button
                        onClick={openCustomerScreen}
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-sm shadow-primary/20"
                    >
                        <span className="material-symbols-outlined text-[20px]">smart_display</span>
                        Launch Customer Screen
                    </button>
                </div>
            </div>

            {/* Remote Control Demo Section (Temporary) */}
            <div className="mb-8 p-4 bg-blue-50 border border-blue-100 rounded-xl">
                <h3 className="font-bold text-blue-900 mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined">cast</span>
                    Remote Control Demo
                </h3>
                <p className="text-sm text-blue-800 mb-4">Click "Launch Customer Screen" above, drag the new window to your second monitor, then click these items to control that screen instantly.</p>
                <div className="flex gap-4">
                    <button
                        onClick={() => sendToCustomerScreen({ id: 1, name: 'Denim Jacket', image: 'https://via.placeholder.com/150/2D3FE7/FFFFFF?text=Jacket' })}
                        className="px-3 py-2 bg-white rounded border border-blue-200 text-sm font-medium hover:bg-blue-100"
                    >
                        Show Denim Jacket
                    </button>
                    <button
                        onClick={() => sendToCustomerScreen({ id: 2, name: 'Summer Dress', image: 'https://via.placeholder.com/150/14B8A6/FFFFFF?text=Dress' })}
                        className="px-3 py-2 bg-white rounded border border-blue-200 text-sm font-medium hover:bg-blue-100"
                    >
                        Show Summer Dress
                    </button>
                </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
                <MetricCard
                    title="Active Sessions"
                    value="12"
                    trend="+20%"
                    trendUp={true}
                    icon="devices"
                    color="text-blue-600"
                    bg="bg-blue-50"
                />
                <MetricCard
                    title="Items Tried On"
                    value="148"
                    trend="+12%"
                    trendUp={true}
                    icon="checkroom"
                    color="text-teal-600"
                    bg="bg-teal-50"
                />
                <MetricCard
                    title="Avg. Time"
                    value="4m 30s"
                    trend="-5%"
                    trendUp={false}
                    icon="timer"
                    color="text-purple-600"
                    bg="bg-purple-50"
                />
                <MetricCard
                    title="Conversion Rate"
                    value="24%"
                    trend="+2.5%"
                    trendUp={true}
                    icon="shopping_bag"
                    color="text-indigo-600"
                    bg="bg-indigo-50"
                />
            </div>

            {/* Recent Activity / Inventory Snapshot */}
            <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Sessions */}
                <div className="bg-white rounded-xl border border-border-gray shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-bold text-lg text-heading">Recent Sessions</h2>
                        <Link to="/dashboard/sessions" className="text-sm text-primary font-medium hover:underline">View All</Link>
                    </div>
                    <div className="space-y-4">
                        <SessionRow time="2 mins ago" items="Blue Denim Jacket" status="Active" />
                        <SessionRow time="15 mins ago" items="Floral Summer Dress" status="Completed" />
                        <SessionRow time="32 mins ago" items="Slim Fit Chinos" status="Completed" />
                        <SessionRow time="1 hour ago" items="Leather Biker Jacket" status="Abandoned" />
                        <SessionRow time="2 hours ago" items="Striped Cotton Shirt" status="Completed" />
                    </div>
                </div>

                {/* Popular Items */}
                <div className="bg-white rounded-xl border border-border-gray shadow-sm p-6">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="font-bold text-lg text-heading">Trending Items</h2>
                        <Link to="/dashboard/analytics" className="text-sm text-primary font-medium hover:underline">View Analytics</Link>
                    </div>
                    <div className="space-y-4">
                        <ItemRow rank="1" name="Floral Summer Dress" tries="45" />
                        <ItemRow rank="2" name="Slim Fit Jeans" tries="38" />
                        <ItemRow rank="3" name="Classic White Tee" tries="32" />
                        <ItemRow rank="4" name="Beige Trench Coat" tries="28" />
                        <ItemRow rank="5" name="Leather Ankle Boots" tries="25" />
                    </div>
                </div>
            </div>
        </div>
    );
};


const MetricCard = ({ title, value, trend, trendUp, icon, color, bg }) => (
    <div className="bg-white p-6 rounded-xl border border-border-gray shadow-sm flex items-start justify-between">
        <div>
            <p className="text-sm font-medium text-body mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-heading mb-1">{value}</h3>
            <span className={`text-xs font-medium flex items-center gap-1 ${trendUp ? 'text-green-600' : 'text-red-500'}`}>
                <span className="material-symbols-outlined text-[14px]">{trendUp ? 'trending_up' : 'trending_down'}</span>
                {trend} <span className="text-body font-normal">vs last week</span>
            </span>
        </div>
        <div className={`size-10 rounded-lg flex items-center justify-center ${bg} ${color}`}>
            <span className="material-symbols-outlined">{icon}</span>
        </div>
    </div>
);

const SessionRow = ({ time, items, status }) => (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-page transition-colors cursor-default">
        <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">accessibility_new</span>
            </div>
            <div>
                <p className="text-sm font-medium text-heading">{items}</p>
                <p className="text-xs text-body">{time}</p>
            </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${status === 'Active' ? 'bg-green-100 text-green-700' :
            status === 'Completed' ? 'bg-gray-100 text-gray-700' : 'bg-red-50 text-red-600'
            }`}>
            {status}
        </span>
    </div>
);

const ItemRow = ({ rank, name, tries }) => (
    <div className="flex items-center justify-between p-3 rounded-lg hover:bg-page transition-colors cursor-default">
        <div className="flex items-center gap-3">
            <span className="text-sm font-bold text-body w-4">{rank}</span>
            <div>
                <p className="text-sm font-medium text-heading">{name}</p>
            </div>
        </div>
        <div className="text-sm text-heading font-semibold">
            {tries} <span className="text-xs text-body font-normal">tries</span>
        </div>
    </div>
);

export default DashboardHome;
