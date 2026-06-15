# 🧪 Manual Test Checklist - Vibe Learning Companion

## Habit Tracker Tests

### Test Case 1: Tambah Habit Baru
**Skenario:** User membuka app dan ingin menambah kebiasaan
- [ ] Form input habit terlihat jelas
- [ ] Ketik nama habit di input field
- [ ] Klik tombol "+ Tambah" atau tekan Enter
- [ ] Habit muncul di list
- [ ] Input field kosong kembali
- [ ] Progress bar update

**Expected:** Habit baru muncul di list, counter terupdate

---

### Test Case 2: Toggle Habit (Selesai/Belum Selesai)
**Skenario:** User tandai habit yang sudah dikerjakan
- [ ] Habit ada di list
- [ ] Klik checkbox di sebelah habit
- [ ] Habit berubah tampilan (strikethrough/opacity)
- [ ] Progress counter naik (+1)
- [ ] Klik checkbox lagi untuk uncheck
- [ ] Habit kembali ke status normal
- [ ] Progress counter turun (-1)

**Expected:** Status habit berubah, progress akurat

---

### Test Case 3: Hapus Habit
**Skenario:** User ingin menghapus habit dari list
- [ ] Habit ada di list
- [ ] Hover ke habit, tombol "×" terlihat
- [ ] Klik tombol "×"
- [ ] Habit hilang dari list
- [ ] Progress counter update
- [ ] Jika semua habit dihapus, "empty message" muncul

**Expected:** Habit terhapus, list terupdate

---

### Test Case 4: Persistensi Data (localStorage)
**Skenario:** Data harus tetap ada setelah refresh
- [ ] Tambah 3 habit: "Belajar", "Olahraga", "Baca"
- [ ] Tandai 2 habit sebagai selesai
- [ ] Progress: "2 dari 3 selesai"
- [ ] Refresh browser (F5 / Cmd+R)
- [ ] Semua habit masih ada
- [ ] Status checked masih sama
- [ ] Progress masih "2 dari 3 selesai"
- [ ] Hapus 1 habit, refresh lagi
- [ ] Habit yang dihapus tidak kembali

**Expected:** Data persistent di localStorage

---

### Test Case 5: Edge Cases
**Skenario:** Handling kondisi khusus
- [ ] Tambah habit dengan nama kosong (tidak boleh submit)
- [ ] Tambah habit dengan 50 karakter (max length)
- [ ] Tambah 10+ habit (list tetap scrollable)
- [ ] Clear semua habit, cek empty message
- [ ] Buka DevTools console, cek tidak ada error

**Expected:** App handle edge cases dengan baik

---

### Test Case 6: Responsive Design
**Skenario:** App harus berfungsi di mobile & desktop
- [ ] **Desktop (1200px+):** 3 kolom visible (habit, pomodoro, telegram)
- [ ] **Tablet (800px):** Switch ke single column
- [ ] **Mobile (375px):** Layout tetap clean, input tetap besar
- [ ] Input field bisa di-tap dengan mudah
- [ ] Text readable di semua ukuran
- [ ] Scroll berjalan smooth

**Expected:** Responsive di semua ukuran layar

---

## Browser Unit Test Results

### Automated Tests (test.html)
- [x] Test 1: Tambah habit → PASSED
- [x] Test 2: Toggle habit → PASSED
- [x] Test 3: Hapus habit → PASSED
- [x] Test 4: localStorage persistence → PASSED

**Total:** 4/4 tests passed ✅

---

## Performance & UX

### Performance Checklist
- [ ] Load time < 1 detik
- [ ] Click response instant (tidak ada lag)
- [ ] Scroll smooth (60 FPS)
- [ ] Memory usage reasonable (DevTools)

### UX Checklist
- [ ] Text color contrast sufficient (WCAG AA)
- [ ] Focus states jelas untuk keyboard navigation
- [ ] Error messages helpful & visible
- [ ] Button/link cursor change jelas (pointer)

---

## Known Issues & Fixes

| Issue | Status | Note |
|-------|--------|------|
| localStorage tidak work di file:// | Fixed | Mock storage di test.html |
| Test runner stuck "Running tests..." | Fixed | Remove duplicate beforeEach reset |
| Habit ID collision | Fixed | Use incrementing counter |

---

## Test Date & Environment
- **Date:** 2026-06-15
- **Browser:** Chrome, Firefox, Safari
- **Device:** Desktop, Tablet, Mobile
- **Network:** Offline (no API calls in MVP)

**Tested By:** Vibe Learner
