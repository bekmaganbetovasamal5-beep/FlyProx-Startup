# Notes - Заметки по разработке FlyProx

## 📝 Общие заметки

### Инициализация проекта
- Проект создан: 9 октября 2024
- Инициализирован как Node.js ES Modules проект
- Используется Express.js версии 5.1.0

### MCP Integration
## 3. MCP Integration
- **HTTP**: Внешние API запросы
| MCP Server | Назначение | Когда использовать |
|-------------|-------------|--------------------|
| **playwright** | Автотесты UI | тест фронтенда и поиск информации в интернете, Автоматизация браузера|
| **figma-hc48kv-55** | Composio Figma | анализ дизайна |
| **mcp-config-2zbps2** | Базовые настройки MCP | вызов облачных инструментов |
| **sequential-thinking** | Логические цепочки LLM | используй всегда при написании кода|
| **supabase** | Auth / DB | миграции, токены база данных|
| **postgres** | PostgreSQL | модели, миграции|
| **figma** | Figma API | анализ UI |
| **context7** | Контекст LLM | хранение состояний, используй всегда документацию при написании кода|
| **http** | REST-запросы | внешние API |
| **filesystem** | Работа с файлами | обновление `openapi.yaml`, `postman_collection.json` |
| **git** | Репозиторий FlyProx | коммиты, автосейв |
| **firecrawl** | Парсинг сайтов | импорт документации |
| **browserbase** | Рендер браузера | UI тесты |
| **serena** | Последовательности вызовов | сложные сценарии |
| **sentry** | Логи ошибок | мониторинг |
| **chrome-devtools** | Отладка UI | анализ фронтенда |
| **firecrawl** | Парсинг и клонирование веб-страниц | импорт документации и данных при копированиий сайтя для создания |
| **browserbase** | Рендеринг сайтов в браузере | UI-тестирование, валидация контента |
| **serena** | Оркестрация LLM-вызовов | последовательные задачи |
| **web-to-mcp** | Конвертация HTML → Markdown | обработка внешних API и документации когда создаешь сайт|
| **chrome-devtools** | Анализ DOM, network и ошибок | отладка фронтенда и UI |



## 🔧 Технические заметки

### Docker конфигурация
```
# Multi-stage build для оптимизации размера образа
FROM node:22-alpine AS builder
# Production stage
FROM node:22-alpine AS production
```

Секреты в файле .env

### Структура package.json
- `"type": "module"` - ES Modules поддержка
- Node.js >= 22 требование
- nodemon для разработки




### Проблема: CORS
**Решение:** Добавить cors middleware

## 🚀 Полезные команды

### Разработка
```bash
npm run dev          # Запуск с nodemon
npm start            # Production запуск
npm install          # Установка зависимостей
```

### Docker
```bash
docker-compose up    # Запуск всех сервисов
docker-compose down  # Остановка сервисов
docker-compose logs  # Просмотр логов
```

```

## 📚 Полезные ресурсы

### Документация
- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Node.js](https://node-postgres.com/)
- [Redis Node.js](https://github.com/redis/node-redis)
- [Docker Documentation](https://docs.docker.com/)

### MCP
- [Model Context Protocol](https://modelcontextprotocol.io/)
- [Playwright MCP](https://github.com/playwright/mcp)
- [Figma MCP](https://github.com/figma/mcp)

## 🔐 Безопасность

### Текущие меры безопасности
- Environment variables для конфиденциальных данных
- .gitignore исключает .env файлы


## 🎯 Next Steps

### Срочные задачи
1. Реализовать базовые API эндпоинты
2. Добавить middleware для обработки ошибок
3. Настроить логирование






