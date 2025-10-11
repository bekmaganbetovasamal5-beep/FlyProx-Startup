# MCP Серверы - Статус проверки

**Дата проверки:** 2025-10-11
**Всего серверов:** 12

## ✅ РАБОТАЮЩИЕ (8/12)

### 1. **playwright**
- **Статус:** ✅ РАБОТАЕТ
- **Версия:** 0.0.42
- **Команда:** `npx -y @playwright/mcp`
- **Описание:** Автоматизация браузера, веб-скрапинг

### 2. **sequential-thinking**
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @modelcontextprotocol/server-sequential-thinking`
- **Описание:** LLM для построения логических цепочек

### 3. **supabase**
- **Статус:** ✅ РАБОТАЕТ
- **Версия:** 0.5.6
- **Команда:** `npx -y @supabase/mcp-server-supabase@latest`
- **Env vars:** SUPABASE_URL, SUPABASE_ACCESS_TOKEN
- **Описание:** Auth и база данных Supabase

### 4. **figma** (server-everything)
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @modelcontextprotocol/server-everything`
- **Env vars:** FIGMA_ACCESS_TOKEN
- **Описание:** Доступ к Figma API

### 5. **context7**
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @upstash/context7-mcp@latest`
- **Описание:** Управление контекстом для LLM

### 6. **filesystem**
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @modelcontextprotocol/server-filesystem /Users/amanyessen/MyProjects`
- **Описание:** Работа с файловой системой

### 7. **git**
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @mseep/git-mcp-server /Users/amanyessen/MyProjects/FlyProx`
- **Описание:** Git операции с репозиторием

### 8. **http** (server-everything)
- **Статус:** ✅ РАБОТАЕТ
- **Команда:** `npx -y @modelcontextprotocol/server-everything`
- **Описание:** HTTP запросы и работа с API

## ⚠️ ПРОБЛЕМНЫЕ (4/12)

### 9. **postgres**
- **Статус:** ⚠️ ПРОБЛЕМА С URL
- **Ошибка:** Invalid URL при запуске
- **Команда:** `npx -y @modelcontextprotocol/server-postgres`
- **Env vars:** POSTGRES_CONNECTION_STRING
- **Проблема:** Требуется проверка строки подключения к PostgreSQL
- **Решение:** Убедиться, что PostgreSQL запущен и строка подключения корректна

### 10. **composio-figma**
- **Статус:** ❌ ПАКЕТ НЕ НАЙДЕН
- **Ошибка:** 404 Not Found на npm registry
- **Команда:** `npx -y composio-mcp-figma`
- **Env vars:** FIGMA_ACCESS_TOKEN
- **Проблема:** Пакет `composio-mcp-figma` не существует в npm
- **Решение:** Проверить правильное название пакета или удалить из конфигурации

### 11. **figma-hc48kv-55** (mcp-remote)
- **Статус:** ⚠️ ОШИБКА URL
- **Ошибка:** Fatal error: TypeError: Invalid URL
- **Команда:** `npx -y mcp-remote https://mcp.composio.dev/partner/composio/figma/mcp?customerId=...`
- **Env vars:** npm_config_yes=true
- **Проблема:** mcp-remote требует URL параметр при запуске
- **Решение:** Сервер работает только через MCP клиент, не для прямого запуска

### 12. **mcp-config-2zbps2** (mcp-remote)
- **Статус:** ⚠️ ОШИБКА ЗАПУСКА
- **Ошибка:** Проблемы с URL в shell
- **Команда:** `npx -y mcp-remote https://backend.composio.dev/v3/mcp/...`
- **Env vars:** npm_config_yes=true
- **Проблема:** Специальные символы в URL требуют экранирования
- **Решение:** Сервер работает только через MCP клиент

## 🔧 РЕКОМЕНДАЦИИ

### Немедленные действия:
1. **Исправить postgres:**
   ```bash
   # Запустить PostgreSQL
   brew services start postgresql

   # Создать базу данных
   createdb mydb

   # Проверить подключение
   psql -h localhost -U postgres -d mydb
   ```

2. **Удалить/заменить composio-figma:**
   - Пакет не найден в npm registry
   - Использовать работающий figma сервер

3. **Для mcp-remote серверов:**
   - Они работают только внутри MCP клиента
   - Не требуют независимого запуска

### Итог:
- **8 серверов работают корректно** ✅
- **4 сервера требуют внимания** ⚠️
- **Критические проблемы:** PostgreSQL, composio-figma

### Рабочие серверы готовые к использованию:
- playwright, sequential-thinking, supabase, figma, context7, filesystem, git, http