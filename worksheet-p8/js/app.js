// ==========================================
// P8 - JavaScript Modern ES6+
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

// Template literal
const kalimatProfil = `Nama saya ${profil.nama}, dan saya memiliki ${profil.jumlahProyek} proyek web.`;

console.log(kalimatProfil);

// typeof
console.log("Tipe nama:", typeof profil.nama);
console.log("Tipe jumlah proyek:", typeof profil.jumlahProyek);

// Nullish coalescing
const namaPanggilan = profil.namaPanggilan ?? profil.nama;

console.log("Nama yang digunakan:", namaPanggilan);

// Optional chaining
console.log(
    "Alamat:",
    profil.alamat?.kota ?? "Alamat belum tersedia"
);


// ==========================================
// C. PURE FUNCTIONS
// ==========================================

// Pure function 1
function buatPerkenalan({ nama, peran }) {
    return `${nama} — ${peran}`;
}

// Pure function 2
const formatKeahlian = (daftar) => {
    return daftar.join(" · ");
};

// Pengujian fungsi
console.log("Tes fungsi 1:");
console.log(buatPerkenalan({
    nama: "Ghifari",
    peran: "Mahasiswa"
}));

console.log(buatPerkenalan({
    nama: "Budi",
    peran: "Programmer"
}));

console.log(buatPerkenalan({
    nama: "Andi",
    peran: "Web Developer"
}));

console.log("Tes fungsi 2:");
console.log(formatKeahlian(["HTML", "CSS", "JavaScript"]));
console.log(formatKeahlian(["Java", "JavaFX"]));
console.log(formatKeahlian(["Flutter", "Dart"]));


// ==========================================
// D. DATA STRUCTURE
// ==========================================

const daftarProyek = [
    {
        judul: "Halaman Profil",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Koleksi Game Favorit",
        tahun: 2026,
        selesai: true
    },
    {
        judul: "Login Mobile",
        tahun: 2026,
        selesai: false
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

console.log("Hasil map:");
console.table(namaGame);


// ==========================================
// ARRAY METHOD: FILTER
// ==========================================

const gamePC = daftarGame.filter((game) => {
    return game.platform === "PC";
});

console.log("Game platform PC:");
console.table(gamePC);


// ==========================================
// ARRAY METHOD: FIND
// ==========================================

const gamePilihan = daftarGame.find((game) => {
    return game.nama === "GTA V";
});

console.log("Game yang ditemukan:");
console.log(gamePilihan);


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

const judulHalaman = document.querySelector("#judul-halaman");
const judulKoleksi = document.querySelector("#judul-koleksi");
const deskripsiKoleksi =
    document.querySelector("#deskripsi-koleksi");
const tentangSaya = document.querySelector("#tentang-saya");
const daftarGameElement =
    document.querySelector("#daftar-game");


// Judul halaman
judulHalaman.textContent = "Koleksi Game Favorit";

// Judul koleksi
judulKoleksi.textContent = "Koleksi Game Favorit";

// Deskripsi
deskripsiKoleksi.textContent =
    "Berikut adalah beberapa game yang saya sukai dan sering dimainkan.";

// Tentang saya
tentangSaya.textContent = profil.tentang;


// ==========================================
// RENDER DATA GAME DENGAN MAP
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
// RENDER NAMA PADA SLIDESHOW
// ==========================================

const namaSlide = document.querySelectorAll(".nama-slide");

daftarGame.forEach((game, index) => {

    if (namaSlide[index]) {
        namaSlide[index].textContent = game.nama;
    }

});


// ==========================================
// PESAN BERHASIL
// ==========================================

console.log("JavaScript P8 berhasil dijalankan!");
console.log("Nama:", profil.nama);
console.log(
    "Keahlian:",
    formatKeahlian(profil.keahlian)
);
console.log(
    "Jumlah proyek:",
    profil.jumlahProyek
);