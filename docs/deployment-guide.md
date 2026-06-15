# 🚀 Deployment Guide - Vibe Learning Companion

## GitHub Pages Deployment

### Step 1: Enable GitHub Pages
1. Go to repository settings: https://github.com/ahmadbb1992/vibe-learning-companion/settings
2. Scroll down to **"Pages"** section (left sidebar)
3. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**
5. GitHub akan memproses deployment (~2-5 menit)

### Step 2: Access Live App
- **URL:** https://ahmadbb1992.github.io/vibe-learning-companion/
- Status check: Lihat "Deployments" di sidebar repo untuk status real-time

### Step 3: Verify Deployment
- [ ] Open app di browser
- [ ] Test Habit Tracker (tambah, toggle, hapus)
- [ ] Test Pomodoro Timer (start, pause, reset)
- [ ] Test Toast notifications
- [ ] Test Telegram config (masukkan token & chat ID)
- [ ] Test send message to Telegram

---

## Important Notes

### Data Persistence
- Semua data Habit & Pomodoro disimpan di **browser localStorage**
- Setiap browser/device memiliki data terpisah (tidak sync)
- Hapus cache browser = data hilang

### Telegram Config
- Bot token disimpan di localStorage (client-side)
- Ini **tidak aman untuk production** karena token terlihat di DevTools
- Untuk production: butuh backend proxy untuk token storage

### Performance
- App fully static (no server processing)
- Load time: < 1 detik
- Offline-capable: semua logic di browser

### Browser Compatibility
- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## Troubleshooting

### Pages tidak publish
- ✓ Check: Main branch ada index.html?
- ✓ Check: Settings > Pages source sudah di-set?
- ✓ Wait: GitHub perlu 2-5 menit untuk first deploy

### App load tapi data hilang
- ✓ localStorage mungkin disabled di browser
- ✓ Try: Buka di browser baru atau incognito
- ✓ Try: Clear DevTools > Application > Clear site data

### Telegram tidak bisa send
- ✓ Bot token atau chat ID salah?
- ✓ Bot sudah add ke chat/group?
- ✓ Check console (F12) untuk error detail

### Styling tidak load
- ✓ Check: Network tab di DevTools (adalah 404?)
- ✓ Try: Hard refresh (Ctrl+F5 atau Cmd+Shift+R)

---

## Update Deployment

Setiap kali ada perubahan:
```bash
git add .
git commit -m "fix/feat: [deskripsi]"
git push
```

GitHub Pages otomatis update dalam 1-2 menit.

---

## Next Steps After Deploy

1. **Share link** ke feedback tester
2. **Monitor issue** dari user feedback
3. **Iterate** dengan improvement kecil
4. **Re-deploy** changes
5. **Repeat** sampai feedback tercukupi

---

**Deployment Status:** Active
**URL:** https://ahmadbb1992.github.io/vibe-learning-companion/
**Last Deployed:** 2026-06-15
