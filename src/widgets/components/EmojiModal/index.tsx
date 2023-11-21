import { FC } from "react";

import styles from "./styles.module.scss";

export const EmojiModal: FC = () => {
    return (
        <div className={styles.emoji}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {[1, 2, 3, 4, 5].map(() => (
                        <>
                            <div className={styles.item}>😊</div>
                            <div className={styles.item}>😁</div>
                            <div className={styles.item}>❤️</div>
                            <div className={styles.item}>🤡</div>
                            <div className={styles.item}>🥸</div>
                            <div className={styles.item}>🐣</div>
                            <div className={styles.item}>🗿</div>
                        </>
                    ))}
                </div>
            </div>
            <div className={styles.categories}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M18.6667 10.3372C18.6667 14.9372 14.9333 18.6706 10.3333 18.6706C5.73333 18.6706 2 14.9372 2 10.3372C2 5.73724 5.73333 2.00391 10.3333 2.00391C14.9333 2.00391 18.6667 5.73724 18.6667 10.3372Z"
                        stroke="#0064FA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M13.4249 12.9893L10.8416 11.4477C10.3916 11.181 10.0249 10.5393 10.0249 10.0143V6.59766"
                        stroke="#0064FA"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                        d="M7.50033 18.3307H12.5003C16.667 18.3307 18.3337 16.6641 18.3337 12.4974V7.4974C18.3337 3.33073 16.667 1.66406 12.5003 1.66406H7.50033C3.33366 1.66406 1.66699 3.33073 1.66699 7.4974V12.4974C1.66699 16.6641 3.33366 18.3307 7.50033 18.3307Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.917 8.125C13.6073 8.125 14.167 7.56536 14.167 6.875C14.167 6.18464 13.6073 5.625 12.917 5.625C12.2266 5.625 11.667 6.18464 11.667 6.875C11.667 7.56536 12.2266 8.125 12.917 8.125Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7.08301 8.125C7.77336 8.125 8.33301 7.56536 8.33301 6.875C8.33301 6.18464 7.77336 5.625 7.08301 5.625C6.39265 5.625 5.83301 6.18464 5.83301 6.875C5.83301 7.56536 6.39265 8.125 7.08301 8.125Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M7 11.0859H13C13.4167 11.0859 13.75 11.4193 13.75 11.8359C13.75 13.9109 12.075 15.5859 10 15.5859C7.925 15.5859 6.25 13.9109 6.25 11.8359C6.25 11.4193 6.58333 11.0859 7 11.0859Z"
                        stroke="#B1B2B4"
                        strokeWidth="1.25"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
        </div>
    );
};
