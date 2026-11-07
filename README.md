## Лендинг конкурса исследовательских проектов по физике

### Основные технологии:
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev) [![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org) [![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vite.dev) [![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)

### Дополнительные библиотеки:
- **[react-router-dom](https://www.npmjs.com/package/react-router-dom)** `^7.16.0` — декларативный роутинг.
- **[lucide-react](https://www.npmjs.com/package/lucide-react)** `^0.552.0` — Основной набор иконок.
- **[react-icons](https://www.npmjs.com/package/react-icons)** `^5.5.0` — дополнительный набор иконок.

## Скриншоты Desktop
### Секция с информацией о конкурсе
<img width="1918" height="911" alt="image" src="https://github.com/user-attachments/assets/78d19841-b9c4-43f1-bbef-b81079039fcf" />

### Секция со сроками проведения
<img width="1918" height="907" alt="image" src="https://github.com/user-attachments/assets/f0f345b5-da23-4ada-a18c-f2b4cf9ba7ac" />

### Cекция об участие в конкурсе
<img width="1918" height="903" alt="image" src="https://github.com/user-attachments/assets/dd25fa8d-2304-4624-9c10-40fba3c79b63" />

### Секция - частые вопросы
<img width="1918" height="900" alt="image" src="https://github.com/user-attachments/assets/ca46df31-312f-47be-b52a-ba241ae87049" />

### Структура проекта
```
.github/
└── workflows/                  # CI/CD

frontend/
├── public/
│   └── images/                 # Изображения
│
├── src/
│   ├── assets/                 # Локальные ресурсы
│   │   ├── fonts/              # Шрифты
│   │   └── styles/             # Глобальные стили
│   │
│   ├── components/             # Блоки интерфейса
│   │   ├── backToTop/          # Кнопка "Вернуться в начало страницы"
│   │   ├── footer/             # Подвал
│   │   ├── header/             # Шапка сайта
│   │   ├── marquee/            # Бегущая строка
│   │   └── sections/           # Секции страниц
│   │       ├── faqSection/         # Секция - частые вопросы
│   │       ├── heroSection/        # hero-секция
│   │       ├── joinSection/        # Секция с призывом к действию
│   │       ├── olympiadCompete/    # Секция об участие в конкурсе
│   │       ├── olympiadInfo/       # Секция с информацией о конкурсе
│   │       ├── olympiadPeriod/     # Секция со сроками проведения
│   │       ├── olympiadPrizes/     # Секция с информацией о призах
│   │       └── taskSection/        # Секция с задания
│   │
│   ├── layouts/                # Layout-обёртка
│   ├── pages/                  # Страницы
│   ├── ui/                     # Переиспользуемые UI-элементы
│   ├── App.tsx                 # Корневой компонент и маршруты
│   └── main.tsx                # Точка входа
│
└── vite.config.ts              # Конфигурация сборщика (Vite)
```


### Запуск
```bash
# Установка зависимостей
npm install

# Режим разработки
npm run dev

# Линтинг
npm run lint

# Сборка для продакшена в папку dist/
npm run build

# Предпросмотр сборки
npm run preview
```

### Лицензия:
*Учебный проект*.
