export const ROUTES = {
  main: {
    path: "/",
    label: "Главная",
  },
  registration: {
    path: "/registration",
  },
  login: {
    path: "/login",
  },
  recovery: {
    path: "/recovery",
  },
  selectCenter: {
    path: "/select-center",
  },
  confirmation: {
    path: "/confirmation",
  },
  interview: {
    path: "/interview",
  },
  search: {
    path: "/search",
    label: "Поиск",
  },
  profile: {
    path: "/profile",
    label: "Аккаунт",
  },
  account: {
    path: "/account",
    label: "Аккаунт",
  },
  medicalCard: {
    path: "/medical-card",
    label: "Медицинская карта",
  },
  notes: {
    path: "/notes",
    label: "Записи",
  },
  noteInfo: {
    path: "/notes/:name",
  },
  createEvent: {
    path: "/create-event",
    label: "Создание записи",
  },
  messages: {
    path: "/messages",
    label: "Сообщения",
  },
  createNewPass: {
    path: "/create-new-password",
  },
  notifications: {
    path: "/notifications",
  },
  userInfo: {
    path: "/user/:id",
  },
  users: {
    path: "/users",
    label: "Пользователи",
  },
  balance: {
    path: "/balance",
    label: "Баланс",
  },
  aboutCenter: {
    path: "/about-center",
  },
  clinicInfo: {
    path: "/clinic/:id",
  },
  centerInfo: {
    path: "/center/:id",
  },
  app: {
    path: "/app",
    label: "Сайт и приложение",
  },
  leads: {
    path: "/leads",
    label: "Лиды",
  },
  map: {
    path: "/map",
    label: "Карта",
  },
  country: {
    path: "/map/:country/:city",
  },
  requests: {
    path: "/requests",
    label: "Запросы",
  },
  mail: {
    path: "/mail",
    label: "Почта",
  },
  social: {
    path: "/social",
  },
  geolocation: {
    path: "/geolocation",
  },
  settings: {
    path: "/settings",
    label: "Настройки",
  },
  appointments: {
    path: "/appointments",
    label: "Назначения",
  },
  statistics: {
    path: "/statistics",
    label: "Статистика",
  },
  payments: {
    path: "/payments",
    label: "Платежи",
  },
  allDoctors: {
    path: "/all-doctors",
    label: "Все врачи",
  },
  access: {
    path: "/access",
    label: "Доступ",
  },
  subscriptions: {
    path: "/subscriptions",
    label: "Подписки",
  },
  saved: {
    path: "/saved",
    label: "Сохраненное",
  },
  cooperation: {
    path: "/cooperation",
    label: "Сотрудничает",
  },
  hardware: {
    path: "/hardware",
    label: "Оборудование",
  },
  history: {
    path: "/history",
    label: "История пациентов",
  },
  diagnosis: {
    path: "/diagnosis",
    label: "Диагностика",
  },
  medTasks: {
    path: "/med-tasks",
    label: "Мед.задания",
  },
  overviewMedTask: {
    path: "/overview-med-task",
    label: "Обзор мед.задания",
  },
} as const;
