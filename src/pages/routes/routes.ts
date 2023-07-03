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
];
