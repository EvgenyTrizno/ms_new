import { ROUTES } from "@/shared/utils/PATHS";
import { Layout } from "../Layout";
import styles from "./styles.module.scss";
import { CustomMobileHeader } from "@/widgets";
import { MOBILE } from "@/shared/utils";
import BoxWrapper from "@/entities/BoxWrapper";
import User from "@/entities/User";
import { Link } from "react-router-dom";

const OverviewMedTaskPage = () => {
  return (
    <Layout>
      {MOBILE && (
        <CustomMobileHeader
          back
          text={ROUTES.overviewMedTask.label}
          btn={
            <Link to="#">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 20V11M11 2V11M11 11H2M11 11H20"
                  stroke="#262626"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          }
        />
      )}
      <div className={styles.header}>
        <div className={styles.process}>
          <div className={styles.processHeader}>
            <span>Процесс выполнения </span>
            <svg
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75792 8.625H5.5496C5.0246 8.625 4.59961 9.04996 4.59961 9.57496V13.8416H7.75792V8.625V8.625Z"
                stroke="#D6E7FF"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.96765 4.83301H8.70096C8.17596 4.83301 7.75098 5.25802 7.75098 5.78302V13.833H10.9093V5.78302C10.9093 5.25802 10.4926 4.83301 9.96765 4.83301Z"
                stroke="#D6E7FF"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.1234 10.041H10.915V13.8327H14.0734V10.991C14.065 10.466 13.64 10.041 13.1234 10.041Z"
                stroke="#D6E7FF"
                strokeWidth="1.25"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6.83333 17.6667H11.8333C16 17.6667 17.6667 16 17.6667 11.8333V6.83333C17.6667 2.66667 16 1 11.8333 1H6.83333C2.66667 1 1 2.66667 1 6.83333V11.8333C1 16 2.66667 17.6667 6.83333 17.6667Z"
                stroke="#D6E7FF"
                strokeWidth="1.25"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.progressBar}>
            <div className={styles.active}></div>
            <div className={styles.active}></div>
            <div className={styles.active}></div>
            <div className={styles.active}></div>
            <div className={styles.active}></div>
            <div className={styles.active}></div>
            <div></div>
          </div>

          <span className={styles.success}>Завершен!</span>
        </div>
      </div>

      <div>
        <h5 className={styles.titleBlock}>Личный помошник</h5>

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
        </BoxWrapper>
      </div>

      <BoxWrapper color="white" title="Участвующие врачи">
        <User
          className={styles.doctor}
          withEdit={false}
          data={{
            image: "/assets/avatar.png",
            surname: "Corey",
            first_name: "Siphron",
          }}
        />
        <User
          className={styles.doctor}
          withEdit={false}
          data={{
            image: "/assets/avatar.png",
            surname: "Corey",
            first_name: "Siphron",
          }}
        />
        <User
          withEdit={false}
          data={{
            image: "/assets/avatar.png",
            surname: "Corey",
            first_name: "Siphron",
          }}
        />
      </BoxWrapper>
    </Layout>
  );
};

export default OverviewMedTaskPage;
