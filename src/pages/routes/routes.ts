import { RouteData } from "./types";
import { RegistrationPage } from "../Auth/RegistrationPage/RegistrationPage";
import { LoginPage } from "../Auth/LoginPage/LoginPage";
import { MainPage } from "../Main/MainPage";
import { RecoveryPage } from "../Auth/RecoveryPage/RecoveryPage";
import { AuthMapPage } from "../Auth/AuthMapPage/AuthMapPage";
import { AuthorizationPage } from "../Auth/AuthorizationPage/AuthorizationPage";
import { VirusListPage } from "../Auth/VirusListPage/VirusListPage";
import { ConfirmationPage } from "../Auth/ConfirmationPage/ConfirmationPage";
import { SearchPage } from "../SearchPage/SearchPage";
import { ProfilePage } from "../Profile/ProfilePage";
import { MedicalCardPage } from "../MedicalCard/MedicalCardPage";
import { NotesPage } from "../Notes/NotesPage";
import { NotesInfoPage } from "../NotesInfo/NotesInfoPage";
import { CreateEventPage } from "../CreateEvent/CreateEventPage";
import { MapPage } from "../Map/MapPage";
import { SelectCenterMapPage } from "../SelectCenterMap/SelectCenterMapPage";
import { MessagesPage } from "../Messages/MessagesPage";

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
];
