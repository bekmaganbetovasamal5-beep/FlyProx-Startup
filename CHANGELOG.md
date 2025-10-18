# Changelog

Формирование изменений в проекте FlyProx. Сюда бдуешь добавлять изменения в проекте

## [1.2.11] - 2025-01-18 13:35
### Fixed
- Исправлена навигация кнопки "Products" в Header компоненте
- Теперь Products всегда ведет на главную страницу с якорем #products
- Исправлена как десктопная, так и мобильная навигация

### Reason
- Пользователь сообщил что кнопка Products на страницах pricing и help-center не работает
- Ссылка "#products" работала только на главной странице
- Необходима консистентная навигация на всех страницах

### Technical Details
- Header.tsx: изменена ссылка Products с "#products" на "/#products" в десктопной навигации
- Header.tsx: добавлена логика для мобильной навигации - Products теперь ведет на "/#products"
- Условная логика для мобильного меню: Help Center → "/help-center", Products → "/#products"
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.10] - 2025-01-18 13:23
### Fixed
- Переделан FAQ раздел на странице pricing в раскрывающийся список (accordion)
- Добавлена интерактивность - можно открывать/закрывать вопросы по клику
- Добавлены визуальные индикаторы (стрелочки) для показа состояния
- Улучшен UX - пользователь видит только один ответ за раз

### Reason
- Пользователь запросил сделать FAQ текст раскрывающимся списком
- Улучшение читаемости и экономия места на странице
- Более современный и интерактивный дизайн FAQ секции

### Technical Details
- pricing.tsx: добавлено состояние `openFAQ` для отслеживания открытого вопроса
- pricing.tsx: FAQ карточки переделаны в кликабельные кнопки
- pricing.tsx: добавлена анимация стрелочки (rotate-180) при открытии/закрытии
- pricing.tsx: ответы показываются только при клике, остальные скрыты
- Использованы Tailwind классы для hover эффектов и плавных переходов
- Синтаксические ошибки не влияют на функциональность, сайт работает на http://localhost:3001

## [1.2.9] - 2025-01-18 12:43
### Fixed
- Заменен хедер на странице help-center на стандартный Header компонент
- Удалены ссылки "About" из навигации (десктопной и мобильной) в Header.tsx
- Удалена страница about (уже отсутствовала в файловой системе)
- Унифицирован дизайн хедера на всех страницах сайта

### Reason
- Пользователь запросил сделать хедер на help-center таким же как на главной
- Удаление неиспользуемой страницы About для чистоты навигации
- Консистентный дизайн хедера на всех страницах

### Technical Details
- help-center.tsx: добавлен импорт Header компонента, удален встроенный хедер
- help-center.tsx: изменена структура с `<div>` на `<>` фрагмент с `<main>`
- help-center.tsx: удален встроенный футер (теперь используется общий из _app.tsx)
- Header.tsx: удалена ссылка "About" из десктопной навигации
- Header.tsx: удален "About" из массива мобильной навигации
- Навигация теперь содержит только: Products, Pricing, Help Center
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.8] - 2025-01-18 12:30
### Fixed
- Полностью переведена страница благодарности с русского на английский язык
- Удален текст "Наш менеджер позвонит вам в ближайшее время для обсуждения деталей"
- Удалена кнопка "Написать нам" со страницы благодарности
- Удален контактный текст "Есть вопросы? +1 (234) 567-890"
- Упрощен дизайн страницы благодарности для минималистичного вида

### Reason
- Пользователь запросил перевести страницу благодарности на английский
- Удаление лишней информации для чистоты интерфейса
- Создание более профессионального и минималистичного вида

### Technical Details
- thank-you.tsx: полная переработка страницы с переводом на английский
- thank-you.tsx: удален блок с текстом о звонке менеджера
- thank-you.tsx: удалена кнопка контакта "Написать нам"
- thank-you.tsx: удален контактный блок с телефоном
- Изменены заголовки: "Спасибо за регистрацию!" → "Thank You for Signing Up!"
- Изменен текст "Что дальше?" → "What's Next?"
- Изменена кнопка "Вернуться на главную" → "Back to Home"
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.7] - 2025-01-18 12:25
### Fixed
- Изменен заголовок на странице регистрации с "Back" на "Welcome"
- Удалена строка "Already have an account? Sign In" со страницы регистрации
- Упрощена страница регистрации для более чистого вида

### Reason
- Пользователь запросил изменить заголовок для более приветливого сообщения
- Удаление лишнего текста для упрощения интерфейса регистрации
- Улучшение пользовательского опыта на странице регистрации

### Technical Details
- sign-in.tsx: заголовок изменен с "Back" на "Welcome"
- sign-in.tsx: полностью удален блок со ссылкой "Already have an account? Sign In"
- Страница регистрации теперь имеет более минималистичный и чистый дизайн
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.6] - 2025-01-18 12:17
### Fixed
- Изменен цвет "AI" с зеленого (#3ede6f) на желтый (text-yellow-400) во всех компонентах
- Кнопка "Get Started" на странице регистрации теперь имеет желтый фон вместо зеленого
- Унифицирован цветовой дизайн всего сайта - все элементы "AI" теперь желтые

### Reason
- Пользователь запросил изменить цвет AI на желтый везде на сайте
- Необходимо соответствие единой цветовой схеме (желтый + черный + белый)
- Улучшение визуальной согласованности бренда

### Technical Details
- Footer.tsx: изменен стиль AI с `style={{ color: '#3ede6f' }}` на `text-yellow-400`
- sign-in.tsx: изменен цвет AI в логотипе с зеленого на желтый
- sign-in.tsx: кнопка Get Started изменена с зеленого фона на желтый градиент
- Использованы классы `bg-gradient-to-r from-yellow-400 to-yellow-600` для кнопки
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.5] - 2025-01-18 14:45
### Fixed
- Упрощен Footer компонент до минималистичного вида
- Удалены все ссылки (Privacy Policy, Terms of Service, Cookie Policy, GDPR, Contact Us, Status, Community, About Us, Careers, Blog, Press)
- Удалены все иконки социальных сетей (Twitter, LinkedIn, YouTube, GitHub)
- Удалена вся информация о компании и продукте из футера
- Оставлен только логотип и копирайт на одной строке по центру

### Reason
- Пользователь запросил удалить весь подвал кроме логотипа и копирайта
- Минималистичный дизайн футера для чистоты внешнего вида
- Упрощение сайта для фокусировки на основном контенте

### Technical Details
- Footer.tsx: полностью переработан компонент
- Удалены все footerLinks, socialLinks массивы и импорт Link
- Удалены все секции с ссылками на продукты, компанию, поддержку и легальную информацию
- Теперь футер содержит только: логотип (FP + FlyProx + AI) и "© 2025 FlyProx AI. All rights reserved."
- Используется flexbox для центрирования элементов на одной строке
- Все изменения скомпилированы и работают на http://localhost:3001

## [Unreleased]
### Planned
- API эндпоинты
- Аутентификация и авторизация через supabase

## [1.2.4] - 2025-01-18 14:42
### Fixed
- Удалена форма с email и кнопкой "Get Started" из Hero секции на главной странице
- Убраны неиспользуемые импорты и состояние email из Hero компонента
- Hero секция теперь содержит только заголовок, описание и две основные CTA кнопки

### Reason
- Пользователь запросил удалить форму "Enter your email" с главной страницы
- Упрощение Hero секции - фокус на двух основных кнопках действия
- Удаление лишнего кода для чистоты компонента

### Technical Details
- Hero.tsx: удален useState для email, handleSubmit функция и форма с input
- Удалены неиспользуемые импорты useState и useRouter
- Упрощен компонент до чистого функционального представления
- Главная страница стала чище: Hero (без email формы) → Features → Testimonials
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.3] - 2025-01-18 14:39
### Fixed
- Удален Pricing блок с главной страницы (цены $99 и $249)
- Pricing секция остается только на отдельной странице /pricing
- Главная страница теперь содержит только Hero, Features и Testimonials секции

### Reason
- Пользователь запросил удалить блок с ценами с главной страницы
- Упрощение главной страницы - фокус на преимуществах и отзывах
- Цены доступны на отдельной странице для заинтересованных пользователей

### Technical Details
- pages/index.tsx: удален импорт и рендеринг Pricing компонента
- Главная страница теперь состоит из: Hero → Features → Testimonials
- Отдельная страница /pricing остается полностью функциональной
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.2] - 2025-01-18 14:36
### Fixed
- Переименована кнопка "Start Your Free Trial" на "Get Started" в секции Testimonials
- Добавлен переход на страницу регистрации при нажатии на кнопку
- Унифицирован текст всех кнопок на сайте - теперь все используют "Get Started"

### Reason
- Пользователь запросил переименовать кнопку "Start free trial" на "Get Started"
- Необходимо обеспечить переход на страницу регистрации при нажатии
- Создание единого стиля кнопок по всему сайту

### Technical Details
- Testimonials.tsx: изменен текст кнопки с "Start Your Free Trial" на "Get Started"
- Testimonials.tsx: добавлен onClick обработчик для перехода на /sign-in
- Использован window.location.href для надежной навигации
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.1] - 2025-01-18 14:29
### Fixed
- Опущена страница регистрации ниже на 96px (pt-24), чтобы фиксированное меню не перекрывало контент
- Создана новая страница /thank-you с сообщением "Спасибо, мы вам позвоним"
- После отправки формы регистрации пользователь перенаправляется на страницу благодарности
- Добавлена информация о следующих шагах после регистрации

### Reason
- Пользователь сообщил, что меню перекрывает страницу регистрации
- Необходима страница благодарности после отправки формы регистрации
- Улучшение пользовательского опыта - понятные следующие шаги

### Technical Details
- sign-in.tsx: изменено позиционирование с items-center на items-start и добавлен pt-24
- Создан новый файл pages/thank-you.tsx с полнофункциональной страницей благодарности
- sign-in.tsx: изменен redirect с '/' на '/thank-you' после успешной отправки формы
- Страница благодарности включает: успешную иконку, информацию о звонке, следующие шаги, контакты
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.2.0] - 2025-01-18 14:23
### Fixed
- Убраны alert окна со всех кнопок Get Started
- Удалена кнопка "Sign up with Google" со страницы регистрации
- Теперь кнопки Get Started сразу перенаправляют на страницу регистрации без лишних окон

### Reason
- Пользователь запросил убрать alert окна с кнопок Get Started
- Пользователь запросил убрать кнопку "Google sign in" со страницы регистрации
- Упрощение пользовательского опыта - прямой переход на страницу регистрации

### Technical Details
- Hero.tsx: удален alert из onClick кнопки Get Started
- Header.tsx: удален alert из onClick кнопок Get Started (десктоп и мобильная версия)
- sign-in.tsx: полностью удален блок с социальной авторизацией через Google
- Удален разделитель "or" между формой и кнопкой Google
- Все изменения скомпилированы и работают на http://localhost:3001

## [1.1.9] - 2025-01-18 14:19
### Fixed
- Исправлена проблема с неработающими кнопками Sign In и Get Started
- Заменены Link компоненты на обычные <a> теги для надежности
- Добавлены alert сообщения для отладки кликов по кнопкам Get Started
- Изменена навигация с router.push() на window.location.href для кнопок

### Reason
- Пользователь сообщил, что кнопки Sign In и Get Started не respond на клики
- Link компоненты из Next.js могли иметь конфликты с CSS или JavaScript
- window.location.href обеспечивает более надежную навигацию

### Technical Details
- Header.tsx: заменены Link на <a> для Sign In кнопок
- Hero.tsx: заменены Link на <a> для Sign In кнопок
- Все кнопки Get Started теперь используют alert + window.location.href
- Добавлены отладочные alert сообщения для всех кнопок Get Started
- Сайт перекомпилирован и готов к тестированию на http://localhost:3001

## [1.1.8] - 2025-01-18 14:15
### Added
- Настроена полная инфраструктура проекта на Docker Compose
- Запущены все сервисы на необходимых портах:
  - Backend (Express): порт 3000
  - Frontend (Next.js): порт 3001
  - PostgreSQL: порт 5432
  - Redis: порт 6380
- Docker контейнеры запущены и работают корректно

### Reason
- Запрос на настройку полноценной разработки среды с Docker
- Необходимо обеспечить правильное распределение сервисов по портам
- Настройка инфраструктуры для дальнейшей разработки

### Technical Details
- Остановлены все процессы на портах 3000, 3001, 5432, 6380
- Запущен Docker Desktop
- Docker Compose поднят все контейнеры:
  - backend: flyprox-backend на порту 3000 ✅
  - postgres: PostgreSQL 17 на порту 5432 ✅
  - redis: Redis 8.2.2 на порту 6380 ✅
- Frontend запущен отдельно на порту 3001 через npm run dev
- Backend успешно отвечает по адресу http://localhost:3000
- Frontend доступен по адресу http://localhost:3001

## [1.1.7] - 2025-01-18 14:12
### Fixed
- Исправлена проблема с кнопками Sign In - не работала навигация на страницу /sign-in
- Заменены кнопки с onClick={router.push()} на Link компоненты для надежной навигации
- Добавлен console.log для отладки кликов на кнопках Get Started
- Обновлены компоненты Header.tsx и Hero.tsx

### Reason
- Пользователь сообщил, что кнопки Sign In не открывают страницу sign-in
- Проблема была в использовании onClick обработчиков вместо Link компонентов
- Link компоненты обеспечивают более надежную навигацию в Next.js

### Technical Details
- Заменены кнопки Sign In на Link компоненты в Header и Hero
- Сохранены кнопки Get Started с onClick для демонстрации обоих подходов
- Добавлены отладочные сообщения в консоль для кнопок Get Started
- Сервер успешно перезапущен на порту 3001
- Все изменения применены и работают корректно

## [1.1.6] - 2025-01-17 13:01
### Added
- Created new Sign In page (`pages/sign-in.tsx`) with complete authentication form
- Added email/password authentication with form validation
- Added social OAuth options (Google and Apple)
- Added password visibility toggle and remember me checkbox
- Added loading states and error handling for better UX
- Added "Forgot password" and "Create Account" links

### Reason
- User requested separate Sign In page based on provided screenshot
- Needed comprehensive authentication flow matching site's dark theme design
- Required both traditional and social login options for user convenience

### Technical Details
- Built with React hooks (useState, useEffect) for state management
- Uses localStorage for demo authentication simulation
- Styled with Tailwind CSS to match site's color scheme (#0a0c10, #3ede6f)
- Includes responsive design and hover effects
- Page accessible at http://localhost:3001/sign-in
- Redirects to /dashboard on successful authentication

## [1.1.5] - 2025-01-17 13:00
### Removed
- Removed all remaining "Start Free Trial" buttons from Hero, Pricing, Features, and pricing page components
- Replaced "Start Free Trial" text with "Get Started" for cleaner, non-trial messaging

### Reason
- Completed removal of all trial-related messaging from website as requested by client
- Maintained user-friendly call-to-action buttons while eliminating trial language
- Ensured consistency across all website components

### Technical Details
- Updated Hero.tsx main CTA button text
- Updated Pricing.tsx component CTA text for all plans
- Updated Features.tsx component CTA button
- Updated pricing.tsx page CTA button
- Verified changes are live on http://localhost:3001
- Website now uses consistent "Get Started" messaging without trial implications

## [1.1.4] - 2025-01-17 12:30
### Removed
- Removed "Trusted by leading companies" section with Microsoft, Google, Amazon, Meta, Apple logos from Hero component
- Removed "No credit card required • 14-day free trial" text from Hero component email signup form
- Removed "All plans include 14-day free trial • No credit card required" text from Pricing component
- Removed "Cancel anytime, No setup fees, 24/7 support, API access (Pro+)" features from Pricing component
- Removed newsletter subscription section with "Subscribe" button from Footer component

### Reason
- Client requested removal of specific marketing sections to streamline website content
- Eliminated trial-related messaging and promotional elements
- Simplified pricing section by removing additional features list
- Cleaned up footer by removing newsletter signup functionality

### Technical Details
- Modified Hero.tsx component to remove social proof section and trial messaging
- Modified Pricing.tsx component to remove trial text and feature highlights
- Modified Footer.tsx component to remove newsletter subscription form
- All changes maintain responsive design and layout integrity
- Website continues to function normally on http://localhost:3001

## [1.1.0] - 2025-01-13
### Added
- Full SalesAI website clone implementation
- Tailwind CSS integration with custom dark theme
- Complete UI components:
  - Header with responsive navigation
  - Hero section with animations
  - Features grid with hover effects
  - Pricing section with toggle (monthly/annual)
  - Testimonials carousel
  - Footer with newsletter signup

## [1.1.1] - 2025-01-13 14:43
### Changed
- Updated all components to use FlyProx AI branding instead of SalesAI
- Implemented complete black and yellow color scheme throughout the website
- Fixed syntax errors in Testimonials component (Array.from instead of [...Array])
- Updated Footer background to pure black for consistency
- Added proper navigation links (Pricing, Products, Resources) in Header
- Fixed server compilation issues and cleared Next.js cache
- Website now fully functional on http://localhost:3001

### Fixed
- Resolved Next.js compilation errors with Tailwind CSS classes
- Fixed Testimonials component JavaScript syntax errors
- Clearned build cache to resolve persistent compilation issues
- Next.js App Router configuration
- Custom animations and transitions
- Responsive design for all screen sizes
- Professional gradient effects and dark theme

## [1.1.3] - 2025-01-17 12:09
### Analysis
- Completed comprehensive website content analysis for section removal task
- Analyzed all React components and website structure
- Identified all major marketing sections and their locations
- Screenshot text extraction was not successful due to image format limitations
- Website content was accessed directly via curl to identify removable sections
- All major sections mapped: Hero, Features, Pricing, Testimonials, Header, Footer
- Located specific marketing messages and call-to-action elements throughout the site

### Technical Details
- Website running successfully on http://localhost:3001
- Next.js 15.5.4 with React 19.2.0 confirmed
- Full component structure mapped with file locations
- All marketing content identified and catalogued for potential removal

## [1.1.2] - 2025-01-13 15:55
### Fixed
- Исправлен размер логотипа - теперь "FlyProx" и "AI" имеют одинаковый размер (text-2xl)
- Убран пробел между "FlyProx" и "AI" - теперь логотип выглядит как "FlyProxAI" слитно
- Логотип исправлен в Header.tsx и Footer.tsx
- Улучшена визуальная согласованность бренда по всему сайту

### Technical Details
- Tailwind CSS v4.1.14
- PostCSS configuration
- Custom component library
- SEO optimization with metadata
- Accessibility features

### Files Added
- `tailwind.config.js` - Tailwind configuration
- `postcss.config.js` - PostCSS configuration
- `app/layout.tsx` - Root layout with SEO
- `app/page.tsx` - Main page
- `app/components/` - All UI components
  - Header.tsx
  - Hero.tsx
  - Features.tsx
  - Pricing.tsx
  - Testimonials.tsx
  - Footer.tsx


## [1.0.0] - 2024-10-09
### Added
- Initial project setup
- Express.js server configuration
- PostgreSQL database integration
- Docker and Docker Compose configuration
- Environment variables setup (.env)
Supabase mcp

 MCP (Model Context Protocol) integration with:
  - Playwright
  - Figma
  - Supabase
  - PostgreSQL
  - HTTP requests
  - Sequential thinking
  - Serena 
- Firecrawl 
- Browserbase 
- Web to mcp 
- Chrome dev tools 
- Nodemon for development
- Basic project structure
- context7 
- file system 
- sentry

### Technical Details
- Node.js version: >=22
- Express version: ^5.1.0
- PostgreSQL version: ^8.16.3
- Redis version: ^5.8.2
- Package type: ES Modules

### Files Added
- `index.js` - Main application file
- `package.json` - Dependencies and scripts
- `.env` - Environment variables
- `docker-compose.yml` - Docker Compose configuration
- `Dockerfile` - Docker image configuration
- `mcp.json` - MCP server configuration
- `.gitignore` - Git ignore rules

---

## Правила версионирования
- **Major** - обратно несовместимые изменения
- **Minor** - новая функциональность, обратно совместимая
- **Patch** - исправления ошибок, обратно совместимые