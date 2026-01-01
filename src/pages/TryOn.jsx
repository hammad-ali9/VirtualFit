import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const TryOn = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    // Listen for commands from the Dashboard
    React.useEffect(() => {
        const channel = new BroadcastChannel('virtual-fit-app');

        channel.onmessage = (event) => {
            console.log('Received message:', event.data);
            if (event.data.type === 'SELECT_ITEM') {
                setSelectedItem(event.data.payload);
            }
        };

        return () => {
            channel.close();
        };
    }, []);

    // Prevent Back Navigation
    React.useEffect(() => {
        // Push current state to history stack
        window.history.pushState(null, null, window.location.href);

        // Trap back button
        const handlePopState = () => {
            window.history.pushState(null, null, window.location.href);
        };

        window.addEventListener('popstate', handlePopState);
        return () => window.removeEventListener('popstate', handlePopState);
    }, []);

    const items = [
        { id: 1, name: 'Denim Jacket', image: 'https://via.placeholder.com/150/2D3FE7/FFFFFF?text=Jacket' },
        { id: 2, name: 'Summer Dress', image: 'https://via.placeholder.com/150/14B8A6/FFFFFF?text=Dress' },
        { id: 3, name: 'Chinos', image: 'https://via.placeholder.com/150/F59E0B/FFFFFF?text=Pants' },
        { id: 4, name: 'White Tee', image: 'https://via.placeholder.com/150/64748B/FFFFFF?text=Tee' },
    ];

    return (
        <div className="fixed inset-0 bg-black text-white overflow-hidden flex flex-col cursor-none">
            {/* Added cursor-none to hide mouse if desired, or can be removed */}

            {/* Camera View (Mockup) */}
            <div className="absolute inset-0 bg-gray-900 z-0">
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                    <span className="material-symbols-outlined text-9xl">person</span>
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
                    <p className="text-xl font-medium text-white/80">Step into the frame</p>
                </div>
            </div>

            {/* Top Bar - No Exit Button */}
            <header className="relative z-10 p-6 flex items-center justify-between bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center gap-3">
                    <div className="size-10 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                        <span className="material-symbols-outlined">view_in_ar</span>
                    </div>
                    <span className="font-bold text-lg tracking-tight">VirtualFit</span>
                </div>
                {/* Close button removed for security */}
            </header>

            {/* Main Content Area (Empty for camera view) */}
            <div className="flex-1 relative z-10 pointer-events-none">
                {/* AR Overlay Mockup */}
                {selectedItem && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-96 border-2 border-primary rounded-xl flex items-center justify-center bg-primary/20 backdrop-blur-sm animate-pulse">
                        <span className="font-bold text-white drop-shadow-md">Rendering {selectedItem.name}...</span>
                    </div>
                )}
            </div>

            {/* Bottom Controls */}
            <div className="relative z-10 bg-gradient-to-t from-black/90 via-black/60 to-transparent pt-12 pb-8 px-6">
                <div className="max-w-4xl mx-auto">
                    <p className="text-center text-white/80 text-sm mb-4">Select an item to try on</p>

                    <div className="flex gap-4 overflow-x-auto pb-4 snap-x hide-scrollbar justify-center">
                        {items.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => setSelectedItem(item)}
                                className={`snap-center flex-shrink-0 w-24 h-32 rounded-xl overflow-hidden border-2 transition-all duration-200 relative group ${selectedItem?.id === item.id ? 'border-primary ring-4 ring-primary/30 scale-105' : 'border-white/30 hover:border-white/60'
                                    }`}
                            >
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-center p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <span className="text-xs font-medium truncate w-full text-center">{item.name}</span>
                                </div>
                            </button>
                        ))}
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-6">
                        <button className="size-14 rounded-full bg-white text-gray-900 flex items-center justify-center shadow-lg hover:scale-105 transition-transform active:scale-95">
                            <span className="material-symbols-outlined text-3xl">camera</span>
                        </button>
                        <button className="size-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white/20 transition-colors">
                            <span className="material-symbols-outlined text-2xl">flip_camera_ios</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TryOn;
