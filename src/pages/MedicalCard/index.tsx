import { FC } from "react";

import { Calendar, CustomMobileHeader } from "@/widgets";
import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { MOBILE } from "@/shared/utils";
import { Container } from "@/shared/ui/Container";
import { List } from "./ui/List";
import { Cols } from "@/shared/ui/Cols";
import { Search } from "@/features/Search";

import styles from "./styles.module.scss";

const MedicalCardPage: FC = () => {
  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text="Медицинская карта" />}
      <Container>
        {/* <div className={styles.search}>
                    <Search placeholder="Введите запрос" />
                </div>
                <Cols
                    type="custom"
                    gap={16}
                    cols={MOBILE ? [] : ["515px", "1fr"]}
                >
                    <div className={styles.calendar}>
                        <Calendar
                            height="max-content"
                            width="100%"
                            info={false}
                        />
                    </div>
                    <div className={styles.list}>
                        <Text
                            type="p"
                            color="#7D7F82"
                            fz="14px"
                            style={{ marginBottom: "16px" }}
                        >
                            10 Октябрь
                        </Text>
                        <List />
                    </div>
                </Cols> */}

        <div className={styles.search}>
          <Search placeholder="Введите запрос" />
        </div>
        <div className={styles.calendar}>
          <Calendar height="max-content" width="100%" info={false} />
        </div>
        <div className={styles.list}>
          <div className={styles.dateWrapper}>
            <Text
              type="p"
              color="#7D7F82"
              fz="14px"
              style={{ marginBottom: "16px" }}
            >
              10 Октябрь
            </Text>
          </div>
          <div style={{ paddingTop: "40px" }}>
            <List />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default MedicalCardPage;
