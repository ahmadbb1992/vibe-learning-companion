# 📚 Week 1 Learning Notes - Vibe Learning Companion

## 🎯 Apa yang Dipelajari

### Habit Tracker (Issue #2) ✅

#### Konsep Belajar
1. **DOM Manipulation** - Cara membuat, memodifikasi, dan menghapus elemen HTML dari JavaScript
2. **Event Handling** - Mendengarkan user actions (click, submit, change)
3. **Array Methods** - `.push()`, `.filter()`, `.map()` untuk manage data
4. **localStorage API** - Simpan & load data di browser secara persistent
5. **State Management** - Simpan data di memory dan sinkronisasi dengan UI

#### Code Pattern
```javascript
// Pattern: Read → Modify → Save → Render
function updateHabit(id) {
  habits = habits.map(h => 
    h.id === id ? { ...h, done: !h.done } : h
  );
  saveHabits();
  renderHabits();
}
```

#### Key Learning
- Setiap perubahan data harus di-save ke localStorage agar bertahan
- UI harus selalu render ulang setelah data berubah
- Event listener harus di-attach setiap kali render

### Testing Lessons Learned
- **Unit Test Penting** - Test setiap function secara isolated
- **Mock Storage** - localStorage tidak selalu tersedia di file:// protocol
- **BeforeEach Pattern** - Reset state sebelum setiap test untuk result yang konsisten

---

## 🔧 Tech Stack Digunakan
- HTML5: Semantic markup
- CSS3: Dark theme dengan CSS variables
- Vanilla JavaScript: No framework needed
- localStorage: Data persistence
- Test Runner: Custom browser-based test framework

---

## 📝 Error & Solution

### Error #1: localStorage tidak bisa diakses dari file://
**Solusi:** Mock localStorage dengan object biasa untuk development lokal

### Error #2: Test masih "Running tests..." selamanya
**Solusi:** Pastikan script.js termuat sebelum test.js, periksa console untuk errors

### Error #3: Data tidak bertahan setelah refresh
**Solusi:** Pastikan saveHabits() dipanggil setelah setiap perubahan data

---

## 🎓 Prompt Template yang Berguna

### Template #1: Minta AI buat feature baru
```
Buatkan fitur [nama fitur] dengan:
- Input: [apa yang diinput user]
- Output: [apa hasil yang terlihat]
- Data: Simpan di [localStorage/variable]
- Validasi: [apa yang perlu validasi]

Gunakan pattern yang ada di habits, jangan buat ulang.
```

### Template #2: Debugging dengan AI
```
Error: [error message]
Terjadi di: [function name]
Context: [apa yang user lakukan]

Tolong jelaskan masalahnya dan beri solusi step-by-step.
```

---

## 📊 Progress Summary

| Fitur | Status | Test | GitHub Issue |
|-------|--------|------|--------------|
| Habit Tracker | ✅ Done | ✅ Passed | #2 - Closed |
| Pomodoro Timer | 🔄 In Progress | ⏳ Pending | #3 |
| Telegram Bot | ⏳ Pending | ⏳ Pending | #4 |

---

## 🚀 Next Steps
1. Bangun Pomodoro Timer (Issue #3)
2. Test dengan berbagai skenario (auto-switch, pause, etc)
3. Integrasi dengan Telegram Bot (Issue #4)
4. Deploy ke GitHub Pages
5. Minta feedback dari 2 orang

---

**Durasi belajar Week 1:** ~4 jam
**Files created:** index.html, style.css, script.js, test.html
**Commits:** 2 commits
