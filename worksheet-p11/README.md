
## Cara Menjalankan

1. Buka terminal pada folder `worksheet-p11`.
2. Jalankan perintah:

   ```bash
   python -m http.server 8000
   ```

3. Buka browser dan kunjungi `http://localhost:8000/profil.html`.
4. Uji filter kategori, formulir tambah game, tombol atur ulang, penyimpanan data, dan bagian artikel API.

## Pengujian

Pengujian meliputi:

- Memastikan modul JavaScript berhasil dijalankan.
- Memastikan filter kategori dapat digunakan.
- Memastikan formulir memvalidasi kolom wajib.
- Memastikan penambahan game memperbarui tampilan.
- Menguji pemuatan ulang halaman setelah perubahan state.
- Menguji JSON rusak menggunakan `localStorage.setItem("pabw-p11", "bukan-json")`.
- Menguji struktur penyimpanan tidak valid menggunakan `localStorage.setItem("pabw-p11", "{}")`.
- Memastikan aplikasi tetap berjalan ketika data tersimpan tidak valid.

## Penggunaan AI

AI digunakan sebagai pendamping pembelajaran untuk membantu memahami modular JavaScript, memperbaiki kode, menyusun langkah pengujian, dan membuat dokumentasi. Kode diperiksa dan diuji selama pengerjaan.

## Kesimpulan

Pemisahan JavaScript menjadi beberapa modul membuat kode lebih terstruktur. State management dan `localStorage` membantu mengelola serta menyimpan data, sementara penanganan data tidak valid menjaga aplikasi tetap dapat dijalankan.
