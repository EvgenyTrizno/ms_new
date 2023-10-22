import { lazy } from "react";
import { RouteData } from "./types";
import { InterviewPage } from "../Auth/InterviewPage/InterviewPage";
import { MOBILE, SMALL_LAPTOP } from "@/shared/utils";

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
const NotesPage = lazy(() => import("@/pages/Notes/NotesPage"));
const MedicalCardPage = lazy(
    () => import("@/pages/MedicalCard/MedicalCardPage")
);
const NotesInfoPage = lazy(() => import("@/pages/NotesInfo/NotesInfoPage"));
const CreateEventPage = lazy(
    () => import("@/pages/CreateEvent/CreateEventPage")
);
const MapPage = lazy(() => import("@/pages/Map/MapPage"));
const MessagesPage = lazy(() => import("@/pages/Messages/MessagesPage"));
const MedicalTestPage = lazy(
    () => import("@/pages/MedicalTest/MedicalTestPage")
);
// const MobileProfile = lazy(() => import("@/pages/MobileProfile/MobileProfile"));
const AccountSettingsPage = lazy(
    () => import("@/pages/Settings/AccountSettingsPage/AccountSettingsPage")
);
const ProfileSettingsPage = lazy(
    () => import("@/pages/Settings/ProfileSettingsPage/ProfileSettingsPage")
);
// const AccountProtectionSettingsPage = lazy(
//     () =>
//         import(
//             "@/pages/Settings/AccountProtectionSettingsPage/AccountProtectionSettingsPage"
//         )
// );
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
const CreateNewPassPage = lazy(
    () => import("@/pages/CreateNewPass/CreateNewPassPage")
);
const NotFoundPage = lazy(() => import("@/pages/404Page/NotFoundPage"));
const MobileNotificationPage = lazy(
    () => import("@/pages/MobileNotification/MobileNotification")
);
const UserInfoPage = lazy(() => import("@/pages/UserInfo/UserInfoPage"));
const UsersPage = lazy(() => import("@/pages/Users/UsersPage"));
const BalancePage = lazy(() => import("@/pages/Balance/BalancePage"));
const ChatPage = lazy(() => import("@/pages/Chat/ChatPage"));
const AbountCenterPage = lazy(
    () => import("@/pages/AboutCenter/AboutCenterPage")
);
const ClinicProfilePage = lazy(
    () => import("@/pages/ClinicProfile/ClinicProfile")
);
// const CenterProfilePage = lazy(() => import("@/pages/CenterPage/CenterPage"));
const EmployeeProfilePage = lazy(
    () => import("@/pages/EmployeeProfilePage/EmployeeProfilePage")
);
const AppStatsPage = lazy(() => import("@/pages/AppStatsPage/AppStatsPage"));
const LeadsPage = lazy(() => import("@/pages/LeadsPage/LeadsPage"));
const AdminPanelMapPage = lazy(
    () => import("@/pages/AdminPanelMap/AdminPanelMapPage")
);
const CountryInfoPage = lazy(() => import("@/pages/CountryInfo/CountryInfo"));
const CityInfoPage = lazy(() => import("@/pages/CityInfoPage/CityInfoPage"));
const RequestsPage = lazy(() => import("@/pages/RequestsPage/RequestsPage"));
const MailPage = lazy(() => import("@/pages/MailPage/MailPage"));
const SocialPage = lazy(() => import("@/pages/SocialPage/SocialPage"));

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
        Component: MainPage,
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
        path: "/auth/interview",
        Component: InterviewPage,
        key: "interview_page",
    },
    {
        path: "/search",
        Component: SearchPage,
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
        Component: NotesPage,
        key: "notes_page",
    },
    {
        path: "/notes/:name",
        Component: NotesInfoPage,
        key: "notes-info_page",
    },
    {
        path: "/create-event",
        Component: CreateEventPage,
        key: "create-event_page",
    },
    { path: "/location", Component: MapPage, key: "map_page" },
    {
        path: "/messages",
        Component: MessagesPage,
        key: "messages_page",
    },
    {
        path: "/medical-card-test",
        Component: MedicalTestPage,
        key: "medical-test_page",
    },
    // {
    //     path: "/m/profile/:id",
    //     Component: MobileProfile,
    //     key: "mobile-profile_page",
    // },
    {
        path: "/account",
        Component: AccountSettingsPage,
        key: "mobile-account_page",
    },
    {
        path: "/settings/account/profile",
        Component: ProfileSettingsPage,
        key: "mobile-profile-settings_page",
    },
    // {
    //     path: "/m/settings/account/protection",
    //     Component: AccountProtectionSettingsPage,
    //     key: "mobile-protection_page",
    // },
    {
        path: "/account/access",
        Component: AccountAccessSettings,
        key: "mobile-access_page",
    },
    {
        path: "/account/subscriptions",
        Component: AccountSubscriptionsSettingsPage,
        key: "mobile-subscriptions_page",
    },
    {
        path: "/account/saved",
        Component: AccountSavedPage,
        key: "mobile-saved_page",
    },
    {
        path: "/m/settings/account/medical-center",
        Component: AccountMedicalCenterPage,
        key: "mobile-medical-center_page",
    },
    {
        path: "/create-new-password",
        Component: CreateNewPassPage,
        key: "create-new-pass_page",
    },
    {
        path: "/notifications",
        Component: MobileNotificationPage,
        key: "mobile-notifications_page",
    },
    {
        path: "/users/:id",
        Component: UserInfoPage,
        key: "users_page",
    },
    {
        path: "/users",
        Component: UsersPage,
        key: "users_page",
    },
    {
        path: "/balance",
        Component: BalancePage,
        key: "users_page",
    },
    {
        path: "/chat/:id",
        Component: SMALL_LAPTOP || MOBILE ? ChatPage : NotFoundPage,
        key: "chat_page",
    },
    {
        path: "/about-center",
        Component: AbountCenterPage,
        key: "abount-center_page",
    },
    {
        path: "/clinic/:id",
        Component: ClinicProfilePage,
        key: "clinic-profile_page",
    },
    {
        path: "/center/:id",
        Component: ClinicProfilePage,
        key: "center-profile_page",
    },
    {
        path: "/employee/:id",
        Component: EmployeeProfilePage,
        key: "employee-profile_page",
    },
    { path: "/app", Component: AppStatsPage, key: "app-stats_page" },
    { path: "/leads", Component: LeadsPage, key: "leads_page" },
    { path: "/map", Component: AdminPanelMapPage, key: "admin-map_page" },
    {
        path: "/map/:country",
        Component: CountryInfoPage,
        key: "admin-country-info_page",
    },
    {
        path: "/map/:country/:city",
        Component: CityInfoPage,
        key: "admin-city-info_page",
    },
    { path: "/requests", Component: RequestsPage, key: "requests_page" },
    { path: "/mail", Component: MailPage, key: "mail_page" },
    { path: "/social", Component: SocialPage, key: "social-info_page" },
];
