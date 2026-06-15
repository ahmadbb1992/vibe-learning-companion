// ===== APP STATE =====
let habits = [];
let habitIdCounter = Date.now();

// ===== POMODORO STATE =====
const POMODORO_FOCUS = 25 * 60;
const POMODORO_BREAK = 5 * 60;
let pomodoroSecondsLeft = POMODORO_FOCUS;
let pomodoroInterval = null;
let pomodoroIsRunning = false;
let pomodoroIsBreak = false;
let pomodoroSessionsCompleted = 0;

// ===== DOM ELEMENTS =====
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');
const emptyMessage = document.getElementById('empty-message');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const telegramTokenInput = document.getElementById('telegram-token');
const telegramChatIdInput = document.getElementById('telegram-chat-id');
const telegramMessageInput = document.getElementById('telegram-message');
const telegramStatus = document.getElementById('telegram-status');
const saveTelegramConfigButton = document.getElementById('save-telegram-config');
const clearTelegramConfigButton = document.getElementById('clear-telegram-config');
const sendTelegramMessageButton = document.getElementById('send-telegram-message');
const sendTelegramReportButton = document.getElementById('send-telegram-report');

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  requestAnimationFrame(() => toast.classList.add('show'));

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 250);
  }, 2600);
}

// ===== FUNCTIONS =====

// Load data from localStorage on start
function loadHabits() {
  const savedData = localStorage.getItem('vibe_habits');
  if (savedData) {
    try {
      habits = JSON.parse(savedData);
    } catch (e) {
      console.error("Gagal load data:", e);
      habits = [];
    }
  } else {
    // Default data for beginner template
    habits = [
      { id: 1, name: "Belajar Vibe Coding 1 jam 💻", done: false },
      { id: 2, name: "Buka GitHub & Update Issue 📈", done: false }
    ];
  }
  renderHabits();
}

// Save data to localStorage
function saveHabits() {
  localStorage.setItem('vibe_habits', JSON.stringify(habits));
  updateProgress();
}

// Add new habit
function addHabit(name) {
  const newHabit = {
    id: ++habitIdCounter,
    name: name,
    done: false
  };
  habits.push(newHabit);
  saveHabits();
  renderHabits();
  showToast(`Habit ditambahkan: ${name}`);
}

// Delete habit
function deleteHabit(id) {
  const deletedHabit = habits.find(h => h.id === id);
  habits = habits.filter(h => h.id !== id);
  saveHabits();
  renderHabits();
  if (deletedHabit) {
    showToast(`Habit dihapus: ${deletedHabit.name}`, 'warning');
  }
}

// Toggle habit status
function toggleHabit(id) {
  let updatedHabit = null;
  habits = habits.map(h => {
    if (h.id === id) {
      updatedHabit = { ...h, done: !h.done };
      return updatedHabit;
    }
    return h;
  });
  saveHabits();
  renderHabits();
  if (updatedHabit) {
    showToast(updatedHabit.done ? 'Mantap! Habit selesai hari ini ✅' : 'Habit ditandai belum selesai');
  }
}

// Update progress bar
function updateProgress() {
  const total = habits.length;
  const doneCount = habits.filter(h => h.done).length;
  const percent = total > 0 ? Math.round((doneCount / total) * 100) : 0;

  progressFill.style.width = `${percent}%`;
  progressText.textContent = `${doneCount} dari ${total} selesai (${percent}%)`;
}

// Render habit list to UI
function renderHabits() {
  habitList.innerHTML = '';

  if (habits.length === 0) {
    emptyMessage.style.display = 'block';
    progressFill.style.width = '0%';
    progressText.textContent = '0 dari 0 selesai (0%)';
    return;
  }

  emptyMessage.style.display = 'none';

  habits.forEach(habit => {
    const li = document.createElement('li');
    li.className = `habit-item ${habit.done ? 'done' : ''}`;

    li.innerHTML = `
      <input
        type="checkbox"
        class="habit-checkbox"
        ${habit.done ? 'checked' : ''}
      >
      <span class="habit-name">${habit.name}</span>
      <button class="btn-delete" title="Hapus">×</button>
    `;

    // Event Checkbox Toggle
    const checkbox = li.querySelector('.habit-checkbox');
    checkbox.addEventListener('change', () => toggleHabit(habit.id));

    // Event Delete Button
    const deleteBtn = li.querySelector('.btn-delete');
    deleteBtn.addEventListener('click', () => deleteHabit(habit.id));

    habitList.appendChild(li);
  });

  updateProgress();
}

// ===== EVENT LISTENERS =====
habitForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = habitInput.value.trim();
  if (name) {
    addHabit(name);
    habitInput.value = '';
  }
});

// ===== INIT APP =====
document.addEventListener('DOMContentLoaded', () => {
  loadHabits();
  initPomodoro();
});

// ===== POMODORO FUNCTIONS =====

function formatTime(seconds) {
  const min = Math.floor(seconds / 60).toString().padStart(2, '0');
  const sec = (seconds % 60).toString().padStart(2, '0');
  return `${min}:${sec}`;
}

function updatePomodoroDisplay() {
  const display = document.getElementById('pomodoro-display');
  if (!display) return;
  display.textContent = formatTime(pomodoroSecondsLeft);
  display.className = `pomodoro-display ${pomodoroIsBreak ? 'break' : ''}`;
  document.title = `${formatTime(pomodoroSecondsLeft)} — Vibe Learning Companion`;
}

function startPomodoro() {
  if (pomodoroIsRunning) {
    showToast('Timer sudah berjalan', 'warning');
    return;
  }
  pomodoroIsRunning = true;
  showToast(pomodoroIsBreak ? 'Break dimulai. Istirahat dulu 🌿' : 'Sesi fokus dimulai. Semangat! 🚀');

  pomodoroInterval = setInterval(() => {
    pomodoroSecondsLeft--;

    if (pomodoroSecondsLeft <= 0) {
      clearInterval(pomodoroInterval);
      pomodoroIsRunning = false;

      if (!pomodoroIsBreak) {
        pomodoroSessionsCompleted++;
        showToast('Sesi fokus selesai! Waktunya break 🎉');
        alert(`🎉 Sesi fokus selesai! Istirahat ${POMODORO_BREAK / 60} menit.`);
        pomodoroIsBreak = true;
        pomodoroSecondsLeft = POMODORO_BREAK;
      } else {
        showToast('Break selesai. Siap fokus lagi 💪');
        alert('💪 Istirahat selesai! Siap mulai sesi fokus berikutnya?');
        pomodoroIsBreak = false;
        pomodoroSecondsLeft = POMODORO_FOCUS;
      }

      updatePomodoroDisplay();
      return;
    }

    updatePomodoroDisplay();
  }, 1000);
}

function pausePomodoro() {
  if (!pomodoroIsRunning) {
    showToast('Timer belum berjalan', 'warning');
    return;
  }
  clearInterval(pomodoroInterval);
  pomodoroIsRunning = false;
  showToast('Timer dijeda');
}

function resetPomodoro() {
  clearInterval(pomodoroInterval);
  pomodoroIsRunning = false;
  pomodoroIsBreak = false;
  pomodoroSecondsLeft = POMODORO_FOCUS;
  updatePomodoroDisplay();
  document.title = 'Vibe Learning Companion';
  showToast('Timer direset ke 25:00');
}

function initPomodoro() {
  updatePomodoroDisplay();

  document.getElementById('pomodoro-start').addEventListener('click', startPomodoro);
  document.getElementById('pomodoro-pause').addEventListener('click', pausePomodoro);
  document.getElementById('pomodoro-reset').addEventListener('click', resetPomodoro);
  initTelegram();
}

// ===== TELEGRAM FUNCTIONS =====

function loadTelegramConfig() {
  const token = localStorage.getItem('vibe_telegram_token') || '';
  const chatId = localStorage.getItem('vibe_telegram_chat_id') || '';
  telegramTokenInput.value = token;
  telegramChatIdInput.value = chatId;
  updateTelegramStatus();
}

function saveTelegramConfig() {
  const token = telegramTokenInput.value.trim();
  const chatId = telegramChatIdInput.value.trim();

  if (!validateTelegramToken(token)) {
    showToast('Token tidak valid. Format: 123456789:ABCdef...', 'warning');
    return false;
  }
  if (!validateChatId(chatId)) {
    showToast('Chat ID harus angka.', 'warning');
    return false;
  }

  localStorage.setItem('vibe_telegram_token', token);
  localStorage.setItem('vibe_telegram_chat_id', chatId);
  updateTelegramStatus();
  showToast('Telegram config tersimpan.');
  return true;
}

function clearTelegramConfig() {
  localStorage.removeItem('vibe_telegram_token');
  localStorage.removeItem('vibe_telegram_chat_id');
  telegramTokenInput.value = '';
  telegramChatIdInput.value = '';
  updateTelegramStatus();
  showToast('Telegram config dibersihkan.', 'warning');
}

function updateTelegramStatus() {
  const token = telegramTokenInput.value.trim();
  const chatId = telegramChatIdInput.value.trim();
  if (token && chatId) {
    telegramStatus.textContent = 'Telegram config sudah siap. Kirim catatan cepat sekarang.';
  } else {
    telegramStatus.textContent = 'Config belum lengkap. Masukkan token dan chat ID.';
  }
}

function validateTelegramToken(value) {
  return /^\d{8,}:([A-Za-z0-9_-]{35,})$/.test(value);
}

function validateChatId(value) {
  return /^-?\d+$/.test(value);
}

function getTelegramConfig() {
  return {
    token: telegramTokenInput.value.trim(),
    chatId: telegramChatIdInput.value.trim()
  };
}

function buildDailyReportMessage() {
  const doneCount = habits.filter(h => h.done).length;
  const total = habits.length;
  return `📊 *Daily Vibe Report*\n` +
    `- Habits: ${doneCount} / ${total} selesai\n` +
    `- Sesi Pomodoro: ${pomodoroSessionsCompleted}\n` +
    `- Progress: ${doneCount === total ? 'Semua selesai! 🎉' : 'Masih ada yang harus dikerjakan'}\n` +
    `\n*Note:* Tetap vibing dan minimalisir scope setiap iterasi.`;
}

async function sendToTelegram(messageText) {
  const { token, chatId } = getTelegramConfig();
  if (!token || !chatId) {
    showToast('Lengkapi Telegram config terlebih dahulu.', 'warning');
    return;
  }
  if (!messageText.trim()) {
    showToast('Pesan tidak boleh kosong.', 'warning');
    return;
  }

  const url = `https://api.telegram.org/bot${token}/sendMessage`;
  const payload = {
    chat_id: chatId,
    text: messageText,
    parse_mode: 'Markdown'
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    if (!data.ok) {
      showToast(`Telegram error: ${data.description}`, 'warning');
      return false;
    }
    showToast('Pesan terkirim ke Telegram!');
    return true;
  } catch (error) {
    console.error('Telegram send failed', error);
    showToast('Gagal mengirim ke Telegram. Cek koneksi / token.', 'warning');
    return false;
  }
}

async function sendTelegramMessage() {
  const messageText = telegramMessageInput.value.trim();
  const success = await sendToTelegram(messageText);
  if (success) {
    telegramMessageInput.value = '';
  }
}

async function sendTelegramReport() {
  const reportText = buildDailyReportMessage();
  await sendToTelegram(reportText);
}

function initTelegram() {
  loadTelegramConfig();
  saveTelegramConfigButton.addEventListener('click', (event) => {
    event.preventDefault();
    saveTelegramConfig();
  });
  clearTelegramConfigButton.addEventListener('click', (event) => {
    event.preventDefault();
    clearTelegramConfig();
  });
  sendTelegramMessageButton.addEventListener('click', (event) => {
    event.preventDefault();
    sendTelegramMessage();
  });
  sendTelegramReportButton.addEventListener('click', (event) => {
    event.preventDefault();
    sendTelegramReport();
  });
}
