import { FC } from "react";
import { useNavigate } from "react-router";

import { Text, MobileFilter, MobileSearch } from "@/shared";
import { MobileContainer, CustomMobileHeader, NoteBlock } from "@/widgets";

import arrow from "/assets/arrow-left-black.svg";
import plus from "/assets/plus-black.svg";
import ghost from "/assets/ghost.svg";
import styles from "./MobileNotesPage.module.scss";

const MobileNotesPage: FC = () => {
    const navigate = useNavigate();

    return (
        <div className={styles.notes}>
            <CustomMobileHeader>
                <div className={styles.header}>
                    <div className={styles.nav}>
                        <img
                            src={arrow}
                            alt=""
                            onClick={() => navigate("/m/account")}
                        />
                        <Text type="h2" fz="19px">
                            Записи
                        </Text>
                    </div>
                    <img src={plus} alt="" />
                </div>
            </CustomMobileHeader>
            <MobileContainer>
                <div className={styles.box}>
                    <MobileSearch
                        placeholder="Введите запрос"
                        filterBtn={false}
                        onClick={() => navigate("/m/create-event")}
                    />
                    <MobileFilter data={["Текущие", "Доп.проверка"]} />
                </div>
                <div className={styles.items}>
                    {![].length ? (
                        <div className={styles.empty}>
                            <img src={ghost} alt="" />
                            <div className={styles.text}>
                                <Text type="h2" fz="17px" position="center">
                                    Ничего нет
                                </Text>
                                <Text
                                    type="p"
                                    position="center"
                                    fz="14px"
                                    color="#B1B2B4"
                                >
                                    Список пуст, создайте запись с
                                    дополнительной проверкой специалиста
                                </Text>
                            </div>
                        </div>
                    ) : (
                        <NoteBlock />
                    )}
                </div>
            </MobileContainer>
        </div>
    );
};

export default MobileNotesPage;
