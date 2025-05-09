# 🧪 Junior Fullstack - Technical Test

Repositori ini berisi penyelesaian soal technical test untuk posisi **Junior Fullstack Developer**, mencakup manipulasi data dengan JavaScript dan pembuatan UI menggunakan ReactJS.

---

## 📁 Struktur Folder
├── case1.js # Penyelesaian manipulasi data buah (tanpa database)
├── case2.js # Penyelesaian nested comment counter (rekursif)
├── case3-react/ # Halaman UMKM dengan ReactJS
│ ├── src/
│ │ └── UMKMPage.jsx
│ ├── public/
│ │ └── index.html
│ └── package.json
├── README.md

---

## ✅ Case 1 – Data Buah

### Tujuan:
Mengelola data buah dari sebuah array (`fruits`) dan melakukan:
- Menampilkan semua nama buah
- Mengelompokkan buah berdasarkan tipe (`IMPORT` / `LOCAL`)
- Menghitung total stok per tipe
- Memberikan komentar jika ada data tidak valid atau tidak konsisten

### Cara Menjalankan:
1. Pastikan Node.js terinstall
2. Jalankan dengan perintah:

node case1.js

---

## ✅ Case 2 – Komentar Bersarang

### 🎯 Tujuan:
Menghitung total semua komentar dan balasannya dari struktur data bersarang menggunakan **fungsi rekursif**:

- Menambahkan `1` untuk setiap komentar
- Jika ada `replies`, menghitung balasan secara rekursif
- Total mencakup semua level komentar

---

## ✅ Case 3 – Halaman UMKM CakeBahagia (ReactJS)

### 🎯 Tujuan:
Membuat halaman web statis untuk memperkenalkan UMKM CakeBahagia menggunakan **ReactJS** dan **TailwindCSS**, dengan informasi sebagai berikut:

- Nama dan deskripsi UMKM
- Gambar produk

### 🖥️ Tampilan Halaman:
Satu halaman sederhana dan responsif berisi:

- Header dengan nama UMKM
- Gambar ilustrasi (dari Unsplash)
- Paragraf deskripsi usaha

### ▶️ Cara Menjalankan:

1. Masuk ke folder project React:

cd case3-react
npm install
npm run dev
