# FlyProx - Summary

## Общее описание проекта

FlyProx - это full-stack SaaS платформа аналогичная SalesAI, построенная на Next.js + Express архитектуре с AI голосовыми агентами для продаж и поддержки.

## Основные компоненты

### Технологический стек
- **Frontend**: Next.js + React.js
- **Backend**: Node.js + Express.js
- **Стили**: PostCSS (готов к Tailwind CSS)
- **База данных**: PostgreSQL
- **Контейнеризация**: Docker + Docker Compose
- **Аутентификация**: Supabase
- **Мониторинг**: Sentry 

### Структура проекта
```
FlyProx/
├── index.js              # Основной файл приложения
├── package.json          # Зависимости и скрипты
├── .env                  # Переменные окружения
├── docker-compose.yml    # Docker конфигурация
├── Dockerfile           # Docker образ
├── mcp.json             # MCP конфигурация

```

## Функциональность

### Текущее состояние
- ✅ Полный сайт-клон SalesAI с брендингом FlyProx AI
- ✅ Next.js 15.5.4 с React 19.2.0 и Pages Router
- ✅ Полностью реализованная черно-желтая цветовая схема
- ✅ Tailwind CSS v3.4.0 с кастомной темной темой
- ✅ Все UI компоненты:
  - Header с навигацией (Pricing, Products, Resources)
  - Hero секция с анимациями и формой захвата email
  - Features сетка с 6 интерактивными карточками
  - Pricing секция с 3 тарифами и переключателем monthly/annual
  - Testimonials карусель с отзывами клиентов
  - Footer с newsletter подпиской и социальными ссылками
- ✅ Полностью адаптивный дизайн для всех устройств
- ✅ Интерактивные элементы: hover effects, анимации, переходы
- ✅ Базовый Express сервер с PostgreSQL
- ✅ Docker конфигурация
- ✅ MCP интеграция (15+ серверов)
- ✅ Sentry мониторинг
- ✅ Сайт полностью функционирует на http://localhost:3001

### Планируемые возможности
- 🔲 API эндпоинты для пользователей и подписок
- 🔲 Supabase аутентификация (Google/Apple OAuth)
- 🔲 PostgreSQL схемы для users, subscriptions, ai_agents
- 🔲 Панель управления (dashboard)
- 🔲 Интеграция платежей (Stripe)
- 🔲 WebSocket для real-time коммуникаций
- 🔲 Валидация данных
- 🔲 Обработка ошибок
- 🔲 Логирование

## Конфигурация


### Docker
- Multi-stage builds
- Оптимизированный образ
- Docker Compose для разработки

## MCP (Model Context Protocol)
- Интеграция с Playwright
- Интеграция с Figma 
figma-hc48kv-55
mcp-config-2zbps2
context 7 
- Интеграция с Supabase
- Интеграция с PostgreSQL
- HTTP запросы
- Sequential thinking
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





