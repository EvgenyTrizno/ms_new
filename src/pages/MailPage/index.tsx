import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { LAPTOP, MOBILE, SMALL_LAPTOP, TABLET } from "@/shared/utils";
import { MailView } from "@/entities/MailView";
import { MailMessage } from "@/entities/MailMessage";
import { Filter } from "@/shared/ui/Filter";
import { Container } from "@/shared/ui/Container";
import { CustomMobileHeader } from "@/widgets";

import styles from "./styles.module.scss";
import { FilterWithIcons } from "@/shared/ui/FilterWithIcons";

const MailPage: FC = () => {
    return (
        <Layout>
            {(MOBILE || TABLET) && <CustomMobileHeader back text="Почта" />}
            <Container>
                <div className={styles.filter}>
                    {!MOBILE && !TABLET ? (
                        <Filter
                            width="100%"
                            data={[
                                "Все сообщения (156)",
                                "Черновики",
                                "Избранное",
                                "Удаленные",
                            ]}
                            isSelect={""}
                            setIsSelect={() => ({})}
                        />
                    ) : (
                        <FilterWithIcons
                            width="100%"
                            data={[
                                <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
                                        stroke="#0064FA"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                    <path
                                        d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
                                        stroke="#0064FA"
                                        stroke-width="1.5"
                                        stroke-miterlimit="10"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>,
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_3485_81172)">
                                        <path
                                            d="M15.625 2H7.625C3.625 2 1.625 4 1.625 8V21C1.625 21.55 2.075 22 2.625 22H15.625C19.625 22 21.625 20 21.625 16V8C21.625 4 19.625 2 15.625 2Z"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.625 9.5H16.625"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M6.625 14.5H13.625"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-miterlimit="10"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3485_81172">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>,
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M16.1208 2.78906H7.2411C5.2791 2.78906 3.68555 4.39182 3.68555 6.3446V19.3232C3.68555 20.9813 4.8738 21.6813 6.32919 20.8799L10.8243 18.3837C11.3033 18.1166 12.077 18.1166 12.5468 18.3837L17.0419 20.8799C18.4973 21.6905 19.6855 20.9905 19.6855 19.3232V6.3446C19.6763 4.39182 18.0828 2.78906 16.1208 2.78906Z"
                                        stroke="#B1B2B4"
                                        stroke-width="1.38169"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    />
                                </svg>,
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <g clip-path="url(#clip0_3485_81189)">
                                        <path
                                            d="M21 5.98047C17.67 5.65047 14.32 5.48047 10.98 5.48047C9 5.48047 7.02 5.58047 5.04 5.78047L3 5.98047"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M18.8504 9.14062L18.2004 19.2106C18.0904 20.7806 18.0004 22.0006 15.2104 22.0006H8.79039C6.00039 22.0006 5.91039 20.7806 5.80039 19.2106L5.15039 9.14062"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M10.3301 16.5H13.6601"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                        <path
                                            d="M9.5 12.5H14.5"
                                            stroke="#B1B2B4"
                                            stroke-width="1.5"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_3485_81189">
                                            <rect
                                                width="24"
                                                height="24"
                                                fill="white"
                                            />
                                        </clipPath>
                                    </defs>
                                </svg>,
                            ]}
                            isSelect={""}
                            setIsSelect={() => ({})}
                        />
                    )}
                </div>
                <Text
                    type="p"
                    position="center"
                    fz={SMALL_LAPTOP || LAPTOP ? "14px" : ""}
                    color="#7D7F82"
                >
                    Сегодня
                </Text>
                <MailView
                    gap={30}
                    messages={
                        <>
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                <MailMessage date={true} key={item} />
                            ))}
                        </>
                    }
                    withHeader={true}
                    date={true}
                />
                <Text
                    type="p"
                    position="center"
                    fz={SMALL_LAPTOP || LAPTOP ? "14px" : ""}
                    color="#7D7F82"
                >
                    Полученные ранее
                </Text>
                <MailView
                    messages={
                        <>
                            {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                <MailMessage date={true} key={item} />
                            ))}
                        </>
                    }
                    withHeader={false}
                    date={true}
                />
            </Container>
        </Layout>
    );
};

export default MailPage;
