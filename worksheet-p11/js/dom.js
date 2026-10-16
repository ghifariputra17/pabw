
import { profil } from "./data.js";

const judulHalaman = document.querySelector("#judul-halaman");
const judulKoleksi = document.querySelector("#judul-koleksi");
const deskripsiKoleksi = document.querySelector("#deskripsi-koleksi");
const tentangSaya = document.querySelector("#tentang-saya");
const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");
const daftarGameElement = document.querySelector("#daftar-game");

// Menampilkan informasi profil
export function renderProfil() {
    if (judulHalaman) {
        judulHalaman.textContent = "Koleksi Game Favorit";
    }

    if (judulKoleksi) {
        judulKoleksi.textContent = "Koleksi Game Favorit";
    }

    if (deskripsiKoleksi) {
        deskripsiKoleksi.textContent =
            "Berikut adalah beberapa game yang saya sukai dan sering dimainkan.";
    }

    if (tentangSaya) {
        tentangSaya.textContent = profil.tentang;
    }
}

// Menampilkan daftar proyek sesuai kategori
export function render(state) {
    if (!wadah || !pesanKosong) return;

    wadah.replaceChildren();

    const daftarTampil =
        state.kategori === "semua"
            ? state.daftarProyek
            : state.daftarProyek.filter(
                  (proyek) => proyek.kategori === state.kategori
              );

    if (daftarTampil.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    daftarTampil.forEach((proyek) => {
        const kartu = document.createElement("li");
        kartu.classList.add("kartu");
        kartu.textContent = proyek.judul;
        wadah.append(kartu);
    });
}

// Menampilkan tabel game dan judul slideshow
export function renderDaftarGame(state) {
    if (!daftarGameElement) return;

    daftarGameElement.replaceChildren();

    state.daftarGame.forEach((game) => {
        const baris = document.createElement("tr");

        const nama = document.createElement("th");
        nama.scope = "row";
        nama.textContent = game.nama;

        const genre = document.createElement("td");
        genre.textContent = game.genre;

        const platform = document.createElement("td");
        platform.textContent = game.platform;

        baris.append(nama, genre, platform);
        daftarGameElement.append(baris);
    });

    document.querySelectorAll(".nama-slide").forEach((elemen, index) => {
        elemen.textContent = state.daftarGame[index]?.nama ?? "";
    });
}

// Menandai tombol kategori yang aktif
export function tandaiTombolAktif(kategoriAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        const aktif = tombol.dataset.kategori === kategoriAktif;

        tombol.classList.toggle("aktif", aktif);
        tombol.setAttribute("aria-pressed", String(aktif));
    });
}

// Memperbarui seluruh tampilan
export function renderSemua(state) {
    renderProfil();
    render(state);
    renderDaftarGame(state);
    tandaiTombolAktif(state.kategori);
}
