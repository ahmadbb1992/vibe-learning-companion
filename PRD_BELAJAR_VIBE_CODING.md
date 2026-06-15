# PRD — Belajar Vibe Coding untuk Pemula Non-Programmer

## 1. Ringkasan

Produk ini adalah **program belajar mandiri 8 minggu** untuk membantu pemula tanpa latar belakang programming mempelajari _vibe coding_: cara membangun produk digital dengan bantuan AI coding agent, sambil tetap memahami dasar-dasar produk, logika, debugging, dan validasi masalah.

Fokus utama bukan menghafal bahasa pemrograman tertentu, tetapi belajar pola kerja:

1. menemukan masalah nyata,
2. menulis requirement yang jelas,
3. meminta AI membangun versi kecil,
4. menguji hasil,
5. memperbaiki dengan iterasi kecil,
6. mendokumentasikan pembelajaran.

## 2. Latar Belakang

Pemula sering bingung memulai programming karena terlalu banyak pilihan: HTML, CSS, JavaScript, Python, React, database, hosting, Git, dan sebagainya. Dengan AI coding tools seperti Codex, GitHub Copilot, Claude Code, Cursor, atau tools serupa, pemula bisa mulai dari **masalah dan hasil akhir** terlebih dahulu, lalu belajar konsep teknis secara bertahap.

Namun, vibe coding tetap membutuhkan disiplin. AI bisa membantu menulis kode, tetapi pengguna tetap perlu belajar cara menjelaskan kebutuhan, membaca hasil, menguji aplikasi, mengenali error, dan menjaga scope tetap kecil.

## 3. Target Pengguna

### Pengguna Utama

- Orang non-programmer yang ingin membangun solusi kecil untuk masalah sehari-hari.
- Pemula yang nyaman belajar dengan eksperimen, bukan teori panjang di awal.
- Solo builder, pelajar, pekerja, freelancer, atau founder awal.

### Kondisi Awal Pengguna

- Bisa menggunakan laptop dan browser.
- Belum paham programming, Git, terminal, database, atau deployment.
- Punya minat membangun sesuatu yang berguna.

## 4. Tujuan Produk Pembelajaran

Setelah menyelesaikan program ini, pengguna mampu:

- Menjelaskan masalah yang ingin diselesaikan dalam format sederhana.
- Membuat PRD mini untuk aplikasi kecil.
- Menggunakan AI coding assistant untuk membuat, memperbaiki, dan menjelaskan kode.
- Menjalankan aplikasi lokal di komputer.
- Menguji fitur utama secara manual.
- Melakukan iterasi berdasarkan error, feedback, dan kebutuhan pengguna.
- Mempublikasikan minimal 1 proyek sederhana ke internet.

## 5. Prinsip Pembelajaran

1. **Problem first, tech second** — mulai dari masalah nyata, bukan framework.
2. **Small project, fast feedback** — bangun versi sangat kecil dulu.
3. **Prompt like a product manager** — jelaskan tujuan, batasan, contoh input-output, dan kriteria sukses.
4. **AI writes, you verify** — AI boleh menulis kode, tetapi pengguna wajib menguji.
5. **One change at a time** — hindari meminta AI mengubah terlalu banyak hal sekaligus.
6. **Document everything** — catat prompt, error, solusi, dan pelajaran.

## 6. Scope Program

### In Scope

- Dasar cara kerja web app.
- Dasar HTML, CSS, JavaScript, dan/atau Python secukupnya.
- Cara menggunakan AI coding assistant.
- Cara membuat prompt coding yang jelas.
- Cara membaca struktur folder proyek.
- Cara menjalankan aplikasi lokal.
- Cara debugging dasar.
- Cara membuat README dan dokumentasi.
- Cara deploy aplikasi sederhana.

### Out of Scope

- Belajar algoritma kompleks.
- Menguasai semua bahasa pemrograman.
- Membangun aplikasi enterprise.
- Optimasi performa tingkat lanjut.
- Keamanan tingkat production yang kompleks.
- Infrastruktur cloud kompleks.

## 7. Rekomendasi Stack Awal

Program ini **tidak terkunci pada satu framework**. Pilihan stack disesuaikan dengan tujuan belajar.

### Jalur A — Paling Mudah: Website Statis

- HTML
- CSS
- JavaScript dasar
- Deployment: GitHub Pages, Netlify, atau Vercel

Cocok untuk: landing page, kalkulator sederhana, daftar catatan lokal, portfolio, halaman promosi.

### Jalur B — Web App Sederhana

- Next.js atau React + Vite
- JavaScript/TypeScript dasar
- Penyimpanan lokal atau database sederhana
- Deployment: Vercel atau Netlify

Cocok untuk: dashboard kecil, form tracker, katalog, habit tracker, to-do app.

### Jalur C — Otomasi dan Data Sederhana

- Python
- CSV/JSON
- Streamlit atau Flask jika butuh UI web

Cocok untuk: automasi file, analisis data kecil, generator laporan, tools internal.

### Rekomendasi untuk Pemula Total

Mulai dari **Jalur A selama 2 minggu**, lalu lanjut ke **Jalur B atau C** sesuai masalah yang ingin diselesaikan.

## 8. Kurikulum 8 Minggu

### Minggu 1 — Mindset, Tools, dan Proyek Mini Pertama

Tujuan:
- Memahami apa itu vibe coding.
- Menyiapkan editor, terminal, browser, dan AI coding assistant.
- Membuat halaman web pertama.

Output:
- File `index.html`, `style.css`, dan `script.js` sederhana.
- Catatan `learning-log.md` berisi prompt pertama dan hasilnya.

Latihan:
- Minta AI menjelaskan struktur HTML dengan bahasa anak SMP.
- Ubah teks, warna, dan layout sendiri.
- Buka file di browser dan cek hasilnya.

### Minggu 2 — Prompting untuk Coding

Tujuan:
- Belajar menulis prompt yang jelas.
- Memahami konsep requirement, acceptance criteria, dan edge case.

Output:
- Template prompt coding pribadi.
- Mini PRD untuk proyek pertama.

Latihan:
- Bandingkan prompt buruk vs prompt bagus.
- Minta AI membuat fitur kecil berdasarkan acceptance criteria.
- Minta AI menjelaskan perubahan kode sebelum menjalankannya.

### Minggu 3 — JavaScript Dasar Lewat Fitur Nyata

Tujuan:
- Memahami variable, function, event, dan DOM secara praktis.

Output:
- Aplikasi kecil interaktif, misalnya kalkulator biaya, habit checklist, atau form rekomendasi.

Latihan:
- Tambahkan tombol.
- Ambil input dari user.
- Tampilkan hasil ke halaman.
- Simpan data sederhana di browser menggunakan `localStorage`.

### Minggu 4 — Debugging dan Membaca Error

Tujuan:
- Tidak panik saat error.
- Bisa memberi konteks error ke AI.

Output:
- Dokumen `debugging-playbook.md`.

Latihan:
- Buka browser DevTools.
- Salin error message.
- Minta AI menjelaskan penyebab dan solusi.
- Perbaiki satu bug kecil tanpa mengganti seluruh aplikasi.

### Minggu 5 — Membangun MVP dari Masalah Nyata

Tujuan:
- Memilih satu masalah kecil dan membangun MVP.

Output:
- PRD mini untuk aplikasi MVP.
- Versi pertama aplikasi.

Contoh masalah:
- Tracker pengeluaran harian.
- Generator caption jualan.
- Catatan stok barang kecil.
- Reminder kebiasaan.
- Kalkulator harga jasa.

### Minggu 6 — Data dan Penyimpanan

Tujuan:
- Memahami data sederhana: list, object, JSON, dan penyimpanan.

Output:
- Fitur tambah, lihat, edit, dan hapus data sederhana.

Latihan:
- Simpan data di `localStorage`.
- Export data ke JSON/CSV jika cocok.
- Minta AI membuat contoh data dummy untuk testing.

### Minggu 7 — Deployment dan Feedback

Tujuan:
- Membuat aplikasi bisa diakses orang lain.
- Mengumpulkan feedback sederhana.

Output:
- Link aplikasi online.
- Form feedback sederhana.
- Daftar prioritas perbaikan.

Latihan:
- Deploy ke Vercel, Netlify, atau GitHub Pages.
- Minta 3 orang mencoba aplikasi.
- Catat 5 feedback paling penting.

### Minggu 8 — Iterasi, Dokumentasi, dan Portfolio

Tujuan:
- Memperbaiki MVP berdasarkan feedback.
- Menulis dokumentasi proyek.

Output:
- `README.md` proyek.
- Demo singkat atau screenshot.
- Daftar ide versi berikutnya.

Latihan:
- Minta AI merapikan README.
- Minta AI membuat checklist test manual.
- Perbaiki 2 fitur paling penting.

## 9. Fitur Produk Pembelajaran

### F1 — Learning Log

Pengguna membuat file `learning-log.md` untuk mencatat:
- tanggal belajar,
- tujuan hari ini,
- prompt yang dipakai,
- error yang muncul,
- solusi,
- pelajaran utama.

Acceptance criteria:
- Setiap sesi belajar punya minimal 1 catatan.
- Error tidak hanya dihapus, tetapi dicatat penyebab dan solusinya.

### F2 — Prompt Library

Pengguna membuat file `prompt-library.md` berisi prompt reusable.

Kategori prompt:
- Explain code.
- Build feature.
- Fix bug.
- Refactor.
- Create test checklist.
- Improve UI.
- Write README.

Acceptance criteria:
- Minimal 10 prompt reusable terkumpul di akhir minggu ke-4.

### F3 — Mini PRD Generator

Pengguna belajar menulis PRD pendek sebelum membangun fitur.

Template:
- Problem
- Target user
- User story
- Feature scope
- Acceptance criteria
- Out of scope
- Manual test checklist

Acceptance criteria:
- Setiap fitur besar punya PRD mini sebelum coding.

### F4 — MVP Project

Pengguna membangun satu aplikasi kecil dari masalah nyata.

Acceptance criteria:
- Aplikasi punya minimal 3 fitur utama.
- Bisa dijalankan lokal.
- Bisa dicoba oleh orang lain.
- Ada README.
- Ada checklist test manual.

## 10. Template Prompt Utama

### Prompt Membuat PRD Mini

```text
Saya pemula non-programmer. Bantu saya membuat PRD mini untuk aplikasi sederhana.

Masalah yang ingin saya selesaikan:
[jelaskan masalah]

Target pengguna:
[siapa yang memakai]

Batasan:
- Buat versi MVP saja.
- Jangan pakai teknologi kompleks.
- Jelaskan dengan bahasa sederhana.

Output yang saya mau:
- Problem statement
- User story
- Fitur utama
- Out of scope
- Acceptance criteria
- Manual test checklist
```

### Prompt Membuat Fitur

```text
Saya pemula. Tolong bantu buat fitur berikut secara bertahap.

Konteks aplikasi:
[jelaskan aplikasi]

Fitur yang ingin dibuat:
[jelaskan fitur]

Acceptance criteria:
- [kriteria 1]
- [kriteria 2]
- [kriteria 3]

Instruksi:
- Jelaskan rencana dulu sebelum mengubah kode.
- Ubah sesedikit mungkin file.
- Setelah selesai, beri checklist cara mengetes manual.
```

### Prompt Debugging

```text
Saya pemula dan mendapatkan error ini:

[paste error]

Konteks:
- Saya sedang menjalankan: [command]
- File yang mungkin terkait: [nama file]
- Perubahan terakhir: [jelaskan]

Tolong:
- Jelaskan arti error dengan bahasa sederhana.
- Sebutkan kemungkinan penyebab.
- Beri langkah perbaikan paling aman.
- Jangan rewrite seluruh kode kecuali memang perlu.
```

## 11. Metrik Sukses

### Metrik Pembelajaran

- Pengguna belajar minimal 3 sesi per minggu.
- Pengguna menulis minimal 20 entri learning log dalam 8 minggu.
- Pengguna mengumpulkan minimal 10 prompt reusable.
- Pengguna bisa menjelaskan fungsi dasar file HTML, CSS, dan JavaScript.

### Metrik Produk

- Minimal 1 MVP selesai.
- Minimal 1 aplikasi berhasil di-deploy.
- Minimal 3 orang mencoba aplikasi.
- Minimal 5 feedback terkumpul.
- Minimal 2 perbaikan dilakukan berdasarkan feedback.

## 12. Risiko dan Mitigasi

### Risiko: Terlalu Bergantung pada AI

Mitigasi:
- Selalu minta AI menjelaskan kode.
- Ubah bagian kecil secara manual.
- Tulis ulang pemahaman sendiri di learning log.

### Risiko: Scope Terlalu Besar

Mitigasi:
- Pakai batasan MVP.
- Maksimal 3 fitur utama untuk proyek pertama.
- Simpan ide tambahan di bagian `later.md`.

### Risiko: Bingung Karena Banyak Tools

Mitigasi:
- Mulai dengan browser, editor, dan satu AI assistant saja.
- Jangan pindah framework sebelum menyelesaikan proyek kecil.

### Risiko: Error Membuat Frustrasi

Mitigasi:
- Jadikan error sebagai bahan belajar.
- Buat debugging playbook.
- Perbaiki satu error per langkah.

## 13. Referensi Eksternal

Referensi ini dipakai sebagai inspirasi praktik modern, bukan untuk mengunci program ke satu tool.

- OpenAI Codex CLI Getting Started: https://help.openai.com/en/articles/11096431
- OpenAI Codex overview: https://openai.com/codex/
- OpenAI article on Codex upgrades and agentic workflows: https://openai.com/index/introducing-upgrades-to-codex/
- GitHub Copilot best practices: https://docs.github.com/en/enterprise-cloud@latest/copilot/using-github-copilot/best-practices-for-using-github-copilot
- GitHub Copilot coding agent task best practices: https://docs.github.com/en/copilot/using-github-copilot/coding-agent/best-practices-for-using-copilot-to-work-on-tasks

## 14. Keputusan Awal yang Direkomendasikan

Untuk kondisi saat ini, rekomendasi paling aman:

1. Mulai dari aplikasi web statis sederhana.
2. Gunakan HTML, CSS, dan JavaScript dasar.
3. Gunakan AI assistant sebagai pair programmer.
4. Pilih satu masalah kecil dari kehidupan sehari-hari.
5. Bangun MVP dalam 2 minggu pertama.
6. Baru setelah itu pertimbangkan React, Next.js, Python, database, atau backend.

## 15. Proyek Pertama yang Direkomendasikan

### Nama Proyek

Personal Problem Tracker

### Problem

Pemula sering punya banyak ide masalah, tetapi tidak tahu mana yang layak dibangun.

### Solusi

Aplikasi sederhana untuk mencatat masalah, target pengguna, tingkat kesulitan, potensi manfaat, dan status ide.

### Fitur MVP

- Tambah masalah baru.
- Lihat daftar masalah.
- Tandai prioritas: rendah, sedang, tinggi.
- Simpan data di browser.
- Export/copy daftar ide.

### Kenapa Proyek Ini Cocok

- Relevan dengan proses belajar vibe coding.
- Tidak butuh backend di awal.
- Mengajarkan form, list, data, localStorage, dan UI sederhana.
- Bisa berkembang menjadi portfolio project.

