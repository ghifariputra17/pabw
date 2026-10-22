```vue
<script setup>
import { onMounted, watch } from 'vue'
import { profil } from './data.js'
import { state } from './state.js'
import {
    muat,
    simpan,
    terapkanSimpanan,
    aturUlang
} from './simpanan.js'

import KepalaProfil from './components/KepalaProfil.vue'
import TombolFilter from './components/TombolFilter.vue'
import DaftarProyek from './components/DaftarProyek.vue'
import FormKontak from './components/FormKontak.vue'

onMounted(() => {
    terapkanSimpanan(muat())
})

watch(state, nilai => simpan(nilai), { deep: true })

function resetData() {
    aturUlang()
}
</script>

<template>
    <div class="page" :class="{ 'tema-gelap': state.temaGelap }">
        <header class="navbar">
            <input
                id="tema"
                v-model="state.temaGelap"
                type="checkbox"
                class="pengalih-tema"
            >
            <label for="tema" class="tombol-tema">Tema gelap</label>

            <div class="header-baris">
                <h1 id="judul-halaman">Koleksi Game Favorit</h1>

                <nav aria-label="Navigasi utama">
                    <ul>
                        <li><a href="#koleksi">Koleksi Game</a></li>
                        <li><a href="#tentang">Tentang Saya</a></li>
                        <li><a href="#tambah">Tambah Game</a></li>
                        <li><a href="#proyek">Proyek Saya</a></li>
                    </ul>
                </nav>
            </div>
        </header>

        <div class="isi">
            <main class="utama">
                <section id="koleksi">
                    <h2 id="judul-koleksi">Koleksi Game Favorit</h2>
                    <p id="deskripsi-koleksi">
                        Game favorit yang menemani waktu luang saya.
                    </p>

                    <div class="katalog">
                        <div class="table-wrap">
                            <table class="kartu papan">
                                <caption>Daftar Game Favorit</caption>
                                <thead>
                                    <tr>
                                        <th scope="col">Nama Game</th>
                                        <th scope="col">Genre</th>
                                        <th scope="col">Platform</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        v-for="game in state.daftarGame"
                                        :key="game.id"
                                    >
                                        <td>{{ game.nama }}</td>
                                        <td>{{ game.genre }}</td>
                                        <td>{{ game.platform }}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <figure class="slideshow">
                        <div class="slide">
                            <img
                                src="/ea-sports-fc-26.jpg"
                                alt="Sampul EA Sports FC 26"
                                width="640"
                                height="360"
                            >
                            <span class="nama-slide">EA Sports FC 26</span>
                        </div>

                        <div class="slide">
                            <img
                                src="/motogp.jpg"
                                alt="Sampul MotoGP"
                                width="640"
                                height="360"
                            >
                            <span class="nama-slide">MotoGP</span>
                        </div>

                        <div class="slide">
                            <img
                                src="/gta-v.jpg"
                                alt="Sampul GTA V"
                                width="640"
                                height="360"
                            >
                            <span class="nama-slide">GTA V</span>
                        </div>
                    </figure>
                </section>

                <section id="proyek">
                    <h2>Proyek Saya</h2>
                    <TombolFilter />

                    <button
                        id="reset-state"
                        type="button"
                        @click="resetData"
                    >
                        Atur Ulang Data
                    </button>

                    <DaftarProyek />
                </section>

                <section id="tentang">
                    <h2>Tentang Saya</h2>

                    <KepalaProfil :profil="profil" />

                    <div id="tambah">
                        <h3>Tambah Game Favorit</h3>
                        <FormKontak />
                    </div>
                </section>
            </main>
        </div>

        <footer>
            <p>GHIFARI PUTRA PRATAMA &middot; 25523186 &middot; 2026</p>
        </footer>
    </div>
</template>
```