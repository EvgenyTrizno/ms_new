import { FC, useState } from "react";
import { useNavigate } from "react-router";

import { Layout } from "../Layout/Layout";
import { Filter, Text, Btn, BackArrow, MobileSearch } from "@/shared";
import {
    CustomMobileHeader,
    MobileContainer,
    Modal,
    NoteBlock,
    Search,
} from "@/widgets";

import ghost from "/assets/ghost.svg";
import addCircle from "/assets/add-circle.svg";
import styles from "./NotesPage.module.scss";
import { MOBILE } from "@/shared/utils";

const NotesPage: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);

    const data = [1, 2, 3, 4];
    const navigate = useNavigate();

    return (
        <Layout>
            {MOBILE && (
                <CustomMobileHeader back>
                    <BackArrow />
                </CustomMobileHeader>
            )}
            <MobileContainer>
                <div className={styles.notes}>
                    {MOBILE ? (
                        <MobileSearch
                            placeholder="Введите запрос"
                            filterBtn
                            height="52px"
                        />
                    ) : (
                        <div className={styles.header}>
                            <Search
                                placeholder="Введите запрос"
                                height="48px"
                            />
                            <Btn
                                color="#0064FA"
                                width="48px"
                                height="48px"
                                onClick={() => navigate("/create-event")}
                                padding="14px"
                                br="12px"
                            >
                                <img src={addCircle} alt="" />
                            </Btn>
                        </div>
                    )}
                    <Filter data={["Текущие", "Доп.проверка"]} />
                    <div
                        className={styles.items}
                        style={
                            data.length === 0
                                ? { display: "block" }
                                : { display: "grid" }
                        }
                    >
                        {data.length === 0 ? (
                            <div className={styles.empty}>
                                <div className={styles.inner}>
                                    <img src={ghost} alt="" />
                                    <Text type="h2" color="#262626" fz="32px">
                                        Ничего нет
                                    </Text>
                                    <div className={styles.text}>
                                        <Text
                                            type="p"
                                            fz="24px"
                                            position="center"
                                            color="#26262680"
                                        >
                                            Список пуст, создайте запись нажав
                                            на кнопку “Плюс”
                                        </Text>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {data.map((item) => (
                                    <NoteBlock key={item} />
                                ))}
                            </>
                        )}
                    </div>
                </div>
            </MobileContainer>
            {isOpenModal && (
                <Modal setIsOpenModal={setIsOpenModal}>
                    <div className={styles.modalContent}>
                        <Text type="h4" fz="17px" position="center">
                            Подтверждено
                        </Text>
                        <Text
                            type="p"
                            fw={400}
                            position="center"
                            fz="14px"
                            color="#7D7F82"
                        >
                            Данная запись успешно прошла дополнительную проверку
                            и была перенесена в раздел текущие
                        </Text>
                    </div>
                    <Btn color="#0064FA" height="44px" fz="13px">
                        Перенести в текущие
                    </Btn>
                </Modal>
            )}
        </Layout>
    );
};

export default NotesPage;
