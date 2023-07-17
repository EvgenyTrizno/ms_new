import { FC } from "react";

import { useBackOnPrevPage } from "@/shared/hooks";
import { Btn, Text } from "@/shared";
import { MOBILE_SCREEN } from "@/shared/utils";
import { useUserCondition } from "@/shared/model/store";

import notfound from "/assets/404-page-img.svg";
import notfoundRed from "/assets/404-page-img-red.svg";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
    const { backOnPrevPage } = useBackOnPrevPage();
    const { condition } = useUserCondition();

    const sick = condition === "Болен";

    return (
        <div className={styles.notfound}>
            <img src={sick ? notfoundRed : notfound} alt="" />
            <div className={styles.container}>
                <Text
                    type="h2"
                    fz={`${MOBILE_SCREEN ? "17px" : "26px"}`}
                    position="center"
                >
                    Страница не найдена
                </Text>
                <Text
                    type="p"
                    fz={`${MOBILE_SCREEN ? "14px" : "18px"}`}
                    color="#B1B2B4"
                    position="center"
                >
                    Неправильно набран адрес или такой страницы не существует
                </Text>
            </div>
            <Btn color="#0064FA" onClick={backOnPrevPage}>
                Вернуться
            </Btn>
        </div>
    );
};

export default NotFoundPage;
