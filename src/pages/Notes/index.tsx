import { FC, useState } from "react";

import { Layout } from "../Layout";
import { CustomMobileHeader } from "@/widgets";
import { Text } from "@/shared/ui/Text";
import { Modal } from "@/entities/Modal";
import { Btn } from "@/shared/ui/Btn";
import { Filter } from "@/shared/ui/Filter";
import { NoteBlock } from "@/entities/Note/ui/NoteBlock";
import { SearchWithFilter } from "./ui/Search";

import ghost from "/assets/ghost.svg";
import styles from "./styles.module.scss";
import { useNotesQuery } from "@/shared/lib/hooks/useNotesQuery";

const NotesPage: FC = () => {
    const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
    const [filter, setFilter] = useState<string>("Текущие");
    const [search, setSearch] = useState<string>("");
    const { data } = useNotesQuery();

    return (
        <>
            <CustomMobileHeader back text="Записи"

            />
            <Layout>
                <SearchWithFilter search={search} setSearch={setSearch} />
                <div
                    className={styles.items}
                    style={
                        data?.data.length === 0 ? { display: "block" } : { display: "grid" }
                    }
                >
                    {data?.data.length === 0 ? (
                        <div className={styles.empty}>
                            <div className={styles.inner}>
                                <img src={ghost} alt="" />
                                <Text type="h2" color="#262626" fz="32px">
                                    Ничего нет
                                </Text>
                                <div className={styles.text}>
                                    <Text type="p" fz="24px" position="center" color="#26262680">
                                        Список пуст, создайте запись нажав на кнопку “Плюс”
                                    </Text>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>

                            {data?.data
                                .filter((el) =>
                                    Object.values(el).some((value) => {
                                        if (typeof value === "string") {
                                            return value.toLowerCase().includes(search.toLowerCase());
                                        }
                                    })
                                )
                                .map((el) => {
                                    return (
                                        <NoteBlock
                                            key={el.id}
                                            data={el}
                                        />
                                    );
                                })}
                        </>
                    )}
                </div>

                {isOpenModal && (
                    <Modal setIsOpenModal={setIsOpenModal} isOpen={false}>
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
                                Данная запись успешно прошла дополнительную проверку и была
                                перенесена в раздел текущие
                            </Text>
                        </div>
                        <Btn color="#0064FA" height="44px" fz="13px">
                            Перенести в текущие
                        </Btn>
                    </Modal>
                )}
            </Layout>
        </>
    );
};

export default NotesPage;
