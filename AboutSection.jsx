export default function AboutSection() {
    return (
        <section className="py-20 lg:py-28 overflow-hidden relative">
            {/* Decorative background elements */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left: Image */}
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-primary/5 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-500" />
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                alt="Warehouse logistics team working"
                                className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD8PNxOfo3CcCDqEU98QtXlljRzAAVtsrOLLRLwPa4PZQFgCZOqqKGtM3AErsqI4RaKkeT1foLjzYXofG1sJSzpPN97Mli6ZgZyq9BBVQpmYbKk7poYmtg03kkFdNdf99XPzvzjQ8wvh-XghXhvN1BgzNbOmlGB3Zw_T1DHiXjQQNDe5Fu7ru35ZxdfuwddABJZDJ6IBK94ITa6cFuQjXwuvGVY3zqyKxrA0fAr9TNQUOZJPrN5rNzDbmPLkDCRowRlLJfZgOjWAaQ"
                            />
                            {/* Floating Stat Card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <span className="material-icons">verified_user</span>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Kepercayaan Pelanggan</p>
                                    <p className="text-lg font-bold text-slate-900">98% Kepuasan Klien</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary" />
                            Tentang Kami
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6">
                            Solusi Tepat Mitra Usaha Anda
                        </h2>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            PT. Niaga Trans Sentosa atau lebih dikenal NTS Logistics adalah perusahaan yang bergerak dibidang jasa transportasi angkutan barang, yang akan memberikan solusi untuk kebutuhan pengiriman perusahaan Anda dengan harga kompetitif dan layanan yang prima. Area layanan kami seluruh wilayah Indonesia.
                        </p>

                        <div className="space-y-4">
                            {features.map((feat, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary text-white flex items-center justify-center">
                                        <span className="material-icons text-lg">{feat.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900">{feat.title}</h4>
                                        <p className="text-sm text-slate-500 mt-1">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Company Information */}
                <div className="mt-20">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="text-primary font-semibold tracking-wider uppercase text-sm">Informasi Perusahaan</span>
                        <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900">PT. Niaga Trans Sentosa</h2>
                    </div>
                    <div className="max-w-4xl mx-auto space-y-6 text-slate-600 leading-relaxed text-lg">
                        <p>
                            Adalah sebuah perusahaan yang bergerak dalam layanan jasa transportasi serta pengiriman barang yang terintegrasi dengan menggunakan kombinasi moda angkutan darat. Dengan tujuan membantu kelancaran usaha para pelaku bisnis baik perusahaan maupun perseorangan secara efektif dan efisien, setiap layanan yang disediakan NTS Logistics dikemas dalam satu konsep pusat layanan sehingga tidak hanya memberikan kemudahan tetapi juga mampu memberikan pelayanan yang dapat meningkatkan supply chain.
                        </p>
                        <p>
                            Latar belakang perusahaan berdiri dari gabungan profesional yang handal, didukung dengan segenap mitra kerja dan sumber daya manusia yang terlatih dan teruji menempatkan NTS Logistics sebagai perusahaan penyedia layanan jasa transportasi yang lengkap, handal dan terpercaya.
                        </p>
                        <p>
                            NTS Logistics merupakan perusahaan yang beroperasi secara mandiri. Kecepatan, ketepatan dan keamanan barang sampai di tempat tujuan adalah prioritas kami.
                        </p>

                        {/* Office Addresses */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-icons">business</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-base">MAIN OFFICE</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Jalan Kinibalu 53 Surabaya 60252
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                                        <span className="material-icons">location_city</span>
                                    </div>
                                    <h4 className="font-bold text-slate-900 text-base">BRANCH OFFICE</h4>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Karang Gondang RT 001/RW 001 Kelurahan Pucang Sari, Kecamatan Purwosari Kabupaten Pasuruan Jawa Timur 67162
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Vision & Mission Cards */}
                <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <VisionCard
                        icon="visibility"
                        title="Visi Perusahaan"
                        text='"Menjadi Perusahaan Jasa Transportasi Yang Handal, Profesional dan Terpercaya"'
                    />
                    <VisionCard
                        icon="flag"
                        title="Misi Perusahaan"
                    >
                        <ul className="text-slate-600 leading-relaxed space-y-2">
                            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span>Memberikan pelayanan dan komitmen serta menawarkan hasil terbaik sesuai dengan keinginan pelanggan.</li>
                            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span>Menjalankan kepercayaan yang diberikan pelanggan dalam proses pengiriman.</li>
                            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span>Meningkatkan profesionalisme sumber daya manusia dalam setiap bekerja.</li>
                            <li className="flex items-start gap-2"><span className="text-primary font-bold mt-0.5">•</span>Melaksanakan usaha dengan berpandangan pada nilai-nilai etika bisnis.</li>
                        </ul>
                    </VisionCard>
                </div>
            </div>
        </section>
    );
}

const features = [
    { icon: 'schedule', title: 'Pengiriman Tepat Waktu', desc: 'Jaminan ketepatan waktu untuk menjaga kelancaran rantai pasok bisnis Anda.' },
    { icon: 'local_shipping', title: 'Armada Terawat & Modern', desc: 'Kendaraan yang rutin diservis untuk performa maksimal di segala medan.' },
    { icon: 'badge', title: 'Supir Profesional & Berpengalaman', desc: 'Tim pengemudi terlatih dengan standar keselamatan tinggi.' },
];

function VisionCard({ icon, title, text, children }) {
    return (
        <div className="group relative bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:border-primary/30 transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
            <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                    <span className="material-icons text-2xl">{icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{title}</h3>
                {text && <p className="text-slate-600 leading-relaxed">{text}</p>}
                {children}
            </div>
        </div>
    );
}
