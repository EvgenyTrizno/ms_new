import { FC } from "react";

import { Row } from "@/shared/ui/Row";
import { Text } from "@/shared/ui/Text";
import { List } from "../List";
import { useAuth } from "@/shared/model/store/auth";

import styles from "./styles.module.scss";

export const DoctorsFromUserCountry: FC = () => {
    const { user } = useAuth();

    return (
        <div className={styles.wrapper}>
            {/* <Row gap={0} style={{ justifyContent: "space-between" }}> */}
            {/*   <Text type="p" color="#7D7F82" className={styles.country}> */}
            {/*     {user && user.country?.name */}
            {/*       ? `Специалисты из ${user.country?.name}` */}
            {/*       : ""} */}
            {/*   </Text> */}
            {/* </Row> */}
            <List />
        </div>
    );
};
