import { FC, useEffect, useState } from "react";

import { Layout } from "../Layout/Layout";
import {
    MobileContainer,
    MobileHeader,
    MobileMenu,
    Rating,
    Search,
} from "@/widgets";
import { Btn, Filter, MobileSearch, Text } from "@/shared";
import { ISearchResult } from "@/shared/api/Search/types";
import { SearchRes } from "@/shared/api/Search";
import { useFilter } from "@/shared/model/store";

import controler from "/assets/controler.svg";
import styles from "./SearchPage.module.scss";
import { MOBILE, PC } from "@/shared/utils";

const SearchPage: FC = () => {
    const { getAllResult } = SearchRes();
    const { isFilter } = useFilter();
    const [data, setData] = useState<ISearchResult>();

    useEffect(() => {
        getAllResult().then((res) => setData(res));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Layout>
            {MOBILE && <MobileHeader />}
            <MobileContainer>
                <div className={styles.header}>
                    {PC && (
                        <>
                            <Search placeholder="Поиск чатов" height="48px" />
                            <Btn
                                width="160px"
                                color="#0064FA"
                                height="48px"
                                br="12px"
                                padding="14px 18px"
                            >
                                <div className={styles.btn}>
                                    <img src={controler} alt="" />
                                    <Text type="p" fz="14px">
                                        Фильтры
                                    </Text>
                                </div>
                            </Btn>
                        </>
                    )}
                    {MOBILE && (
                        <MobileSearch placeholder="Поиск чатов" filterBtn />
                    )}
                </div>
                <div className={styles.main}>
                    <div className={styles.box}>
                        <Filter data={["Центры", "Клиника", "Врачи"]} />
                    </div>
                    <div className={styles.items}>
                        {isFilter === "Центры"
                            ? data?.centers.map((item) => (
                                  <div className={styles.item} key={item.name}>
                                      <img
                                          src={item.image}
                                          alt={`${item.name} images`}
                                      />
                                      <div className={styles.content}>
                                          <Text
                                              type="h2"
                                              color="#262626"
                                              fz="20px"
                                              position="start"
                                          >
                                              {item.name}
                                          </Text>
                                          <div className={styles.text}>
                                              <Text type="p" color="#3C3D3E">
                                                  {item.description}
                                              </Text>
                                          </div>
                                          <div className={styles.rating}>
                                              <Rating
                                                  defaultValue={item.rating}
                                                  disabled
                                              />
                                              <div>
                                                  <Text
                                                      type="p"
                                                      color="#7D7F82"
                                                  >
                                                      {item.country.name},
                                                      {item.city}
                                                  </Text>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : null}
                        {isFilter === "Клиника"
                            ? data?.clinics.map((item) => (
                                  <div className={styles.item} key={item.name}>
                                      <img
                                          src={item.image}
                                          alt={`${item.name} images`}
                                      />
                                      <div className={styles.content}>
                                          <Text
                                              type="h2"
                                              color="#262626"
                                              fz="20px"
                                              position="start"
                                          >
                                              {item.name}
                                          </Text>
                                          <div className={styles.text}>
                                              <Text type="p" color="#3C3D3E">
                                                  {item.description}
                                              </Text>
                                          </div>
                                          <div className={styles.rating}>
                                              <Rating
                                                  defaultValue={item.rating}
                                                  disabled
                                              />
                                              <Text type="p" color="#7D7F82">
                                                  {item.country.name},
                                                  {item.city}
                                              </Text>
                                          </div>
                                      </div>
                                  </div>
                              ))
                            : null}
                    </div>
                </div>
                {MOBILE && <MobileMenu />}
            </MobileContainer>
        </Layout>
    );
};

export default SearchPage;
