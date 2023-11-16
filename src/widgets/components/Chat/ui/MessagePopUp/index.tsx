import { FC } from "react";
import { IMessagePopUpProps } from "./types";

import { PopUp } from "@/shared/ui/PopUp";

export const MessagePopUp: FC<IMessagePopUpProps> = ({
    top,
    left,
    copy,
    remove,
    edit,
    replay,
    select,
}) => {
    return (
        <PopUp top={top} left={left}>
            <>
                <li onClick={replay}>Ответить</li>
                <li onClick={select}>Выбрать</li>
                <li onClick={copy}>Скопировать</li>
                <li onClick={edit}>Изменить</li>
                <li onClick={remove} style={{ color: "#D64657" }}>
                    Удалить
                </li>
            </>
        </PopUp>
    );
};
