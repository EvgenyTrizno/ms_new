import { MOBILE } from "@/shared/utils";
import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { Container } from "@/shared/ui/Container";
import styles from "./styles.module.scss";
import { LinkedCards } from "./ui/LinkedCards/LinkedCards";
import { Filter } from "@/shared/ui/Filter";
import { useState } from "react";
import BoxWrapper from "@/entities/BoxWrapper";
import Conversion from "@/entities/Conversion";
import cn from "clsx";
import Purchase from "@/entities/Purchase";

const PaymentsPage = () => {
  const [filter, setFilter] = useState<string>("Транзакции");

  return (
    <Layout>
      {MOBILE && <CustomMobileHeader back text="Платежи" />}
      <Container>
        <div className={styles.linkedCards}>
          <h6>Привязанные карты</h6>

          <LinkedCards />
        </div>

        <div className={styles.mainContent}>
          <Filter
            data={["Транзакции", "Покупки", "Тарифы"]}
            isSelect={filter}
            setIsSelect={setFilter}
          />

          {filter === "Транзакции" && (
            <div>
              <BoxWrapper
                className={styles.box}
                color="white"
                title="Статистика"
              >
                <div></div>
              </BoxWrapper>
              <div className={styles.conversionsWrapper}>
                <h6>24 фев</h6>

                <BoxWrapper className={cn(styles.boxConversions)} color="white">
                  <Conversion type="up" />

                  <Conversion type="down" />
                </BoxWrapper>
              </div>
              <div className={styles.conversionsWrapper}>
                <h6>24 фев</h6>

                <BoxWrapper className={cn(styles.boxConversions)} color="white">
                  <Conversion type="up" />

                  <Conversion type="down" />
                </BoxWrapper>
              </div>
            </div>
          )}

          {filter === "Покупки" && (
            <div>
              <div className={styles.conversionsWrapper}>
                <h6>24 фев</h6>

                <BoxWrapper className={cn(styles.boxPurchases)} color="white">
                  <Purchase />
                  <Purchase />
                  <Purchase />
                  <Purchase />
                </BoxWrapper>
              </div>

              <div className={styles.conversionsWrapper}>
                <h6>24 фев</h6>

                <BoxWrapper className={cn(styles.boxPurchases)} color="white">
                  <Purchase />
                  <Purchase />
                  <Purchase />
                  <Purchase />
                </BoxWrapper>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Layout>
  );
};

export default PaymentsPage;
