import { daftarProyek } from "./app.js";

const wadah = document.querySelector("#daftar");
const pesanKosong = document.querySelector("#pesan-kosong");

function buatKartu(proyek) {
    const kartu = document.createElement("li");

    kartu.classList.add("kartu");
    kartu.textContent = proyek.judul;

    return kartu;
}

function render(daftar) {
    wadah.replaceChildren();

    if (daftar.length === 0) {
        pesanKosong.hidden = false;
        return;
    }

    pesanKosong.hidden = true;

    daftar.forEach((proyek) => {
        wadah.append(buatKartu(proyek));
    });
}

function tandaiTombolAktif(tombolAktif) {
    document.querySelectorAll("#filter button").forEach((tombol) => {
        tombol.classList.toggle("aktif", tombol === tombolAktif);
    });
}

render(daftarProyek);

const barisFilter = document.querySelector("#filter");

barisFilter.addEventListener("click", (event) => {
    const tombol = event.target.closest("button");

    if (!tombol) {
        return;
    }

    const kategori = tombol.dataset.kategori;

    const terpilih = daftarProyek.filter((proyek) => {
        return kategori === "semua" || proyek.kategori === kategori;
    });

    render(terpilih);
    tandaiTombolAktif(tombol);
});


const formGame = document.querySelector("#form-game");

const inputNama = document.querySelector("#nama-game");
const inputGenre = document.querySelector("#genre");
const inputPlatform = document.querySelector("#platform");

const galatNama = document.querySelector("#galat-nama-game");
const galatGenre = document.querySelector("#galat-genre");
const galatPlatform = document.querySelector("#galat-platform");

formGame.addEventListener("submit", (event) => {
    event.preventDefault();

    let valid = true;

    if (inputNama.value.trim() === "") {
        galatNama.textContent = "Nama game wajib diisi.";
        valid = false;
    } else {
        galatNama.textContent = "";
    }

    if (inputGenre.value.trim() === "") {
        galatGenre.textContent = "Genre wajib diisi.";
        valid = false;
    } else {
        galatGenre.textContent = "";
    }

    if (inputPlatform.value.trim() === "") {
        galatPlatform.textContent = "Platform wajib diisi.";
        valid = false;
    } else {
        galatPlatform.textContent = "";
    }

    if (valid) {
        alert("Semua kolom sudah terisi dengan benar!");
        formGame.reset();
    }
});
