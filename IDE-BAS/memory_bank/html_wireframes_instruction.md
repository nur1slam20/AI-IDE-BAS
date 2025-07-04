# Инструкция для ИИ агента: Создание HTML/CSS wireframes

## 📋 Общие принципы

Данная инструкция описывает создание интерактивных HTML/CSS/JS макетов (wireframes) для мобильных банковских приложений на основе требований User Story и Use Case.

### 🎯 Цели создания wireframes:
- Визуализация пользовательских сценариев
- Демонстрация UI/UX потоков
- Тестирование интерактивности
- Валидация бизнес-логики
- Передача требований команде разработки

---

## 📁 Структура файлов

Создавайте следующую структуру для каждого wireframe:

```
wireframes/
├── index.html          # Основная страница со всеми экранами
├── styles.css          # CSS стили и responsive дизайн  
├── script.js           # JavaScript для интерактивности
├── README.md           # Документация макета
└── figma_generator.py  # (опционально) Автогенерация
```

---

## 🏗️ HTML структура

### Основной контейнер
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Банковское приложение - [Название функции]</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <!-- Заголовок с навигацией -->
        </header>
        <main class="main-content">
            <!-- Экраны приложения -->
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

### Заголовок приложения
```html
<header class="header">
    <div class="header-content">
        <button class="back-btn" onclick="goBack()">←</button>
        <h1 class="header-title">Главная</h1>
        <button class="profile-btn">👤</button>
    </div>
</header>
```

### Структура экранов
```html
<!-- Каждый экран в отдельном div -->
<div class="screen active" id="screen-name">
    <div class="form-container">
        <h2>Заголовок экрана</h2>
        <p class="subtitle">Подзаголовок или описание</p>
        
        <!-- Контент экрана -->
        
        <button class="btn-primary" onclick="nextAction()">
            Продолжить
        </button>
    </div>
</div>
```

### Обязательные элементы по типам экранов:

#### Главный экран
```html
<div class="balance-card">
    <h2>Баланс счета</h2>
    <div class="balance-amount">[СУММА] ₽</div>
    <p class="account-number">**** [НОМЕР]</p>
</div>

<div class="actions-grid">
    <button class="action-btn primary" onclick="showScreen('target-screen')">
        <div class="action-icon">[EMOJI]</div>
        <span>[НАЗВАНИЕ]</span>
    </button>
    <!-- Другие кнопки действий -->
</div>
```

#### Экран ввода данных
```html
<div class="input-group">
    <label for="input-id">[НАЗВАНИЕ ПОЛЯ]</label>
    <input 
        type="[ТИП]" 
        id="input-id" 
        placeholder="[ПОДСКАЗКА]"
        class="[КЛАСС]-input"
        oninput="validate[Функция](this)"
    >
    <div class="input-error" id="input-error"></div>
</div>
```

#### Экран подтверждения
```html
<div class="confirmation-details">
    <div class="detail-row">
        <span>[НАЗВАНИЕ]:</span>
        <strong id="confirm-value">[ЗНАЧЕНИЕ]</strong>
    </div>
    <!-- Другие детали -->
    <hr>
    <div class="detail-row total">
        <span>К списанию:</span>
        <strong id="total-amount">[СУММА]</strong>
    </div>
</div>

<div class="warning-message" id="warning" style="display: none;">
    ⚠️ [ТЕКСТ ПРЕДУПРЕЖДЕНИЯ]
</div>
```

#### Экран результата
```html
<div class="result-container">
    <div class="result-icon success" id="result-icon">✅</div>
    <h2 id="result-title">[ЗАГОЛОВОК РЕЗУЛЬТАТА]</h2>
    <p id="result-message">[ОПИСАНИЕ РЕЗУЛЬТАТА]</p>
    
    <div class="transaction-details">
        <div class="detail-row">
            <span>Номер операции:</span>
            <span id="transaction-id">[ID]</span>
        </div>
        <div class="detail-row">
            <span>Дата и время:</span>
            <span id="transaction-time">[ВРЕМЯ]</span>
        </div>
    </div>
</div>
```

---

## 🎨 CSS стили

### Основные переменные и reset
```css
/* Reset и базовые стили */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --balance-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
    --success-color: #28a745;
    --error-color: #dc3545;
    --warning-color: #ffc107;
    --background-color: #f5f7fa;
    --text-color: #333;
    --text-secondary: #6c757d;
    --border-color: #e9ecef;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica Neue', Arial, sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}
```

### Контейнер приложения (мобильный)
```css
.app-container {
    max-width: 414px;
    margin: 0 auto;
    background: white;
    min-height: 100vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    position: relative;
}
```

### Заголовок
```css
.header {
    background: var(--primary-gradient);
    color: white;
    padding: 44px 20px 20px; /* Учитываем safe area для iOS */
    position: sticky;
    top: 0;
    z-index: 100;
}

.header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.back-btn, .profile-btn {
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

.back-btn:hover, .profile-btn:hover {
    background: rgba(255, 255, 255, 0.3);
}

.header-title {
    font-size: 20px;
    font-weight: 600;
}
```

### Экраны и анимации
```css
.main-content {
    padding: 20px;
    min-height: calc(100vh - 104px);
}

.screen {
    display: none;
    animation: slideIn 0.3s ease-out;
}

.screen.active {
    display: block;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateX(20px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}
```

### Карточки и контейнеры
```css
.balance-card {
    background: var(--balance-gradient);
    color: white;
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 24px;
    text-align: center;
}

.balance-amount {
    font-size: 32px;
    font-weight: 700;
    margin: 8px 0;
}

.form-container {
    max-width: 100%;
}

.form-container h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
    color: #2c3e50;
}

.subtitle {
    color: var(--text-secondary);
    margin-bottom: 24px;
    font-size: 16px;
}
```

### Кнопки
```css
.btn-primary, .btn-secondary {
    width: 100%;
    padding: 16px;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    border: none;
}

.btn-primary {
    background: var(--primary-gradient);
    color: white;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-primary:disabled {
    background: var(--border-color);
    cursor: not-allowed;
}

.btn-secondary {
    background: white;
    border: 2px solid #667eea;
    color: #667eea;
}

.btn-secondary:hover {
    background: #667eea;
    color: white;
}
```

### Поля ввода
```css
.input-group {
    margin-bottom: 24px;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #495057;
}

.phone-input, .amount-input {
    width: 100%;
    padding: 16px;
    border: 2px solid var(--border-color);
    border-radius: 12px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.phone-input:focus, .amount-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

### Сетки и раскладки
```css
.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
}

.action-btn {
    background: white;
    border: 2px solid var(--border-color);
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.action-btn:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.action-btn.primary {
    background: var(--primary-gradient);
    color: white;
    border-color: transparent;
}
```

### Состояния и статусы
```css
.input-error {
    color: var(--error-color);
    font-size: 14px;
    margin-top: 8px;
    display: none;
}

.input-error.show {
    display: block;
    animation: fadeIn 0.3s ease-out;
}

.warning-message {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
}

.hidden {
    display: none !important;
}
```

### Responsive дизайн
```css
@media (max-width: 480px) {
    .app-container {
        max-width: 100%;
    }
    
    .main-content {
        padding: 16px;
    }
    
    .balance-amount {
        font-size: 28px;
    }
    
    .amount-input {
        font-size: 20px;
    }
    
    .currency {
        font-size: 20px;
    }
}

@media (min-width: 768px) {
    .app-container {
        max-width: 414px;
        border-radius: 20px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    
    .header {
        border-radius: 20px 20px 0 0;
    }
}
```

---

## ⚙️ JavaScript функциональность

### Основная структура
```javascript
// Глобальные переменные
let currentScreen = 'home-screen';
let currentData = {};
let navigationHistory = [];

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Настройка начального состояния
    updateHeaderTitle(currentScreen);
    loadMockData();
}
```

### Навигация между экранами
```javascript
function showScreen(screenId) {
    // Добавляем текущий экран в историю
    if (currentScreen !== screenId) {
        navigationHistory.push(currentScreen);
    }
    
    // Скрываем все экраны
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показываем нужный экран
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
    
    // Обновляем заголовок
    updateHeaderTitle(screenId);
}

function goBack() {
    if (navigationHistory.length > 0) {
        const previousScreen = navigationHistory.pop();
        showScreen(previousScreen);
    } else {
        showScreen('home-screen');
    }
}

function updateHeaderTitle(screenId) {
    const titles = {
        'home-screen': 'Главная',
        'recipient-screen': 'Получатель',
        'amount-screen': 'Сумма',
        'confirm-screen': 'Подтверждение',
        'result-screen': 'Результат',
        'history-screen': 'История'
    };
    
    document.querySelector('.header-title').textContent = titles[screenId] || 'Приложение';
}
```

### Валидация и форматирование
```javascript
// Форматирование номера телефона
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    // Добавляем +7 если начинается с 8 или 7
    if (value.startsWith('8')) {
        value = '7' + value.substring(1);
    }
    if (value.startsWith('7')) {
        value = '+7' + value.substring(1);
    }
    
    // Форматируем номер
    if (value.startsWith('+7')) {
        let digits = value.substring(2);
        let formatted = '+7';
        
        if (digits.length > 0) formatted += ' (' + digits.substring(0, 3);
        if (digits.length > 3) formatted += ') ' + digits.substring(3, 6);
        if (digits.length > 6) formatted += '-' + digits.substring(6, 8);
        if (digits.length > 8) formatted += '-' + digits.substring(8, 10);
        
        input.value = formatted;
    }
    
    hideError('phone-error');
}

// Валидация суммы
function validateAmount(input) {
    const amount = parseFloat(input.value) || 0;
    const continueBtn = document.getElementById('amount-continue-btn');
    
    hideError('amount-error');
    
    if (amount <= 0) {
        continueBtn.disabled = true;
        return;
    }
    
    if (amount > currentBalance) {
        showError('amount-error', 'Недостаточно средств на счете');
        continueBtn.disabled = true;
        return;
    }
    
    // Проверка дополнительных лимитов
    if (currentRecipient && currentRecipient.maritalStatus === 'MARRIED' && amount > 50000) {
        showError('amount-error', 'Превышен лимит перевода для данного статуса');
        continueBtn.disabled = true;
        return;
    }
    
    continueBtn.disabled = false;
}
```

### API имитация
```javascript
// Имитация поиска получателя
function findRecipient() {
    const phoneInput = document.getElementById('phone-input');
    const phone = phoneInput.value.replace(/\D/g, '');
    
    // Валидация номера
    if (phone.length !== 11 || !phone.startsWith('7')) {
        showError('phone-error', 'Введите корректный номер телефона');
        return;
    }
    
    // Имитация API запроса
    setTimeout(() => {
        const mockRecipients = {
            '79123456789': {
                id: '123e4567-e89b-12d3-a456-426614174000',
                name: 'Иван Иванов',
                phone: '+7 (912) 345-67-89',
                maritalStatus: 'MARRIED'
            },
            '79111234567': {
                id: '987e6543-e21b-43d2-b456-426614174111',
                name: 'Мария Петрова', 
                phone: '+7 (911) 123-45-67',
                maritalStatus: 'SINGLE'
            }
            // Дополнительные тестовые данные
        };
        
        const recipient = mockRecipients[phone];
        
        if (recipient) {
            currentRecipient = recipient;
            showRecipientInfo(recipient);
            hideError('phone-error');
        } else {
            showError('phone-error', 'Получатель не найден');
            hideRecipientInfo();
        }
    }, 500); // Имитация задержки API
}

// Имитация обработки перевода
function processTransfer() {
    const randomSuccess = Math.random() > 0.1; // 90% успешных операций
    
    setTimeout(() => {
        if (randomSuccess) {
            const transactionId = generateTransactionId();
            const currentTime = new Date().toLocaleString('ru-RU');
            showTransferResult(true, 'Перевод выполнен успешно!', transactionId);
            
            // Обновляем баланс
            currentBalance -= transferAmount;
            updateBalanceDisplay();
            
            // Добавляем в историю
            addToHistory({
                type: 'transfer',
                recipient: currentRecipient,
                amount: transferAmount,
                timestamp: currentTime,
                transactionId: transactionId
            });
        } else {
            showTransferResult(false, 'Произошла ошибка при выполнении операции', null);
        }
    }, 1500);
}
```

### Утилиты и хелперы
```javascript
// Отображение и скрытие ошибок
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.remove('show');
}

// Форматирование валюты
function formatCurrency(amount) {
    return new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        minimumFractionDigits: 2
    }).format(amount);
}

// Генерация ID транзакции
function generateTransactionId() {
    return Math.floor(Math.random() * 1000000000).toString();
}

// Быстрые действия
function setAmount(amount) {
    document.getElementById('amount-input').value = amount;
    validateAmount(document.getElementById('amount-input'));
}
```

---

## 📱 Требования к responsive дизайну

### Мобильные устройства (основной фокус)
- **Ширина**: 320px - 480px
- **Максимальная ширина контейнера**: 414px
- **Отступы**: 16-20px по краям
- **Размер шрифта**: минимум 16px для input полей
- **Высота кнопок**: минимум 44px для touch

### Планшеты
- **Ширина**: 481px - 767px
- **Центрирование контейнера**
- **Увеличенные отступы**

### Десктоп
- **Ширина**: от 768px
- **Контейнер с максимальной шириной 414px**
- **Центрирование с тенями**
- **Скругленные углы контейнера**

---

## 🧪 Тестовые данные

### Обязательные тестовые сценарии:
```javascript
const testData = {
    // Успешные сценарии
    validRecipients: [
        {
            phone: '79123456789',
            name: 'Иван Иванов',
            maritalStatus: 'MARRIED',
            limit: 50000
        },
        {
            phone: '79111234567',
            name: 'Мария Петрова',
            maritalStatus: 'SINGLE',
            limit: null
        },
        {
            phone: '79998887766',
            name: 'Анна Сидорова',
            maritalStatus: 'DIVORCED',
            limit: null
        }
    ],
    
    // Ошибочные сценарии
    errorScenarios: [
        { type: 'RECIPIENT_NOT_FOUND', phone: '79999999999' },
        { type: 'INSUFFICIENT_FUNDS', amount: 999999 },
        { type: 'LIMIT_EXCEEDED', amount: 60000, maritalStatus: 'MARRIED' },
        { type: 'TECHNICAL_ERROR', random: true }
    ],
    
    // Тестовый баланс
    initialBalance: 125450.00
};
```

---

## 📋 Чек-лист качества

### HTML
- [ ] Валидная HTML5 разметка
- [ ] Семантические теги (`<header>`, `<main>`, `<section>`)
- [ ] Accessibility атрибуты (`aria-*`, `role`)
- [ ] Правильные input типы (`tel`, `number`, `email`)
- [ ] Уникальные ID для всех интерактивных элементов

### CSS
- [ ] Mobile-first подход
- [ ] CSS переменные для цветов и размеров
- [ ] Плавные анимации и переходы
- [ ] Hover состояния для интерактивных элементов
- [ ] Корректная работа focus состояний
- [ ] Responsive дизайн для всех разрешений

### JavaScript
- [ ] Обработка всех пользовательских сценариев
- [ ] Валидация на стороне клиента
- [ ] Имитация API с реалистичными задержками
- [ ] Обработка ошибок с понятными сообщениями
- [ ] История навигации
- [ ] Сохранение состояния между экранами

### UX/UI
- [ ] Интуитивная навигация
- [ ] Четкие состояния загрузки
- [ ] Информативные сообщения об ошибках
- [ ] Подтверждения критических действий
- [ ] Быстрые действия (например, кнопки сумм)
- [ ] Автоформатирование полей ввода

---

## 📖 Пример использования

При создании wireframe для новой функции:

1. **Изучите требования** из User Story и Use Case
2. **Определите основные экраны** и переходы между ними
3. **Создайте HTML структуру** начиная с контейнера приложения
4. **Добавьте CSS стили** используя existing design system
5. **Реализуйте JavaScript логику** для всех сценариев
6. **Протестируйте все пути** включая ошибочные сценарии
7. **Создайте документацию** в README.md

### Пример для функции "Перевод с комментарием":
```html
<!-- Дополнительное поле на экране суммы -->
<div class="input-group">
    <label for="comment-input">Комментарий (необязательно)</label>
    <textarea 
        id="comment-input" 
        placeholder="Комментарий к переводу"
        class="comment-input"
        maxlength="200"
        rows="3"
    ></textarea>
    <div class="char-counter">
        <span id="char-count">0</span>/200
    </div>
</div>
```

---

## 🔧 Инструменты разработки

### Рекомендуемые расширения для VS Code:
- **Live Server** для локального просмотра
- **Prettier** для форматирования кода
- **Auto Rename Tag** для работы с HTML
- **CSS Peek** для навигации по CSS

### Инструменты тестирования:
- **Chrome DevTools** Device Toolbar для мобильного просмотра
- **Firefox Developer Tools** для проверки accessibility
- **Lighthouse** для анализа производительности

---

*Данная инструкция обеспечивает создание качественных, интерактивных wireframes, полностью соответствующих требованиям и готовых для передачи команде разработки.* 