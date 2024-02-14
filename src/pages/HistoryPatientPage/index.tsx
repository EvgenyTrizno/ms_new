import { CustomMobileHeader } from "@/widgets";
import { Layout } from "../Layout";
import { MOBILE } from "@/shared/utils";
import styles from "./styles.module.scss";
import { Container } from "@/shared/ui/Container";
import { Filter } from "@/shared/ui/Filter";
import { useState } from "react";
import { MedTask } from "@/entities";

const HistoryPatientPage = () => {
  const [filter, setFilter] = useState("Заболевания");

  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text="История пациента" />}

      <Container>
        <div className={styles.contentWrapper}>
          <Filter
            isSelect={filter}
            setIsSelect={setFilter}
            data={["Заболевания", "Записи", "Назначения"]}
            width="100%"
          />

          <div className={styles.list}>
            <MedTask />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default HistoryPatientPage;
