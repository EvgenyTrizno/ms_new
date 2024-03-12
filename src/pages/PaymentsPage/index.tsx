import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
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
      <CustomMobileHeader back text={"Клиника"} />

      <div className={styles.linkedCards}>
        <h6>Привязанные карты</h6>

        <div className={styles.linkedCardsInner}>
          <div className={styles.linkedCardsLeft}>
            <LinkedCards />
            <Filter
              data={["Транзакции", "Покупки", "Тарифы"]}
              isSelect={filter}
              setIsSelect={setFilter}
            />
          </div>

          <div className={cn(styles.statsWrapperDesktop, styles.statsWrapper)}>
            <BoxWrapper className={styles.box} color="white" title="Статистика">
              <div className={styles.stats}>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Янв</span>
                </div>
                <div className={cn(styles.statsItem, styles.active)}>
                  <div className={styles.graph}></div>

                  <span>Фев</span>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Мар</span>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Апр</span>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Май</span>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Июн</span>
                </div>
                <div className={styles.statsItem}>
                  <div className={styles.graph}></div>

                  <span>Мар</span>
                </div>
              </div>
            </BoxWrapper>
          </div>
        </div>
      </div>

      <div className={styles.mainContent}>
        {filter === "Транзакции" && (
          <>
            <div className={styles.statsWrapperMob}>
              <BoxWrapper
                className={styles.box}
                color="white"
                title="Статистика"
              >
                <div className={styles.stats}>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Янв</span>
                  </div>
                  <div className={cn(styles.statsItem, styles.active)}>
                    <div className={styles.graph}></div>

                    <span>Фев</span>
                  </div>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Мар</span>
                  </div>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Апр</span>
                  </div>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Май</span>
                  </div>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Июн</span>
                  </div>
                  <div className={styles.statsItem}>
                    <div className={styles.graph}></div>

                    <span>Мар</span>
                  </div>
                </div>
              </BoxWrapper>
            </div>
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
          </>
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
    </Layout>
  );
};

export default PaymentsPage;
