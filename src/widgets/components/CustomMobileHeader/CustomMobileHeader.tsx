import { FC } from "react";
import { useNavigate } from "react-router";
import { IHeaderProps } from "./types";

import { Text } from "@/shared/ui/Text";

import styles from "./CustomMobileHeader.module.scss";
import { Row } from "@/shared/ui/Row";

export const CustomMobileHeader: FC<IHeaderProps> = ({ btn, text }) => {
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <Row gap={12}>
                <svg
                    onClick={() => navigate(-1)}
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                >
                    <path
                        d="M21 26L11 16L21 6"
                        stroke="#262626"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                {text && text.length && (
                    <Text type="h2" fz="18px">
                        {text}
                    </Text>
                )}
            </Row>
            <div>{btn}</div>
            {/* <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"> */}
            {/*     <path d="M14.0013 3.79102C15.1289 3.79102 16.043 4.7051 16.043 5.83268C16.043 6.96026 15.1289 7.87435 14.0013 7.87435C12.8737 7.87435 11.9596 6.96026 11.9596 5.83268C11.9596 4.7051 12.8737 3.79102 14.0013 3.79102Z" fill="#262626" /> */}
            {/*     <path d="M14.0013 11.9577C15.1289 11.9577 16.043 12.8718 16.043 13.9993C16.043 15.1269 15.1289 16.041 14.0013 16.041C12.8737 16.041 11.9596 15.1269 11.9596 13.9993C11.9596 12.8718 12.8737 11.9577 14.0013 11.9577Z" fill="#262626" /> */}
            {/*     <path d="M14.0013 20.1243C15.1289 20.1243 16.043 21.0384 16.043 22.166C16.043 23.2936 15.1289 24.2077 14.0013 24.2077C12.8737 24.2077 11.9596 23.2936 11.9596 22.166C11.9596 21.0384 12.8737 20.1243 14.0013 20.1243Z" fill="#262626" /> */}
            {/* </svg> */}

        </div>
    );
};
