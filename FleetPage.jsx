import { useState } from 'react';

const categories = ['Semua', 'CDD', 'Fuso', 'Tronton', 'Wingbox'];

const fleetData = [
    {
        name: 'CDD Box',
        category: 'CDD',
        description: 'Kapasitas volume lebih besar untuk barang ringan namun memakan tempat.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozaG2kcHSJkhLMOdLua3G44xe8Kou3VBdyJodbpaeMh8om3hMNFx_04vxR4X1vHtqi2_jAwB1TwuUpNrJHtJwAwq--SrNX5d_yHugr1JnH9xdfqZX7l8cej0m1bcVg_LXbk9kmo6qGw-oRpBCT5ka_Jo2-aUSdOHPCs01Lbm2GZ_fgxOkdE6pLNf-PCSoGX62NYZDwHesddm6C-2KErNnrQnYIgND9TsqwjA8wFBE8ZxjCOK8CYketkFnhbw3TfXjtNsnEHRQkPU',
        badge: null,
        dimensions: '4.2m x 2.0m x 2.0m',
        maxWeight: '4 Ton',
        volume: '16 CBM',
        units: '30 Unit',
    },
    {
        name: 'CDD Bak',
        category: 'CDD',
        description: 'Armada bak terbuka untuk kemudahan bongkar muat material konstruksi.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAozaG2kcHSJkhLMOdLua3G44xe8Kou3VBdyJodbpaeMh8om3hMNFx_04vxR4X1vHtqi2_jAwB1TwuUpNrJHtJwAwq--SrNX5d_yHugr1JnH9xdfqZX7l8cej0m1bcVg_LXbk9kmo6qGw-oRpBCT5ka_Jo2-aUSdOHPCs01Lbm2GZ_fgxOkdE6pLNf-PCSoGX62NYZDwHesddm6C-2KErNnrQnYIgND9TsqwjA8wFBE8ZxjCOK8CYketkFnhbw3TfXjtNsnEHRQkPU',
        badge: null,
        dimensions: '4.2m x 2.0m x 2.0m',
        maxWeight: '4 Ton',
        volume: '16 CBM',
        units: '25 Unit',
    },
    {
        name: 'Fuso Bak',
        category: 'Fuso',
        description: 'Solusi tepat untuk muatan berat jarak jauh antar provinsi.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-pKC7N25SrDJ0YueJ1ezMxya6Hk5SFykTAl9abudBNqQvnoIZ2n9J8XL4Uu_f9CLHMLQh5Jzm18plxERLw6Gqw9-czaY4t4CXYOK8p7RkAYk45QuTxHbolgX_-USrgCXQN3RDvvrBTWWUo6-TYaW3-wECtbac-8J8icnmU1WYQAOR5PJaCO3ZEh8s8GfXfDAqhdefENGzopX47JzNYpitK9c6d-JcTSW7N9DGNP0czTNLFF-JtRxQ4x1VdrPitiyS4Bp-oIPFr0s',
        badge: null,
        dimensions: '6.0m x 2.4m x 2.4m',
        maxWeight: '8 Ton',
        volume: '30 CBM',
        units: '15 Unit',
    },
    {
        name: 'Fuso Wingsbox',
        category: 'Fuso',
        description: 'Kemudahan loading/unloading dari samping untuk kapasitas menengah.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-pKC7N25SrDJ0YueJ1ezMxya6Hk5SFykTAl9abudBNqQvnoIZ2n9J8XL4Uu_f9CLHMLQh5Jzm18plxERLw6Gqw9-czaY4t4CXYOK8p7RkAYk45QuTxHbolgX_-USrgCXQN3RDvvrBTWWUo6-TYaW3-wECtbac-8J8icnmU1WYQAOR5PJaCO3ZEh8s8GfXfDAqhdefENGzopX47JzNYpitK9c6d-JcTSW7N9DGNP0czTNLFF-JtRxQ4x1VdrPitiyS4Bp-oIPFr0s',
        badge: null,
        dimensions: '6.0m x 2.4m x 2.4m',
        maxWeight: '8 Ton',
        volume: '30 CBM',
        units: '10 Unit',
    },
    {
        name: 'Tronton Wingsbox',
        category: 'Tronton',
        description: 'Kemudahan loading/unloading dari samping dengan kapasitas maksimal.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDF5hQkN7OXw8rGtiWxx6W-K_kr68bI5jbYv0xBqAYt9w5_257No1DiA4Vp1oOkVtb4fP5ZPeHZnjT9-ICbmQUwH8jVU6RrE0-4y-TXcDQOHlBFZ65vFroP5EoViaOAsVEzjydOt8cKI9OT_lnBVvFPt_HQ6ckUB5QzPf042nvIZdtZIzzkiZrEhnBMwZcmMyypF5iZFZFoVJ7gEfta5HrZfR7qNIS1Wl33E6N9kjbPZ6XKo1aHT6YBOYDwSqvoe1shabD1_x6XSpA',
        badge: null,
        dimensions: '9.5m x 2.4m x 2.4m',
        maxWeight: '18 Ton',
        volume: '48 CBM',
        units: '16 Unit',
    },
];

function FleetCard({ truck }) {
    return (
        <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 overflow-hidden flex flex-col">
            {/* Image */}
            <div className="relative h-56 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
                <img
                    alt={truck.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={truck.image}
                />
                {truck.badge && (
                    <div className={`absolute top-4 right-4 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm ${truck.badgeStyle}`}>
                        {truck.badge}
                    </div>
                )}
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-primary transition-colors">
                    {truck.name}
                </h3>
                <p className="text-sm text-slate-500 mb-5">{truck.description}</p>

                {/* Specs */}
                <div className="bg-slate-50 rounded-lg p-4 mt-auto space-y-3 border border-slate-100">
                    <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                        <span className="text-slate-500 flex items-center gap-2">
                            <span className="material-icons text-primary/60 text-[16px]">straighten</span> Dimensi
                        </span>
                        <span className="font-semibold text-slate-700">{truck.dimensions}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                        <span className="text-slate-500 flex items-center gap-2">
                            <span className="material-icons text-primary/60 text-[16px]">fitness_center</span> Berat Max
                        </span>
                        <span className="font-semibold text-slate-700">{truck.maxWeight}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm border-b border-slate-200 pb-2">
                        <span className="text-slate-500 flex items-center gap-2">
                            <span className="material-icons text-primary/60 text-[16px]">all_inbox</span> Volume
                        </span>
                        <span className="font-semibold text-slate-700">{truck.volume}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                        <span className="text-slate-500 flex items-center gap-2">
                            <span className="material-icons text-primary/60 text-[16px]">local_shipping</span> Total Unit
                        </span>
                        <span className="font-semibold text-slate-700">{truck.units}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FleetPage() {
    const [active, setActive] = useState('Semua');

    const filtered = active === 'Semua'
        ? fleetData
        : fleetData.filter((t) => t.category === active);

    return (
        <>
            {/* Hero Header */}
            <header className="relative pt-16 pb-12 bg-primary overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl mix-blend-overlay" />
                    <div className="absolute top-1/2 left-10 w-64 h-64 rounded-full bg-purple-400 blur-3xl mix-blend-overlay" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Armada Kami
                    </h1>
                    <p className="text-lg md:text-xl text-purple-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Solusi transportasi logistik terpercaya dengan variasi armada lengkap untuk segala kebutuhan bisnis Anda. Aman, Tepat Waktu, dan Profesional.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">


                {/* Fleet Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filtered.map((truck) => (
                        <FleetCard key={truck.name} truck={truck} />
                    ))}
                </div>

            </main>
        </>
    );
}
