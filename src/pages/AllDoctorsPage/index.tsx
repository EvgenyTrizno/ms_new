import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { Calendar, CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import { Row } from "@/shared/ui/Row";
import { Link } from "react-router-dom";
import BoxWrapper from "@/entities/BoxWrapper";
import User from "@/entities/User";
import { CalendarMob } from "@/widgets/components";

const AllDoctorsPage = () => {
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
              <User
                withEdit={false}
                count={1}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={2}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={3}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={4}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={5}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
            </BoxWrapper>
          </div>

          <div>
            <h5 className={styles.titleBlock}>Дополнительные врачи:</h5>

            <BoxWrapper className={styles.helper} color="white">
              <User
                withEdit={false}
                count={1}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={2}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={3}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={4}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
              <User
                withEdit={false}
                count={5}
                data={{
                  image: "/assets/avatar.png",
                  surname: "Corey",
                  first_name: "Siphron",
                }}
              />
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
