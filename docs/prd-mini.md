# PRD Mini: Vibe Learning Companion

## 1. Masalah & Tujuan
Saat belajar vibe coding, kita butuh alat untuk:
- Membangun kebiasaan belajar secara konsisten (Habit Tracker).
- Menjaga fokus selama sesi belajar (Pomodoro Timer).
- Mencatat ide atau catatan penting dengan cepat secara mobile via Telegram Bot.

Aplikasi ini menyatukan ketiga alat tersebut dalam satu antarmuka web yang sederhana, responsif, dan menyimpan data secara lokal di browser (`localStorage`).

---

## 2. Fitur MVP (Minimum Viable Product)

### Fitur 1: Habit Tracker
- Daftar kebiasaan belajar (bisa ditambah/dihapus).
- Checkbox harian untuk menandai kebiasaan yang selesai hari ini.
- Visualisasi progress harian (misal: "3 dari 5 kebiasaan selesai").
- Data tersimpan otomatis di `localStorage`.

### Fitur 2: Pomodoro Timer Sederhana
- Timer 25 menit (Fokus) dan 5 menit (Istirahat).
- Tombol Start, Pause, dan Reset.
- Suara notifikasi sederhana atau peringatan browser ketika waktu habis.
- Status timer terintegrasi dengan aktivitas mencatat.

### Fitur 3: Integrasi Telegram Bot (Quick Capture)
- Input kolom untuk `Telegram Bot Token` dan `Chat ID` (tersimpan di `localStorage` agar aman/lokal).
- Form "Kirim Ide Cepat" di web yang langsung terkirim ke Telegram pengguna via Bot.
- Tombol/fitur untuk generate template laporan progress harian untuk dikirim ke Telegram sendiri.

---

## 3. Desain & Antarmuka (UI)
- **Tema:** Dark mode (Obsidian / Slate gray) agar nyaman di mata saat belajar malam hari.
- **Layout:** One-page dashboard (Sidebar/Grid) yang responsif:
  - Panel Kiri: Pomodoro Timer & Telegram Configuration.
  - Panel Tengah: Habit Tracker.
  - Panel Kanan: Quick Note & Send to Telegram.

---

## 4. Kriteria Sukses (Definisi Selesai)
- [ ] Habit tracker bisa menambah, menceklis, dan menghapus habit tanpa kehilangan data saat di-refresh.
- [ ] Pomodoro timer berjalan mundur dengan benar, bisa dipause, dan memicu bunyi/alert saat 00:00.
- [ ] Form telegram bisa mengirim pesan teks ke chat Telegram yang dikonfigurasi.
- [ ] Aplikasi responsif di mobile dan desktop.
