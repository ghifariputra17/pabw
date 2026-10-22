```vue
<script setup>
defineProps({
    profil: {
        type: Object,
        required: true
    }
})
</script>

<template>
    <header class="kepala-profil">
        <h1>{{ profil.nama }}</h1>
        <p>{{ profil.peran }}</p>
        <p>{{ profil.tentang }}</p>

        <div class="keahlian">
            <span
                v-for="keahlian in profil.keahlian"
                :key="keahlian"
            >
                {{ keahlian }}
            </span>
        </div>
    </header>
</template>

<style scoped>
.kepala-profil {
    width: 100%;
    text-align: left;
    margin: 0 0 1.5rem;
}

.kepala-profil h1,
.kepala-profil p {
    text-align: left;
    margin-left: 0;
    margin-right: 0;
}

.keahlian {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
}
</style>
```