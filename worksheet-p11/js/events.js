
import {
    ubahKategori,
    tambahGame,
    resetState
} from "./state.js";

// ==========================================
// P11 - PEMASANGAN EVENT
// ==========================================

export function pasangEvent() {
    const barisFilter = document.querySelector("#filter");
    const formGame = document.querySelector("#form-game");
    const tombolReset = document.querySelector("#reset-state");

    // Event filter kategori proyek.
    if (barisFilter) {
        barisFilter.addEventListener("click", (event) => {
            const tombol = event.target.closest("button[data-kategori]");

            if (!tombol || !barisFilter.contains(tombol)) {
                return;
            }

            ubahKategori(tombol.dataset.kategori);
        });
    }

    // Event tambah game.
    if (formGame) {
        formGame.addEventListener("submit", (event) => {
            event.preventDefault();

            const inputNama = document.querySelector("#nama-game");
            const inputGenre = document.querySelector("#genre");
            const inputPlatform = document.querySelector("#platform");

            const galatNama = document.querySelector("#galat-nama-game");
            const galatGenre = document.querySelector("#galat-genre");
            const galatPlatform = document.querySelector("#galat-platform");

            const nama = inputNama.value.trim();
            const genre = inputGenre.value.trim();
            const platform = inputPlatform.value.trim();

            galatNama.textContent = nama ? "" : "Nama game wajib diisi.";
            galatGenre.textContent = genre ? "" : "Genre wajib diisi.";
            galatPlatform.textContent = platform ? "" : "Platform wajib diisi.";

            if (!nama || !genre || !platform) {
                return;
            }

            tambahGame({
                nama,
                genre,
                platform,
                selesai: false
            });

            formGame.reset();
        });
    }

    // Event tombol atur ulang.
    if (tombolReset) {
        tombolReset.addEventListener("click", () => {
            resetState();
        });
    }
}
