import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { Calendar, CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import BoxWrapper from "@/entities/BoxWrapper";
import User from "@/entities/User";
import { CalendarMob } from "@/widgets/components";
import { useDoctors } from "@/shared/model/store/useDoctors";
import { useEffect, useState } from "react";
import { Doctor } from "@/shared/types";

const AllDoctorsPage = () => {
  const { doctors } = useDoctors();
  const [mainDoctors, setMainDoctors] = useState<Doctor[]>([]);
  const [additionalDoctors, setAdditionalDoctors] = useState<Doctor[]>([]);

  useEffect(() => {
    if (!doctors) return;

    setMainDoctors(doctors.filter((doctor) => doctor.main_status));
    setAdditionalDoctors(doctors.filter((doctor) => !doctor.main_status));
  }, [doctors]);

  return (
    <Layout>
      <CustomMobileHeader back text={ROUTES.allDoctors.label} />

      <div className={styles.wrapper}>
        <div className={styles.calendarMobWrapper}>
          <CalendarMob />
        </div>

        <div className={styles.wrapperDoctors}>
          <div>
            <h5 className={styles.titleBlock}>Основные врачи:</h5>

            <BoxWrapper className={styles.helper} color="white">
              {mainDoctors?.map((doctor, idx) => (
                <User
                  withEdit={false}
                  count={idx + 1}
                  data={{
                    image: doctor.image,
                    surname: doctor.last_name || undefined,
                    first_name: doctor.first_name || undefined,
                  }}
                />
              ))}
            </BoxWrapper>
          </div>

          <div>
            <h5 className={styles.titleBlock}>Дополнительные врачи:</h5>

            <BoxWrapper className={styles.helper} color="white">
              {additionalDoctors?.map((doctor, idx) => (
                <User
                  withEdit={false}
                  count={idx + 1}
                  data={{
                    image: doctor.image,
                    surname: doctor.last_name || undefined,
                    first_name: doctor.first_name || undefined,
                  }}
                />
              ))}
            </BoxWrapper>
          </div>
        </div>

        <div className={styles.calendarDesktop}>
          <Calendar info={false} />
        </div>
      </div>
    </Layout>
  );
};

export default AllDoctorsPage;
