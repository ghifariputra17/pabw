
import { muatState, state } from "./state.js";
import { renderSemua } from "./dom.js";
import { pasangEvent } from "./events.js";
import { ambilNotisia } from "./api.js";

// ==========================================
// P11 - MODUL JAVASCRIPT
// ==========================================

// Memuat state dan menjalankan fitur utama P11.
muatState();
renderSemua(state);
pasangEvent();

console.log("P11 - Modul JavaScript berhasil dijalankan!");
console.log("State awal:", state);

// ==========================================
// P11 - ARTIKEL API ASINKRON
// ==========================================

const statusNotisia = document.querySelector("#status-notisia");
const daftarNotisia = document.querySelector("#daftar-notisia");

// Menampilkan artikel ke halaman.
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

        const tags = Array.isArray(notisia.tags)
            ? notisia.tags.join(" · ")
            : "Tanpa tag";

        metadata.textContent =
            `Tag: ${tags} | Dilihat: ${notisia.views ?? 0}`;

        kartu.append(judul, isi, metadata);
        daftarNotisia.append(kartu);
    });
}

// Mengambil data artikel dari API.
async function tampilkanNotisia() {
    // Pastikan elemen artikel tersedia di HTML.
    if (!statusNotisia || !daftarNotisia) {
        console.warn("Elemen Artikel API tidak ditemukan.");
        return;
    }

    // Keadaan 1: memuat.
    statusNotisia.hidden = false;
    statusNotisia.textContent = "Memuat artikel dari API...";
    daftarNotisia.replaceChildren();

    try {
        const daftar = await ambilNotisia();

        // Keadaan 4: data kosong.
        if (daftar.length === 0) {
            statusNotisia.textContent =
                "Belum ada artikel untuk ditampilkan.";
            return;
        }

        // Keadaan 2: berhasil.
        gambarNotisia(daftar);
        statusNotisia.textContent =
            `Berhasil memuat ${daftar.length} artikel.`;
    } catch (galat) {
        // Keadaan 3: gagal.
        statusNotisia.textContent =
            `Gagal memuat artikel: ${galat.message}. ` +
            "Periksa koneksi internet lalu muat ulang halaman.";

        daftarNotisia.replaceChildren();
    }
}

tampilkanNotisia();
