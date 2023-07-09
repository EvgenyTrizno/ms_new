import { RouteData } from "./types";
import { RegistrationPage } from "@/pages/Auth/RegistrationPage/RegistrationPage";
import { LoginPage } from "@/pages/Auth/LoginPage/LoginPage";
import { MainPage } from "@/pages/Main/MainPage";
import { RecoveryPage } from "@/pages/Auth/RecoveryPage/RecoveryPage";
import { AuthMapPage } from "@/pages/Auth/AuthMapPage/AuthMapPage";
import { AuthorizationPage } from "@/pages/Auth/AuthorizationPage/AuthorizationPage";
import { VirusListPage } from "@/pages/Auth/VirusListPage/VirusListPage";
import { ConfirmationPage } from "@/pages/Auth/ConfirmationPage/ConfirmationPage";
import { SearchPage } from "@/pages/SearchPage/SearchPage";
import { ProfilePage } from "@/pages/Profile/ProfilePage";
import { MedicalCardPage } from "@/pages/MedicalCard/MedicalCardPage";
import { NotesPage } from "@/pages/Notes/NotesPage";
import { NotesInfoPage } from "@/pages/NotesInfo/NotesInfoPage";
import { CreateEventPage } from "@/pages/CreateEvent/CreateEventPage";
import { MapPage } from "@/pages/Map/MapPage";
import { SelectCenterMapPage } from "@/pages/SelectCenterMap/SelectCenterMapPage";
import { MessagesPage } from "@/pages/Messages/MessagesPage";
import { MedicalTestPage } from "@/pages/MedicalTest/MedicalTestPage";
import { MobileMainPage } from "@/pages/MobileMain/MobileMainPage";
import { MobileSearchPage } from "@/pages/MobileSearch/MobileSearchPage";
import { MobileMessagesPage } from "@/pages/MobileMessages/MobileMessagesPage";
import { MobileProfile } from "@/pages/MobileProfile/MobileProfile";
import { MobileChatPage } from "@/pages/MobileChat/MobileChatPage";
import { MobileAccountPage } from "@/pages/MobileAccount/MobileAccountPage";
import { AccountSettingsPage } from "@/pages/Settings/AccountSettingsPage/AccountSettingsPage";
import { MobileNotesPage } from "@/pages/MobileNotes/MobileNotesPage";
import { ProfileSettingsPage } from "@/pages/Settings/ProfileSettingsPage/ProfileSettingsPage";
import { AccountProtectionSettingsPage } from "@/pages/Settings/AccountProtectionSettingsPage/AccountProtectionSettingsPage";
import { AccountAccessSettings } from "@/pages/Settings/AccountAccessSettingsPage/AccountAccessSettings";
import { AccountSubscriptionsSettingsPage } from "@/pages/Settings/AccountSubscriptionsSettings/AccountSubscriptionsSettings";
import { AccountSavedPage } from "@/pages/Settings/AccountSavedPage/AccountSavedPage";
import { AccountMedicalCenterPage } from "../Settings/AccountMedicalCenter/AccountMedicalCenterPage";
import { AccountMedicalCardPage } from "../Settings/AccountMedicalCard/AccountMedicalCardPage";

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
    { path: "/", Component: MainPage, key: "main_page" },
    { path: "/auth/recovery", Component: RecoveryPage, key: "recovery_page" },
    { path: "/auth/map", Component: AuthMapPage, key: "auth-map_page" },
    { path: "/auth", Component: AuthorizationPage, key: "auth_page" },
    { path: "/virus-list", Component: VirusListPage, key: "virus-list_page" },
    { path: "/auth/confirm", Component: ConfirmationPage, key: "confirm_page" },
    { path: "/search", Component: SearchPage, key: "search_page" },
    { path: "/profile", Component: ProfilePage, key: "profile_page" },
    {
        path: "/medical-card",
        Component: MedicalCardPage,
        key: "medical-card_page",
    },
    { path: "/notes", Component: NotesPage, key: "notes_page" },
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
    { path: "/messages", Component: MessagesPage, key: "messages_page" },
    {
        path: "/medical-card-test",
        Component: MedicalTestPage,
        key: "medical-test_page",
    },
    { path: "/m/", Component: MobileMainPage, key: "mobile-main_page" },
    {
        path: "/m/search",
        Component: MobileSearchPage,
        key: "mobile-search_page",
    },
    {
        path: "/m/messages",
        Component: MobileMessagesPage,
        key: "mobile-messages_page",
    },
    {
        path: "/m/profile/:id",
        Component: MobileProfile,
        key: "mobile-profile_page",
    },
    { path: "/m/chat/:id", Component: MobileChatPage, key: "mobile-chat_page" },
    {
        path: "/m/account",
        Component: MobileAccountPage,
        key: "mobile-account_page",
    },
    {
        path: "/m/settings/account",
        Component: AccountSettingsPage,
        key: "mobile-account_page",
    },
    { path: "/m/notes", Component: MobileNotesPage, key: "mobile-notes_page" },
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
        path: "/m/account/medical-card",
        Component: AccountMedicalCardPage,
        key: "mobile-medical-card_page",
    },
];
