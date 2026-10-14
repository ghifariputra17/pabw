import { ambilNotisia } from "./api.js";

// ==========================================
// P10 - Fetch, JSON, dan Asynchronous JavaScript
// GHIFARI PUTRA PRATAMA
// NIM: 25523186
// ==========================================
// ==========================================

// B. DATA PROFIL
// ==========================================

const profil = {
    nama: "Ghifari Putra Pratama",
    peran: "Mahasiswa Informatika yang menyukai game",
    tentang:
        "Saya menyukai berbagai game seperti EA Sports FC 26, MotoGP, dan GTA V.",
    keahlian: ["HTML", "CSS", "JavaScript"],
    jumlahProyek: 3
};

const kalimatProfil =
    `Nama saya ${profil.nama}, dan saya memiliki ${profil.jumlahProyek} proyek web.`;

console.log(kalimatProfil);

console.log("Tipe nama:", typeof profil.nama);
console.log("Tipe jumlah proyek:", typeof profil.jumlahProyek);

const namaPanggilan = profil.namaPanggilan ?? profil.nama;

console.log("Nama yang digunakan:", namaPanggilan);

console.log(
    "Alamat:",
    profil.alamat?.kota ?? "Alamat belum tersedia"
);


// ==========================================
// C. PURE FUNCTIONS
// ==========================================

function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

console.log("Tes fungsi 1:");

console.log(
    buatPerkenalan({
        nama: "Ghifari",
        peran: "Mahasiswa"
    })
);

console.log(
    buatPerkenalan({
        nama: "Budi",
        peran: "Programmer"
    })
);

console.log(
    buatPerkenalan({
        nama: "Andi",
        peran: "Web Developer"
    })
);

console.log("Tes fungsi 2:");

console.log(
    formatKeahlian(["HTML", "CSS", "JavaScript"])
);

console.log(
    formatKeahlian(["Java", "JavaFX"])
);

console.log(
    formatKeahlian(["Flutter", "Dart"])
);


// ==========================================
// D. DATA STRUCTURE
// ==========================================

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

const daftarGame = [
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


// ==========================================
// ARRAY METHOD: MAP
// ==========================================

const namaGame = daftarGame.map((game) => {
    return game.nama;
});

console.log("Hasil map pada daftarGame:");
console.table(namaGame);

const judulProyek = daftarProyek.map((proyek) => {
    return proyek.judul;
});

console.log("Hasil map pada daftarProyek:");
console.table(judulProyek);


// ==========================================
// ARRAY METHOD: FILTER
// ==========================================

const gamePC = daftarGame.filter((game) => {
    return game.platform === "PC";
});

console.log("Game platform PC:");
console.table(gamePC);

const proyekSelesai = daftarProyek.filter((proyek) => {
    return proyek.selesai === true;
});

console.log("Proyek yang sudah selesai:");
console.table(proyekSelesai);


// ==========================================
// ARRAY METHOD: FIND
// ==========================================

const gamePilihan = daftarGame.find((game) => {
    return game.nama === "GTA V";
});

console.log("Game yang ditemukan:");
console.log(gamePilihan);

const proyekLogin = daftarProyek.find((proyek) => {
    return proyek.judul === "Login Mobile";
});

console.log("Proyek yang ditemukan:");
console.log(proyekLogin);


// ==========================================
// SORT TANPA MENGUBAH DATA ASLI
// ==========================================

const proyekTerurut = [...daftarProyek].sort((a, b) => {
    return a.judul.localeCompare(b.judul);
});

console.log("Daftar proyek setelah diurutkan:");
console.table(proyekTerurut);

console.log("Daftar proyek asli setelah sort:");
console.table(daftarProyek);


// ==========================================
// SPREAD OPERATOR
// ==========================================

const salinanProfil = { ...profil };

console.log("Salinan profil menggunakan spread:");
console.log(salinanProfil);


// ==========================================
// DATA TABLE
// ==========================================

console.log("Daftar game:");
console.table(daftarGame);

console.log("Daftar proyek:");
console.table(daftarProyek);

console.log("Keahlian:");
console.table(profil.keahlian);


// ==========================================
// MENAMPILKAN DATA KE HTML
// ==========================================

const judulHalaman =
    document.querySelector("#judul-halaman");

const judulKoleksi =
    document.querySelector("#judul-koleksi");

const deskripsiKoleksi =
    document.querySelector("#deskripsi-koleksi");

const tentangSaya =
    document.querySelector("#tentang-saya");

const daftarGameElement =
    document.querySelector("#daftar-game");


// ==========================================
// RENDER PROFIL
// ==========================================

judulHalaman.textContent =
    "Koleksi Game Favorit";

judulKoleksi.textContent =
    "Koleksi Game Favorit";

deskripsiKoleksi.textContent =
    "Berikut adalah beberapa game yang saya sukai dan sering dimainkan.";

tentangSaya.textContent =
    profil.tentang;


// ==========================================
// RENDER GAME
// ==========================================

daftarGameElement.innerHTML = daftarGame
    .map((game) => {
        return `
            <tr>
                <th scope="row">${game.nama}</th>
                <td>${game.genre}</td>
                <td>${game.platform}</td>
            </tr>
        `;
    })
    .join("");


// ==========================================
// RENDER NAMA SLIDESHOW
// ==========================================

const namaSlide =
    document.querySelectorAll(".nama-slide");

daftarGame.forEach((game, index) => {
    if (namaSlide[index]) {
        namaSlide[index].textContent =
            game.nama;
    }
});


// ==========================================
// SELESAI
// ==========================================

console.log(
    "JavaScript P10 berhasil dijalankan!"
);

console.log(
    "Nama:",
    profil.nama
);

console.log(
    "Keahlian:",
    formatKeahlian(profil.keahlian)
);

console.log(
    "Jumlah proyek:",
    profil.jumlahProyek
);

// ==========================================
// P10 - FETCH, JSON, DAN EMPAT KEADAAN UI
// ==========================================

const statusNotisia = document.querySelector("#status-notisia");
const daftarNotisia = document.querySelector("#daftar-notisia");

// Fungsi tampilan hanya membuat elemen DOM; data diisi sebagai teks aman.
function gambarNotisia(daftar) {
    daftarNotisia.replaceChildren();

    daftar.forEach((notisia) => {
        const kartu = document.createElement("article");
        kartu.classList.add("kartu", "kartu-notisia");

        const judul = document.createElement("h3");
        judul.textContent = notisia.title;

        const isi = document.createElement("p");
        isi.textContent = notisia.body;

        const metadata = document.createElement("p");
        metadata.classList.add("metadata-notisia");
        const tags = Array.isArray(notisia.tags) ? notisia.tags.join(" · ") : "Tanpa tag";
        metadata.textContent = `Tag: ${tags} | Dilihat: ${notisia.views ?? 0}`;

        kartu.append(judul, isi, metadata);
        daftarNotisia.append(kartu);
    });
}

async function tampilkanNotisia() {
    // Keadaan 1: memuat.
    statusNotisia.hidden = false;
    statusNotisia.textContent = "Memuat artikel dari API...";
    daftarNotisia.replaceChildren();

    try {
        await new Promise(resolve => setTimeout(resolve, 3000));
        const daftar = await ambilNotisia();
        
        // Keadaan 4: respons sah tetapi tidak memiliki butir.
        if (daftar.length === 0) {
            statusNotisia.textContent = "Belum ada artikel untuk ditampilkan.";
            return;
        }

        // Keadaan 2: berhasil.
        gambarNotisia(daftar);
        statusNotisia.textContent = `Berhasil memuat ${daftar.length} artikel.`;
    } catch (galat) {
        // Keadaan 3: gagal. Pesan ditampilkan pada halaman, bukan hanya Console.
        statusNotisia.textContent =
            `Gagal memuat artikel: ${galat.message}. Periksa koneksi internet lalu muat ulang halaman.`;
        daftarNotisia.replaceChildren();
    }
}

tampilkanNotisia();
