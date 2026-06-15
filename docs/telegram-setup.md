# 🤖 Telegram Bot Setup Guide

Panduan lengkap setup Telegram Bot untuk fitur "Quick Capture" (Issue #4).

---

## Step 1: Create Telegram Bot

### 1.1 Open Telegram & Search BotFather
- Buka aplikasi Telegram
- Cari username `@BotFather` (official Telegram bot)
- Klik "Start" atau kirim `/start`

### 1.2 Create New Bot
- Ketik `/newbot`
- BotFather akan minta nama bot (misal: "Vibe Learning Bot")
- Setelah nama, BotFather akan minta username bot (misal: "vibe_learning_bot")
  - **Peraturan:** Username harus unik, harus diakhiri `_bot` atau `Bot`

### 1.3 Copy Bot Token
BotFather akan kirim pesan berisi:

```
Congratulations on your new bot. You will find it at t.me/vibe_learning_bot.
You can now add a description, about section and profile picture for your bot, see /help for a list of commands.

Use this token to access the HTTP API:
123456789:ABCDefGHiJKlmnOpQrsTuVwXyZ123456789

Keep your token secure and store it safely, it can be used by anyone to control your bot.
```

**SIMPAN TOKEN INI!** Format: `[BOT_ID]:[BOT_TOKEN]`

---

## Step 2: Get Your Chat ID

### 2.1 Start Chat dengan Bot
- Buka bot yang baru dibuat
- Klik "Start" atau kirim `/start`
- Bot akan welcome Anda

### 2.2 Get Chat ID
- Buka browser, masukkan URL:
```
https://api.telegram.org/bot[BOT_TOKEN]/getUpdates
```
Ganti `[BOT_TOKEN]` dengan token dari Step 1.3

**Contoh:**
```
https://api.telegram.org/bot123456789:ABCDefGHiJKlmnOpQrsTuVwXyZ123456789/getUpdates
```

- Tekan Enter
- Browser akan menampilkan JSON response
- Cari bagian `"chat":{"id":` - angka setelah `"id":` adalah **Chat ID Anda**

**Contoh response:**
```json
{
  "ok": true,
  "result": [
    {
      "update_id": 123456789,
      "message": {
        "message_id": 1,
        "chat": {
          "id": 987654321,
          "first_name": "Baihaqi"
        }
      }
    }
  ]
}
```

Chat ID: `987654321`

---

## Step 3: Config di App

### 3.1 Open Vibe Learning Companion
- Buka `index.html` di browser
- Scroll ke section "💬 Quick Notes" (akan aktif di Issue #4)

### 3.2 Input Bot Token & Chat ID
- Paste **Bot Token** di field "Bot Token"
- Paste **Chat ID** di field "Chat ID"
- Klik "Save Configuration"

Data akan tersimpan di localStorage (local device Anda).

---

## Step 4: Test Sending Message

### 4.1 Send Test Message
- Di section "Quick Notes", tulis pesan test: "Hello Vibe Bot! 👋"
- Klik "Send to Telegram"
- Pesan akan terkirim ke chat Telegram Anda

### 4.2 Verify
- Buka Telegram chat dengan bot Anda
- Pesan dari web app harus muncul

---

## 🔒 Security Notes

⚠️ **PENTING:** Jangan share Bot Token atau Chat ID Anda di publik!

- Bot Token adalah API key - siapa pun punya bisa kontrol bot Anda
- Chat ID adalah identifier unik - berikan hanya ke orang yang dipercaya
- Data disimpan **LOCAL** di browser Anda (localStorage), tidak di server

---

## Troubleshooting

### Issue: Bot tidak terima pesan
**Solusi:**
1. Cek Bot Token benar (copy dari BotFather)
2. Cek Chat ID benar (dari `/getUpdates`)
3. Pastikan bot bisa di-access (bukan private)
4. Buka DevTools (F12), cek console untuk error

### Issue: "Invalid bot token"
**Solusi:**
1. Bot token format: `[NUMBERS]:[LETTERS_NUMBERS]`
2. Cek tidak ada space di awal/akhir
3. Cek tidak typo, copy ulang dari BotFather

### Issue: "Chat not found"
**Solusi:**
1. Pastikan sudah start chat dengan bot (`/start`)
2. Chat ID harus match dengan user yang start bot
3. Kalau ganti device, Chat ID berbeda

### Issue: CORS Error
**Solusi:**
Telegram API tidak support CORS dari browser langsung. Gunakan proxy atau backend.

---

## Advanced: Send Daily Report

Setelah MVP, bisa buat template otomatis kirim laporan harian:

```
📊 Daily Report - 2026-06-15

✅ Habits Completed: 3 dari 5 (60%)
⏱️ Pomodoro Sessions: 4 sessions (100 min)
📝 Notes: 5 catatan

🎯 Tomorrow Goal: Complete all 5 habits
```

---

## Reference

- Telegram Bot API Docs: https://core.telegram.org/bots/api
- BotFather Help: Kirim `/help` ke @BotFather
- Get Updates Endpoint: https://api.telegram.org/bot[TOKEN]/getUpdates

---

**Last Updated:** Week 1 - Planning Phase
**Next Update:** Week 3 - Setelah Telegram feature selesai
