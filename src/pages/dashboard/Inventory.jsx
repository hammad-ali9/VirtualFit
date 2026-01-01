import React from 'react';

const Inventory = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-heading">Inventory</h1>
                    <p className="text-body mt-1">Manage your outlet's clothing catalog.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg font-bold hover:bg-primary-dark transition-colors shadow-sm">
                    <span className="material-symbols-outlined text-[20px]">add</span>
                    Add New Item
                </button>
            </div>

            {/* Inventory Table */}
            <div className="bg-white rounded-xl border border-border-gray shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-page border-b border-border-gray text-xs uppercase tracking-wider text-body font-semibold">
                                <th className="px-6 py-4">Item Name</th>
                                <th className="px-6 py-4">Category</th>
                                <th className="px-6 py-4">Price</th>
                                <th className="px-6 py-4">Stock Status</th>
                                <th className="px-6 py-4">Dimensions (3D)</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-gray">
                            <InventoryRow
                                name="Blue Denim Jacket"
                                category="Outerwear"
                                price="$89.99"
                                stock="In Stock"
                                statusColor="text-green-600 bg-green-50"
                                modelReady={true}
                            />
                            <InventoryRow
                                name="Floral Summer Dress"
                                category="Dresses"
                                price="$59.99"
                                stock="Low Stock"
                                statusColor="text-orange-600 bg-orange-50"
                                modelReady={true}
                            />
                            <InventoryRow
                                name="Slim Fit Chinos"
                                category="Pants"
                                price="$45.00"
                                stock="In Stock"
                                statusColor="text-green-600 bg-green-50"
                                modelReady={true}
                            />
                            <InventoryRow
                                name="Leather Biker Jacket"
                                category="Outerwear"
                                price="$120.00"
                                stock="Out of Stock"
                                statusColor="text-red-600 bg-red-50"
                                modelReady={false}
                            />
                            <InventoryRow
                                name="Classic White Tee"
                                category="T-Shirts"
                                price="$25.00"
                                stock="In Stock"
                                statusColor="text-green-600 bg-green-50"
                                modelReady={true}
                            />
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <div className="bg-white px-6 py-4 border-t border-border-gray flex items-center justify-between">
                    <span className="text-sm text-body">Showing 1-5 of 48 items</span>
                    <div className="flex gap-2">
                        <button className="px-3 py-1 text-sm border border-border-gray rounded hover:bg-page disabled:opacity-50" disabled>Previous</button>
                        <button className="px-3 py-1 text-sm border border-border-gray rounded hover:bg-page">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const InventoryRow = ({ name, category, price, stock, statusColor, modelReady }) => (
    <tr className="hover:bg-page/50 transition-colors">
        <td className="px-6 py-4">
            <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg bg-gray-100 flex items-center justify-center text-gray-400">
                    <span className="material-symbols-outlined text-[20px]">image</span>
                </div>
                <span className="font-medium text-heading">{name}</span>
            </div>
        </td>
        <td className="px-6 py-4 text-sm text-body">{category}</td>
        <td className="px-6 py-4 text-sm font-medium text-heading">{price}</td>
        <td className="px-6 py-4">
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColor}`}>
                {stock}
            </span>
        </td>
        <td className="px-6 py-4">
            {modelReady ? (
                <div className="flex items-center gap-1.5 text-xs text-primary font-medium">
                    <span className="material-symbols-outlined text-[16px]">3d_rotation</span>
                    Ready
                </div>
            ) : (
                <div className="flex items-center gap-1.5 text-xs text-body font-medium">
                    <span className="material-symbols-outlined text-[16px]">pending</span>
                    Processing
                </div>
            )}
        </td>
        <td className="px-6 py-4 text-right">
            <button className="text-body hover:text-primary transition-colors p-1">
                <span className="material-symbols-outlined text-[20px]">more_vert</span>
            </button>
        </td>
    </tr>
);

export default Inventory;
