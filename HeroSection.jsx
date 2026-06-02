export default function HeroSection() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
            {/* Abstract Background Decoration */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none bg-grid-pattern" />
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="lg:col-span-6 text-center lg:text-left mb-12 lg:mb-0">
                        {/* Badge */}
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-semibold mb-6 border border-secondary/20">
                            <span className="flex h-2 w-2 rounded-full bg-secondary mr-2" />
                            Partner Logistik #1 di Indonesia
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-navy leading-tight mb-6">
                            DELIVERY ON TIME & <br />
                            <span className="text-gradient">PERFECT CONDITIONS</span>
                        </h1>

                        {/* Description */}
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                            Pengiriman aman, tepat waktu, dan transparan ke seluruh Indonesia.
                            Kami mengoptimalkan rantai pasok Anda dengan armada modern dan
                            teknologi tracking realtime.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                className="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-semibold rounded-lg text-white bg-primary hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 transform hover:-translate-y-1"
                                href="#"
                            >
                                Minta Penawaran
                                <span className="material-icons ml-2 text-sm">
                                    arrow_forward
                                </span>
                            </a>
                        </div>


                    </div>

                    {/* Right Content (Image) */}
                    <div className="lg:col-span-6 relative">
                        {/* Decorative Elements behind image */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full blur-xl z-0" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-xl z-0" />

                        {/* Main Image Container */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-primary/10 border-4 border-white z-10 group">
                            <img
                                alt="Modern logistics truck on highway"
                                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOHAPgHQd-lUFLaiYnx1qU4-8-FxQ_bGl9S_q0Yd1kDjEaNJAJd7Wi-qy7wAn1C-xSLjI3rxPO721ISZmXKb0ZeaXpNDLXhhAW3SDQzWbNvQ1PP_lMnx0TPx7rx0-wCn7v_T1rmMTm2rM-2vFTO3GIXASsqIWlNYLenDos8ZbjcStLj3zeHWbV1Ejd1PD3Kje9t3EncGXdl9NABbnrHKInT2IDCzp3RLaLKunHqJ0y2IFPltFDFok265XjHVcS9LCIXcP2qBxB5tc"
                            />


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
