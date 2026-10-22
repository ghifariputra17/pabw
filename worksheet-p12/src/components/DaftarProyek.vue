
<script setup>
import { computed } from 'vue'
import { state } from '../state.js'

const proyekTerfilter = computed(() => {
    if (state.kategoriAktif === 'semua') {
        return state.daftarProyek
    }

    return state.daftarProyek.filter(
        proyek => proyek.kategori === state.kategoriAktif
    )
})
</script>

<template>
    <ul id="daftar">
        <li
            v-for="proyek in proyekTerfilter"
            :key="proyek.id"
        >
            <strong>{{ proyek.judul }}</strong>
            <p>Tahun: {{ proyek.tahun }}</p>
            <p>Status: {{ proyek.selesai ? 'Selesai' : 'Dalam pengerjaan' }}</p>
            <p>Kategori: {{ proyek.kategori }}</p>
        </li>
    </ul>

    <p v-if="proyekTerfilter.length === 0" id="pesan-kosong">
        Tidak ada proyek pada kategori itu.
    </p>
</template>
