import { lazy } from "react";
import { RouteData } from "./types";

const RegistrationPage = lazy(
    () => import("@/pages/Auth/RegistrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("@/pages/Auth/LoginPage/LoginPage"));
const MainPage = lazy(() => import("@/pages/Main/MainPage"));
const RecoveryPage = lazy(
    () => import("@/pages/Auth/RecoveryPage/RecoveryPage")
);
const AuthMapPage = lazy(() => import("@/pages/Auth/AuthMapPage/AuthMapPage"));
const AuthorizationPage = lazy(
    () => import("@/pages/Auth/AuthorizationPage/AuthorizationPage")
);
const ConfirmationPage = lazy(
    () => import("@/pages/Auth/ConfirmationPage/ConfirmationPage")
);
const SearchPage = lazy(() => import("@/pages/SearchPage/SearchPage"));
const ProfilePage = lazy(() => import("@/pages/Profile/ProfilePage"));
const MedicalCardPage = lazy(
    () => import("@/pages/MedicalCard/MedicalCardPage")
);
const NotesPage = lazy(() => import("@/pages/Notes/NotesPage"));
const NotesInfoPage = lazy(() => import("@/pages/NotesInfo/NotesInfoPage"));
const CreateEventPage = lazy(
    () => import("@/pages/CreateEvent/CreateEventPage")
);
const MapPage = lazy(() => import("@/pages/Map/MapPage"));
const SelectCenterMapPage = lazy(
    () => import("@/pages/SelectCenterMap/SelectCenterMapPage")
);
const MessagesPage = lazy(() => import("@/pages/Messages/MessagesPage"));
const MedicalTestPage = lazy(
    () => import("@/pages/MedicalTest/MedicalTestPage")
);
const MobileMainPage = lazy(() => import("@/pages/MobileMain/MobileMainPage"));
const MobileSearchPage = lazy(
    () => import("@/pages/MobileSearch/MobileSearchPage")
);
const MobileMessagesPage = lazy(
    () => import("@/pages/MobileMessages/MobileMessagesPage")
);
const MobileProfile = lazy(() => import("@/pages/MobileProfile/MobileProfile"));
const MobileChatPage = lazy(() => import("@/pages/MobileChat/MobileChatPage"));
const AccountSettingsPage = lazy(
    () => import("@/pages/Settings/AccountSettingsPage/AccountSettingsPage")
);
const MobileNotesPage = lazy(
    () => import("@/pages/MobileNotes/MobileNotesPage")
);
const ProfileSettingsPage = lazy(
    () => import("@/pages/Settings/ProfileSettingsPage/ProfileSettingsPage")
);
const AccountProtectionSettingsPage = lazy(
    () =>
        import(
            "@/pages/Settings/AccountProtectionSettingsPage/AccountProtectionSettingsPage"
        )
);
const AccountAccessSettings = lazy(
    () =>
        import(
            "@/pages/Settings/AccountAccessSettingsPage/AccountAccessSettings"
        )
);
const AccountSubscriptionsSettingsPage = lazy(
    () =>
        import(
            "@/pages/Settings/AccountSubscriptionsSettings/AccountSubscriptionsSettings"
        )
);
const AccountSavedPage = lazy(
    () => import("@/pages/Settings/AccountSavedPage/AccountSavedPage")
);
const AccountMedicalCenterPage = lazy(
    () => import("../Settings/AccountMedicalCenter/AccountMedicalCenterPage")
);
const AccountMedicalCardPage = lazy(
    () => import("../Settings/AccountMedicalCard/AccountMedicalCardPage")
);
const MobileCreateEventPage = lazy(
    () => import("../MobileCreateEvent/MobileCreateEventPage")
);
const CreateNewPassPage = lazy(
    () => import("@/pages/CreateNewPass/CreateNewPassPage")
);
const NotFoundPage = lazy(() => import("@/pages/404Page/NotFoundPage"));
const MobileNotificationPage = lazy(
    () => import("@/pages/MobileNotification/MobileNotification")
);
const MobileNotesInfoPage = lazy(
    () => import("@/pages/MobileNotesInfo/MobileNotesInfoPage")
);

const media = window.matchMedia("(max-width: 768px)").matches;

export const routes: RouteData[] = [
    {
        path: "/auth/registration",
        Component: RegistrationPage,
        key: "registration_page",
    },
    {
        path: "/auth/login",
        Component: LoginPage,
        key: "login_page",
    },
    {
        path: "/",
        Component: media ? MobileMainPage : MainPage,
        key: "main_page",
    },
    { path: "*", Component: NotFoundPage, key: "error_page" },
    { path: "/auth/recovery", Component: RecoveryPage, key: "recovery_page" },
    { path: "/auth/map", Component: AuthMapPage, key: "auth-map_page" },
    { path: "/auth", Component: AuthorizationPage, key: "auth_page" },
    {
        path: "/auth/confirm",
        Component: ConfirmationPage,
        key: "confirm_page",
    },
    {
        path: "/search",
        Component: media ? MobileSearchPage : SearchPage,
        key: "search_page",
    },
    { path: "/profile", Component: ProfilePage, key: "profile_page" },
    {
        path: "/medical-card",
        Component: media ? AccountMedicalCardPage : MedicalCardPage,
        key: "medical-card_page",
    },
    {
        path: "/notes",
        Component: media ? MobileNotesPage : NotesPage,
        key: "notes_page",
    },
    { path: "/notes/:name", Component: NotesInfoPage, key: "notes-info_page" },
    {
        path: "/create-event",
        Component: CreateEventPage,
        key: "create-event_page",
    },
    { path: "/location", Component: MapPage, key: "map_page" },
    {
        path: "/select-center-map",
        Component: SelectCenterMapPage,
        key: "select-center-map_page",
    },
    {
        path: "/messages",
        Component: media ? MobileMessagesPage : MessagesPage,
        key: "messages_page",
    },
    {
        path: "/medical-card-test",
        Component: MedicalTestPage,
        key: "medical-test_page",
    },
    {
        path: "/m/profile/:id",
        Component: MobileProfile,
        key: "mobile-profile_page",
    },
    { path: "/m/chat/:id", Component: MobileChatPage, key: "mobile-chat_page" },
    {
        path: "/m/settings/account",
        Component: AccountSettingsPage,
        key: "mobile-account_page",
    },
    {
        path: "/m/settings/account/profile",
        Component: ProfileSettingsPage,
        key: "mobile-profile-settings_page",
    },
    {
        path: "/m/settings/account/protection",
        Component: AccountProtectionSettingsPage,
        key: "mobile-protection_page",
    },
    {
        path: "/m/settings/account/access",
        Component: AccountAccessSettings,
        key: "mobile-access_page",
    },
    {
        path: "/m/settings/account/subscriptions",
        Component: AccountSubscriptionsSettingsPage,
        key: "mobile-subscriptions_page",
    },
    {
        path: "/m/settings/account/saved",
        Component: AccountSavedPage,
        key: "mobile-saved_page",
    },
    {
        path: "/m/settings/account/medical-center",
        Component: AccountMedicalCenterPage,
        key: "mobile-medical-center_page",
    },
    {
        path: "/m/create-event",
        Component: MobileCreateEventPage,
        key: "mobile-create-event_page",
    },
    {
        path: "/create-new-password",
        Component: CreateNewPassPage,
        key: "create-new-pass_page",
    },
    {
        path: "/m/notifications",
        Component: MobileNotificationPage,
        key: "mobile-notifications_page",
    },
    {
        path: "/m/notes-info",
        Component: MobileNotesInfoPage,
        key: "mobile-notes-info_page",
    },
];
