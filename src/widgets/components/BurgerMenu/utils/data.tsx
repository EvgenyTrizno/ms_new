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
      label: ROUTES.medTasks.label,
      path: ROUTES.medTasks.path,
      icon: (
        <svg
          className={styles.icon}
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 7.89474V14C2 16.2091 3.79086 18 6 18H14C16.2091 18 18 16.2091 18 14V7.89474M2 7.89474V6C2 3.79086 3.79086 2 6 2H7.60003C8.55242 2 9.42067 2.54548 9.834 3.40351V3.40351C10.0407 3.83252 10.4748 4.10526 10.951 4.10526H14.2105C16.3034 4.10526 18 5.80187 18 7.89474V7.89474M2 7.89474H18M10 14.5V12.5M10 12.5V10.5M10 12.5H8M10 12.5H12"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
        </svg>
      ),
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
