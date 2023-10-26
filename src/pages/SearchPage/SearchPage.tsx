import { FC, useEffect, useState } from "react";

import { Layout } from "../Layout";
import {
    MobileContainer,
    MobileHeader,
    MobileMenu,
    Rating,
    Search,
} from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { ISearchResult } from "@/shared/api/Search/types";
import { SearchRes } from "@/shared/api/Search";
import { useFilter } from "@/shared/model/store";
import { MOBILE } from "@/shared/utils";
import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Filter } from "@/shared/ui/Filter";

import styles from "./SearchPage.module.scss";

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
                    <Search placeholder="Поиск чатов" height="48px" />
                    <FilterBtn onClick={() => console.log("1")} />
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
