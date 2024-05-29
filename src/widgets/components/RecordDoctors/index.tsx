import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";
import { DoctorsCount } from "./ui/DoctorsCount.tsx";
import { DoctorsList } from "./ui/DoctorsList/index.tsx";
import { DoctorsParameters } from "./ui/DoctorsParameters/index.tsx";

export const RecordDoctors = () => {
  return (
    <WidgetWrapper className={styles.widgetWrapper}>
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
