const clients = [
    'PT. Tiki Jalur Nugraha Ekakurir JNE',
    'PT. MODENA Logistics Indonesia',
    'PT. Kerio Ferida Jaya',
    'PT. Duta Lintas Nusa Surabaya',
    'PT. Lintas Sarana Nusantara',
    'PT. Antar Global Prospero',
    'PT. KSM Sejahtera Abadi',
    'PT. ENSEVAL Putera Megatrading Tbk',
    'PT. MARITIM KARKASA SAMUDRA',
    'PT. INTIM HARMONIS FOOD',
    'PT. REPUBLIC EXPRESS',
    'PT. ONE SEIL LOGISTICS - MIXUE',
    'PT. LX PANTOS INDONESIA - PERTAMINA',
    'PT. NAMASINDO PLAS ABADI',
    'PT. SAHABAT MITRA SEJATI',
    'PT. HM SAMPOERNA',
    'PT. KRONO LOGISTIK INDONESIA KLI - SHOPEE',
    'PT. ARSY LOGISTIC INTERMODA - SHOPEE',
    'PT. PBI - SHOPEE',
    'PT. LINTHAZ TIGA JAYA - SHOPEE',
    'PT. SERYU - SHOPEE',
    'PT. PANORAMA LINTAS NUSANTARA - SHOPEE',
];

export default function ClientsCarousel() {
    return (
        <section className="clients-section">
            <div className="clients-container">
                {/* Header */}
                <div className="clients-header">
                    <span className="clients-badge">Mitra Kami</span>
                    <h2 className="clients-title">
                        Dipercaya Oleh Perusahaan Terkemuka
                    </h2>
                    <p className="clients-subtitle">
                        Kami bangga telah menjadi mitra logistik terpercaya bagi berbagai perusahaan besar di Indonesia.
                    </p>
                </div>

                {/* Table */}
                <div className="clients-table-wrapper">
                    <table className="clients-table">
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Nama Perusahaan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clients.map((client, index) => (
                                <tr key={index}>
                                    <td className="clients-table-num">{index + 1}</td>
                                    <td className="clients-table-name">
                                        <div className="clients-name-inner">
                                            <span className="clients-icon">🏢</span>
                                            {client}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Bottom stat */}
                <div className="clients-bottom">
                    <div className="clients-stat">
                        <span className="clients-stat-number">{clients.length}+</span>
                        <span className="clients-stat-label">Perusahaan Mitra</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
