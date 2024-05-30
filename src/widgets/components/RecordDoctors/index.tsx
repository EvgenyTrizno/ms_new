import { FC } from "react";
import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";
import { DoctorsCount } from "./ui/DoctorsCount.tsx";
import { DoctorsList } from "./ui/DoctorsList/index.tsx";
import { DoctorsParameters } from "./ui/DoctorsParameters/index.tsx";
import { PropsWithClassName } from "@/shared/types/index.ts";
import cn from "clsx";

export const RecordDoctors: FC<PropsWithClassName> = ({className}) => {
  return (
    <WidgetWrapper className={cn(className, styles.widgetWrapper)}>
      <div className={styles.wrapper}>
        <DoctorsCount />

        <div className={styles.right}>
          <div className={styles.doctors}>
            <DoctorsList />
          </div>

          <DoctorsParameters />
        </div>
      </div>
    </WidgetWrapper>
  );
};
