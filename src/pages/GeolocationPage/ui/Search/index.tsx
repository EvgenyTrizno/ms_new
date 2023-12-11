import { FC } from "react";

import { FilterBtn } from "@/shared/ui/FilterBtn";
import { Row } from "@/shared/ui/Row";
import { StandaloneSearchBox } from "@react-google-maps/api";
import { Search } from "@/features/Search";

import styles from "./styles.module.scss";

export const SearchWithFilter: FC = () => {
    return (
        <Row gap={10} className={styles.wrapper}>
            <StandaloneSearchBox>
                <Search className={styles.width} />
            </StandaloneSearchBox>
            <FilterBtn type="big" onClick={() => ({})} />
        </Row>
    );
};
