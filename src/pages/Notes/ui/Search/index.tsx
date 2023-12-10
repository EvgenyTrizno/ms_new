import { FC } from "react";

import { Search } from "@/features/Search";
import { Btn } from "@/shared/ui/Btn";
import { Row } from "@/shared/ui/Row";
import { Image } from "@/shared/ui/Image";

import icon from "./assets/add-circle.svg";
import styles from "./styles.module.scss";

export const SearchWithFilter: FC = () => {
    return (
        <Row gap={10}>
            <Search placeholder="Введите запрос" />
            <Btn color="#0064FA" className={styles.add}>
                <Image src={icon} alt={""} />
            </Btn>
        </Row>
    );
};
