
<script setup>
import { state, pilihKategori } from '../state.js'

const kategori = [
    { label: 'Semua', nilai: 'semua' },
    { label: 'Web', nilai: 'web' },
    { label: 'Data', nilai: 'data' }
]
</script>

<template>
    <div id="filter">
        <button
            v-for="item in kategori"
            :key="item.nilai"
            type="button"
            :class="{ aktif: state.kategoriAktif === item.nilai }"
            @click="pilihKategori(item.nilai)"
        >
            {{ item.label }}
        </button>
    </div>
</template>
