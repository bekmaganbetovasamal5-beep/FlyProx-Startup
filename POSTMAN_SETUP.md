# 🚀 Настройка Postman для FlyProx

## ✅ Текущий статус:
- Backend работает на: `http://localhost:3000`
- Docker контейнеры запущены ✅
- PostgreSQL: localhost:5432
- Redis: localhost:6379

## 📋 Шаги настройки Postman:

### 1. **Создание нового Workspace**
1. Откройте Postman
2. В левом верхнем углу нажмите на свой профиль
3. Создайте новый Workspace: "FlyProx Development"

### 2. **Создание коллекции**
1. Нажмите `+ New` → `Collection`
2. Назовите коллекцию: "FlyProx API"
3. Добавьте описание: "API для FlyProx backend"

### 3. **Настройка переменных окружения**
1. Нажмите на `Environments` → `+`
2. Создайте окружение "Development"
3. Добавьте переменные:

```
baseUrl        | http://localhost:3000
apiVersion     | /api/v1
contentType    | application/json
```

### 4. **Примеры запросов**

#### GET - Проверка работы сервера
```
Method: GET
URL: {{baseUrl}}/
Headers: Content-Type: {{contentType}}
```

#### GET - Получение данных
```
Method: GET
URL: {{baseUrl}}{{apiVersion}}/data
Headers:
  - Content-Type: {{contentType}}
  - Authorization: Bearer {{token}}
```

#### POST - Создание данных
```
Method: POST
URL: {{baseUrl}}{{apiVersion}}/data
Headers:
  - Content-Type: {{contentType}}
Body (raw JSON):
{
  "name": "Test Item",
  "value": 123
}
```

### 5. **Подключение к PostgreSQL (если нужно)**
Для прямых запросов к базе:
- Host: localhost
- Port: 5432
- Database: mydb
- Username: postgres
- Password: super-secret

### 6. **Импорт готовой коллекции**
Если у вас есть файл коллекции:
1. `File` → `Import`
2. Выберите файл или вставьте URL
3. Выберите workspace для импорта

## 🔧 Дополнительные настройки:

### **Аутентификация**
Если используете JWT или другую аутентификацию:
1. Перейдите в `Authorization` таб
2. Выберите тип (Bearer Token, API Key и т.д.)
3. Используйте переменные: `{{token}}`

### **Тесты**
Вкладка `Tests` для автоматической проверки:
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Response has data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.data).to.exist;
});
```

### **Pre-request Script**
Для автоматического получения токена:
```javascript
if (!pm.environment.get("token")) {
    // Запрос на получение токена
}
```

## 🚀 Быстрый старт:

1. Откройте Postman
2. Создайте GET запрос: `http://localhost:3000`
3. Нажмите `Send`
4. Должны увидеть ответ от вашего backend!

---

**Готово к работе!** Теперь вы можете тестировать все эндпоинты вашего API.