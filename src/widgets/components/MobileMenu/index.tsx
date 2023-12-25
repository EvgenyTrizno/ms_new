import { FC } from "react";
import { useLocation, useNavigate } from "react-router";

import { ExtraCallBtn } from "../ExtraCallBtn";
import { ROUTES } from "@/shared/utils/PATHS";

import styles from "./styles.module.scss";
import { useExtracall } from "@/shared/model/store/extracall";

export const MobileMenu: FC = () => {
    const { isOpen } = useExtracall();
    const navigate = useNavigate();
    const location = useLocation();

    const data = [
        {
            path: ROUTES.main.path,
            svg: (
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path
                        d="M10.522 3.3132L4.2337 8.2132C3.1837 9.02986 2.33203 10.7682 2.33203 12.0865V20.7315C2.33203 23.4382 4.53703 25.6549 7.2437 25.6549H20.7537C23.4604 25.6549 25.6654 23.4382 25.6654 20.7432V12.2499C25.6654 10.8382 24.7204 9.02986 23.5654 8.22486L16.3554 3.1732C14.722 2.02986 12.097 2.0882 10.522 3.3132Z"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M14 20.9883V17.4883"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            ),
        },
        {
            path: ROUTES.search.path,
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M10.8333 20.1667C15.988 20.1667 20.1667 15.988 20.1667 10.8333C20.1667 5.67868 15.988 1.5 10.8333 1.5C5.67868 1.5 1.5 5.67868 1.5 10.8333C1.5 15.988 5.67868 20.1667 10.8333 20.1667Z"
                        stroke="#B1B2B4"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M22.5008 22.5008L17.4258 17.4258"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                </svg>
            ),
        },
        {
            path: ROUTES.messages.path,
            svg: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_6043_72657)">
                        <path
                            d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                            stroke="#B1B2B4"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_6043_72657">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
        },
        {
            path: ROUTES.notifications.path,
            svg: (
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none">
                    <path
                        d="M12.0186 3.41016C8.70862 3.41016 6.01862 6.10016 6.01862 9.41016V12.3002C6.01862 12.9102 5.75862 13.8402 5.44862 14.3602L4.29862 16.2702C3.58862 17.4502 4.07862 18.7602 5.37862 19.2002C9.68862 20.6402 14.3386 20.6402 18.6486 19.2002C19.8586 18.8002 20.3886 17.3702 19.7286 16.2702L18.5786 14.3602C18.2786 13.8402 18.0186 12.9102 18.0186 12.3002V9.41016C18.0186 6.11016 15.3186 3.41016 12.0186 3.41016Z"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                    />
                    <path
                        d="M13.8719 3.69945C13.5619 3.60945 13.2419 3.53945 12.9119 3.49945C11.9519 3.37945 11.0319 3.44945 10.1719 3.69945C10.4619 2.95945 11.1819 2.43945 12.0219 2.43945C12.8619 2.43945 13.5819 2.95945 13.8719 3.69945Z"
                        stroke="#B1B2B4"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    <path
                        d="M15.0195 19.5605C15.0195 21.2105 13.6695 22.5605 12.0195 22.5605C11.1995 22.5605 10.4395 22.2205 9.89953 21.6805C9.35953 21.1405 9.01953 20.3805 9.01953 19.5605"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                    />
                </svg>
            ),
        },
    ];

    const newData = [...data];
    newData.splice(2, 0, {
        path: "" as "/",
        svg: (
            <ExtraCallBtn className={styles.mobileExtraCall} isOpen={isOpen} />
        ),
    });

    return (
        <div className={styles.menu}>
            {newData.map((item) => (
                <div
                    className={
                        item.path === location.pathname ? styles.active : ""
                    }
                    onClick={() => navigate(item.path)}
                >
                    {item.svg}
                </div>
            ))}
        </div>
    );
};
