const stats = [
    {
        icon: 'sentiment_satisfied_alt',
        value: '100+',
        label: 'Klien Puas',
        bgColor: 'bg-primary/10',
        textColor: 'text-primary',
    },
    {
        icon: 'local_shipping',
        value: '50+',
        label: 'Armada Modern',
        bgColor: 'bg-secondary/10',
        textColor: 'text-secondary',
    },
    {
        icon: 'history',
        value: '10+',
        label: 'Tahun Pengalaman',
        bgColor: 'bg-blue-100',
        textColor: 'text-blue-600',
    },
    {
        icon: 'headset_mic',
        value: '24/7',
        label: 'Layanan Support',
        bgColor: 'bg-green-100',
        textColor: 'text-green-600',
    },
];

export default function StatsBar() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 mt-16 lg:mt-24">
            <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 p-8 lg:p-10 transform lg:-translate-y-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center ${index >= 2 ? 'pt-8 md:pt-0' : 'pt-4 md:pt-0'}`}
                        >
                            <div
                                className={`flex items-center justify-center w-12 h-12 mx-auto ${stat.bgColor} ${stat.textColor} rounded-full mb-3`}
                            >
                                <span className="material-icons">{stat.icon}</span>
                            </div>
                            <h3 className="text-3xl font-bold text-navy mb-1">
                                {stat.value}
                            </h3>
                            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
