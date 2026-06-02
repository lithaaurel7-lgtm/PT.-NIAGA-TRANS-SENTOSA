import { Link } from 'react-router-dom';

export default function FleetFooter() {
    return (
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src="/logo-nts.png" alt="NTS Logo" className="h-10 w-auto" />
                            <span className="text-xl font-bold text-slate-900">Niaga Trans</span>
                        </div>
                        <p className="text-slate-500 text-sm leading-relaxed mb-6">
                            Partner logistik terpercaya di Indonesia. Melayani pengiriman barang ke seluruh pelosok negeri dengan armada prima.
                        </p>
                        <div className="flex space-x-4">
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        clipRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a className="text-slate-400 hover:text-primary transition-colors" href="#">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        clipRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.944 2.013 9.284 2 11.714 2h.601zM12 7a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm5.25-3.5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"
                                        fillRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Layanan */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Layanan
                        </h3>
                        <ul className="space-y-3">
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Sewa Truk</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Distribusi Retail</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Pindahan Kantor</a></li>
                            <li><a className="text-slate-500 hover:text-primary text-sm transition-colors" href="#">Project Cargo</a></li>
                        </ul>
                    </div>

                    {/* Perusahaan */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Perusahaan
                        </h3>
                        <ul className="space-y-3">
                            <li><Link className="text-slate-500 hover:text-primary text-sm transition-colors" to="/tentang-kami">Tentang Kami</Link></li>
                        </ul>
                    </div>

                    {/* Hubungi Kami */}
                    <div>
                        <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                            Hubungi Kami
                        </h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-sm text-slate-500">
                                <span className="material-icons text-primary text-sm mr-2 mt-0.5">place</span>
                                7P7H+MQX, Unnamed Road, Karanggondang, Pucangsari, Kec. Purwosari, Pasuruan, Jawa Timur 67162
                            </li>
                            <li className="flex items-center text-sm text-slate-500">
                                <span className="material-icons text-primary text-sm mr-2">phone</span>
                                (0343) 6754873
                            </li>
                            <li className="flex items-center text-sm text-slate-500">
                                <span className="material-icons text-primary text-sm mr-2">email</span>
                                adm.niagatrans@gmail.com
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-slate-400 text-sm mb-4 md:mb-0">
                        © 2023 PT Niaga Trans Sentosa. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Privacy Policy</a>
                        <a className="text-slate-400 hover:text-primary text-sm transition-colors" href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
