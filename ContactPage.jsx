export default function ContactPage() {
    return (
        <>
            {/* Contact Section */}
            <section className="py-16 lg:py-24 relative overflow-hidden">
                {/* Background Decor */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    {/* Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide uppercase mb-3">
                            Hubungi Kami
                        </span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                            Solusi Logistik Terpercaya untuk Bisnis Anda
                        </h2>
                        <p className="text-slate-600 text-lg">
                            Dapatkan penawaran terbaik untuk pengiriman kargo Anda. Isi formulir di bawah ini dan tim kami akan segera menghubungi Anda.
                        </p>
                    </div>

                    <div className="max-w-lg mx-auto">
                        {/* Contact Info Card */}
                        <div className="bg-primary text-white rounded-xl shadow-lg p-6 lg:p-8 relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
                            <h3 className="text-xl font-bold mb-6">Informasi Kontak</h3>
                            <div className="space-y-6 relative z-10">
                                {/* Address */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/20 rounded-lg shrink-0 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white/90">Alamat Kantor</p>
                                        <p className="text-white/70 text-sm leading-relaxed mt-1">7P7H+MQX, Unnamed Road<br />Karanggondang, Pucangsari<br />Kec. Purwosari, Pasuruan<br />Jawa Timur 67162</p>
                                    </div>
                                </div>
                                {/* Phone */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/20 rounded-lg shrink-0 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white/90">Telepon / WhatsApp</p>
                                        <p className="text-white/70 text-sm mt-1">(0343) 6754873</p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/20 rounded-lg shrink-0 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white/90">Email</p>
                                        <p className="text-white/70 text-sm mt-1">adm.niagatrans@gmail.com</p>
                                    </div>
                                </div>
                                {/* Hours */}
                                <div className="flex items-start gap-4">
                                    <div className="p-2 bg-white/20 rounded-lg shrink-0 mt-1">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                                            <path d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="font-semibold text-white/90">Jam Operasional</p>
                                        <p className="text-white/70 text-sm mt-1">Senin - Jumat: 08.00 - 16.30</p>
                                        <p className="text-white/70 text-sm">Sabtu: 08.00 - 13.00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
