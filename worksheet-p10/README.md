# Worksheet P9 — DOM dan Event JavaScript

## Identitas

- **Nama:** GHIFARI PUTRA PRATAMA
- **NIM:** 25523186
- **Kelas:** B

## Deskripsi

Worksheet P9 membahas penggunaan DOM (Document Object Model) dan event JavaScript untuk membuat halaman web yang interaktif. Halaman ini menampilkan daftar proyek, menyediakan filter berdasarkan kategori, serta melakukan validasi input pada formulir koleksi game.

## Implementasi

Fitur dan konsep yang digunakan:

- Memilih elemen HTML menggunakan `querySelector()`.
- Membuat elemen HTML menggunakan `createElement()`.
- Mengubah isi elemen dengan `textContent`.
- Menampilkan daftar proyek dari array objek JavaScript.
- Menyaring proyek menggunakan `filter()`.
- Menangani klik tombol menggunakan event delegation.
- Menandai tombol filter yang sedang aktif.
- Menampilkan pesan ketika tidak ada proyek yang cocok.
- Menangani event `submit` pada formulir.
- Mencegah pemuatan ulang halaman menggunakan `preventDefault()`.
- Memvalidasi kolom Nama Game, Genre, dan Platform.
- Menampilkan pesan kesalahan pada kolom yang belum diisi.
- Mengosongkan formulir setelah validasi berhasil.

## Struktur Berkas

- `profil.html` — halaman profil, daftar proyek, dan formulir game.
- `js/app.js` — data dan fungsi JavaScript.
- `js/dom.js` — manipulasi DOM, filter proyek, dan validasi formulir.
- `js/script.js` — skrip tambahan.
- `tokens.css`, `base.css`, `layout.css`, `komponen.css`, `tema.css`, dan `responsif.css` — styling halaman.

## Cara Menjalankan

1. Buka terminal di folder `worksheet-p9`.
2. Jalankan perintah berikut:

   ```bash
   python -m http.server 8000
   ```

3. Buka browser dan kunjungi `http://localhost:8000/profil.html`.
4. Uji tombol filter proyek dan formulir Tambah Game.

## Pengujian

Pengujian dilakukan untuk memastikan filter kategori bekerja, pesan kosong ditampilkan saat tidak ada proyek yang cocok, pesan validasi muncul pada kolom wajib yang kosong, serta formulir dapat dikirim tanpa memuat ulang halaman.

## Penggunaan AI

AI digunakan sebagai pendamping untuk memahami, memperbaiki, dan menguji kode. Kode akhir diperiksa dan diuji kembali secara mandiri.

## Pertemuan 10 — JavaScript Asinkron: fetch, Promise, dan JSON

### Fitur yang ditambahkan

- Mengambil enam artikel dari API publik `https://dummyjson.com/posts?limit=6`.
- Alamat API ditulis satu kali di bagian atas `js/api.js`.
- Memeriksa `respons.ok` sebelum membaca badan respons, sehingga status HTTP non-2xx ditangani sebagai galat.
- Menggunakan `async`/`await` dan `try`/`catch` untuk menangani kegagalan jaringan, status HTTP, dan pembacaan JSON.
- Memisahkan pengambilan data pada `js/api.js` dari penggambaran kartu di `js/app.js`.
- Menggunakan `respons.json()` untuk membaca respons JSON, `JSON.parse(teks)` untuk mengubah teks JSON menjadi nilai JavaScript, dan `JSON.stringify(nilai)` untuk mengubah nilai JavaScript menjadi teks JSON.
- Menampilkan empat keadaan antarmuka: memuat, berhasil, gagal, dan kosong.
- Menggunakan `textContent` saat menampilkan data dari jaringan untuk menghindari penyisipan HTML dari respons API.

### Struktur berkas P10

- `profil.html` — halaman profil dan wadah daftar artikel.
- `js/app.js` — data profil, DOM, dan pemanggil API beserta keadaan antarmuka.
- `js/dom.js` — filter proyek dan validasi formulir dari P9.
- `js/api.js` — lapisan data untuk fetch, pemeriksaan status, dan fungsi JSON.
- Berkas CSS — gaya dari P9 dan kartu artikel P10.

### Cara menjalankan

1. Buka terminal di folder `worksheet-p10`.
2. Jalankan `python -m http.server 8000`.
3. Buka `http://localhost:8000/profil.html` di Chrome atau Firefox.
4. Pastikan koneksi internet aktif agar API publik dapat diakses.
5. Buka DevTools → Network dan Console untuk memeriksa permintaan, status HTTP, serta pesan aplikasi.

### Pengujian empat keadaan

- **Memuat:** tampil saat permintaan API sedang berlangsung.
- **Berhasil:** artikel ditampilkan dalam kartu dan jumlah artikel dilaporkan.
- **Gagal:** untuk menguji, ubah sementara alamat `ALAMAT` di `js/api.js` menjadi alamat yang tidak valid atau nonaktifkan jaringan. Pesan kegagalan harus tampil di halaman. Setelah selesai, kembalikan alamat dan aktifkan jaringan.
- **Kosong:** untuk menguji, sementara kembalikan `[]` dari fungsi `ambilNotisia()` setelah respons berhasil dibaca. Pesan “Belum ada artikel untuk ditampilkan.” harus muncul. Setelah selesai, kembalikan kode normal.

Untuk menguji status 404, gunakan alamat endpoint yang tidak ada dan pastikan pemeriksaan `respons.ok` melempar galat sebelum `respons.json()` dipanggil. Jangan tinggalkan perubahan pengujian tersebut di versi akhir.

### Jawaban ringkas tiket keluar P10

1. `fetch` tidak otomatis melempar galat untuk status 404 karena permintaannya tetap menerima respons HTTP; periksa `respons.ok` dan lempar galat sendiri.
2. `await` digunakan di dalam fungsi `async`; di luar fungsi `async`, skrip biasa akan gagal diurai (kecuali konteks modul tertentu yang mendukung top-level await).
3. Keadaan kosong mudah terlupa; periksa panjang larik dan tampilkan pesan khusus jika `daftar.length === 0`.

### Penggunaan AI

AI digunakan sebagai pendamping untuk menyusun struktur lapisan data `js/api.js`, contoh penanganan `fetch`/JSON, dan dokumentasi pengujian P10. Saya perlu membaca dan memahami setiap bagian kode, menjalankan pengujian di browser, memeriksa hasil Network/Console, serta menyesuaikan dan memastikan sendiri hasil akhirnya sebelum dikumpulkan.
