# 📘 Rencana Proyek Akhir – FocusFlow To-Do List App

## Kelompok 5

---

## 1. Judul Proyek & Deskripsi Singkat

### Judul Proyek:

**FocusFlow – Modern To-Do List Web Application**

### Deskripsi Singkat:

FocusFlow adalah aplikasi To-Do List berbasis web yang dirancang untuk membantu pengguna mengelola tugas harian secara efektif. Website ini menyediakan fitur CRUD (Create, Read, Update, Delete), pencarian, filter status, serta penyimpanan data melalui Local Storage.

Aplikasi dibuat dengan tampilan modern yang minimalis menggunakan React JS dan Tailwind CSS agar nyaman digunakan baik di perangkat mobile maupun desktop.

### Tujuan Website:

- Membantu pengguna mengatur aktivitas sehari-hari secara terstruktur.
- Mempermudah pemantauan progres tugas.
- Menyediakan antarmuka sederhana, cepat, dan mudah dipahami.

### Target Pengguna:

- Mahasiswa
- Pelajar
- Pekerja kantor / remote worker
- Pengguna umum yang ingin meningkatkan produktivitas

---

## 2. Tema / Style Website

### Konsep Visual yang Dipilih:

- **Tema:** Modern Minimalist Productivity
- **Gaya:** Bersih, ringan, fokus pada elemen utama
- **Mood:** Profesional namun tetap ramah pengguna
- **Tone Warna:**
  - Putih (#FFFFFF)
  - Abu-abu lembut (#F3F4F6, #D1D5DB)
  - Abu-abu gelap untuk aksen (#4B5563)
- **Font:** Inter / Poppins / Sans-serif modern
- **Komponen UI:**
  - Rounded cards
  - Tombol besar dan jelas
  - Shadow ringan
  - Layout responsif

### Inspirasi Referensi UI:

- Notion
- Todoist
- Apple Reminders

---

## 3. Fitur Utama Website

### 🔧 A. Fitur CRUD Tugas

1. **Create** → Tambah tugas baru dengan judul, deskripsi opsional, dan deadline.
2. **Read** → Menampilkan seluruh daftar tugas dalam bentuk list/card.
3. **Update** → Mengedit tugas yang sudah ditambahkan.
4. **Delete** → Menghapus tugas dari daftar.

### 🔍 B. Fitur Tambahan

5. **Tandai Tugas Selesai / Belum Selesai**
   - Toggle status untuk membantu pengguna melacak progres.
6. **Filter Tugas Berdasarkan Status:**
   - All Tasks
   - Completed
   - Active
7. **Search Task by Title**
   - Pencarian real-time menggunakan input search bar.
8. **Local Storage Integration**
   - Semua tugas tetap tersimpan meskipun halaman di-refresh.
9. **Responsive Design**
   - Tampilan optimal di handphone, tablet, dan desktop.
10. **UI Interaktif & Animasi Ringan (optional)**
    - Menggunakan transition Tailwind untuk UX yang lebih halus.

---

## 4. Daftar Halaman (Page Structure)

### 1. Dashboard / Home Page

Komponen utama:

- Header aplikasi
- Form tambah tugas
- Search bar (untuk fitur Anggota 2)
- Filter status (untuk fitur Anggota 2)
- List tugas dengan tombol: edit, delete, complete
- Counter tugas selesai / belum selesai (opsional)

### 2. About Page (Opsional tapi disarankan)

Isi halaman:

- Deskripsi singkat aplikasi
- Tujuan pengembangan
- Profil anggota kelompok (foto opsional)
- Teknologi yang digunakan
- Fitur utama aplikasi

---

## 5. Teknologi yang Digunakan

### Teknologi Wajib:

- **React JS**
  - Component-based
  - State management untuk tugas
- **Tailwind CSS**
  - Utility-first
  - Styling cepat dan konsisten

### Teknologi Opsional:

- **Local Storage**
  - Penyimpanan simple tanpa backend
- **Heroicons / Lucide Icons**
  - Untuk ikon edit, delete, complete
- **React Hooks**
  - useState, useEffect

---

## 6. Pembagian Tugas Kelompok (3 Anggota)

| Anggota       | Peran & Tanggung Jawab                                                                                                                                             |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Anggota 1** | - Setup awal project React + Tailwind<br>- Membuat struktur folder & routing<br>- Membuat form input tugas (Create)<br>- Menghubungkan input ke state React        |
| **Anggota 2** | - Membuat tampilan daftar tugas (Read)<br>- Logika filter & search<br>- Fitur tandai selesai / belum selesai<br>- State management untuk status tugas              |
| **Anggota 3** | - Fitur edit dan delete (Update & Delete)<br>- Styling UI keseluruhan dengan Tailwind<br>- Responsive design (mobile-first)<br>- Finishing dan polishing interface |

---

## Status Implementasi

### ✅ Completed (Anggota 1)

- [x] Setup project React + Vite
- [x] Install dan setup Tailwind CSS
- [x] Setup React Router untuk routing
- [x] Buat struktur folder (components, pages)
- [x] Buat komponen Header dengan navigasi
- [x] Buat komponen TaskForm dengan Create functionality
- [x] Setup state management di Dashboard
- [x] Integrasikan Local Storage
- [x] Buat halaman About dengan daftar lengkap proyek
- [x] Update styling dengan tema abu-abu modern

### 🔄 In Progress (Anggota 2)

- [ ] Membuat tampilan daftar tugas (Read)
- [ ] Implementasi filter status (All, Completed, Active)
- [ ] Implementasi search functionality
- [ ] Fitur mark as complete/incomplete

### ⏳ Pending (Anggota 3)

- [ ] Fitur edit tugas
- [ ] Fitur delete tugas (sudah ada tombol)
- [ ] Polish UI dan responsive design refinement
- [ ] Testing di berbagai device

---

## Catatan Penting

- Jika kelompok ingin sangat simple, halaman Dashboard saja sudah memenuhi syarat proyek dinamis.
- Menambahkan halaman About memberi nilai lebih.
- Semua fitur CRUD harus terintegrasi dengan Local Storage.
- Design harus responsive dan user-friendly.
