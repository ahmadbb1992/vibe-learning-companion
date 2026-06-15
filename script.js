// ===== APP STATE =====
let habits = [];
let habitIdCounter = Date.now();

// ===== DOM ELEMENTS =====
const habitForm = document.getElementById('habit-form');
const habitInput = document.getElementById('habit-input');
const habitList = document.getElementById('habit-list');
const emptyMessage = document.getElementById('empty-message');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

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
}

// Delete habit
function deleteHabit(id) {
  habits = habits.filter(h => h.id !== id);
  saveHabits();
  renderHabits();
}

// Toggle habit status
function toggleHabit(id) {
  habits = habits.map(h => {
    if (h.id === id) {
      return { ...h, done: !h.done };
    }
    return h;
  });
  saveHabits();
  renderHabits();
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
});
