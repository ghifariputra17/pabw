
import { daftarProyek, daftarGameAwal } from './data.js'
import { state } from './state.js'

const KUNCI = 'pabw-p11'
const VERSI = 2

export function simpan(nilai = state) {
    try {
        const data = {
            versi: VERSI,
            daftarProyek: nilai.daftarProyek,
            daftarGame: nilai.daftarGame,
            kategoriAktif: nilai.kategoriAktif,
            temaGelap: nilai.temaGelap
        }

        localStorage.setItem(KUNCI, JSON.stringify(data))
    } catch (error) {
        console.error('Gagal menyimpan data:', error)
    }
}

export function muat() {
    try {
        const teks = localStorage.getItem(KUNCI)

        if (!teks) return null

        const data = JSON.parse(teks)

        if (
            data.versi !== VERSI ||
            !Array.isArray(data.daftarProyek) ||
            !Array.isArray(data.daftarGame)
        ) {
            throw new Error('Format penyimpanan tidak valid')
        }

        return data
    } catch (error) {
        console.warn('Data penyimpanan rusak; menggunakan data awal.', error)
        localStorage.removeItem(KUNCI)
        return null
    }
}

export function terapkanSimpanan(data) {
    if (!data) return

    state.daftarProyek = data.daftarProyek
    state.daftarGame = data.daftarGame
    state.kategoriAktif = data.kategoriAktif || 'semua'
    state.temaGelap = Boolean(data.temaGelap)
}

export function aturUlang() {
    state.daftarProyek = daftarProyek.map(proyek => ({ ...proyek }))
    state.daftarGame = daftarGameAwal.map(game => ({ ...game }))
    state.kategoriAktif = 'semua'
    state.temaGelap = false

    simpan(state)
}
