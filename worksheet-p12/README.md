# P12 - Build Tooling, npm, dan Framework SPA

**Nama:** Ghifari Putra Pratama  
**NIM:** 25523186  
**Kelas:** B  
**Mata Kuliah:** Pengembangan Aplikasi Berbasis Web (SIF302)  
**Semester:** Gasal 2026/2027

## A. Tujuan Praktikum

Praktikum ini bertujuan memahami penggunaan Node.js, npm, Vite, dan Vue untuk membangun aplikasi Single Page Application (SPA). Proyek P11 dikembangkan menjadi aplikasi Vue yang menggunakan komponen, state reaktif, dan penyimpanan lokal.

## B. Teknologi yang Digunakan

- Node.js v22.23.2
- npm 10.9.8
- Vue
- Vite 8.3.4
- JavaScript ES Modules
- HTML dan CSS
- localStorage

## C. Fitur Aplikasi

1. Menampilkan profil mahasiswa.
2. Menampilkan koleksi game favorit.
3. Menampilkan daftar proyek.
4. Memfilter proyek berdasarkan kategori Semua, Web, dan Data.
5. Menambahkan game melalui formulir.
6. Menyimpan data menggunakan localStorage agar tetap tersedia setelah halaman dimuat ulang.
7. Mengubah tema tampilan.
8. Mengatur ulang data aplikasi.

## D. Struktur Komponen Vue

- `src/App.vue`: komponen utama yang mengatur susunan halaman.
- `src/components/KepalaProfil.vue`: menampilkan informasi profil.
- `src/components/TombolFilter.vue`: mengatur filter kategori proyek.
- `src/components/DaftarProyek.vue`: menampilkan daftar proyek sesuai kategori.
- `src/components/FormKontak.vue`: menangani formulir penambahan game.
- `src/state.js`: menyimpan state reaktif aplikasi.
- `src/simpanan.js`: mengatur penyimpanan dan pemuatan data localStorage.
- `src/data.js`: menyediakan data profil, proyek, dan game.
- `src/api.js`: berisi fungsi untuk mengambil data dari API.

## E. Cara Menjalankan Aplikasi

Instal dependensi:

```bash
npm install
```

Jalankan server pengembangan:

```bash
npm run dev
```

Buat build produksi:

```bash
npm run build
```

Jalankan preview hasil build:

```bash
npm run preview
```

## F. Hasil Pengujian Build

Build produksi berhasil dijalankan menggunakan Vite.

```text
vite v8.3.4 building client environment for production...
✓ 26 modules transformed.
dist/index.html                  0.46 kB │ gzip:  0.29 kB
dist/assets/index-Dc03r-YW.css   6.65 kB │ gzip:  1.84 kB
dist/assets/index-lZUy4ho-.js   72.50 kB │ gzip: 28.37 kB
✓ built in 1.01s
```

Pemeriksaan `dist/index.html` menghasilkan `True`. Folder `dist/` berisi HTML, aset CSS dan JavaScript, serta gambar game yang dibutuhkan aplikasi.

Aplikasi berhasil dijalankan melalui `npm run preview` dan tampil normal di browser. Pengujian manual juga menunjukkan bahwa game yang ditambahkan tetap tersimpan setelah halaman dimuat ulang.

## G. Pemahaman Materi

### 1. Apa perbedaan dependencies dan devDependencies?

`dependencies` berisi paket yang dibutuhkan aplikasi saat runtime, sedangkan `devDependencies` berisi paket untuk pengembangan dan proses build, seperti Vite dan plugin terkait.

### 2. Mengapa package-lock.json perlu disimpan, sedangkan node_modules tidak?

`package-lock.json` mencatat versi dependensi secara terperinci agar instalasi lebih konsisten. Folder `node_modules` dapat dibuat kembali melalui `npm install`, sehingga tidak perlu dimasukkan ke repositori.

### 3. Apa fungsi perintah npm create vite@latest . -- --template vue?

Perintah tersebut membuat kerangka proyek Vue menggunakan Vite di direktori aktif. Tanda titik (`.`) berarti proyek dibuat di folder saat ini.

### 4. Bagaimana Vue memperbarui tampilan ketika state berubah?

Vue menggunakan sistem reaktivitas. Ketika state yang digunakan oleh template berubah, Vue memperbarui bagian tampilan yang bergantung pada state tersebut.

### 5. Mengapa props sebaiknya tidak diubah langsung oleh komponen anak?

Props merupakan data yang diteruskan oleh komponen induk. Mengubah props langsung dari komponen anak dapat menyebabkan alur data sulit dipahami dan perilaku aplikasi tidak terduga.

### 6. Apa perbedaan npm run dev dan npm run preview?

`npm run dev` menjalankan server pengembangan dengan pembaruan otomatis saat kode berubah. `npm run preview` menyajikan hasil build produksi yang dibuat melalui `npm run build`.

### 7. Mengapa folder dist tidak perlu di-commit?

Folder `dist` merupakan hasil build yang dapat dibuat ulang dari kode sumber. Mengabaikannya membuat repositori lebih ringan dan berfokus pada kode sumber.

## H. Penggunaan AI

AI digunakan sebagai alat bantu untuk memahami konsep Vue, menyusun komponen, menghubungkan state reaktif dan localStorage, serta memperbaiki struktur aplikasi. Kode dan hasil aplikasi diperiksa kembali melalui pengujian lokal.

## I. Kesimpulan

Praktikum ini memberikan pemahaman tentang penggunaan npm dan Vite dalam pengembangan aplikasi Vue. Aplikasi berhasil dibangun untuk produksi dan dapat dijalankan melalui preview. Penggunaan komponen, state reaktif, serta localStorage membantu membuat aplikasi lebih terstruktur dan mempertahankan data pengguna.

## J. Bukti Praktikum

Screenshot bukti praktikum yang dilampirkan:

1. Halaman utama aplikasi Vue.
2. Filter kategori proyek.
3. Form penambahan game.
4. Data yang tetap tersimpan setelah halaman dimuat ulang.
5. Terminal yang menunjukkan build produksi berhasil.
6. Halaman aplikasi melalui preview produksi.
