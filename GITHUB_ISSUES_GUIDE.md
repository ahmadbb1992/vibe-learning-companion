# GitHub Issues Workflow untuk Belajar Vibe Coding

## Cara Menggunakan GitHub Issues

GitHub Issues adalah tempat untuk **tracking** perkembangan, keputusan, dan pembelajaran dalam satu tempat. Setiap issue mewakili satu task, fitur, atau learning activity.

---

## Issue Structure

### Issue Template Standar

```markdown
## Issue #[N]: [Judul Task/Fitur]

### 📋 Description
[Jelaskan apa yang harus dikerjakan dan kenapa penting]

### ✅ Acceptance Criteria
- [ ] Criteria 1
- [ ] Criteria 2
- [ ] Criteria 3

### 🧪 Manual Test Checklist
- [ ] Test case 1
- [ ] Test case 2
- [ ] Test case 3

### 🚫 Out of Scope
[Apa yang tidak termasuk di issue ini]

### 📚 Learning Notes
[Apa yang dipelajari dari issue ini]
```

---

## Issue Categories (Minggu 1-8)

### **Minggu 1: Setup & Tools** (Issues #1-3)

#### Issue #1: Setup Environment
```markdown
## Issue #1: Setup Environment

### Description
Persiapan tools dan environment untuk belajar vibe coding.

### Acceptance Criteria
- [ ] VS Code installed
- [ ] Git installed & configured
- [ ] GitHub account created
- [ ] AI assistant chosen & setup
- [ ] Local repo created

### Learning Notes
- [Recap setup steps]
- [Tools yang dipilih dan kenapa]
```

#### Issue #2: Create First HTML Page
```markdown
## Issue #2: Create First HTML Page

### Description
Membuat halaman HTML pertama dengan CSS styling sederhana.

### Acceptance Criteria
- [ ] index.html dibuat dengan struktur dasar
- [ ] style.css dibuat dengan styling minimal
- [ ] File bisa dibuka di browser
- [ ] Commit pertama ke GitHub

### Manual Test Checklist
- [ ] Buka index.html di browser
- [ ] Styling CSS terlihat (warna, font, spacing)
- [ ] File struktur jelas di folder

### Learning Notes
- [Apa itu HTML tags?]
- [Apa itu CSS?]
- [Bagaimana struktur folder?]
```

#### Issue #3: Push to GitHub Pages
```markdown
## Issue #3: Push to GitHub Pages

### Description
Deploy halaman pertama ke GitHub Pages untuk live URL.

### Acceptance Criteria
- [ ] Repository dipush ke GitHub
- [ ] GitHub Pages enabled
- [ ] Live URL tersedia dan accessible
- [ ] README.md dibuat

### Manual Test Checklist
- [ ] Kunjungi https://[username].github.io/[repo-name]/
- [ ] Halaman terbuka dengan benar

### Learning Notes
- [Apa itu GitHub Pages?]
- [Bagaimana cara deploy?]
```

---

### **Minggu 2: Prompting & PRD** (Issues #4-6)

#### Issue #4: Learn PRD Mini Template
```markdown
## Issue #4: Learn PRD Mini Template

### Description
Memahami dan membuat template PRD mini.

### Acceptance Criteria
- [ ] Template PRD dibuat
- [ ] Contoh PRD mini ditulis
- [ ] File `docs/prd-template.md` tersimpan

### Learning Notes
- [Apa itu PRD?]
- [Section apa saja dalam PRD mini?]
- [Contoh PRD yang baik]
```

#### Issue #5: Create Reusable Prompt Templates
```markdown
## Issue #5: Create Reusable Prompt Templates

### Description
Mengumpulkan 5 prompt templates yang reusable untuk coding.

### Acceptance Criteria
- [ ] 5 prompt templates dibuat
- [ ] Setiap template punya contoh
- [ ] File `docs/prompt-templates.md` tersimpan
- [ ] Setiap template di-test minimal 1x

### Manual Test Checklist
- [ ] Copy-paste prompt 1 ke AI assistant
- [ ] AI memberikan output yang useful
- [ ] Repeat untuk prompt 2-5

### Prompt Templates:
1. Explain code (like I'm 10 years old)
2. Add feature (with AC)
3. Debug error (understand + fix)
4. Code review (check quality)
5. Create test checklist

### Learning Notes
- [Apa elemen penting prompt yang baik?]
- [Bagaimana struktur prompt yang jelas?]
```

#### Issue #6: Document First Prompts
```markdown
## Issue #6: Document First Prompts

### Description
Dokumentasikan learning dari minggu pertama dengan mencatat prompt yang sudah dipakai.

### Acceptance Criteria
- [ ] Minimal 5 prompt dicatat
- [ ] Output dari setiap prompt dicatat
- [ ] Learning notes per prompt ditulis

### File Output:
- `docs/week-2-learning.md`

### Learning Notes
- [Apa yang sudah dipelajari tentang prompting?]
- [Error apa yang pernah terjadi?]
- [Bagaimana cara mengatasinya?]
```

---

### **Minggu 3-4: PRD & Fitur Core** (Issues #7-10)

#### Issue #7: Mini PRD - Personal Problem Tracker
```markdown
## Issue #7: Mini PRD - Personal Problem Tracker

### Description
Membuat PRD mini untuk Personal Problem Tracker application.

### Acceptance Criteria
- [ ] Problem statement ditulis
- [ ] Target user jelas
- [ ] MVP features terdaftar (3-5)
- [ ] Out of scope ditulis
- [ ] Acceptance criteria per fitur ditulis
- [ ] File `docs/prd-mini.md` tersimpan

### File Output:
- `docs/prd-mini.md`

### Learning Notes
- [Bagaimana memvalidasi masalah?]
- [Bagaimana prioritas fitur?]
```

#### Issue #8: Feature 1 - Add New Problem
```markdown
## Issue #8: Feature 1 - Add New Problem

### Description
Implementasi form untuk menambah masalah baru dengan fields:
- Problem name
- Target user
- Difficulty (1-5)
- Potential impact (1-5)

### Acceptance Criteria
- [ ] HTML form dibuat
- [ ] Form validation (required fields)
- [ ] Data bisa ditambah ke list
- [ ] UI responsif
- [ ] Test checklist dibuat

### Manual Test Checklist
- [ ] Isi form dan submit
- [ ] Error validation muncul jika kosong
- [ ] Problem baru muncul di list
- [ ] Coba di mobile browser

### File Changes:
- index.html
- style.css
- script.js

### Pull Request:
Closes #7 (PRD done, now implementing feature 1)

### Learning Notes
- [Apa itu DOM manipulation?]
- [Bagaimana cara handle form?]
- [Bagaimana validation?]
```

#### Issue #9: Feature 2 - List Problems with Priority
```markdown
## Issue #9: Feature 2 - List Problems with Priority

### Description
Menampilkan daftar masalah dalam format list/card dengan sort by priority.

### Acceptance Criteria
- [ ] Problems ditampilkan sebagai list
- [ ] Setiap problem punya priority badge
- [ ] Bisa sort by priority (high → low)
- [ ] Delete button per problem
- [ ] UI clean dan responsif

### Manual Test Checklist
- [ ] Tambah 3 problems dengan priority berbeda
- [ ] Verifikasi sort order
- [ ] Coba hapus 1 problem
- [ ] Coba di mobile

### Pull Request:
Closes #8 (Feature 1 complete)

### Learning Notes
- [Apa itu sorting?]
- [Bagaimana render list di JS?]
```

#### Issue #10: Feature 3 - Mark Done/Archive
```markdown
## Issue #10: Feature 3 - Mark Done/Archive

### Description
Menambah ability untuk mark problem sebagai done/archived.

### Acceptance Criteria
- [ ] Toggle button untuk mark done
- [ ] Visual feedback (strikethrough/gray out)
- [ ] Done problems bisa di-restore
- [ ] Optional: Filter view (all/active/done)

### Manual Test Checklist
- [ ] Mark 1 problem sebagai done
- [ ] Verify visual berubah
- [ ] Restore problem
- [ ] Filter by status (optional)

### Pull Request:
Closes #9 (Feature 2 complete)

### Learning Notes
- [Apa itu state management?]
- [Bagaimana toggle state?]
```

---

### **Minggu 5: Data Persistence** (Issue #11)

#### Issue #11: Implement localStorage
```markdown
## Issue #11: Implement localStorage

### Description
Data problems disimpan di browser localStorage sehingga bertahan setelah refresh.

### Acceptance Criteria
- [ ] Data auto-saved ke localStorage
- [ ] Data auto-loaded saat page refresh
- [ ] Add export data (JSON) button
- [ ] Optional: Add import feature

### Manual Test Checklist
- [ ] Tambah problem
- [ ] Refresh browser
- [ ] Verifikasi data masih ada
- [ ] Export data sebagai JSON
- [ ] Copy JSON ke file lokal

### Learning Notes
- [Apa itu localStorage?]
- [Bagaimana JSON format?]
- [Bagaimana export/import?]
```

---

### **Minggu 6: Polish UI/UX** (Issues #12-14)

#### Issue #12: Improve CSS Styling (Mobile-Friendly)
```markdown
## Issue #12: Improve CSS Styling (Mobile-Friendly)

### Description
Styling diimprove untuk lebih polished dan responsive di mobile.

### Acceptance Criteria
- [ ] Mobile-first responsive design
- [ ] Font, spacing, color improved
- [ ] Dark/light theme (optional)
- [ ] No horizontal scroll di mobile

### Manual Test Checklist
- [ ] Open di mobile device (or DevTools)
- [ ] Verify responsiveness
- [ ] Check color contrast
- [ ] Check button sizes (easy to tap)

### Learning Notes
- [Apa itu mobile-first design?]
- [Apa itu flexbox/grid?]
```

#### Issue #13: Add Loading States & Feedback
```markdown
## Issue #13: Add Loading States & Feedback

### Description
Menambah visual feedback saat user melakukan action.

### Acceptance Criteria
- [ ] Button feedback saat diklik
- [ ] Success message setelah add problem
- [ ] Error message jika terjadi
- [ ] Smooth animations (optional)

### Manual Test Checklist
- [ ] Click button, verify feedback
- [ ] Submit form, see success message
- [ ] Try invalid action, see error

### Learning Notes
- [Apa itu user feedback?]
- [Bagaimana CSS transitions?]
```

#### Issue #14: Add Dark Mode Toggle (Optional)
```markdown
## Issue #14: Add Dark Mode Toggle (Optional)

### Description
Toggle untuk switch dark/light mode dengan preference disimpan.

### Acceptance Criteria
- [ ] Toggle button untuk dark mode
- [ ] Colors switch correctly
- [ ] Preference disimpan di localStorage
- [ ] Preference dipulihkan saat page load

### Manual Test Checklist
- [ ] Toggle dark mode
- [ ] Refresh, verify preference disimpan
- [ ] Check color contrast di dark mode

### Learning Notes
- [Apa itu CSS variables?]
- [Bagaimana detect system preference?]
```

---

### **Minggu 7: Documentation & Deployment** (Issues #15-17)

#### Issue #15: Write Comprehensive README.md
```markdown
## Issue #15: Write Comprehensive README.md

### Description
README lengkap dengan penjelasan, screenshot, dan cara menggunakan.

### Acceptance Criteria
- [ ] Title dan deskripsi jelas
- [ ] Screenshot app ditambahkan
- [ ] Feature list
- [ ] Installation/setup steps
- [ ] How to use guide
- [ ] Future ideas/roadmap

### File Output:
- `README.md`

### Learning Notes
- [Struktur README yang baik]
```

#### Issue #16: Create Test Checklist for QA
```markdown
## Issue #16: Create Test Checklist for QA

### Description
Dokumentasi lengkap untuk manual testing setiap fitur.

### Acceptance Criteria
- [ ] Fitur 1 test checklist
- [ ] Fitur 2 test checklist
- [ ] Fitur 3 test checklist
- [ ] Edge cases covered

### File Output:
- `docs/test-checklist.md`

### Manual Test Checklist
- [ ] Run through setiap test case
- [ ] Verify semua pass
```

#### Issue #17: Deploy to GitHub Pages
```markdown
## Issue #17: Deploy to GitHub Pages

### Description
Deploy aplikasi ke GitHub Pages dan verify live.

### Acceptance Criteria
- [ ] Code push ke main branch
- [ ] GitHub Pages build sukses
- [ ] Live URL accessible
- [ ] All features working di live

### Manual Test Checklist
- [ ] Visit live URL
- [ ] Test add problem
- [ ] Test all features
- [ ] Test di mobile browser

### Learning Notes
- [Bagaimana GitHub Pages build?]
- [Troubleshooting deploy issues]
```

---

### **Minggu 8: Iteration & Reflection** (Issues #18-20)

#### Issue #18: Collect Feedback from Users
```markdown
## Issue #18: Collect Feedback from Users

### Description
Kumpulkan feedback dari minimal 2 orang yang mencoba aplikasi.

### Acceptance Criteria
- [ ] 2 user sudah coba aplikasi
- [ ] Feedback dicatat (form/email/call)
- [ ] Feedback didokumentasikan

### File Output:
- `docs/feedback.md`

### Feedback Template:
```
**User:** [Nama]
**Date:** [Tanggal]
**What they liked:**
- 
**What they didn't like:**
- 
**Suggestions:**
- 
```

### Learning Notes
- [Bagaimana cara collect feedback?]
- [Bagaimana prioritas feedback?]
```

#### Issue #19: Improvements Based on Feedback
```markdown
## Issue #19: Improvements Based on Feedback

### Description
Implement 1-2 improvement paling penting dari feedback.

### Acceptance Criteria
- [ ] Improvement 1 implemented
- [ ] Improvement 2 (optional) implemented
- [ ] Test checklist updated
- [ ] Live updated

### Pull Request:
Merge ke main, deploy ke GitHub Pages

### Learning Notes
- [Bagaimana prioritas improvement?]
- [Bagaimana iterate based on feedback?]
```

#### Issue #20: Final Retrospective & Learning Summary
```markdown
## Issue #20: Final Retrospective & Learning Summary

### Description
Dokumentasikan pembelajaran selama 8 minggu.

### Acceptance Criteria
- [ ] What I learned (per minggu)
- [ ] Mistakes dan lessons learned
- [ ] Next steps / what's next
- [ ] Prompt templates recap

### File Output:
- `docs/week-8-retrospective.md`

### Retrospective Template:
```
# Week 8 Retrospective

## What I Learned
- [Week 1]: 
- [Week 2]: 
- ...
- [Week 8]: 

## Mistakes & Lessons
- Mistake 1: [Impact] → [Lesson]
- Mistake 2: [Impact] → [Lesson]

## What's Next
- Ideas untuk project berikutnya
- Skills yang ingin dipelajari

## Prompt Templates Used
- [List top 5 prompts yang paling useful]
```

### Learning Notes
- [Reflection dan self-assessment]
```

---

## Labels untuk Issues

Gunakan label ini untuk organize issues:

- `week-1`, `week-2`, ... `week-8`: Kelompok by minggu
- `feature`: Fitur baru
- `bug`: Bug fix
- `documentation`: Docs, learning log
- `learning`: Learning activity
- `setup`: Environment setup
- `deployment`: Deploy-related
- `testing`: Testing-related
- `blocked`: Need help
- `review`: Waiting review

---

## PR (Pull Request) Workflow

Setiap PR harusnya **link ke satu atau lebih issues**.

### PR Template

```markdown
## PR: [Brief description]

### Related Issues
Closes #[issue number]
Related to #[issue number]

### Changes Made
- [Change 1]
- [Change 2]

### How to Test
- [Test step 1]
- [Test step 2]

### Screenshots (kalau ada UI changes)
[Screenshot or GIF]

### Learning Notes
[Apa yang dipelajari dari PR ini?]
```

---

## Example Workflow

### Minggu 1

1. **Buat Issue #1** (Setup Environment)
   - Assign to self
   - Add label: `week-1`, `setup`

2. **Work on Issue #1**
   - Create branch: `feature/setup-env`
   - Do the work
   - Commit dengan message: `Setup: Install VS Code, Git, GitHub account`

3. **Create PR**
   - Link ke Issue #1
   - Add description
   - Self-review
   - Merge to main

4. **Close Issue #1**
   - Add comment: "Done! Recap: [learning notes]"
   - Close the issue

5. **Buat Issue #2** (Create First HTML Page)
   - Repeat workflow

---

## Tips

- **One issue = one task** — hindari terlalu banyak hal dalam satu issue.
- **Clear acceptance criteria** — sehingga tahu kapan selesai.
- **Update learning notes** — setiap issue close, dokumentasi learning.
- **Link issues** — track dependency dan progress.
- **Use labels** — organize dan filter issues.
- **Assign to self** — track ownership.

