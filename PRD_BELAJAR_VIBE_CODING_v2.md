# PRD — Belajar Vibe Coding untuk Pemula Non-Programmer (v2)

## 1. Ringkasan

Produk ini adalah **program belajar mandiri 8 minggu** untuk membantu pemula tanpa latar belakang programming mempelajari _vibe coding_: cara membangun produk digital dengan bantuan AI coding agent, sambil tetap memahami dasar-dasar produk, logika, debugging, dan validasi masalah.

Fokus utama bukan menghafal bahasa pemrograman tertentu, tetapi belajar pola kerja:
1. menemukan masalah nyata,
2. menulis requirement yang jelas,
3. meminta AI membangun versi kecil,
4. menguji hasil,
5. memperbaiki dengan iterasi kecil,
6. mendokumentasikan pembelajaran.

---

## 2. Latar Belakang

Pemula sering bingung memulai programming karena terlalu banyak pilihan: HTML, CSS, JavaScript, Python, React, database, hosting, Git, dan sebagainya. Dengan AI coding tools seperti Codex, GitHub Copilot, Claude Code, Cursor, atau tools serupa, pemula bisa mulai dari **masalah dan hasil akhir** terlebih dahulu, lalu belajar konsep teknis secara bertahap.

Namun, vibe coding tetap membutuhkan disiplin. AI bisa membantu menulis kode, tetapi pengguna tetap perlu belajar cara menjelaskan kebutuhan, membaca hasil, menguji aplikasi, mengenali error, dan menjaga scope tetap kecil.

---

## 3. Target Pengguna

### Pengguna Utama

- Orang non-programmer yang ingin membangun solusi kecil untuk masalah sehari-hari.
- Pemula yang nyaman belajar dengan eksperimen, bukan teori panjang di awal.
- Solo builder, pelajar, pekerja, freelancer, atau founder awal.

### Kondisi Awal Pengguna

- Bisa menggunakan laptop dan browser.
- Belum paham programming, Git, terminal, database, atau deployment.
- Punya minat membangun sesuatu yang berguna.

---

## 4. Tujuan Produk Pembelajaran

Setelah menyelesaikan program ini, pengguna mampu:

- Menjelaskan masalah yang ingin diselesaikan dalam format sederhana.
- Membuat PRD mini untuk aplikasi kecil.
- Menggunakan AI coding assistant untuk membuat, memperbaiki, dan menjelaskan kode.
- Menjalankan aplikasi lokal di komputer.
- Menguji fitur utama secara manual.
- Melakukan iterasi berdasarkan error, feedback, dan kebutuhan pengguna.
- Mempublikasikan minimal 1 proyek sederhana ke GitHub Pages.

---

## 5. Prinsip Pembelajaran

1. **Problem first, tech second** — mulai dari masalah nyata, bukan framework.
2. **Small project, fast feedback** — bangun versi sangat kecil dulu.
3. **Prompt like a product manager** — jelaskan tujuan, batasan, contoh input-output, dan kriteria sukses.
4. **AI writes, you verify** — AI boleh menulis kode, tetapi pengguna wajib menguji.
5. **One change at a time** — hindari meminta AI mengubah terlalu banyak hal sekaligus.
6. **Document everything** — catat prompt, error, solusi, dan pelajaran.
7. **Progress via GitHub Issues** — track perkembangan, keputusan, dan pembelajaran di satu tempat.

---

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
- Cara deploy aplikasi sederhana ke GitHub Pages.
- Cara tracking progress dan pembelajaran di GitHub Issues.

### Out of Scope

- Belajar algoritma kompleks.
- Menguasai semua bahasa pemrograman.
- Membangun aplikasi enterprise.
- Optimasi performa tingkat lanjut.
- Keamanan tingkat production yang kompleks.
- Infrastruktur cloud kompleks.

---

## 7. Pilihan Stack: Fokus vs. Paralel

Program ini **fleksibel berdasarkan kebutuhan dan preferensi**.

### Opsi A — Mode Fokus (Rekomendasi untuk Pemula Total)

Pilih **satu jalur saja** untuk 8 minggu pertama. Setelah selesai, pelajari jalur lain.

**Jalur A1 — Web Statis (HTML + CSS + JS)**
- Cocok untuk: landing page, kalkulator, catatan lokal, portfolio, tracker.
- Deploy: GitHub Pages (paling mudah).
- Durasi: 4-6 minggu.

**Jalur A2 — Web App (HTML + CSS + JS + localStorage)**
- Cocok untuk: dashboard kecil, form tracker, katalog, habit tracker, to-do app.
- Deploy: GitHub Pages.
- Durasi: 6-8 minggu.

**Jalur A3 — Otomasi & Data (Python + CSV/JSON)**
- Cocok untuk: automasi file, analisis data kecil, generator laporan.
- Deploy: Script lokal atau Streamlit Cloud.
- Durasi: 6-8 minggu.

### Opsi B — Mode Paralel (Advanced Learners)

Jika pengguna ingin belajar dua jalur bersamaan:
- **Minggu 1-2**: Jalur A1 (web statis) → build & deploy.
- **Minggu 3-5**: Jalur A2 (web app) → build, iterate, deploy.
- **Minggu 6-8**: Jalur A3 (Python) → automasi mini → dokumentasi.

**Syarat mode paralel:**
- Pengguna sudah familiar dengan 1 proyek kecil.
- Dedikasi 10-12 jam per minggu.
- Mentor atau peer available untuk debugging.

### Rekomendasi Awal

- **Pemula total**: Mode Fokus, Jalur A1 atau A2.
- **Pemula dengan background teknis**: Mode Fokus, Jalur A2, lalu Jalur A3.
- **Learner agresif**: Mode Paralel, A1 + A2 (minggu 1-5), A3 (minggu 6-8).

---

## 8. Kurikulum 8 Minggu (Mode Fokus - Jalur A2)

### Minggu 1 — Mindset, Tools, dan Proyek Mini Pertama

**Tujuan:**
- Memahami apa itu vibe coding.
- Menyiapkan editor, terminal, browser, dan AI coding assistant.
- Membuat halaman web pertama dan push ke GitHub.

**GitHub Issues:**
- [ ] Issue #1: Setup environment (editor, browser, AI assistant, Git).
- [ ] Issue #2: Create first HTML page locally.
- [ ] Issue #3: Push to GitHub and enable GitHub Pages.

**Output:**
- Repository di GitHub dengan branch `main`.
- File `index.html`, `style.css` sederhana.
- GitHub Pages live (URL: `https://username.github.io/repo-name/`).
- Learning log: `docs/week-1-learning.md` berisi setup steps.

**Checklist Manual Testing:**
- [ ] Halaman terbuka di browser.
- [ ] Styling CSS terlihat.
- [ ] GitHub Pages deploy berhasil.

---

### Minggu 2 — Prompting untuk Coding

**Tujuan:**
- Belajar menulis prompt yang jelas.
- Memahami konsep requirement, acceptance criteria, edge case.

**GitHub Issues:**
- [ ] Issue #4: Learn PRD mini template.
- [ ] Issue #5: Create reusable prompt templates (5 templates).
- [ ] Issue #6: Document first 5 prompts in learning log.

**Output:**
- File `docs/prompt-templates.md` dengan minimal 5 prompt reusable.
- Learning log: `docs/week-2-learning.md`.

**Prompt Template Categories:**
1. "Explain this code to me like I'm 10 years old"
2. "Add feature X with acceptance criteria: [ABC]"
3. "I got this error. Help me understand and fix"
4. "Refactor this part to be simpler"
5. "Write test checklist for feature X"

---

### Minggu 3-4 — Mini PRD & Feature Building

**Tujuan:**
- Menulis PRD mini sebelum membangun fitur.
- Build dan test fitur pertama untuk Personal Problem Tracker.

**GitHub Issues:**
- [ ] Issue #7: Mini PRD - Personal Problem Tracker (problem + target user + scope).
- [ ] Issue #8: Feature 1 - Add new problem (form, validation).
- [ ] Issue #9: Feature 2 - List problems with priority.
- [ ] Issue #10: Feature 3 - Mark problem as done/archived.

**Output per Issue:**
- PRD mini dokumentasi.
- Feature branch, code changes, manual test checklist.
- Pull Request (PR) dengan deskripsi singkat issue yang diselesaikan.

**Acceptance Criteria (setiap Issue):**
- Code merged ke `main`.
- Feature tested secara manual (checklist dibuat).
- Learning log dibuat atau di-update.

---

### Minggu 5 — localStorage & Persistence

**Tujuan:**
- Data aplikasi bisa disimpan di browser.
- Data bertahan setelah refresh.

**GitHub Issues:**
- [ ] Issue #11: Implement localStorage for problem data.
- [ ] Issue #12: Add export data feature (JSON).
- [ ] Issue #13: Test data persistence across sessions.

**Output:**
- Feature complete, PR merged.
- Testing documentation: `docs/week-5-testing.md`.

---

### Minggu 6 — Polish UI & UX

**Tujuan:**
- Aplikasi terlihat lebih polished.
- User experience lebih smooth.

**GitHub Issues:**
- [ ] Issue #14: Improve CSS styling (mobile-friendly).
- [ ] Issue #15: Add loading states & feedback messages.
- [ ] Issue #16: Add dark mode toggle (optional).

**Output:**
- Responsive design tested di mobile.
- PR merged.

---

### Minggu 7 — Documentation & Deployment

**Tujuan:**
- README yang jelas.
- Deploy ke GitHub Pages.
- Test checklist tertulis.

**GitHub Issues:**
- [ ] Issue #17: Write comprehensive README.md.
- [ ] Issue #18: Create test checklist for QA.
- [ ] Issue #19: Deploy to GitHub Pages and test live.

**Output:**
- `README.md` lengkap dengan screenshot.
- `docs/test-checklist.md`.
- Live URL: `https://username.github.io/personal-problem-tracker/`.

---

### Minggu 8 — Iteration & Reflection

**Tujuan:**
- Collect feedback dari minimal 2 orang.
- Prioritas dan build 1-2 improvement berdasarkan feedback.
- Dokumentasikan pembelajaran selama 8 minggu.

**GitHub Issues:**
- [ ] Issue #20: Collect feedback from 2 users.
- [ ] Issue #21: Improvement based on feedback (prioritized).
- [ ] Issue #22: Final retrospective & learning summary.

**Output:**
- Feedback documented: `docs/feedback.md`.
- PR dengan improvements.
- Final learning log: `docs/week-8-retrospective.md`.

---

## 9. Personal Problem Tracker — Definisi Singkat

**Problem:**
Pemula punya banyak ide masalah, tetapi tidak tahu mana yang layak dibangun terlebih dahulu.

**Solusi:**
Aplikasi web sederhana untuk mencatat masalah, target pengguna, tingkat kesulitan, dan potensi manfaat.

**Fitur MVP:**
1. **Add Problem**: Form dengan fields: nama masalah, target user, difficulty (1-5), potential impact (1-5).
2. **List Problems**: Tabel atau card dengan sort by priority.
3. **Mark Done/Archive**: Toggle status setiap problem.
4. **Export Data**: Download JSON atau copy to clipboard.
5. **Persistent Storage**: Data tersimpan di browser localStorage.

**Why This Project:**
- Relevan dengan proses belajar vibe coding.
- Tidak butuh backend.
- Mengajarkan: form handling, data persistence, list rendering, basic UI.
- Bisa berkembang: add tags, filter, search, export CSV, share link.
- Portfolio-ready project.

**Tech Stack:**
- HTML, CSS, JavaScript.
- localStorage API.
- (Optional) Simple CSS framework atau custom CSS.

---

## 10. Metrik Sukses — Pembelajaran + Produk

### Metrik Pembelajaran (per minggu)

| Minggu | Target | Indikator |
|--------|--------|-----------|
| 1-2 | Setup & Prompting | Repo live di GitHub Pages + 5 prompt templates |
| 3-4 | PRD & Features | Issue #7-10 merged, 3 fitur core working |
| 5 | Data Persistence | localStorage implemented & tested |
| 6 | Polish | Responsive design, tested di mobile |
| 7 | Deploy | Live di GitHub Pages, README complete |
| 8 | Iteration | 2+ feedback items, 1+ improvement merged |

### Metrik Produk (end of week 8)

- ✅ Repository public di GitHub.
- ✅ Live URL di GitHub Pages.
- ✅ Minimal 3 fitur core working.
- ✅ localStorage berfungsi.
- ✅ README lengkap dengan screenshot.
- ✅ Test checklist manual tersedia.
- ✅ Minimal 2 orang sudah coba & memberikan feedback.
- ✅ Minimal 1 improvement berdasarkan feedback merged.

### Metrik GitHub Issues (Tracking)

- Total issues created: ~22.
- Issues closed: 22/22 (100%).
- Average PR review time: 1-2 hari.
- Learning log updates: Minimal 1 per minggu.
- Issues linked to learning outcomes.

---

## 11. GitHub Issues Workflow

### Issue Template untuk Fitur

```markdown
## Issue #[N]: [Fitur / Task]

### Description
[Jelaskan fitur atau task apa yang harus dikerjakan]

### Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

### Manual Test Checklist
- [ ] Test case 1
- [ ] Test case 2

### Out of Scope
- [Apa yang tidak termasuk di issue ini]

### Learning Notes
- [Apa yang dipelajari dari issue ini]
```

### Issue Linking

- Feature issues linked ke learning issues.
- Bug fixes linked ke debugging learning.
- Example: `Closes #8 (Feature 1 - Add new problem)`.

### Labels

- `week-1`, `week-2`, ... `week-8`: Track by week.
- `feature`: Fitur baru.
- `bug`: Bug fix.
- `documentation`: Docs, learning log.
- `learning`: Learning activity.
- `deployment`: Deploy-related.

---

## 12. Template Prompt Utama

### Prompt #1 — Mini PRD

```text
Saya pemula non-programmer. Bantu saya membuat PRD mini.

Masalah:
[jelaskan masalah]

Target user:
[siapa yang pakai]

Goal dalam 2 minggu:
[apa target sukses]

Format output:
- Problem statement (1 paragraph)
- Target user (1 sentence)
- MVP features (3-5 fitur)
- Out of scope (3-5 hal yang tidak dimasukkan)
- Acceptance criteria (3-5 kriteria)

Jangan:
- Jangan kompleks.
- Jangan backend atau database.
```

### Prompt #2 — Tambah Fitur

```text
Konteks: [jelaskan aplikasi]

Fitur yang mau ditambah:
[jelaskan fitur]

Acceptance criteria:
- [AC 1]
- [AC 2]
- [AC 3]

Instruksi:
1. Jelaskan rencana dulu sebelum mengubah kode.
2. Ubah sesedikit mungkin file.
3. Beri contoh cara test manual.
4. Jangan ganti struktur yang ada.
```

### Prompt #3 — Debug Error

```text
Error yang saya dapat:
[paste error]

Konteks:
- Saya jalankan: [command]
- File terkait: [nama file]
- Perubahan terakhir: [jelaskan]

Tolang:
1. Jelaskan error dengan bahasa sederhana.
2. Kemungkinan penyebab (3-5 item).
3. Langkah perbaikan dari yang teraman.
4. Jangan rewrite besar-besaran.
```

### Prompt #4 — Code Review

```text
Review kode saya:

File: [nama file]
Kode:
[paste kode]

Focus:
- Apakah logika benar?
- Ada edge case yang terlewat?
- Bisa disederhanakan?
- Ada security issue?

Jangan:
- Jangan rewrite total.
- Jangan suggest framework baru.
```

### Prompt #5 — Explain Code

```text
Jelaskan kode ini untuk pemula:

[paste kode]

Format:
1. Apa tujuan kode ini?
2. Setiap line = apa yang dilakukan?
3. Kalau error, apa yang bisa salah?
4. Bagaimana cara test?
```

---

## 13. Stack Rekomendasi Detail

### Jalur A1 — Web Statis (4-6 minggu)

**Tech:**
- HTML5
- CSS3 (atau simple framework: Pico CSS, Water CSS)
- Vanilla JavaScript (kalau perlu interaksi)

**Tools:**
- VS Code (editor)
- Git + GitHub (version control)
- GitHub Pages (deployment)

**Cocok untuk:**
- Landing page
- Portfolio
- Blog sederhana
- Dokumentasi

**Contoh:**
```
project/
├── index.html
├── style.css
├── script.js (optional)
└── docs/
    └── learning-log.md
```

---

### Jalur A2 — Web App (6-8 minggu)

**Tech:**
- HTML5 + CSS3
- Vanilla JavaScript (DOM, fetch, localStorage)
- localStorage API (data persistence)
- Optional: Pico CSS atau Tailwind Play

**Tools:**
- VS Code
- Git + GitHub
- GitHub Pages atau Vercel
- Browser DevTools

**Cocok untuk:**
- Dashboard kecil
- To-do app
- Habit tracker
- Problem tracker
- Form builder

**Contoh:**
```
project/
├── index.html
├── style.css
├── script.js
├── README.md
└── docs/
    ├── learning-log.md
    ├── test-checklist.md
    └── prd-mini.md
```

---

### Jalur A3 — Otomasi & Data (6-8 minggu)

**Tech:**
- Python 3.x
- pandas (optional, untuk data processing)
- CSV / JSON
- Streamlit (optional, untuk UI web)

**Tools:**
- VS Code
- Python (local atau cloud)
- Git + GitHub
- Optional: Streamlit Cloud

**Cocok untuk:**
- Automasi file processing
- Data analysis
- Report generator
- Log parser
- CSV to JSON converter

**Contoh:**
```
project/
├── main.py
├── requirements.txt
├── data/
│   └── input.csv
├── README.md
└── docs/
    └── learning-log.md
```

---

## 14. Risiko dan Mitigasi

### Risiko: Terlalu Bergantung pada AI

**Mitigasi:**
- Selalu minta AI menjelaskan kode.
- Ubah bagian kecil secara manual.
- Tulis ulang pemahaman di learning log.

---

### Risiko: Scope Terlalu Besar

**Mitigasi:**
- Pakai batasan MVP ketat.
- Maksimal 3-5 fitur utama.
- Catat ide tambahan di `future-ideas.md`.
- Setiap issue jelas scopenya.

---

### Risiko: Bingung dengan Banyak Tools

**Mitigasi:**
- Minggu 1 hanya: editor + browser + Git.
- Tambah tools satu per minggu kalau perlu.
- Jangan pindah framework sebelum project selesai.

---

### Risiko: Error Membuat Frustrasi

**Mitigasi:**
- Jadikan error sebagai bahan belajar.
- Dokumentasikan error di GitHub Issues.
- Perbaiki satu error per langkah.
- Gunakan DevTools browser untuk debug.

---

## 15. Persiapan Pemula

### Pre-Program Checklist (sebelum minggu 1)

- [ ] Install VS Code: https://code.visualstudio.com/
- [ ] Install Git: https://git-scm.com/
- [ ] Buat GitHub account: https://github.com/signup
- [ ] Install browser terbaru (Chrome, Firefox, Safari, Edge).
- [ ] Pilih AI coding assistant: Codex CLI, GitHub Copilot, Claude, atau Cursor.
- [ ] Pilih jalur belajar: A1, A2, atau A3.

### Folder Struktur Awal

```
belajar-vibe-coding/
├── README.md
├── index.html (atau main.py untuk Jalur A3)
├── style.css
├── script.js
└── docs/
    ├── week-1-learning.md
    ├── prd-mini.md
    ├── prompt-templates.md
    ├── test-checklist.md
    └── retrospective.md
```

---

## 16. Keputusan Awal yang Direkomendasikan

Untuk kondisi saat ini:

1. **Jalur**: Mulai dari **Jalur A2 (Web App)** untuk dampak maksimal.
2. **Duration**: 8 minggu, 1 proyek selesai, live di GitHub Pages.
3. **Tracking**: GitHub Issues untuk setiap minggu & fitur.
4. **Output**: Public repo + live app + feedback dari 2 orang + learning log.
5. **AI Assistance**: Pair programming untuk setiap fitur, bukan full code generation.

---

## 17. Success Criteria Akhir Program

Pengguna dianggap **lulus** jika:

- ✅ Repository public, live di GitHub Pages.
- ✅ Minimal 3 fitur MVP working.
- ✅ localStorage / data persistence bekerja.
- ✅ README lengkap dengan screenshot dan cara menggunakan.
- ✅ Test checklist manual lengkap dan di-jalankan.
- ✅ Minimal 2 orang sudah coba dan memberikan feedback.
- ✅ Minimal 1 feedback di-implement dan di-merge.
- ✅ Learning log per minggu tersedia.
- ✅ Prompt templates (5+) terdokumentasi.
- ✅ GitHub Issues workflow diterapkan (22 issues closed).

