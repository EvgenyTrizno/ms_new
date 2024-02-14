import {
  AllDoctorsIcon,
  DiagnosisIcon,
  HistoryIcon,
  LikeIcon,
  LocationIcon,
  PaymentsIcon,
  PeopleIcon,
  SavedIcon,
  SettingsIcon,
  StatsIcon,
} from "@/icons";
import { ReactElement } from "react";
import styles from "../styles.module.scss";
import { ROUTES } from "@/shared/utils/PATHS";

export interface IData {
  label: string;
  path: string;
  icon: ReactElement;
  disabled?: boolean;
}
export interface IMenuData {
  default: IData[];
}

export const menuData: IMenuData = {
  default: [
    {
      label: ROUTES.statistics.label,
      path: ROUTES.statistics.path,
      icon: <StatsIcon className={styles.icon} />,
    },
    {
      label: ROUTES.allDoctors.label,
      path: ROUTES.allDoctors.path,
      icon: <AllDoctorsIcon className={styles.icon} />,
    },
    {
      label: ROUTES.history.label,
      path: ROUTES.history.path,
      icon: <HistoryIcon className={styles.icon} />,
    },

    {
      label: ROUTES.diagnosis.label,
      path: ROUTES.diagnosis.path,
      icon: <DiagnosisIcon className={styles.icon} />,
    },

    {
      label: ROUTES.map.label,
      path: ROUTES.map.path,
      icon: <LocationIcon className={styles.icon} />,
    },

    {
      label: ROUTES.payments.label,
      path: ROUTES.payments.path,
      icon: <PaymentsIcon className={styles.icon} />,
    },
    {
      label: ROUTES.access.label,
      path: ROUTES.access.path,
      icon: <PeopleIcon />,
    },
    {
      label: ROUTES.subscriptions.label,
      path: ROUTES.subscriptions.path,
      icon: <LikeIcon />,
    },
    {
      label: ROUTES.saved.label,
      path: ROUTES.saved.path,
      icon: <SavedIcon />,
    },
    {
      label: ROUTES.settings.label,
      path: ROUTES.settings.path,
      icon: <SettingsIcon className={styles.icon} />,
    },
  ],
};
