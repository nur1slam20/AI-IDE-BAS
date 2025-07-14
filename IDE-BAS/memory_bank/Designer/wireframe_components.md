# Компоненты для Wireframes: Примеры и шаблоны

## 🧩 Готовые компоненты на основе Banking wireframes

### 📱 Заголовок приложения
```html
<header class="header">
    <div class="header-content">
        <button class="back-btn" onclick="goBack()">←</button>
        <h1 class="header-title">Главная</h1>
        <button class="profile-btn">👤</button>
    </div>
</header>
```

```css
.header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 44px 20px 20px;
    position: sticky;
    top: 0;
    z-index: 100;
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
```

### 💳 Карточка баланса
```html
<div class="balance-card">
    <h2>Баланс счета</h2>
    <div class="balance-amount">125 450,00 ₽</div>
    <p class="account-number">**** 5678</p>
</div>
```

```css
.balance-card {
    background: linear-gradient(135deg, #ff6b6b 0%, #ffa726 100%);
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

.account-number {
    opacity: 0.8;
    font-size: 14px;
}
```

### 🎯 Сетка действий
```html
<div class="actions-grid">
    <button class="action-btn primary" onclick="showScreen('transfer-screen')">
        <div class="action-icon">💸</div>
        <span>Перевод</span>
    </button>
    <button class="action-btn" onclick="showScreen('history-screen')">
        <div class="action-icon">📋</div>
        <span>История</span>
    </button>
    <button class="action-btn">
        <div class="action-icon">📱</div>
        <span>Пополнить</span>
    </button>
    <button class="action-btn">
        <div class="action-icon">⚙️</div>
        <span>Настройки</span>
    </button>
</div>
```

```css
.actions-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
    margin-bottom: 24px;
}

.action-btn {
    background: white;
    border: 2px solid #e9ecef;
    padding: 20px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    font-weight: 500;
}

.action-btn:hover {
    border-color: #667eea;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);
}

.action-btn.primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border-color: transparent;
}

.action-icon {
    font-size: 24px;
}
```

### 📝 Группа полей ввода
```html
<div class="input-group">
    <label for="phone-input">Номер телефона</label>
    <input 
        type="tel" 
        id="phone-input" 
        placeholder="+7 (___) ___-__-__"
        class="phone-input"
        oninput="formatPhone(this)"
    >
    <div class="input-error" id="phone-error"></div>
</div>
```

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

.phone-input {
    width: 100%;
    padding: 16px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.phone-input:focus {
    outline: none;
    border-color: #667eea;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
}

.input-error {
    color: #dc3545;
    font-size: 14px;
    margin-top: 8px;
    display: none;
}

.input-error.show {
    display: block;
    animation: fadeIn 0.3s ease-out;
}
```

### 👤 Карточка получателя
```html
<div class="recipient-info hidden" id="recipient-info">
    <div class="recipient-card">
        <div class="recipient-avatar">👤</div>
        <div class="recipient-details">
            <h3 id="recipient-name">Иван Иванов</h3>
            <p id="recipient-phone">+7 (912) 345-67-89</p>
            <span class="status-badge" id="recipient-status">Женат</span>
        </div>
    </div>
</div>
```

```css
.recipient-info {
    margin: 24px 0;
    animation: fadeIn 0.3s ease-out;
}

.recipient-card {
    display: flex;
    align-items: center;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 12px;
    gap: 16px;
}

.recipient-avatar {
    width: 50px;
    height: 50px;
    background: #667eea;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
}

.recipient-details h3 {
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 4px;
}

.recipient-details p {
    color: #6c757d;
    font-size: 14px;
    margin-bottom: 8px;
}

.status-badge {
    background: #28a745;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 12px;
    font-weight: 500;
}
```

### 💰 Поле ввода суммы
```html
<div class="amount-input-container">
    <input 
        type="number" 
        id="amount-input" 
        placeholder="0"
        class="amount-input"
        min="1"
        max="100000"
        oninput="validateAmount(this)"
    >
    <span class="currency">₽</span>
</div>

<div class="balance-info">
    <span>Доступно: 125 450,00 ₽</span>
</div>

<div class="quick-amounts">
    <button class="quick-amount" onclick="setAmount(1000)">1 000</button>
    <button class="quick-amount" onclick="setAmount(5000)">5 000</button>
    <button class="quick-amount" onclick="setAmount(10000)">10 000</button>
</div>
```

```css
.amount-input-container {
    position: relative;
    margin-bottom: 16px;
}

.amount-input {
    width: 100%;
    padding: 16px 60px 16px 16px;
    border: 2px solid #e9ecef;
    border-radius: 12px;
    font-size: 24px;
    font-weight: 600;
    text-align: center;
}

.currency {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 24px;
    color: #6c757d;
}

.balance-info {
    color: #6c757d;
    margin-bottom: 16px;
    text-align: center;
}

.quick-amounts {
    display: flex;
    gap: 8px;
    margin-bottom: 24px;
}

.quick-amount {
    flex: 1;
    padding: 12px;
    background: white;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.quick-amount:hover {
    border-color: #667eea;
    background: #f8f9ff;
}
```

### ✅ Экран подтверждения
```html
<div class="confirmation-details">
    <div class="detail-row">
        <span>Получатель:</span>
        <strong id="confirm-name">Иван Иванов</strong>
    </div>
    <div class="detail-row">
        <span>Телефон:</span>
        <span id="confirm-phone">+7 (912) 345-67-89</span>
    </div>
    <div class="detail-row">
        <span>Сумма:</span>
        <strong id="confirm-amount">5 000,00 ₽</strong>
    </div>
    <div class="detail-row">
        <span>Комиссия:</span>
        <span>0,00 ₽</span>
    </div>
    <hr>
    <div class="detail-row total">
        <span>К списанию:</span>
        <strong id="confirm-total">5 000,00 ₽</strong>
    </div>
</div>

<div class="warning-message" id="married-warning" style="display: none;">
    ⚠️ Для женатых получателей действуют дополнительные ограничения по сумме переводов
</div>
```

```css
.confirmation-details {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 16px;
}

.detail-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    align-items: center;
}

.detail-row:last-child {
    margin-bottom: 0;
}

.detail-row.total {
    font-weight: 700;
    font-size: 16px;
    margin-top: 8px;
}

.confirmation-details hr {
    border: none;
    border-top: 1px solid #e9ecef;
    margin: 12px 0;
}

.warning-message {
    background: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 16px;
    font-size: 14px;
}
```

### 🎉 Экран результата
```html
<div class="result-container">
    <div class="result-icon success" id="result-icon">✅</div>
    <h2 id="result-title">Перевод выполнен успешно!</h2>
    <p id="result-message">Средства переведены получателю</p>
    
    <div class="transaction-details">
        <div class="detail-row">
            <span>Номер операции:</span>
            <span id="transaction-id">123456789</span>
        </div>
        <div class="detail-row">
            <span>Дата и время:</span>
            <span id="transaction-time">15.11.2024, 14:30</span>
        </div>
    </div>
</div>
```

```css
.result-container {
    text-align: center;
}

.result-icon {
    font-size: 64px;
    margin-bottom: 16px;
}

.result-icon.success {
    color: #28a745;
}

.result-icon.error {
    color: #dc3545;
}

.result-container h2 {
    font-size: 24px;
    font-weight: 700;
    color: #28a745;
    margin-bottom: 8px;
}

.result-container p {
    color: #6c757d;
    margin-bottom: 24px;
}

.transaction-details {
    background: #f8f9fa;
    padding: 16px;
    border-radius: 12px;
    margin-bottom: 24px;
    text-align: left;
}
```

### 📋 Список транзакций
```html
<div class="transaction-list">
    <div class="transaction-item">
        <div class="transaction-info">
            <div class="transaction-type">Перевод</div>
            <div class="transaction-recipient">Иван Иванов</div>
            <div class="transaction-phone">+7 (912) 345-67-89</div>
        </div>
        <div class="transaction-amount negative">-5 000,00 ₽</div>
        <div class="transaction-date">15.11.2024 14:30</div>
    </div>
</div>
```

```css
.transaction-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.transaction-item {
    background: white;
    padding: 16px;
    border-radius: 12px;
    border: 1px solid #e9ecef;
    display: grid;
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 8px;
}

.transaction-info {
    grid-column: 1;
    grid-row: 1;
}

.transaction-type {
    font-weight: 500;
    color: #495057;
    font-size: 14px;
}

.transaction-recipient {
    font-weight: 600;
    font-size: 16px;
    margin: 4px 0;
}

.transaction-phone {
    color: #6c757d;
    font-size: 14px;
}

.transaction-amount {
    grid-column: 2;
    grid-row: 1;
    font-weight: 600;
    font-size: 16px;
    text-align: right;
}

.transaction-amount.negative {
    color: #dc3545;
}

.transaction-amount.positive {
    color: #28a745;
}

.transaction-date {
    grid-column: 1 / 3;
    grid-row: 2;
    color: #6c757d;
    font-size: 12px;
}
```

## ⚙️ JavaScript функции

### Обработка ошибок
```javascript
function showError(errorId, message) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

function hideError(errorId) {
    const errorElement = document.getElementById(errorId);
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}
```

### Форматирование номера телефона
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
```

### Валидация суммы
```javascript
function validateAmount(input) {
    const amount = parseFloat(input.value) || 0;
    const continueBtn = document.getElementById('amount-continue-btn');
    
    hideError('amount-error');
    
    if (amount <= 0) {
        continueBtn.disabled = true;
        return false;
    }
    
    if (amount > currentBalance) {
        showError('amount-error', 'Недостаточно средств на счете');
        continueBtn.disabled = true;
        return false;
    }
    
    if (currentRecipient && currentRecipient.maritalStatus === 'MARRIED' && amount > 50000) {
        showError('amount-error', 'Превышен лимит перевода для данного статуса');
        continueBtn.disabled = true;
        return false;
    }
    
    continueBtn.disabled = false;
    return true;
}
```

### Имитация API
```javascript
function findRecipient() {
    const phoneInput = document.getElementById('phone-input');
    const phone = phoneInput.value.replace(/\D/g, '');
    
    if (phone.length !== 11 || !phone.startsWith('7')) {
        showError('phone-error', 'Введите корректный номер телефона');
        return;
    }
    
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
            },
            '79998887766': {
                name: 'Анна Сидорова',
                phone: '+7 (999) 888-77-66',
                maritalStatus: 'DIVORCED'
            }
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
    }, 500);
}

function showRecipientInfo(recipient) {
    const recipientInfo = document.getElementById('recipient-info');
    const recipientName = document.getElementById('recipient-name');
    const recipientPhone = document.getElementById('recipient-phone');
    const recipientStatus = document.getElementById('recipient-status');
    const searchBtn = document.getElementById('search-btn');
    const continueBtn = document.getElementById('continue-btn');
    
    recipientName.textContent = recipient.name;
    recipientPhone.textContent = recipient.phone;
    
    const statusTexts = {
        'MARRIED': 'Женат/Замужем',
        'SINGLE': 'Холост/Незамужем',
        'DIVORCED': 'Разведен(а)',
        'WIDOWED': 'Вдовец/Вдова'
    };
    recipientStatus.textContent = statusTexts[recipient.maritalStatus] || recipient.maritalStatus;
    
    recipientInfo.classList.remove('hidden');
    searchBtn.classList.add('hidden');
    continueBtn.classList.remove('hidden');
}
```

---
*Используйте эти готовые компоненты как строительные блоки для создания wireframes любой функциональности банковского приложения.* 