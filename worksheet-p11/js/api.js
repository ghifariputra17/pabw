
/*
 * P11 - LAPISAN DATA ASINKRON
 * Sumber API publik: DummyJSON Posts
 */

const ALAMAT = "https://dummyjson.com/posts?limit=6";

export async function ambilNotisia() {
    try {
        const respons = await fetch(ALAMAT);

        if (!respons.ok) {
            throw new Error("Status HTTP " + respons.status);
        }

        const data = await respons.json();

        if (!data || !Array.isArray(data.posts)) {
            throw new Error("Bentuk data API tidak sesuai harapan.");
        }

        return data.posts;
    } catch (galat) {
        console.error("Gagal mengambil data API:", galat.message);
        throw galat;
    }
}

export function parseJSON(teks) {
    return JSON.parse(teks);
}

export function ubahKeJSON(nilai) {
    return JSON.stringify(nilai);
}
