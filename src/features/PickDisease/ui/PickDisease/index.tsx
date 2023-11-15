import { FC, useState } from "react";
import { IMainModalProps } from "./types";

import { Modal } from "@/entities/Modal";
import { Rows } from "@/shared/ui/Rows";
import { Text } from "@/shared/ui/Text";
import { Search } from "@/features/Search";
import { Row } from "@/shared/ui/Row";
import { DiseaseList } from "@/entities/DiseaseList";

export const PickDisease: FC<IMainModalProps> = ({
    setIsOpenModal,
    text,
    btns,
    setDisease,
    isOpen,
}) => {
    const [search, setSearch] = useState<string>("");

    return (
        <Modal setIsOpenModal={setIsOpenModal} isOpen={isOpen}>
            <Rows gap={20} rows={["auto"]}>
                <Rows gap={20} rows={["auto"]}>
                    <Text type="h2" fz="26px" position="center">
                        {text}
                    </Text>
                    <Search
                        placeholder="Поиск"
                        onChange={(e) => setSearch((e && e.target.value) ?? "")}
                    />
                </Rows>
                <div
                    style={{
                        maxHeight: 350,
                        overflowY: "auto",
                        display: search.length ? "block" : "none",
                    }}
                >
                    <DiseaseList setDisease={setDisease} search={search} />
                </div>
                <Row gap={12}>{btns}</Row>
            </Rows>
        </Modal>
    );
};
