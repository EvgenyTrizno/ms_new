import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { CustomMobileHeader } from "@/widgets";
import { ROUTES } from "@/shared/utils/PATHS";
import { Container } from "@/shared/ui/Container";
import { Row } from "@/shared/ui/Row";
import { Link } from "react-router-dom";
import BoxWrapper from "@/entities/BoxWrapper";
import User from "@/entities/User";

const AllDoctorsPage = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text={ROUTES.allDoctors.label} />}

      <Container>
        <div className={styles.header}>
          <Row gap={7}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 11C3.23857 11 1 8.7614 1 6C1 3.23857 3.23857 1 6 1C8.7614 1 11 3.23857 11 6C11 8.7614 8.7614 11 6 11ZM6.5 6V3.5H5.5V7H8.5V6H6.5Z"
                fill="#B1B2B4"
              />
            </svg>

            <p className={styles.statusText}>Выполняется</p>
          </Row>

          <Link className={styles.tasksLink} to={ROUTES.medTasks.path}>
            <span>5 мед.заданий</span>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.75736 1.75736L9 6L4.75736 10.2426"
                stroke="#262626"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        <div>
          <h5 className={styles.titleBlock}>Личный помошник</h5>

          <BoxWrapper className={styles.helper} color="white">
            <User withEdit={false} count={1} />
          </BoxWrapper>
        </div>

        <BoxWrapper color="white" title="Участвующие врачи">
          <User className={styles.doctor} withEdit={false} />
          <User className={styles.doctor} withEdit={false} />
          <User withEdit={false} />
        </BoxWrapper>
      </Container>
    </Layout>
  );
};

export default AllDoctorsPage;
