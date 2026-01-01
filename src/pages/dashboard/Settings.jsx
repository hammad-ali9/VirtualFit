import React from 'react';

const Settings = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="mb-8">
                <h1 className="text-2xl font-bold text-heading">Settings</h1>
                <p className="text-body mt-1">Manage your store details and application preferences.</p>
            </div>

            <div className="space-y-6">
                {/* General Information */}
                <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-border-gray">
                        <h2 className="font-bold text-lg text-heading">General Information</h2>
                    </div>
                    <div className="p-6 space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading">Outlet Name</label>
                                <input type="text" defaultValue="Urban Style Outlet" className="w-full rounded-lg border-border-gray py-2 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-heading">Outlet Type</label>
                                <select className="w-full rounded-lg border-border-gray py-2 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none bg-white">
                                    <option>Independent Boutique</option>
                                    <option>Retail Chain</option>
                                </select>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1.5">
                            <label className="text-sm font-medium text-heading">Store Address</label>
                            <input type="text" defaultValue="123 Fashion Ave, New York, NY 10001" className="w-full rounded-lg border-border-gray py-2 px-3 text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none" />
                        </div>
                    </div>
                    <div className="px-6 py-3 bg-page border-t border-border-gray flex justify-end">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">Save Changes</button>
                    </div>
                </div>

                {/* Brand Customization */}
                <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-border-gray">
                        <h2 className="font-bold text-lg text-heading">Brand Customization</h2>
                        <p className="text-sm text-body mt-0.5">Customize how the try-on interface looks to your customers.</p>
                    </div>
                    <div className="p-6 space-y-6">
                        <div className="flex items-center gap-6">
                            <div>
                                <label className="text-sm font-medium text-heading mb-2 block">Logo</label>
                                <div className="border-2 border-dashed border-border-gray rounded-lg p-4 flex flex-col items-center justify-center w-32 h-32 hover:bg-page transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-border-gray text-3xl">cloud_upload</span>
                                    <span className="text-xs text-body mt-2">Upload</span>
                                </div>
                            </div>
                            <div>
                                <label className="text-sm font-medium text-heading mb-2 block">Primary Color</label>
                                <div className="flex items-center gap-3">
                                    <input type="color" defaultValue="#2D3FE7" className="size-10 p-0.5 rounded border border-border-gray cursor-pointer" />
                                    <span className="text-sm text-heading font-mono">#2D3FE7</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="px-6 py-3 bg-page border-t border-border-gray flex justify-end">
                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">Save Changes</button>
                    </div>
                </div>

                {/* Device Management */}
                <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-border-gray flex justify-between items-center">
                        <h2 className="font-bold text-lg text-heading">Connected Devices</h2>
                        <button className="text-sm text-primary font-medium hover:underline">+ Connect New Device</button>
                    </div>
                    <div className="divide-y divide-border-gray">
                        <div className="px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">tablet_mac</span>
                                <div>
                                    <p className="text-sm font-medium text-heading">Kiosk #1 (Front Entrance)</p>
                                    <p className="text-xs text-green-600 flex items-center gap-1">
                                        <span className="size-1.5 rounded-full bg-green-600"></span> Online
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-red-600"><span className="material-symbols-outlined">delete</span></button>
                        </div>
                        <div className="px-6 py-4 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-gray-400">tablet_mac</span>
                                <div>
                                    <p className="text-sm font-medium text-heading">Tablet #3 (Fitting Room)</p>
                                    <p className="text-xs text-gray-500 flex items-center gap-1">
                                        <span className="size-1.5 rounded-full bg-gray-400"></span> Offline
                                    </p>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-red-600"><span className="material-symbols-outlined">delete</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
