
<script setup>
import { ref } from 'vue'
import { tambahGame } from '../state.js'

const nama = ref('')
const genre = ref('')
const platform = ref('')

const galatNama = ref('')
const galatGenre = ref('')
const galatPlatform = ref('')

function kirimGame() {
    galatNama.value = nama.value.trim() ? '' : 'Isi nama game.'
    galatGenre.value = genre.value.trim() ? '' : 'Isi genre game.'
    galatPlatform.value = platform.value.trim() ? '' : 'Isi platform game.'

    if (galatNama.value || galatGenre.value || galatPlatform.value) {
        return
    }

    tambahGame({
        nama: nama.value.trim(),
        genre: genre.value.trim(),
        platform: platform.value.trim(),
        selesai: false
    })

    nama.value = ''
    genre.value = ''
    platform.value = ''
}
</script>

<template>
    <form id="form-game" @submit.prevent="kirimGame">
        <div class="form-kolom">
            <label for="nama-game">Nama Game:</label>
            <input
                id="nama-game"
                v-model="nama"
                name="nama-game"
                type="text"
                required
                aria-describedby="galat-nama-game"
            >
            <p id="galat-nama-game" class="pesan-galat" aria-live="polite">
                {{ galatNama }}
            </p>
        </div>

        <div class="form-kolom">
            <label for="genre">Genre:</label>
            <input
                id="genre"
                v-model="genre"
                name="genre"
                type="text"
                required
                aria-describedby="galat-genre"
            >
            <p id="galat-genre" class="pesan-galat" aria-live="polite">
                {{ galatGenre }}
            </p>
        </div>

        <div class="form-kolom">
            <label for="platform">Platform:</label>
            <input
                id="platform"
                v-model="platform"
                name="platform"
                type="text"
                required
                aria-describedby="galat-platform"
            >
            <p id="galat-platform" class="pesan-galat" aria-live="polite">
                {{ galatPlatform }}
            </p>
        </div>

        <button type="submit">Tambah Game</button>
    </form>
</template>
