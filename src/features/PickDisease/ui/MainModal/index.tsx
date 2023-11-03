import { FC } from "react";

import { Modal } from "@/shared/ui/Modal";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Search } from "@/features/Search";
import { Row } from "@/shared/ui/Row";
import { Btn } from "@/shared/ui/Btn";

import styles from "./styles.module.scss";
import { IMainModalProps } from "./types";

export const MainModal: FC<IMainModalProps> = ({ setIsOpenModal }) => {
    return (
        <Modal setIsOpenModal={setIsOpenModal}>
            <WhiteContentBlock className={styles.diseaseModal}>
                <Rows gap={42} rows={["auto"]}>
                    <Rows gap={20} rows={["auto"]}>
                        <Text type="h2" fz="26px">
                            Интерес к какому заболеванию у вас имеется?
                        </Text>
                        <Search />
                    </Rows>
                    <Row gap={12}>
                        <Btn color="#0064FA">Продолжить</Btn>
                        <Btn
                            color="transparent"
                            border="1px solid #0064FA"
                            textColor="#0064FA"
                            onClick={() => setIsOpenModal(false)}
                        >
                            Отсутствует
                        </Btn>
                    </Row>
                </Rows>
            </WhiteContentBlock>
        </Modal>
    );
};
