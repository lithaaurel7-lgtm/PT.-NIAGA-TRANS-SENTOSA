import { Link } from 'react-router-dom';

export default function ContactFooter() {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8 border-t border-white/10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 opacity-5 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2 blur-2xl pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Brand */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-3 mb-4">
                            <img src="/logo-nts.png" alt="NTS Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold tracking-tight text-white">Niaga Trans Sentosa</span>
                        </div>
                        <p className="text-slate-300 text-sm leading-relaxed">
                            Mitra logistik terpercaya Anda untuk pengiriman kargo yang aman, cepat, dan efisien ke seluruh Indonesia. Mengutamakan kepuasan pelanggan sejak 2010.
                        </p>

                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Tautan Cepat</h4>
                        <ul className="space-y-3">
                            <li><Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" to="/">Beranda</Link></li>
                            <li><Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" to="/kontak">Layanan Kami</Link></li>
                            <li><Link className="text-slate-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block" to="/tentang-kami">Tentang Perusahaan</Link></li>
                        </ul>
                    </div>



                    {/* WhatsApp CTA */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Butuh Bantuan?</h4>
                        <p className="text-slate-300 text-sm mb-4">Tim support kami siap membantu Anda 24/7 melalui WhatsApp.</p>
                        <a className="inline-flex items-center justify-center w-full px-4 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white font-medium transition duration-200 group" href="https://wa.me/6285730451541" target="_blank" rel="noopener noreferrer">
                            <svg className="w-5 h-5 mr-2 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                            </svg>
                            Hubungi via WhatsApp
                        </a>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">
                        © 2023 PT Niaga Trans Sentosa. All rights reserved.
                    </p>
                    <div className="flex space-x-6 text-sm">
                        <a className="text-slate-400 hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-400 hover:text-white transition-colors" href="#">Terms of Service</a>
                        <a className="text-slate-400 hover:text-white transition-colors" href="#">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
