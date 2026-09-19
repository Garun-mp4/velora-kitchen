# VELORA — React frontend

Премиальный многостраничный frontend для бренда индивидуальных кухонь и встроенной мебели VELORA. Проект построен на React + TypeScript + Vite, использует React Router, Framer Motion и собственную CSS-систему токенов.

## Требования

- Node.js 20.19+
- npm 10+

## Запуск

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

Для проверки стиля кода:

```bash
npm run lint
```

## Маршруты

- `/` — главная
- `/kitchens` — кухни
- `/kitchens/lento` — Lento
- `/kitchens/nero` — Nero
- `/kitchens/pura` — Pura
- `/furniture` — встроенная мебель
- `/materials` — материалы
- `/about` — о VELORA
- `/project` — дизайн-встреча / заявка
- `/faq` — вопросы и ответы
- `/privacy` — политика конфиденциальности
- остальные URL — 404

## Структура

```text
src/
  components/   общие UI-компоненты, header, footer, форма, FAQ
  data/         навигация, коллекции и контентные структуры
  hooks/        поведение header/scroll
  layouts/      общий layout сайта
  pages/        route-level страницы
  sections/     крупные секции главной
  styles/       tokens, global, components, pages, responsive
public/
  assets/images/     оптимизированные production-изображения
  assets/originals/  исходные изображения
```

## Изображения и производительность

Hero preload настроен в `index.html`. Для фотографий подготовлены responsive WebP-варианты, изображения ниже первого экрана загружаются лениво. Прозрачные PNG сохранены с alpha-каналом и используются в продуктовых/инженерных секциях на светлом фоне.

## Формы

Форма содержит клиентскую валидацию, форматирование телефона, loading/success состояния и не отправляет данные во внешний сервис. Точка подключения API/CRM локализована в компоненте `ProjectForm`.

## Deploy

Проект использует `BrowserRouter`. При статическом хостинге сервер должен перенаправлять неизвестные route-запросы на `index.html` (SPA fallback).

### Vercel

Проект готов к деплою из GitHub: `vercel.json` уже содержит SPA rewrite, команду сборки и папку результата.

- Framework Preset: `Vite`
- Root Directory: `.`
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install` (по умолчанию)
- Environment Variables: не требуются

Production Branch: `main`.
