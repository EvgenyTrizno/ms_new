import { lazy } from "react";
import { RouteProps } from "react-router";

import { InterviewPage } from "../../pages/Auth/InterviewPage/InterviewPage";

const RegistrationPage = lazy(() => import("@/pages/RegistrationPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const MainPage = lazy(() => import("@/pages/Main"));
const RecoveryPage = lazy(() => import("@/pages/RecoveryPage"));
const SelectCenterPage = lazy(() => import("@/pages/SelectCenter"));
const ConfirmationPage = lazy(() => import("@/pages/ConfirmationPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const NotesPage = lazy(() => import("@/pages/Notes"));
const MedicalCardPage = lazy(() => import("@/pages/MedicalCard"));
const NotesInfoPage = lazy(() => import("@/pages/NotesInfo"));
const CreateEventPage = lazy(() => import("@/pages/CreateEvent"));
const MessagesPage = lazy(() => import("@/pages/Messages"));
const MedicalTestPage = lazy(() => import("@/pages/MedicalTest"));
const CreateNewPassPage = lazy(() => import("@/pages/CreateNewPass"));
const NotFoundPage = lazy(() => import("@/pages/404Page/NotFoundPage"));
const MobileNotificationPage = lazy(
    () => import("@/pages/MobileNotification/MobileNotification")
);
const UserInfoPage = lazy(() => import("@/pages/UserInfo"));
const UsersPage = lazy(() => import("@/pages/Users/UsersPage"));
const BalancePage = lazy(() => import("@/pages/Balance"));
const AbountCenterPage = lazy(
    () => import("@/pages/AboutCenter/AboutCenterPage")
);
const ClinicProfilePage = lazy(() => import("@/pages/ClinicProfile"));
const AppStatsPage = lazy(() => import("@/pages/AppStatsPage"));
const LeadsPage = lazy(() => import("@/pages/LeadsPage"));
const AdminPanelMapPage = lazy(() => import("@/pages/AdminPanelMap"));
const CountryInfoPage = lazy(() => import("@/pages/CountryInfo"));
const CityInfoPage = lazy(() => import("@/pages/CityInfoPage"));
const RequestsPage = lazy(() => import("@/pages/RequestsPage"));
const MailPage = lazy(() => import("@/pages/MailPage"));
const SocialPage = lazy(() => import("@/pages/SocialPage"));
const ChatPage = lazy(() => import("@/pages/ChatPage"));
const CenterAccount = lazy(() => import("@/pages/CenterAccount"));
const AppointmentsPage = lazy(() => import("@/pages/AppointmentsPage"));
const MedicalCenter = lazy(() => import("@/pages/MedicalCenter"));
const SubsPage = lazy(() => import("@/pages/SubsPage"));
const SavedPage = lazy(() => import("@/pages/SavedPage"));
const AccessPage = lazy(() => import("@/pages/AccessPage"));
const CenterPage = lazy(() => import("@/pages/CenterPage"));
const GeolocationPage = lazy(() => import("@/pages/GeolocationPage"));
const AccountPage = lazy(() => import("@/pages/AccountPage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage"));
const StatisticsPage = lazy(() => import("@/pages/StatisticsPage"));

export const routes: RouteProps[] = [
    {
        path: "/registration",
        Component: RegistrationPage,
    },
    {
        path: "/login",
        Component: LoginPage,
    },
    {
        path: "/",
        Component: MainPage,
    },
    { path: "*", Component: NotFoundPage },
    { path: "/recovery", Component: RecoveryPage },
    {
        path: "/select-center",
        Component: SelectCenterPage,
    },
    {
        path: "/confirmation",
        Component: ConfirmationPage,
    },
    {
        path: "/interview",
        Component: InterviewPage,
    },
    {
        path: "/search",
        Component: SearchPage,
    },
    { path: "/profile", Component: ProfilePage },
    {
        path: "/medical-card",
        Component: MedicalCardPage,
    },
    {
        path: "/notes",
        Component: NotesPage,
    },
    {
        path: "/notes/:name",
        Component: NotesInfoPage,
    },
    {
        path: "/create-event",
        Component: CreateEventPage,
    },
    {
        path: "/messages",
        Component: MessagesPage,
    },
    {
        path: "/medical-card-test",
        Component: MedicalTestPage,
    },
    {
        path: "/create-new-password",
        Component: CreateNewPassPage,
    },
    {
        path: "/notifications",
        Component: MobileNotificationPage,
    },
    {
        path: "/user/:id",
        Component: UserInfoPage,
    },
    {
        path: "/users",
        Component: UsersPage,
    },
    {
        path: "/balance",
        Component: BalancePage,
    },

    {
        path: "/about-center",
        Component: AbountCenterPage,
    },
    {
        path: "/clinic/:id",
        Component: ClinicProfilePage,
    },
    {
        path: "/center/:id",
        Component: CenterPage,
    },
    { path: "/app", Component: AppStatsPage },
    { path: "/leads", Component: LeadsPage },
    { path: "/map", Component: AdminPanelMapPage },
    {
        path: "/map/:country",
        Component: CountryInfoPage,
    },
    {
        path: "/map/:country/:city",
        Component: CityInfoPage,
    },
    { path: "/requests", Component: RequestsPage },
    { path: "/mail", Component: MailPage },
    { path: "/social", Component: SocialPage },
    { path: "/messages/chat/:id/", Component: ChatPage },
    { path: "/center-account", Component: CenterAccount },
    { path: "/appointments", Component: AppointmentsPage },
    { path: "/medical-center", Component: MedicalCenter },
    { path: "/subscriptions", Component: SubsPage },
    { path: "/saved", Component: SavedPage },
    { path: "/access", Component: AccessPage },
    { path: "/geolocation", Component: GeolocationPage },
    { path: "/account", Component: AccountPage },
    { path: "/settings", Component: SettingsPage },
    { path: "/statistics", Component: StatisticsPage },
];
