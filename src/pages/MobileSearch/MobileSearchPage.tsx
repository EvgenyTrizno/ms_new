import { FC } from "react";

import { MobileContainer, MobileHeader, SearchResultBlock } from "@/widgets";
// import { MobileFilter, MobileSearch } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { useFilter } from "@/shared/model/store";
import { Layout } from "../Layout";

import styles from "./MobileSearchPage.module.scss";

const MobileSearchPage: FC = () => {
    const { isFilter } = useFilter();

    const renderElements = (filter: string) => {
        switch (filter) {
            case "Центры":
                return <SearchResultBlock type="Центры" />;
            case "Клиники":
                return <SearchResultBlock type="Клиники" />;
            case "Врачи":
                return (
                    <SearchResultBlock type="Врачи">
                        <ul>
                            <li>
                                <Text type="p" color="#B1B2B4" fz="12px">
                                    Дата рождения:
                                </Text>
                                <Text type="p" fz="12px">
                                    02.01.2022
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#B1B2B4" fz="12px">
                                    Специальность:
                                </Text>
                                <Text type="p" fz="12px">
                                    Уролог
                                </Text>
                            </li>
                            <li>
                                <Text type="p" color="#B1B2B4" fz="12px">
                                    Опыт работы:
                                </Text>
                                <Text type="p" fz="12px">
                                    1.5 год
                                </Text>
                            </li>
                        </ul>
                    </SearchResultBlock>
                );
        }
    };

    const elements = renderElements(isFilter);

    return (
        <Layout>
            <MobileHeader />
            <MobileContainer>
                <div className={styles.box}>
                    {/* <MobileSearch
                        height="50px"
                        placeholder="Поиск чатов"
                        filterBtn
                    />
                    <MobileFilter data={["Центры", "Клиники", "Врачи"]} /> */}
                </div>
                <div className={styles.results}>{elements}</div>
            </MobileContainer>
        </Layout>
    );
};

export default MobileSearchPage;
