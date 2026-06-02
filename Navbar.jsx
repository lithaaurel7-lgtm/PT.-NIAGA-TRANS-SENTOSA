import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
    { to: '/', label: 'Beranda' },
    { to: '/armada', label: 'Armada' },
    { to: '/tentang-kami', label: 'Tentang Kami' },
    { to: '/kontak', label: 'Kontak' },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
                        <img src="/logo-nts.png" alt="NTS Logo" className="h-10 w-auto" />
                        <div>
                            <span className="block text-lg font-bold text-navy leading-tight">
                                Niaga Trans
                            </span>
                            <span className="block text-xs font-medium text-gray-500 tracking-wider">
                                SENTOSA
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8 items-center">
                        {navLinks.map((link) =>
                            link.to.startsWith('/') ? (
                                <Link
                                    key={link.label}
                                    to={link.to}
                                    className={`font-medium transition-colors ${location.pathname === link.to
                                        ? 'text-primary'
                                        : 'text-gray-600 hover:text-primary'
                                        }`}
                                >
                                    {link.label}
                                </Link>
                            ) : (
                                <a
                                    key={link.label}
                                    href={link.to}
                                    className="text-gray-600 hover:text-primary font-medium transition-colors"
                                >
                                    {link.label}
                                </a>
                            )
                        )}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center">
                        <Link
                            className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                            to="/login"
                        >
                            <span className="material-icons text-sm mr-2">person</span>
                            Login Client
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-gray-500 hover:text-primary focus:outline-none"
                            onClick={() => setMobileOpen(!mobileOpen)}
                        >
                            <span className="material-icons text-3xl">
                                {mobileOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Panel */}
            {mobileOpen && (
                <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 px-4 pb-4 space-y-2">
                    {navLinks.map((link) =>
                        link.to.startsWith('/') ? (
                            <Link
                                key={link.label}
                                to={link.to}
                                onClick={() => setMobileOpen(false)}
                                className={`block py-3 font-medium transition-colors ${location.pathname === link.to
                                    ? 'text-primary'
                                    : 'text-gray-700 hover:text-primary'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        ) : (
                            <a
                                key={link.label}
                                href={link.to}
                                className="block py-3 text-gray-700 hover:text-primary font-medium transition-colors"
                            >
                                {link.label}
                            </a>
                        )
                    )}
                    <Link
                        to="/login"
                        onClick={() => setMobileOpen(false)}
                        className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-lg text-primary bg-primary/10 hover:bg-primary/20 transition-colors mt-2"
                    >
                        <span className="material-icons text-sm mr-2">person</span>
                        Login Client
                    </Link>
                </div>
            )}
        </nav>
    );
}
