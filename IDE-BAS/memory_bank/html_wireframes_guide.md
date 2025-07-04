# Инструкция: Создание HTML/CSS Wireframes для банковских приложений

## 🎯 Цель
Создание интерактивных мобильных wireframes на основе User Story и Use Case с полной функциональностью для демонстрации UX потоков.

## 📁 Структура файлов
```
wireframes/
├── index.html          # Основная страница
├── styles.css          # CSS стили
├── script.js           # JavaScript логика
└── README.md           # Документация
```

## 🏗️ HTML Template
```html
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Банковское приложение - [Функция]</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="app-container">
        <header class="header">
            <div class="header-content">
                <button class="back-btn" onclick="goBack()">←</button>
                <h1 class="header-title">Главная</h1>
                <button class="profile-btn">👤</button>
            </div>
        </header>
        
        <main class="main-content">
            <!-- Экраны приложения -->
            <div class="screen active" id="home-screen">
                <!-- Главный экран -->
            </div>
            
            <div class="screen" id="next-screen">
                <!-- Следующий экран -->
            </div>
        </main>
    </div>
    <script src="script.js"></script>
</body>
</html>
```

## 🎨 CSS Основы

### Переменные и базовые стили
```css
:root {
    --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    --balance-gradient: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
    --success-color: #28a745;
    --error-color: #dc3545;
    --warning-color: #ffc107;
    --background-color: #f5f7fa;
    --text-color: #333;
    --border-color: #e9ecef;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    line-height: 1.6;
}
```

### Мобильный контейнер
```css
.app-container {
    max-width: 414px;
    margin: 0 auto;
    background: white;
    min-height: 100vh;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

.header {
    background: var(--primary-gradient);
    color: white;
    padding: 44px 20px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
}

.main-content {
    padding: 20px;
    min-height: calc(100vh - 104px);
}
```

### Экраны и анимации
```css
.screen {
    display: none;
    animation: slideIn 0.3s ease-out;
}

.screen.active {
    display: block;
}

@keyframes slideIn {
    from { opacity: 0; transform: translateX(20px); }
    to { opacity: 1; transform: translateX(0); }
}
```

### Компоненты

#### Кнопки
```css
.btn-primary {
    width: 100%;
    padding: 16px;
    background: var(--primary-gradient);
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-primary:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
}

.btn-primary:disabled {
    background: var(--border-color);
    cursor: not-allowed;
}
```

#### Поля ввода
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

.phone-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}
```

#### Баланс карточка
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
```

## ⚙️ JavaScript Основы

### Структура и навигация
```javascript
let currentScreen = 'home-screen';
let navigationHistory = [];

function showScreen(screenId) {
    if (currentScreen !== screenId) {
        navigationHistory.push(currentScreen);
    }
    
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    
    document.getElementById(screenId).classList.add('active');
    currentScreen = screenId;
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
        'result-screen': 'Результат'
    };
    document.querySelector('.header-title').textContent = titles[screenId] || 'Приложение';
}
```

### Валидация и форматирование
```javascript
function formatPhone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.startsWith('8')) {
        value = '7' + value.substring(1);
    }
    if (value.startsWith('7')) {
        value = '+7' + value.substring(1);
    }
    
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
    
    continueBtn.disabled = false;
}
```

### API имитация
```javascript
function findRecipient() {
    const phoneInput = document.getElementById('phone-input');
    const phone = phoneInput.value.replace(/\D/g, '');
    
    setTimeout(() => {
        const mockRecipients = {
            '79123456789': {
                name: 'Иван Иванов',
                phone: '+7 (912) 345-67-89',
                maritalStatus: 'MARRIED'
            },
            '79111234567': {
                name: 'Мария Петрова',
                phone: '+7 (911) 123-45-67',
                maritalStatus: 'SINGLE'
            }
        };
        
        const recipient = mockRecipients[phone];
        
        if (recipient) {
            currentRecipient = recipient;
            showRecipientInfo(recipient);
            hideError('phone-error');
        } else {
            showError('phone-error', 'Получатель не найден');
        }
    }, 500);
}

function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.classList.remove('show');
}
```

## 📱 Responsive дизайн
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
}

@media (min-width: 768px) {
    .app-container {
        max-width: 414px;
        border-radius: 20px;
        margin-top: 20px;
    }
    .header {
        border-radius: 20px 20px 0 0;
    }
}
```

## 🧪 Тестовые данные
```javascript
const testData = {
    recipients: [
        { phone: '79123456789', name: 'Иван Иванов', maritalStatus: 'MARRIED' },
        { phone: '79111234567', name: 'Мария Петрова', maritalStatus: 'SINGLE' },
        { phone: '79998887766', name: 'Анна Сидорова', maritalStatus: 'DIVORCED' }
    ],
    initialBalance: 125450.00,
    errors: {
        notFound: '79999999999',
        insufficientFunds: 999999,
        limitExceeded: { amount: 60000, status: 'MARRIED' }
    }
};
```

## 📋 Обязательные экраны

### 1. Главный экран
- Карточка баланса
- Сетка действий (2x2)
- Основная кнопка функции

### 2. Ввод данных
- Поля с валидацией
- Автоформатирование
- Сообщения об ошибках

### 3. Подтверждение
- Детали операции
- Предупреждения
- Кнопки подтверждения/отмены

### 4. Результат
- Статус операции
- Детали транзакции
- Переходы к следующим действиям

## ✅ Чек-лист качества
- [ ] Мобильный дизайн (414px max-width)
- [ ] Плавные анимации переходов
- [ ] Валидация всех форм
- [ ] Имитация API с задержками
- [ ] Обработка всех сценариев ошибок
- [ ] Автоформатирование полей
- [ ] Responsive для планшетов/десктопа
- [ ] Accessibility (aria-labels, focus)
- [ ] Тестовые данные для всех сценариев
- [ ] Документация в README.md

---
*Следуйте этим принципам для создания качественных wireframes, готовых к передаче команде разработки.* 