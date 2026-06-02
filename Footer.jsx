export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-2">
                    <img src="/logo-nts.png" alt="NTS Logo" className="h-10 w-auto" />
                    <span className="font-bold text-lg text-slate-900">PT Niaga Trans Sentosa</span>
                </div>
                <p className="text-slate-500 text-sm text-center md:text-right">
                    © 2023 PT Niaga Trans Sentosa. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
