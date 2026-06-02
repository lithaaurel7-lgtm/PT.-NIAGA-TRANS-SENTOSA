const services = [
    {
        icon: 'calendar_today',
        title: 'Sewa Harian',
        desc: 'Solusi fleksibel untuk kebutuhan pengiriman mendadak atau jangka pendek. Armada siap sedia kapanpun Anda butuhkan dengan hitungan per hari.',
    },
    {
        icon: 'date_range',
        title: 'Sewa Bulanan',
        desc: 'Pilihan ekonomis untuk operasional rutin. Kontrak bulanan dengan harga spesial dan prioritas ketersediaan unit armada khusus untuk bisnis Anda.',
    },
    {
        icon: 'map',
        title: 'Distribusi Logistik',
        desc: 'Layanan manajemen distribusi end-to-end. Kami mengelola pengiriman barang Anda ke berbagai titik distribusi di seluruh Indonesia dengan efisien.',
    },
];

export default function ServicesSection() {
    return (
        <section className="py-20 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase text-sm">Layanan Kami</span>
                    <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">Solusi Logistik Komprehensif</h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Kami menyediakan berbagai pilihan layanan sewa armada dan distribusi untuk memenuhi kebutuhan spesifik bisnis Anda.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((svc, i) => (
                        <div
                            key={i}
                            className="group bg-background-light rounded-2xl p-8 transition-all duration-300 hover:shadow-xl border border-transparent hover:border-primary/20 relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="relative z-10">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                                    <span className="material-icons text-3xl">{svc.icon}</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{svc.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{svc.desc}</p>
                                <a className="inline-flex items-center text-primary font-semibold hover:text-primary/80 transition-colors group-hover:translate-x-1 duration-300" href="#">
                                    Selengkapnya
                                    <span className="material-icons ml-1 text-sm">arrow_forward</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
