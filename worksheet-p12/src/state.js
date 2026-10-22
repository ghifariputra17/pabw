
import { reactive } from 'vue'
import { daftarProyek, daftarGameAwal } from './data.js'

export const state = reactive({
    daftarProyek: daftarProyek.map(proyek => ({ ...proyek })),
    daftarGame: daftarGameAwal.map(game => ({ ...game })),
    kategoriAktif: 'semua',
    temaGelap: false
})

export function pilihKategori(kategori) {
    state.kategoriAktif = kategori
}

export function tambahGame(gameBaru) {
    const idBaru = state.daftarGame.length
        ? Math.max(...state.daftarGame.map(game => game.id)) + 1
        : 1

    state.daftarGame.push({
        id: idBaru,
        ...gameBaru
    })
}

export function aturUlangState() {
    state.daftarProyek = daftarProyek.map(proyek => ({ ...proyek }))
    state.daftarGame = daftarGameAwal.map(game => ({ ...game }))
    state.kategoriAktif = 'semua'
    state.temaGelap = false
}
