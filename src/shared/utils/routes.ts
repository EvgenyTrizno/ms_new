import { lazy } from "react";
import { RouteProps } from "react-router";

import { InterviewPage } from "../../pages/Auth/InterviewPage/InterviewPage";
import { MOBILE, SMALL_LAPTOP } from "@/shared/utils";

const RegistrationPage = lazy(() => import("@/pages/RegistrationPage"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const MainPage = lazy(() => import("@/pages/Main"));
const RecoveryPage = lazy(() => import("@/pages/RecoveryPage"));
const AuthMapPage = lazy(() => import("@/pages/Auth/AuthMapPage/AuthMapPage"));
const SelectCenterPage = lazy(() => import("@/pages/SelectCenter"));
const ConfirmationPage = lazy(() => import("@/pages/ConfirmationPage"));
const SearchPage = lazy(() => import("@/pages/SearchPage"));
const ProfilePage = lazy(() => import("@/pages/Profile"));
const NotesPage = lazy(() => import("@/pages/Notes/NotesPage"));
const MedicalCardPage = lazy(
    () => import("@/pages/MedicalCard/MedicalCardPage")
);
const NotesInfoPage = lazy(() => import("@/pages/NotesInfo/NotesInfoPage"));
const CreateEventPage = lazy(() => import("@/pages/CreateEvent"));
const MapPage = lazy(() => import("@/pages/Map/MapPage"));
const MessagesPage = lazy(() => import("@/pages/Messages"));
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
    () =>
        import(
            "../../pages/Settings/AccountMedicalCenter/AccountMedicalCenterPage"
        )
);
const AccountMedicalCardPage = lazy(
    () =>
        import("../../pages/Settings/AccountMedicalCard/AccountMedicalCardPage")
);
const CreateNewPassPage = lazy(() => import("@/pages/CreateNewPass"));
const NotFoundPage = lazy(() => import("@/pages/404Page/NotFoundPage"));
const MobileNotificationPage = lazy(
    () => import("@/pages/MobileNotification/MobileNotification")
);
const UserInfoPage = lazy(() => import("@/pages/UserInfo/UserInfoPage"));
const UsersPage = lazy(() => import("@/pages/Users/UsersPage"));
const BalancePage = lazy(() => import("@/pages/Balance/BalancePage"));
const ChatMobilePage = lazy(() => import("@/pages/ChatMobile/ChatPage"));
const AbountCenterPage = lazy(
    () => import("@/pages/AboutCenter/AboutCenterPage")
);
const ClinicProfilePage = lazy(() => import("@/pages/ClinicProfile"));
// const CenterProfilePage = lazy(() => import("@/pages/CenterPage/CenterPage"));
const EmployeeProfilePage = lazy(() => import("@/pages/EmployeeProfilePage"));
const AppStatsPage = lazy(() => import("@/pages/AppStatsPage"));
const LeadsPage = lazy(() => import("@/pages/LeadsPage"));
const AdminPanelMapPage = lazy(
    () => import("@/pages/AdminPanelMap/AdminPanelMapPage")
);
const CountryInfoPage = lazy(() => import("@/pages/CountryInfo/CountryInfo"));
const CityInfoPage = lazy(() => import("@/pages/CityInfoPage/CityInfoPage"));
const RequestsPage = lazy(() => import("@/pages/RequestsPage"));
const MailPage = lazy(() => import("@/pages/MailPage/MailPage"));
const SocialPage = lazy(() => import("@/pages/SocialPage"));
const ChatPage = lazy(() => import("@/pages/ChatPage"));

const media = window.matchMedia("(max-width: 768px)").matches;

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
    { path: "/auth/map", Component: AuthMapPage },
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
        Component: media ? AccountMedicalCardPage : MedicalCardPage,
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
    { path: "/location", Component: MapPage },
    {
        path: "/messages",
        Component: MessagesPage,
    },
    {
        path: "/medical-card-test",
        Component: MedicalTestPage,
    },
    // {
    //     path: "/m/profile/:id",
    //     Component: MobileProfile,
    // },
    {
        path: "/account",
        Component: AccountSettingsPage,
    },
    {
        path: "/settings/account/profile",
        Component: ProfileSettingsPage,
    },
    // {
    //     path: "/m/settings/account/protection",
    //     Component: AccountProtectionSettingsPage,
    // },
    {
        path: "/account/access",
        Component: AccountAccessSettings,
    },
    {
        path: "/account/subscriptions",
        Component: AccountSubscriptionsSettingsPage,
    },
    {
        path: "/account/saved",
        Component: AccountSavedPage,
    },
    {
        path: "/m/settings/account/medical-center",
        Component: AccountMedicalCenterPage,
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
        path: "/users/:id",
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
        path: "/chat/:id",
        Component: SMALL_LAPTOP || MOBILE ? ChatMobilePage : NotFoundPage,
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
        Component: ClinicProfilePage,
    },
    {
        path: "/employee/:id",
        Component: EmployeeProfilePage,
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
];
