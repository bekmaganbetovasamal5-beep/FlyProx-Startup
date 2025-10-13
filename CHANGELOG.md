# Changelog

Формирование изменений в проекте FlyProx. Сюда бдуешь добавлять изменения в проекте 

## [Unreleased]
### Planned
- API эндпоинты
- Аутентификация и авторизация через supabase

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