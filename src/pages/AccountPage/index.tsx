import { FC } from "react";

import { Layout } from "../Layout";
import { Container } from "@/shared/ui/Container";
import { MOBILE, TABLET } from "@/shared/utils";
import { CustomMobileHeader } from "@/widgets";
import styles from "./styles.module.scss";

import { Search } from "@/features/Search";
import { NoteBlock } from "@/entities/Note/ui/NoteBlock";

const AccountPage: FC = () => {
  return (
    <Layout>
      {(MOBILE || TABLET) && <CustomMobileHeader back text="Профиль" />}
      <div>
        <Search />

        <div className={styles.timeWrapper}>
          <p>Ваша очередь наступит через</p>
          <span>23:59</span>
        </div>

        <div className={styles.contentWrapper}>
          <img
            className={styles.avatar}
            src="/assets/avatar-2.png"
            alt="avatar"
          />

          <div className={styles.contentHeader}>
            <h4>Ivan Ivanov</h4>

            <div className={styles.contentHeaderList}>
              <div className={styles.contentHeaderItem}>
                <img src="/assets/icons/location.svg" alt="location" />
                <span>U.S, New-York</span>
              </div>

              <div className={styles.contentHeaderItem}>
                <img src="/assets/icons/warning.svg" alt="location" />
                <span>Подробнее</span>
              </div>
            </div>
          </div>

          <div className={styles.notesList}>
            <NoteBlock />
            <NoteBlock />
            <NoteBlock />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AccountPage;
