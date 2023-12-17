import { FC } from "react";

import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Row } from "@/shared/ui/Row";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Search } from "@/features/Search";

import styles from "./styles.module.scss";
import { MOBILE, TABLET } from "@/shared/utils";

export const SearchWithFilter: FC = () => {
    return (
        <Row gap={10} className={styles.wrapper}>
            {!MOBILE && !TABLET ? (
                <StandaloneSearchBox>
                    <Search className={styles.width} placeholder="Поиск" />
                </StandaloneSearchBox>
            ) : (
                <div style={{ width: "100%" }}>
                    <StandaloneSearchBox>
                        <Search className={styles.width} placeholder="Поиск" />
                    </StandaloneSearchBox>
                </div>
            )}
            <FilterBtn
                type={!MOBILE && !TABLET ? "big" : "small"}
                onClick={() => ({})}
            />
        </Row>
    );
};
