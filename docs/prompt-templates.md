# 💬 Prompt Templates untuk Vibe Coding dengan AI

Template berikut membantu Anda menulis prompt yang lebih efektif ke AI coding assistant.

---

## Template #1: Build New Feature

```
Buatkan fitur [FEATURE NAME] untuk aplikasi Habit Tracker.

TUJUAN:
[Jelaskan kenapa fitur ini penting]

REQUIREMENT:
- Input: User akan [apa action yang user lakukan]
- Output: Sistem akan [apa hasil yang terlihat]
- Data: Simpan di [localStorage/variable/array]
- Validasi: [Apa yang perlu dicek]

REFERENSI KODE YANG SUDAH ADA:
[Paste relevant code snippet dari script.js yang menunjukkan pattern yang sudah ada]

JANGAN:
- Jangan rewrite keseluruhan file, hanya fungsi yang diminta
- Jangan ganti naming convention yang sudah ada
- Jangan tambahin library/framework baru

ACCEPTANCE CRITERIA:
- [ ] Fungsi berfungsi sesuai requirement
- [ ] Data bertahan di localStorage
- [ ] UI terupdate otomatis
- [ ] Tidak ada console error
```

**Contoh Pemakaian:**
```
Buatkan fitur Clear All Habits untuk aplikasi Habit Tracker.

TUJUAN:
User bisa reset semua habit sekaligus di tombol "Clear All".

REQUIREMENT:
- Input: User klik tombol "Clear All"
- Output: Konfirmasi dialog (Are you sure?), jika yes hapus semua
- Data: Clear dari localStorage
- Validasi: Pastikan tidak accident delete

REFERENSI:
[Paste deleteHabit function]

JANGAN:
- Jangan rewrite keseluruhan file
- Jangan ubah naming convention

ACCEPTANCE CRITERIA:
- [ ] Tombol "Clear All" ada
- [ ] Konfirmasi dialog muncul
- [ ] Jika confirm, semua habit hilang
- [ ] localStorage kosong
```
```

---

## Template #2: Debug & Fix Error

```
ERROR REPORT:

DESKRIPSI:
[Jelaskan apa yang terjadi]

ERROR MESSAGE:
[Copy paste error dari console]

REPRODUKSI:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED:
[Apa yang seharusnya terjadi]

ACTUAL:
[Apa yang terjadi sekarang]

KONTEKS:
[Apa yang user lakukan sebelum error]

TOLONG:
- Jelaskan penyebab error
- Kasih solusi step-by-step
- Jangan rewrite besar-besaran, cukup fix bagian yang error
```

**Contoh Pemakaian:**
```
ERROR REPORT:

DESKRIPSI:
Ketika saya refresh browser, semua habit hilang meski sudah ditandai selesai.

ERROR MESSAGE:
Tidak ada di console (silent fail)

REPRODUKSI:
1. Tambah 2 habit
2. Tandai 1 habit sebagai selesai
3. Refresh browser (F5)
4. Habit masih ada tapi status checked hilang

EXPECTED:
Status checked harus bertahan setelah refresh

ACTUAL:
Status hilang, semua unchecked

KONTEKS:
Baru saja belajar localStorage di Week 1

TOLONG:
Jelaskan kenapa status hilang dan bagaimana cara fix di localStorage
```
```

---

## Template #3: Code Review

```
CODE REVIEW REQUEST:

KODE:
[Paste kode yang mau di-review]

FOCUS:
- Apakah logika sudah benar?
- Ada edge case yang terlewat?
- Bisa disederhanakan?
- Ada code smell / anti-pattern?
- Performance issue?

PERTANYAAN:
[Apa pertanyaan specific tentang kode ini]

KONTEKS:
[Apa yang kode ini lakukan dalam aplikasi]
```

**Contoh Pemakaian:**
```
CODE REVIEW REQUEST:

KODE:
function updateProgress() {
  const total = habits.length;
  const doneCount = habits.filter(h => h.done).length;
  const percent = total > 0 ? (doneCount / total) * 100 : 0;
  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${doneCount} dari ${total} selesai (${Math.round(percent)}%)`;
}

FOCUS:
- Apakah logic sudah benar?
- Ada edge case yang terlewat?
- Bisa dibikin lebih clean?

PERTANYAAN:
Kenapa guna filter dua kali (saat hitung done dan saat render)?

KONTEKS:
Ini function update progress bar di habit tracker
```
```

---

## Template #4: Explain Code

```
EXPLAIN CODE REQUEST:

KODE:
[Paste kode]

UNTUK:
Pemula yang baru belajar JavaScript

FORMAT YANG DIMINTA:
1. Apa tujuan kode ini (1 kalimat)?
2. Setiap line dijelaskan apa yang dilakukan
3. Apa yang bisa salah (error case)
4. Bagaimana cara test kode ini

JANGAN:
- Jangan pakai istilah technical terlalu banyak
- Jelaskan pakai analogi dunia nyata kalau bisa
```

**Contoh Pemakaian:**
```
EXPLAIN CODE REQUEST:

KODE:
habits = habits.map(h => 
  h.id === id ? { ...h, done: !h.done } : h
);

UNTUK:
Pemula yang baru belajar JavaScript

FORMAT:
1. Tujuan (1 kalimat)
2. Setiap line dijelaskan
3. Apa yang bisa salah
4. Cara test

JANGAN:
- Pakai istilah technical terlalu banyak
- Gunakan analogi sederhana
```
```

---

## Template #5: Add Test Case

```
TEST CASE REQUEST:

FITUR:
[Nama fitur yang mau di-test]

SKENARIO:
[Jelaskan use case yang ingin di-test]

LANGKAH:
1. [Step 1]
2. [Step 2]
3. [Step 3]

EXPECTED RESULT:
[Apa yang seharusnya terjadi]

ASSERTION:
- [ ] [Condition 1]
- [ ] [Condition 2]

CODE PATTERN:
[Reference code dari test.html]
```

**Contoh Pemakaian:**
```
TEST CASE REQUEST:

FITUR:
Delete Habit

SKENARIO:
User ingin hapus habit yang sudah tidak relevan

LANGKAH:
1. Tambah 3 habit
2. Hapus habit yang di tengah
3. Periksa array habits

EXPECTED:
Array hanya punya 2 habit, yang di tengah hilang

ASSERTION:
- [ ] habits.length === 2
- [ ] habits[0].name bukan habit yang dihapus
- [ ] localStorage terupdate
```
```

---

## Tips untuk Menggunakan Template

1. **Jangan Copy-Paste Mentah** - Adapt template sesuai kebutuhan Anda
2. **Selalu Kasih Konteks** - AI butuh tahu apa background masalah
3. **Spesifik > Umum** - Semakin detail, semakin baik response AI
4. **Paste Kode Relevan** - Jangan kasih seluruh file, cukup snippet yang relevan
5. **Explain What You Want** - Jangan bertanya "bagaimana?" tapi "saya mau [X] terjadi"

---

## Anti-Pattern Prompt yang Hindari

❌ **JANGAN:** "Fix kode ini"
✅ **LEBIH BAIK:** "Kode ini memberikan error [X] saat saya [Y]. Tolong kasih solusi."

❌ **JANGAN:** "Bikin fitur bagus"
✅ **LEBIH BAIK:** "Buatkan fitur [X] dengan input [Y] dan output [Z]"

❌ **JANGAN:** "Apa arti kode ini?"
✅ **LEBIH BAIK:** "Jelaskan kode ini untuk pemula: [code], terutama bagian [specific line]"

---

**Last Updated:** Week 1
**Next Review:** Week 2
