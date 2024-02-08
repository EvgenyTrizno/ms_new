import { FC } from "react";

import { Layout } from "../Layout";
import { MOBILE } from "@/shared/utils";
import styles from "./styles.module.scss";
import { SearchWithFilter } from "@/features/SearchWithFilter";
import { AccountMoreDetailedForm } from "@/widgets/components/MobilePopup/AccountMoreDetailedForm/AccountMoreDetailedForm";
import { useOpensModals } from "@/shared/model/store/opensModals";
import { MobileMenu } from "@/widgets/components/MobileMenu";
import { MobileHeader } from "@/widgets/components/MobileHeader";
import { useAuth } from "@/shared/model/store/auth";
import { MobilePopup } from "@/widgets";
import { NotesList } from "./ui/NotesList";

const AccountPage: FC = () => {
  const { isOpenMoreDetailed, setOpenMoreDetailed } = useOpensModals();
  const { user } = useAuth();

  return (
    <>
      {MOBILE && <MobileHeader />}
      <Layout>
        {MOBILE ? (
          <div className={styles.wrapper}>
            <SearchWithFilter
              className={styles.search}
              placeholder="Поиск"
              onChange={() => console.log("asd")}
              value=""
            />

            <div className={styles.timeWrapper}>
              <p>Ваша очередь наступит через</p>
              <span>23:59</span>
            </div>

            <div className={styles.contentWrapper}>
              <img
                className={styles.avatar}
                src={user?.image || "/assets/avatar.png"}
                alt="avatar"
              />

              <div className={styles.contentHeader}>
                {(user?.first_name || user?.surname) && (
                  <h4>
                    {user?.first_name} {user?.surname}
                  </h4>
                )}

                <div className={styles.contentHeaderList}>
                  {(user?.country || user?.city) && (
                    <div className={styles.contentHeaderItem}>
                      <img src="/assets/icons/location.svg" alt="location" />
                      <span>
                        {user?.country?.name}, {user?.city?.name}
                      </span>
                    </div>
                  )}

                  <div
                    className={styles.contentHeaderItem}
                    onClick={() => setOpenMoreDetailed(true)}
                    style={{ cursor: "pointer" }}
                  >
                    <img src="/assets/icons/warning.svg" alt="location" />
                    <span>Подробнее</span>
                  </div>
                </div>
              </div>

              <NotesList />
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </Layout>

      {MOBILE && <MobileMenu />}

      <MobilePopup
        isOpen={isOpenMoreDetailed}
        title="Подробнее"
        closeHandler={() => setOpenMoreDetailed(false)}
      >
        <AccountMoreDetailedForm />
      </MobilePopup>
    </>
  );
};

export default AccountPage;
