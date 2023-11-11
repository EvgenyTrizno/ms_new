import { FC } from "react";

import { useBackOnPrevPage } from "@/shared/lib/hooks";
import { Text } from "@/shared/ui/Text";
import { Btn } from "@/shared/ui/Btn";
import { MOBILE } from "@/shared/utils";

import notfound from "/assets/404-page-img.svg";
import notfoundRed from "/assets/404-page-img-red.svg";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage: FC = () => {
    const { backOnPrevPage } = useBackOnPrevPage();

    const sick = "Болен";

    return (
        <div className={styles.notfound}>
            <img src={sick ? notfoundRed : notfound} alt="" />
            <div className={styles.container}>
                <Text
                    type="h2"
                    fz={`${MOBILE ? "17px" : "24px"}`}
                    position="center"
                >
                    Страница не найдена
                </Text>
                <Text
                    type="p"
                    fz={`${MOBILE ? "14px" : "16px"}`}
                    color="#B1B2B4"
                    position="center"
                >
                    Неправильно набран адрес
                    <br /> или такой страницы не существует
                </Text>
            </div>
            <Btn color="#0064FA" onClick={backOnPrevPage}>
                Вернуться
            </Btn>
        </div>
    );
};

export default NotFoundPage;
