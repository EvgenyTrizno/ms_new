import { FC } from "react";

import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Row } from "@/shared/ui/Row";

import styles from "./styles.module.scss";
import { Centers } from "../Centers";
import { Clinics } from "../Clinics";

export const MenuLayout: FC = () => {
    return (
        <ul className={styles.menu}>
            <li style={{ display: "flex", justifyContent: "space-between" }}>
                <Row gap={16}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                            d="M10 9.99805C12.0711 9.99805 13.75 8.31911 13.75 6.24805C13.75 4.17698 12.0711 2.49805 10 2.49805C7.92893 2.49805 6.25 4.17698 6.25 6.24805C6.25 8.31911 7.92893 9.99805 10 9.99805Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16.4436 17.5C16.4436 14.5975 13.5561 12.25 10.0011 12.25C6.44609 12.25 3.55859 14.5975 3.55859 17.5"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                    <Text type="p">Персонал</Text>
                </Row>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M6.25 16.6615L12.9167 9.99479L6.25 3.32812"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <WhiteContentBlock className={styles.submenu}>
                    <li>
                        <Text type="p">Врачи</Text>
                    </li>
                    <li>
                        <Text type="p">Клиники</Text>
                        <WhiteContentBlock className={styles.submenu2}>
                            <Clinics />
                        </WhiteContentBlock>
                    </li>
                    <li>
                        <Text type="p">Центры</Text>
                        <WhiteContentBlock className={styles.submenu2}>
                            <Centers />
                        </WhiteContentBlock>
                    </li>
                </WhiteContentBlock>
            </li>
        </ul>
    );
};
