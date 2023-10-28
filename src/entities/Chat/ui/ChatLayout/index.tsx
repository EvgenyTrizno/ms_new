import { FC, useState, MouseEvent, useRef } from "react";
import { motion } from "framer-motion";

import { useUserCondition } from "@/shared/model/store";
// import { PopUp, BackArrow } from "@/shared";
import { Text } from "@/shared/ui/Text";
import { Input } from "@/shared/ui/Input";
import { ChatInfo, CustomMobileHeader, EmojiModal } from "@/widgets";
import { LAPTOP, MOBILE, PC, SMALL_LAPTOP } from "@/shared/utils";
import { Rows } from "@/shared/ui/Rows";

import styles from "./styles.module.scss";
import { IChatLayoutProps } from "./types";

export const ChatLayout: FC<IChatLayoutProps> = ({ children }) => {
    const { condition } = useUserCondition();

    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
    const [y, setY] = useState<number>(0);
    const [x, setX] = useState<number>(0);
    const [isSelect, setIsSelect] = useState<string>("");
    const [msg, setMsg] = useState<string>("");
    // const [ws, setWs] = useState<WebSocket | null>(null);
    const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
    const [isInfo, setIsInfo] = useState<boolean>(false);
    const holdTimerRef = useRef<NodeJS.Timeout | null>(null);

    const sick = condition === "Болен";
    const redMesage = `${styles.text} ${styles.myTextWithSick}`;

    const handleClick = (e: MouseEvent) => {
        const classes = e.currentTarget.classList.contains(styles.text);

        if (classes) {
            setIsSelect("Сообщение");
            setY(e.clientY);
            setIsOpen((prev) => !prev);
            setX(parseInt(window.getComputedStyle(e.currentTarget).width) + 80);
        }

        return;
    };

    const handleMouseDown = () => {
        holdTimerRef.current = setTimeout(() => {
            setIsMouseDown(true);
        }, 1000);
    };

    const handleMouseDownOnMicrophone = () => {
        holdTimerRef.current = setTimeout(() => {
            setIsMouseDown(false);
        }, 1000);
    };

    const handleMouseUp = () => {
        if (holdTimerRef.current) {
            clearTimeout(holdTimerRef.current);
        }
    };

    const copyText = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <Rows gap={0} rows={["auto"]}>
            {children}
            {isOpenModal && <EmojiModal />}
        </Rows>
    );
};
