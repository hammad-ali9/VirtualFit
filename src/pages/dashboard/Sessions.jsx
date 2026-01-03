import React, { useState, useEffect } from 'react';
import { authAPI, sessionsAPI } from '../../services/api';

const Sessions = () => {
    const [sessions, setSessions] = useState([]);
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPeriod, setSelectedPeriod] = useState(7);
    const outlet = authAPI.getOutlet();

    useEffect(() => {
        if (outlet?.id) {
            fetchData();
        } else {
            setLoading(false);
        }
    }, [selectedPeriod]);

    const fetchData = async () => {
        setLoading(true);
        try {
            const [sessionsRes, analyticsRes] = await Promise.all([
                sessionsAPI.getAll(outlet?.id, 50),
                sessionsAPI.getAnalytics(outlet?.id, selectedPeriod)
            ]);

            if (sessionsRes.success) {
                setSessions(sessionsRes.data);
            }
            if (analyticsRes.success) {
                setAnalytics(analyticsRes.data);
            }
        } catch (err) {
            console.error('Failed to load sessions:', err);
        } finally {
            setLoading(false);
        }
    };

    const formatDuration = (seconds) => {
        if (!seconds) return '-';
        if (seconds < 60) return `${seconds}s`;
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}m ${secs}s`;
    };

    const formatDate = (dateStr) => {
        if (!dateStr) return '-';
        const date = new Date(dateStr);
        const now = new Date();
        const diff = now - date;

        if (diff < 60000) return 'Just now';
        if (diff < 3600000) return `${Math.floor(diff / 60000)}m ago`;
        if (diff < 86400000) return `${Math.floor(diff / 3600000)}h ago`;

        return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-heading">Try-On Sessions</h1>
                    <p className="text-body mt-1">History of all virtual try-on activities in your store.</p>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center bg-white border border-border-gray rounded-lg p-1">
                        {[7, 30, 90].map(days => (
                            <button
                                key={days}
                                onClick={() => setSelectedPeriod(days)}
                                className={`px-3 py-1 text-sm font-medium rounded transition-colors ${selectedPeriod === days ? 'bg-page text-heading shadow-sm' : 'text-body hover:text-heading'}`}
                            >
                                {days}d
                            </button>
                        ))}
                    </div>
                    <button
                        onClick={fetchData}
                        className="flex items-center gap-2 px-3 py-2 bg-white border border-border-gray rounded-lg text-heading font-medium hover:bg-page transition-colors"
                    >
                        <span className="material-symbols-outlined text-[20px]">refresh</span>
                    </button>
                </div>
            </div>

            {/* Analytics Cards */}
            {analytics && (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    <div className="bg-white p-5 rounded-xl border border-border-gray shadow-sm">
                        <p className="text-sm text-body">Total Sessions</p>
                        <p className="text-2xl font-bold text-heading">{analytics.total_sessions}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-border-gray shadow-sm">
                        <p className="text-sm text-body">Products Tried</p>
                        <p className="text-2xl font-bold text-heading">{analytics.total_products_tried}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-border-gray shadow-sm">
                        <p className="text-sm text-body">Avg Duration</p>
                        <p className="text-2xl font-bold text-heading">{formatDuration(analytics.avg_duration_seconds)}</p>
                    </div>
                    <div className="bg-white p-5 rounded-xl border border-border-gray shadow-sm">
                        <p className="text-sm text-body">Completion Rate</p>
                        <p className="text-2xl font-bold text-heading">{analytics.completion_rate}%</p>
                    </div>
                </div>
            )}

            {/* Category Breakdown */}
            {analytics?.category_breakdown?.length > 0 && (
                <div className="bg-white p-6 rounded-xl border border-border-gray shadow-sm mb-8">
                    <h3 className="font-bold text-lg text-heading mb-4">Most Tried Categories</h3>
                    <div className="space-y-3">
                        {analytics.category_breakdown.map((cat, i) => (
                            <div key={cat.category} className="flex items-center gap-3">
                                <span className="text-sm font-bold text-body w-4">{i + 1}</span>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-1">
                                        <span className="text-sm font-medium text-heading">{cat.category}</span>
                                        <span className="text-sm text-body">{cat.count} tries</span>
                                    </div>
                                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary rounded-full"
                                            style={{ width: `${(cat.count / analytics.total_products_tried * 100)}%` }}
                                        ></div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Sessions Table */}
            <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                {loading ? (
                    <div className="p-16 text-center">
                        <span className="material-symbols-outlined animate-spin text-4xl text-gray-300">progress_activity</span>
                        <p className="mt-4 text-body">Loading sessions...</p>
                    </div>
                ) : sessions.length === 0 ? (
                    <div className="p-16 text-center">
                        <div className="size-20 mx-auto mb-6 rounded-full bg-gray-50 flex items-center justify-center">
                            <span className="material-symbols-outlined text-4xl text-gray-300">history</span>
                        </div>
                        <h3 className="text-lg font-semibold text-heading mb-2">No Sessions Yet</h3>
                        <p className="text-body max-w-md mx-auto">
                            Sessions will appear here once customers use the try-on feature.
                        </p>
                    </div>
                ) : (
                    <>
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
                                    {sessions.map(session => (
                                        <tr key={session.id} className="hover:bg-page/50 transition-colors">
                                            <td className="px-6 py-4 font-mono text-sm text-primary font-medium">#{session.id}</td>
                                            <td className="px-6 py-4 text-sm text-heading">{formatDate(session.started_at)}</td>
                                            <td className="px-6 py-4 text-sm text-body">{session.products_tried_count} items</td>
                                            <td className="px-6 py-4 text-sm text-heading">{formatDuration(session.duration_seconds)}</td>
                                            <td className="px-6 py-4 text-sm text-body">{session.kiosk_id || 'Web'}</td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${session.status === 'completed' ? 'text-green-600 bg-green-50' :
                                                        session.status === 'active' ? 'text-blue-600 bg-blue-50' :
                                                            'text-orange-600 bg-orange-50'
                                                    }`}>
                                                    {session.status === 'completed' ? 'Completed' :
                                                        session.status === 'active' ? 'Active' : 'Abandoned'}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-white px-6 py-4 border-t border-border-gray">
                            <span className="text-sm text-body">Showing {sessions.length} sessions</span>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Sessions;
