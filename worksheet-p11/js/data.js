export const profil = {
    nama: "Ghifari Putra Pratama",
    peran: "Mahasiswa Informatika yang menyukai game",
    tentang:
        "Saya menyukai berbagai game seperti EA Sports FC 26, MotoGP, dan GTA V.",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3
};

export const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true,
        kategori: "web"
    },
    {
        judul: "Koleksi Game Favorit",
        tahun: 2026,
        selesai: true,
        kategori: "data"
    },
    {
        judul: "Login Mobile",
        tahun: 2026,
        selesai: false,
        kategori: "web"
    }
];

export const daftarGameAwal = [
    {
        nama: "EA Sports FC 26",
        genre: "Sports",
        platform: "PC",
        selesai: true
    },
    {
        nama: "MotoGP",
        genre: "Racing",
        platform: "PC",
        selesai: true
    },
    {
        nama: "GTA V",
        genre: "Action",
        platform: "PC",
        selesai: true
    }
];

export function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

export function formatKeahlian(daftar) {
    return daftar.join(" · ");
}
