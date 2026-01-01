import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
    const location = useLocation();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', icon: 'dashboard' },
        { name: 'Inventory', href: '/dashboard/inventory', icon: 'checkroom' },
        { name: 'Sessions', href: '/dashboard/sessions', icon: 'history' },
        { name: 'Analytics', href: '/dashboard/analytics', icon: 'analytics' },
        { name: 'Settings', href: '/dashboard/settings', icon: 'settings' },
    ];

    const isActive = (path) => {
        if (path === '/dashboard' && location.pathname === '/dashboard') return true;
        if (path !== '/dashboard' && location.pathname.startsWith(path)) return true;
        return false;
    };

    return (
        <div className="min-h-screen bg-page text-heading font-sans flex text-sm">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-border-gray transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-auto ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Sidebar Header */}
                    <div className="h-16 flex items-center px-6 border-b border-border-gray">
                        <div className="flex items-center gap-2 text-primary">
                            <span className="material-symbols-outlined text-2xl">view_in_ar</span>
                            <span className="font-bold text-lg tracking-tight">VirtualFit</span>
                        </div>
                        <button
                            className="ml-auto lg:hidden text-body hover:text-heading"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <span className="material-symbols-outlined">close</span>
                        </button>
                    </div>

                    {/* Navigation Links */}
                    <nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${isActive(item.href)
                                        ? 'bg-primary/10 text-primary'
                                        : 'text-body hover:bg-page hover:text-heading'
                                    }`}
                            >
                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* User Profile / Logout */}
                    <div className="border-t border-border-gray p-4">
                        <div className="flex items-center gap-3 mb-4 px-2">
                            <div className="size-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                JD
                            </div>
                            <div className="overflow-hidden">
                                <p className="text-sm font-medium text-heading truncate">Jane Doe</p>
                                <p className="text-xs text-body truncate">Urban Style Outlet</p>
                            </div>
                        </div>
                        <Link
                            to="/login"
                            className="flex items-center gap-2 px-2 text-body hover:text-red-600 transition-colors text-xs font-medium"
                        >
                            <span className="material-symbols-outlined text-[18px]">logout</span>
                            Sign Out
                        </Link>
                    </div>
                </div>
            </aside>

            {/* Mobile Overlay */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col min-w-0 overflow-hidden">
                {/* Top Header (Mobile Only / Breadcrumbs) */}
                <header className="h-16 bg-white border-b border-border-gray flex items-center justify-between px-4 lg:px-8">
                    <button
                        className="lg:hidden p-2 -ml-2 text-body hover:text-heading rounded-lg"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>

                    <div className="flex items-center gap-4 ml-auto">
                        <button className="relative p-2 text-body hover:text-heading transition-colors rounded-full hover:bg-page">
                            <span className="material-symbols-outlined text-[22px]">notifications</span>
                            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white"></span>
                        </button>
                    </div>
                </header>

                {/* Page Content */}
                <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
