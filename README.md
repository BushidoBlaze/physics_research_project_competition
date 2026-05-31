Лендинг конкурса исследовательских проектов по физике для школьников 9–11 классов **«Новые горизонты»**.

---

## Стек

| Категория | Технология |
|---|---|
| Фреймворк | React 19 |
| Язык | TypeScript 5.9 |
| Сборщик | Vite 7 |
| Роутинг | React Router DOM 7 |
| Иконки | Lucide React, React Icons |
| Стили | Vanilla CSS (BEM) |

---

## Структура проекта

```
src/
├── assets/
│   ├── images/          # Фотографии для hero-слайдера
│   └── styles/
│       ├── fonts.css    # @font-face: Inter, SF Pro, Raleway
│       ├── reset.css    # CSS reset
│       └── global.css   # Базовые правила layout
│
├── components/
│   ├── backToTop/       # Кнопка «Наверх»
│   ├── footer/          # Footer + социальные ссылки
│   ├── header/          # Header, десктопная навигация, бургер-меню
│   ├── marquee/         # Бегущая строка
│   └── sections/
│       ├── heroSection/         # Hero с авто-слайдером и таймером
│       ├── olympiadInfo/        # «Больше, чем просто соревнование»
│       ├── olympiadPeriod/      # Периоды проведения
│       ├── olympiadCompete/     # Шаги участия (горизонтальный слайдер)
│       ├── taskSection/         # Теоретический проект + скачивание файлов
│       ├── olympiadPrizes/      # Призы
│       ├── faqSection/          # FAQ (accordion)
│       └── joinSection/         # CTA «Участвовать»
│
├── layouts/
│   ├── MainLayout.tsx   # Header + main + Footer (только для главной)
│   └── PageContent.tsx  # Обёртка контента страницы
│
├── pages/
│   ├── Home.tsx         # Главная страница
│   └── NotFound.tsx     # Страница 404 (рендерится без layout)
│
├── ui/
│   ├── button/          # Полиморфная кнопка Button (button / a / Link)
│   ├── card/            # Карточки: заголовок, номер, контент, иконка
│   ├── countdown/       # Таймер обратного отсчёта
│   ├── mainTitle/       # Заголовок секции с красной полосой
│   └── slider/          # SliderTrack, SliderControls, SwitchButton
│
├── App.tsx              # Роутинг
└── main.tsx             # Точка входа, BrowserRouter
```

---

## Запуск

**Требования:** Node.js 18+, npm 9+

```bash
# Установка зависимостей
npm install

# Режим разработки — http://localhost:5173
npm run dev

# Сборка для продакшена → папка dist/
npm run build

# Предпросмотр сборки — http://localhost:8080
npm run preview

# Линтинг
npm run lint
```

---

## Ключевые решения

### Типографика
- **Inter** — числа и счётчики (`font-variant-numeric: tabular-nums`)
- **SF Pro** — заголовки секций и карточек
- **Raleway** — основной текст, кнопки, подписи

Шрифты подключены через `@font-face` в `fonts.css`. Применяются напрямую к BEM-классам — без глобальных правил на теги.

### Роутинг

`MainLayout` оборачивает только главную страницу — страница 404 рендерится полностью автономно (без хедера и футера):

```tsx
<Routes>
  <Route path="/" element={<MainLayout><Home/></MainLayout>}/>
  <Route path="*" element={<NotFound/>}/>
</Routes>
```

### Компонент Button

Полиморфный: рендерит `<Link>` при `to`, `<a>` при `href`, `<button>` по умолчанию. Поддерживает варианты `primary / secondary / outline / danger` и размеры `sm / md / lg`.

### Слайдер шагов участия

- Горизонтальный кастомный слайдер без внешних библиотек
- Авто-прокрутка каждые 4 секунды, возобновляется через 8 секунд после ручного взаимодействия
- Пауза на hover и во время свайпа
- Свайп пальцем на сенсорных устройствах (порог 50px)
- Клавиатурная навигация: `←` `→` `Home` `End`
- Индикаторы прогресса

### Бургер-меню

Панель и оверлей рендерятся через `createPortal` в `document.body` — чтобы обойти ограничение `position: fixed` от `backdrop-filter` в хедере.

### Алиас путей

`@` → `src/` (настроено в `vite.config.ts`).

---

## Цветовая палитра

| Назначение | Значение |
|---|---|
| Акцент красный | `#be2042` |
| Основной синий | `#004381` / `#00467f` |
| Текст основной | `#0a0a0a` |
| Текст вторичный | `#3a3a4a` / `#4a4a4a` |
| Разделители | `#e6e8eb` |
| Фон карточек | `#fafafa` |

---

## Адаптивность

Брейкпоинты (mobile-first):

| Брейкпоинт | Ширина |
|---|---|
| Мобильные | < 768px |
| Планшеты | ≥ 768px |
| Десктоп | ≥ 1024px |
| Широкий десктоп | ≥ 1440px |

---

## Редактирование контента

| Что менять | Где |
|---|---|
| Шаги участия (слайдер) | `src/components/sections/olympiadCompete/olympiad-compete.data.ts` |
| Периоды и даты | `src/components/sections/olympiadPeriod/` |
| Задания (файлы) | `src/components/sections/taskSection/` |
| Призы | `src/components/sections/olympiadPrizes/` |
| FAQ | `src/components/sections/faqSection/` |
| Дедлайн таймера | `REGISTRATION_DEADLINE` в `HeroSection.tsx` |
| Фото в hero | `src/assets/images/` + `SLIDES` в `HeroSection.tsx` |

---

## Возможные проблемы

**Белый экран после деплоя** — убедитесь, что сервер настроен на отдачу `index.html` для всех маршрутов (SPA fallback). В `vite.config.ts` стоит `base: "/"`.

**Зависимости не устанавливаются:**
```bash
rm -rf node_modules package-lock.json
npm install
```

---

## Автор

**Atlasov R.**
[Telegram](https://t.me/aTLASov1) · [GitHub](https://github.com/BushidoBlaze) · [VK](https://vk.com/ryan_exe)
