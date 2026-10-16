import { daftarProyek, daftarGameAwal } from "./data.js";
import { renderSemua } from "./dom.js";

// ==========================================
// P11 - STATE DAN LOCALSTORAGE
// ==========================================

const KUNCI_STORAGE = "pabw-p11";
const VERSI_STATE = 2;

export const state = {
    profil: null,
    daftarProyek,
    kategori: "semua",
    daftarGame: []
};

// Membuat salinan data game bawaan.
function gameBawaan() {
    return daftarGameAwal.map((game) => ({ ...game }));
}

// Membaca simpanan dan menangani data rusak atau versi lama.
function bacaStateAwal() {
    try {
        const tersimpan = localStorage.getItem(KUNCI_STORAGE);

        // Kunjungan pertama: belum ada simpanan.
        if (tersimpan === null) {
            return {
                kategori: "semua",
                daftarGame: gameBawaan()
            };
        }

        const data = JSON.parse(tersimpan);

        // Simpanan rusak bentuknya atau versinya tidak cocok.
        if (
            !data ||
            data.versi !== VERSI_STATE ||
            !["semua", "web", "data"].includes(data.kategori) ||
            !Array.isArray(data.daftarGame)
        ) {
            localStorage.removeItem(KUNCI_STORAGE);

            return {
                kategori: "semua",
                daftarGame: gameBawaan()
            };
        }

        return {
            kategori: data.kategori,
            daftarGame: data.daftarGame
        };
    } catch (error) {
        // JSON rusak atau penyimpanan tidak dapat dibaca.
        try {
            localStorage.removeItem(KUNCI_STORAGE);
        } catch (galatPenyimpanan) {
            console.warn("Simpanan lama tidak dapat dihapus.");
        }

        console.warn(
            "Simpanan tidak valid. Menggunakan data bawaan.",
            error
        );

        return {
            kategori: "semua",
            daftarGame: gameBawaan()
        };
    }
}

// Menyimpan hanya keadaan yang perlu diingat.
function simpanState() {
    try {
        const data = {
            versi: VERSI_STATE,
            kategori: state.kategori,
            daftarGame: state.daftarGame
        };

        localStorage.setItem(
            KUNCI_STORAGE,
            JSON.stringify(data)
        );
    } catch (error) {
        console.warn(
            "State tidak dapat disimpan ke localStorage.",
            error
        );
    }
}

// Memuat state ketika aplikasi dimulai.
export function muatState() {
    const dataAwal = bacaStateAwal();

    state.kategori = dataAwal.kategori;
    state.daftarGame = dataAwal.daftarGame;

    return state;
}

// Semua perubahan kategori melalui fungsi ini.
export function ubahKategori(kategori) {
    if (!["semua", "web", "data"].includes(kategori)) {
        return;
    }

    state.kategori = kategori;
    simpanState();
    renderSemua(state);
}

// Semua penambahan game melalui fungsi ini.
export function tambahGame(game) {
    state.daftarGame.push(game);
    simpanState();
    renderSemua(state);
}

// Menghapus simpanan dan mengembalikan nilai bawaan.
export function resetState() {
    try {
        localStorage.removeItem(KUNCI_STORAGE);
    } catch (error) {
        console.warn("Simpanan tidak dapat dihapus.", error);
    }

    state.kategori = "semua";
    state.daftarGame = gameBawaan();

    renderSemua(state);
}
