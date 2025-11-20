// Data Struktur Organisasi dalam format JSON (sama seperti respons sebelumnya)
const organizationData = [
    {
        "id": "1",
        "jabatan": "Direktur Utama",
        "tugas": [
            "Mengawasi seluruh kegiatan perusahaan.",
            "Menetapkan kebijakan strategis dan arah pengembangan perusahaan.",
            "Mengambil keputusan penting lintas departemen.",
            "Menjamin kepatuhan terhadap regulasi farmasi & BPOM."
        ]
    },
    {
        "id": "2",
        "jabatan": "HRD Manager",
        "tugas": [
            "Mengelola rekrutmen, seleksi, dan penempatan karyawan.",
            "Mengatur pelatihan (GMP, K3, SOP baru).",
            "Mengawasi administrasi kepegawaian, kontrak, penilaian kinerja.",
            "Menangani hubungan industrial dan kedisiplinan karyawan."
        ]
    },
    {
        "id": "3",
        "jabatan": "Finance Manager",
        "tugas": [
            "Menyusun dan mengawasi anggaran perusahaan.",
            "Mengatur arus kas, pengeluaran, dan laporan keuangan.",
            "Memastikan pembayaran pemasok, pajak, dan kepatuhan finansial.",
            "Menganalisis efisiensi keuangan."
        ]
    },
    {
        "id": "4",
        "jabatan": "Plant Manager",
        "tugas": [
            "Mengawasi seluruh kegiatan operasional pabrik.",
            "Memastikan fasilitas produksi dan utilitas bekerja optimal.",
            "Menjamin kepatuhan terhadap GMP dan keamanan kerja.",
            "Koordinasi lintas departemen produksi, teknik, QC, dan gudang."
        ]
    },
    {
        "id": "5",
        "jabatan": "Production Manager",
        "tugas": [
            "Mengatur proses produksi semua lini (steril, non-steril, beta laktam, packaging).",
            "Menyusun jadwal produksi dan memastikan output sesuai rencana.",
            "Mengawasi penggunaan bahan baku dan efisiensi mesin.",
            "Menjamin produk diproduksi sesuai SOP & CPOB."
        ],
        "sub_departemen": [
            {"jabatan": "Sterile Production Supervisor", "tugas": ["Mengawasi pembuatan produk steril (injeksi, tetes mata, dll).", "Memastikan aseptik area & laminar airflow sesuai standar.", "Monitoring lingkungan area steril."]},
            {"jabatan": "Non-Sterile Production Supervisor", "tugas": ["Mengawasi proses produksi non-steril (tablet, sirup, kapsul).", "Menjamin ketersediaan mesin dan personel."]},
            {"jabatan": "Beta Lactam Production Supervisor", "tugas": ["Memastikan produksi area beta-laktam memenuhi segregasi.", "Meminimalkan risiko kontaminasi silang."]},
            {"jabatan": "Packaging Production Supervisor", "tugas": ["Mengawasi proses pengemasan primer & sekunder.", "Memastikan label, batch number, dan kemasan akurat."]}
        ]
    },
    {
        "id": "6",
        "jabatan": "GC Lab Manager (Quality Control)",
        "tugas": [
            "Mengawasi seluruh pengujian kimia, mikrobiologi, dan stabilitas.",
            "Menyetujui hasil analisis sebelum produk dilepas.",
            "Memastikan lab memenuhi persyaratan CPOB & kalibrasi."
        ],
        "sub_departemen": [
            {"jabatan": "Lab Sterile/Non-Sterile Supervisor", "tugas": ["Mengatur pengujian produk steril & non-steril sesuai SOP QC."]},
            {"jabatan": "Beta Laktam Sterile Supervisor", "tugas": ["Memastikan pengujian khusus beta-laktam dilakukan pada area terpisah."]},
            {"jabatan": "Mikrobiologi", "tugas": ["Melakukan uji cemaran mikroba, endotoksin, sterilitas.", "Monitoring lingkungan (EM) area produksi."]},
            {"jabatan": "IPC Supervisor (In Process Control)", "tugas": ["Mengawasi parameter mutu selama proses produksi berlangsung.", "Memastikan tiap batch sesuai spesifikasi sebelum lanjut ke proses berikutnya."]}
        ]
    },
    {
        "id": "7",
        "jabatan": "PPIC Manager (Production Planning & Inventory Control)",
        "tugas": [
            "Membuat jadwal produksi berdasarkan forecast & ketersediaan bahan.",
            "Mengatur stok bahan baku, BTP, bahan kemas, dan barang jadi.",
            "Koordinasi dengan produksi, gudang, dan marketing.",
            "Mengontrol persediaan agar tidak overstock/shortage."
        ],
        "sub_departemen": [
            {"jabatan": "Internal Auditor", "tugas": ["Melakukan audit internal GMP, SOP, dan dokumen.", "Mengidentifikasi ketidaksesuaian dan membuat rekomendasi perbaikan."]}
        ]
    },
    {
        "id": "8",
        "jabatan": "QA Manager (Quality Assurance)",
        "tugas": [
            "Menjamin sistem mutu berjalan (CPOB, CAPA, change control).",
            "Approve dokumen batch record, SOP, dan release produk.",
            "Investigasi deviasi & keluhan produk."
        ],
        "sub_departemen": [
            {"jabatan": "Validation Officer", "tugas": ["Melakukan validasi proses, peralatan, pembersihan, HVAC.", "Menyusun laporan verifikasi & revalidasi."]},
            {"jabatan": "Product Stability", "tugas": ["Mengatur program uji stabilitas accelerated & long-term.", "Menyusun laporan stabilitas untuk BPOM."]}
        ]
    },
    {
        "id": "9",
        "jabatan": "Marketing Manager",
        "tugas": [
            "Menyusun strategi pemasaran produk.",
            "Melakukan riset pasar & promosi.",
            "Menjaga hubungan dengan distributor & pelanggan.",
            "Membuat forecast permintaan untuk PPIC."
        ]
    },
    {
        "id": "10",
        "jabatan": "Technical Manager",
        "tugas": [
            "Mengawasi peralatan, utilitas, mechanical engineering.",
            "Maintenance preventif & corrective mesin produksi.",
            "Mengelola kalibrasi alat produksi & utilities (HVAC, boiler, dll)."
        ]
    },
    {
        "id": "11",
        "jabatan": "RnD Manager (Research & Development)",
        "tugas": [
            "Mengembangkan produk baru dan perbaikan formula.",
            "Menyusun protokol uji coba dan pilot scale.",
            "Menyusun dokumen teknis untuk registrasi."
        ],
        "sub_departemen": [
            {"jabatan": "RnD (Current Product)", "tugas": ["Melakukan penyempurnaan formula produk eksisting."]},
            {"jabatan": "RnD (New Development)", "tugas": ["Mengembangkan formula produk baru."]},
            {"jabatan": "Packaging Development", "tugas": ["Mendesain kemasan & spesifikasi bahan kemas."]},
            {"jabatan": "Registration Officer", "tugas": ["Mengurus dokumen registrasi ke BPOM.", "Menyusun e-CTD, dossier, dan komunikasi regulatori."]}
        ]
    },
   
];

function generateDepartmentCard(dept) {
    let tasksHtml = dept.tugas.map(tugas => `<li>${tugas}</li>`).join('');
    
    let subDeptHtml = '';
    if (dept.sub_departemen && dept.sub_departemen.length > 0) {
        subDeptHtml = '<div class="sub-department-list">';
        dept.sub_departemen.forEach(sub => {
            let subTasks = sub.tugas.map(t => `<li>${t}</li>`).join('');
            subDeptHtml += `
                <div>
                    <strong>${sub.jabatan}</strong>
                    <ul>${subTasks}</ul>
                </div>
            `;
        });
        subDeptHtml += '</div>';
    }

    return `
        <div class="department-card">
            <span class="card-number">${dept.id}</span>
            <h3>${dept.jabatan}</h3>
            <ul>
                ${tasksHtml}
            </ul>
            ${subDeptHtml}
        </div>
    `;
}

// Fungsi utama untuk menampilkan semua data
document.addEventListener('DOMContentLoaded', () => {
    const departmentList = document.getElementById('department-list');
    
    let allCardsHtml = '';
    organizationData.forEach(dept => {
        allCardsHtml += generateDepartmentCard(dept);
    });

    departmentList.innerHTML = allCardsHtml;
});