// Определение параметров для каждого уровня сложности с указанием размера ячейки
const difficulties = {
  beginner: { width: 9, height: 9, minesCount: 10, cellSize: 40 },
  intermediate: { width: 16, height: 16, minesCount: 40, cellSize: 30 },
  professional: { width: 28, height: 28, minesCount: 99, cellSize: 16 }
};

// Текущая выбранная сложность (по умолчанию — новичок)
let currentDifficulty = difficulties.beginner;

const boardElement = document.querySelector('.minesweeper');
const timerElement = document.querySelector('.timer');
const mineCounterElement = document.querySelector('.mine-counter');
const restartButton = document.getElementById('restart');

// Кнопки выбора сложности
const beginnerBtn = document.getElementById('beginner');
const intermediateBtn = document.getElementById('intermediate');
const professionalBtn = document.getElementById('professional');

// Элементы для модального окна "Правила игры"
const rulesBtn = document.getElementById('rules-btn');
const rulesModal = document.getElementById('rules-modal');
const closeModalBtn = document.querySelector('.modal .close');

let cells = [];      // Массив объектов-ячейки
let gameOver = false;
let timerInterval;
let timeElapsed = 0;

// Обработчики для кнопок выбора уровня сложности
beginnerBtn.addEventListener('click', () => {
  currentDifficulty = difficulties.beginner;
  setActiveDifficultyButton(beginnerBtn);
  restartGame();
});
intermediateBtn.addEventListener('click', () => {
  currentDifficulty = difficulties.intermediate;
  setActiveDifficultyButton(intermediateBtn);
  restartGame();
});
professionalBtn.addEventListener('click', () => {
  currentDifficulty = difficulties.professional;
  setActiveDifficultyButton(professionalBtn);
  restartGame();
});

// Обработчик для кнопки "Новая игра"
restartButton.addEventListener('click', restartGame);

// Обработчики для модального окна "Правила игры"
rulesBtn.addEventListener('click', () => {
  rulesModal.style.display = 'block';
});
closeModalBtn.addEventListener('click', () => {
  rulesModal.style.display = 'none';
});
window.addEventListener('click', (event) => {
  if (event.target === rulesModal) {
    rulesModal.style.display = 'none';
  }
});

// Функция для установки активной кнопки сложности
function setActiveDifficultyButton(activeButton) {
  const buttons = document.querySelectorAll('.difficulty-controls button');
  buttons.forEach(btn => btn.classList.remove('active'));
  activeButton.classList.add('active');
}

// Инициализация игры
function init() {
  startTimer();

  // Задаём параметры сетки в зависимости от текущего уровня сложности
  boardElement.style.gridTemplateColumns = `repeat(${currentDifficulty.width}, ${currentDifficulty.cellSize}px)`;
  boardElement.style.gridTemplateRows = `repeat(${currentDifficulty.height}, ${currentDifficulty.cellSize}px)`;

  // Генерируем ячейки
  for (let i = 0; i < currentDifficulty.width * currentDifficulty.height; i++) {
    const cellElement = document.createElement('div');
    cellElement.classList.add('cell');
    cellElement.dataset.index = i;
    // Задаём размеры ячейки согласно выбранному уровню
    cellElement.style.width = currentDifficulty.cellSize + "px";
    cellElement.style.height = currentDifficulty.cellSize + "px";
    boardElement.appendChild(cellElement);

    // Создаём объект ячейки для логики игры
    const cell = {
      element: cellElement,
      isMine: false,
      adjacentMines: 0,
      isRevealed: false,
      isFlagged: false,
    };

    cells.push(cell);

    // Левый клик – раскрытие ячейки
    cellElement.addEventListener('click', () => {
      if (!gameOver) {
        revealCell(i);
      }
    });

    // Правый клик – установка/снятие флага
    cellElement.addEventListener('contextmenu', (e) => {
      e.preventDefault();
      if (!gameOver) {
        toggleFlag(i);
      }
    });
  }

  // Расставляем мины и вычисляем количество мин вокруг ячеек
  placeMines();
  calculateAdjacentMines();
  updateMineCounter();
}

// Функция для расстановки мин
function placeMines() {
  let minesPlaced = 0;
  while (minesPlaced < currentDifficulty.minesCount) {
    const randomIndex = Math.floor(Math.random() * cells.length);
    if (!cells[randomIndex].isMine) {
      cells[randomIndex].isMine = true;
      minesPlaced++;
    }
  }
}

// Вычисление количества мин вокруг каждой ячейки
function calculateAdjacentMines() {
  for (let i = 0; i < cells.length; i++) {
    if (cells[i].isMine) continue;
    const adjacent = getAdjacentIndices(i);
    let count = 0;
    for (let index of adjacent) {
      if (cells[index] && cells[index].isMine) {
        count++;
      }
    }
    cells[i].adjacentMines = count;
  }
}

// Получение индексов соседних ячеек
function getAdjacentIndices(index) {
  const indices = [];
  const x = index % currentDifficulty.width;
  const y = Math.floor(index / currentDifficulty.width);

  for (let dx = -1; dx <= 1; dx++) {
    for (let dy = -1; dy <= 1; dy++) {
      if (dx === 0 && dy === 0) continue;
      const newX = x + dx;
      const newY = y + dy;
      if (newX >= 0 && newX < currentDifficulty.width && newY >= 0 && newY < currentDifficulty.height) {
        indices.push(newY * currentDifficulty.width + newX);
      }
    }
  }
  return indices;
}

// Функция раскрытия ячейки
function revealCell(index) {
  const cell = cells[index];
  if (cell.isRevealed || cell.isFlagged) return;

  cell.isRevealed = true;
  cell.element.classList.add('revealed');

  if (cell.isMine) {
    cell.element.textContent = '💣';
    gameOver = true;
    revealAllMines();
    stopTimer();
    setTimeout(() => {
      alert("Game Over!");
    }, 100);
    return;
  }

  if (cell.adjacentMines > 0) {
    cell.element.textContent = cell.adjacentMines;
    cell.element.setAttribute('data-number', cell.adjacentMines);
  } else {
    // Если вокруг нет мин – рекурсивное раскрытие соседних ячеек
    const adjacent = getAdjacentIndices(index);
    for (let i of adjacent) {
      if (!cells[i].isRevealed) {
        revealCell(i);
      }
    }
  }

  checkWin();
}

// Функция установки/снятия флага
function toggleFlag(index) {
  const cell = cells[index];
  if (cell.isRevealed) return;

  cell.isFlagged = !cell.isFlagged;
  if (cell.isFlagged) {
    cell.element.textContent = '🚩';
    cell.element.classList.add('flagged');
  } else {
    cell.element.textContent = '';
    cell.element.classList.remove('flagged');
  }
  updateMineCounter();
}

// Обновление счётчика оставшихся мин
function updateMineCounter() {
  const flagsUsed = cells.filter(cell => cell.isFlagged).length;
  const minesLeft = currentDifficulty.minesCount - flagsUsed;
  mineCounterElement.textContent = "Мины: " + minesLeft;
}

// Раскрытие всех мин при проигрыше
function revealAllMines() {
  cells.forEach(cell => {
    if (cell.isMine) {
      cell.element.classList.add('revealed');
      cell.element.textContent = '💣';
    }
  });
}

// Проверка победного условия (раскрыты все не-минные ячейки)
function checkWin() {
  const revealedCount = cells.filter(cell => cell.isRevealed).length;
  if (revealedCount === cells.length - currentDifficulty.minesCount) {
    gameOver = true;
    stopTimer();
    setTimeout(() => {
      alert("Поздравляем! Вы выиграли!");
    }, 100);
  }
}

// Запуск таймера
function startTimer() {
  timerElement.textContent = "Time: 0";
  timeElapsed = 0;
  timerInterval = setInterval(() => {
    timeElapsed++;
    timerElement.textContent = "Time: " + timeElapsed;
  }, 1000);
}

// Остановка таймера
function stopTimer() {
  clearInterval(timerInterval);
}

// Перезапуск игры: сбрасываем переменные, очищаем поле и запускаем инициализацию
function restartGame() {
  stopTimer();
  cells = [];
  gameOver = false;
  boardElement.innerHTML = '';
  timerElement.textContent = "Time: 0";
  mineCounterElement.textContent = "Мины: " + currentDifficulty.minesCount;
  init();
}

// Инициализация игры при загрузке страницы
window.onload = init;
