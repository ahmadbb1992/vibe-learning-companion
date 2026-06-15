# 📚 Week 1 Learning Notes - Vibe Learning Companion

## 🎯 Apa yang Dipelajari

### Habit Tracker (Issue #2) ✅
- **DOM Manipulation** - Cara membuat, memodifikasi, dan menghapus elemen HTML dari JavaScript.
- **Event Handling** - Mendengarkan user actions (click, submit, change).
- **Array Methods** - `.push()`, `.filter()`, `.map()` untuk manage data.
- **localStorage API** - Simpan & load data di browser secara persistent.
- **State Management** - Simpan data di memory dan sinkronisasi dengan UI.

### Pomodoro Timer (Issue #3) ✅
- **Asynchrony & Timers** - Menggunakan `setInterval` dan `clearInterval` untuk eksekusi code mundur per detik.
- **Document Title Dynamic** - Mengubah judul tab browser secara real-time (`document.title`) agar waktu tetap terlihat saat berpindah tab.
- **Switch State** - Mengatur transisi otomatis antara fase Fokus (25 menit) dan Istirahat (5 menit).
- **Alert Dialogs** - Memanggil notifikasi bawaan browser (`alert`) saat waktu habis.

#### Code Pattern
```javascript
// Pomodoro Count-Down Pattern
pomodoroInterval = setInterval(() => {
  pomodoroSecondsLeft--;
  if (pomodoroSecondsLeft <= 0) {
    clearInterval(pomodoroInterval);
    // Switch state logic ...
  }
  updatePomodoroDisplay();
}, 1000);
```

---

## 🔧 Tech Stack Digunakan
- HTML5: Semantic markup & dynamic DOM.
- CSS3: Slate-gray dark theme & custom fonts.
- Vanilla JavaScript: `setInterval`, `document.title`, Array manipulators.
- localStorage: Menyimpan konfigurasi state.

---

## 📊 Progress Summary

| Fitur | Status | Test | GitHub Issue |
|-------|--------|------|--------------|
| Habit Tracker | ✅ Done | ✅ Passed (4 test cases) | #2 - Closed |
| Pomodoro Timer | ✅ Done | ✅ Passed (8 test cases) | #3 - Closed |
| Telegram Bot | ⏳ Pending | ⏳ Pending | #4 - Open |

---

## 🚀 Next Steps
1. Integrasi dengan Telegram Bot (Issue #4)
2. Deploy ke GitHub Pages
3. Minta feedback dari 2 orang

## UX Improvement: Toast Notification ✅

### Kenapa Ditambahkan
Setelah fitur Habit Tracker dan Pomodoro Timer berjalan, user masih bisa bingung apakah aksi seperti tambah habit, pause timer, atau reset timer benar-benar berhasil. Toast notification memberi feedback cepat tanpa mengganggu alur penggunaan.

### Aksi yang Memunculkan Toast
- Habit ditambahkan
- Habit selesai / belum selesai
- Habit dihapus
- Pomodoro dimulai
- Pomodoro dijeda
- Pomodoro direset
- Sesi fokus selesai
- Break selesai

### Test Tambahan
- Toast helper diuji di `test.html`
- Manual test mencakup semua aksi utama yang memunculkan toast
