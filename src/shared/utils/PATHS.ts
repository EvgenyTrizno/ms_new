export const ROUTES = {
    main: {
        path: "/",
        label: "Главная",
    },
    clinicRegistration: {
        path: "/registration-clinic",
    },

    registration: {
        path: "/registration",
    },
    confirmationCode: {
        path: "/confirmation-code",
    },
    workerLogin: {
        path: '/loginc'
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
        path: "/clinic/cooperation/:id",
        label: "Сотрудничает",
    },
    hardware: {
        path: "/hardware",
        label: "Оборудование",
    },
    history: {
        path: "/history",
        label: "История",
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
    createMedTask: {
        path: "/create-med-task",
        label: "Создать",
    },
    pacientDiagnosis: {
        path: "/pacient-diagnosis",
        label: "Диагноз",
    },

    recommendations: {
        path: "/recommendations",
        label: "Рекомендации",
    },

    calendar: {
        path: "/calendar",
        label: "Календарь",
    },

    services: {
        path: "/services",
        label: "Услуги",
    },

    personalStatistics: {
        path: "/personal-statistics",
        label: "Статистика",
    },

    record: {
        path: "/record",
        label: "Запись"
    },

    clinicProfile: {
        path: "/clinic-profile",
        label: "Профиль клиники"
    },

    clinicProfileStats: {
        path: "/clinic-profile-stats",
        label: "Профиль клиники"
    }
} as const;

export const pagesTitles: { [key: string]: string } = {
    "/": ROUTES.main.label,
    "/search": ROUTES.search.label,
    "/messages": ROUTES.messages.label,
    "/med-tasks": ROUTES.medTasks.label,
    "/pacient-diagnosis": ROUTES.diagnosis.label,
    "/all-doctors": ROUTES.allDoctors.label,
    "/map": ROUTES.map.label,
    "/settings": ROUTES.settings.label,
    "/account": ROUTES.account.label,
    "/payments": ROUTES.account.label + " / " + ROUTES.payments.label,
    "/appointments": ROUTES.account.label + " / " + ROUTES.appointments.label,
    "/statistics": ROUTES.account.label + " / " + ROUTES.statistics.label,
    "/access": ROUTES.account.label + " / " + ROUTES.access.label,
    "/subscriptions": ROUTES.account.label + " / " + ROUTES.subscriptions.label,
    "/saved": ROUTES.account.label + " / " + ROUTES.saved.label,
    "/recommendations":
        ROUTES.account.label + " / " + ROUTES.recommendations.label,
    "/calendar": ROUTES.calendar.label,
    "/balance": ROUTES.balance.label,
    "/services": ROUTES.services.label,
    "/personal-statistics": ROUTES.personalStatistics.label,
    "/record": ROUTES.record.label,
    "/clinic-profile": ROUTES.clinicProfile.label,
    "/clinic-profile-stats": ROUTES.clinicProfileStats.label
};
