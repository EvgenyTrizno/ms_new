import { FC } from "react";

import { Layout } from "../Layout";
import { Text } from "@/shared/ui/Text";
import { WhiteContentBlock } from "@/shared/ui/WhiteContentBlock";
import { Cols } from "@/shared/ui/Cols";
import { BlueBox } from "@/shared/ui/BlueBox";
import { BlueArrows } from "@/shared/ui/BlueArrows";
import { useCountryStore } from "@/shared/model/store/country";

import styles from "./styles.module.scss";

const CountryInfo: FC = () => {
    const { countryName, countrySvg } = useCountryStore();

    const data = [
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M21 19.9999C21 18.2583 19.3304 16.7767 17 16.2275M15 20C15 17.7909 12.3137 16 9 16C5.68629 16 3 17.7909 3 20M15 13C17.2091 13 19 11.2091 19 9C19 6.79086 17.2091 5 15 5M9 13C6.79086 13 5 11.2091 5 9C5 6.79086 6.79086 5 9 5C11.2091 5 13 6.79086 13 9C13 11.2091 11.2091 13 9 13Z"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Всего пользователей",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1023_21230)">
                        <path
                            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8.0001 3H9.0001C7.0501 8.84 7.0501 15.16 9.0001 21H8.0001"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M15 3C16.95 8.84 16.95 15.16 15 21"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 16V15C8.84 16.95 15.16 16.95 21 15V16"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M3 9.00156C8.84 7.05156 15.16 7.05156 21 9.00156"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1023_21230">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Используют сайт",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M19.5719 19.8637C19.5704 19.8733 19.5691 19.8829 19.5679 19.8925C19.3912 21.3345 18.9575 22.0472 18.2345 22.4756C17.419 22.959 16.0833 23.1818 13.8333 23.1818H11.1667C8.91669 23.1818 7.58097 22.959 6.76549 22.4756C6.04252 22.0472 5.60878 21.3345 5.43212 19.8925C5.43094 19.8829 5.42959 19.8733 5.42807 19.8637C5.3449 19.3397 5.31819 18.7305 5.31819 18V6C5.31819 5.26947 5.3449 4.66026 5.42807 4.13627C5.42959 4.1267 5.43094 4.11711 5.43212 4.1075C5.60878 2.66552 6.04252 1.95285 6.76549 1.52435C7.58097 1.04104 8.91669 0.818188 11.1667 0.818188H13.8333C16.0833 0.818188 17.419 1.04104 18.2345 1.52435C18.9575 1.95285 19.3912 2.66552 19.5679 4.1075C19.5691 4.11711 19.5704 4.1267 19.5719 4.13627C19.6551 4.66026 19.6818 5.26947 19.6818 6V18C19.6818 18.7305 19.6551 19.3397 19.5719 19.8637Z"
                        stroke="#262626"
                        strokeWidth="1.63638"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <rect
                        x="8.5"
                        y="20"
                        width="8"
                        height="1.5"
                        rx="0.75"
                        fill="#262626"
                    />
                </svg>
            ),
            title: "Используют приложение",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1023_21171)">
                        <path
                            d="M2.29883 22H22.2988"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.2988 2H7.29883C4.29883 2 3.29883 3.79 3.29883 6V22H21.2988V6C21.2988 3.79 20.2988 2 17.2988 2Z"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.3591 15H10.229C9.71905 15 9.28906 15.42 9.28906 15.94V22H15.2891V15.94C15.2991 15.42 14.8791 15 14.3591 15Z"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M12.2988 6V11"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M9.79883 8.5H14.7988"
                            stroke="#3C3D3E"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1023_21171">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Клиники",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <g clip-path="url(#clip0_1023_21249)">
                        <path
                            d="M2.29932 22.2188H22.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.2993 2.21875H7.29932C4.29932 2.21875 3.29932 4.00875 3.29932 6.21875V22.2188H21.2993V6.21875C21.2993 4.00875 20.2993 2.21875 17.2993 2.21875Z"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.29932 16.7188H10.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.2993 16.7188H17.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.29932 12.2188H10.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.2993 12.2188H17.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M7.29932 7.71875H10.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.2993 7.71875H17.2993"
                            stroke="#262626"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_1023_21249">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            ),
            title: "Центры",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M6.87988 18.1481V16.0781"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M12 18.1517V14.0117"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17.1201 18.1497V11.9297"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17.1199 5.85156L16.6599 6.39156C14.1099 9.37156 10.6899 11.4816 6.87988 12.4316"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                    />
                    <path
                        d="M14.1899 5.85156H17.1199V8.77156"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Реклама",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M17 18.4297H13L8.54999 21.3897C7.88999 21.8297 7 21.3598 7 20.5598V18.4297C4 18.4297 2 16.4297 2 13.4297V7.42969C2 4.42969 4 2.42969 7 2.42969H17C20 2.42969 22 4.42969 22 7.42969V13.4297C22 16.4297 20 18.4297 17 18.4297Z"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9998 11.3594V11.1494C11.9998 10.4694 12.4198 10.1094 12.8398 9.8194C13.2498 9.5394 13.6598 9.17941 13.6598 8.51941C13.6598 7.59941 12.9198 6.85938 11.9998 6.85938C11.0798 6.85938 10.3398 7.59941 10.3398 8.51941"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M11.9955 13.75H12.0045"
                        stroke="#3C3D3E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Заявки",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M12.6694 8.87891H17.9194"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.6792 8.87891L7.4292 9.62891L9.6792 7.37891"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M12.6694 15.8789H17.9194"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M6.6792 15.8789L7.4292 16.6289L9.6792 14.3789"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        d="M9.29932 22H15.2993C20.2993 22 22.2993 20 22.2993 15V9C22.2993 4 20.2993 2 15.2993 2H9.29932C4.29932 2 2.29932 4 2.29932 9V15C2.29932 20 4.29932 22 9.29932 22Z"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Жалобы",
        },
        {
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M22.2693 18.3339C22.2693 18.6939 22.1893 19.0639 22.0193 19.4239C21.8493 19.7839 21.6293 20.1239 21.3393 20.4439C20.8493 20.9839 20.3093 21.3739 19.6993 21.6239C19.0993 21.8739 18.4493 22.0039 17.7493 22.0039C16.7293 22.0039 15.6393 21.7639 14.4893 21.2739C13.3393 20.7839 12.1893 20.1239 11.0493 19.2939C9.89932 18.4539 8.80932 17.5239 7.76932 16.4939C6.73932 15.4539 5.80932 14.3639 4.97932 13.2239C4.15932 12.0839 3.49932 10.9439 3.01932 9.81391C2.53932 8.67391 2.29932 7.58391 2.29932 6.54391C2.29932 5.86391 2.41932 5.21391 2.65932 4.61391C2.89932 4.00391 3.27932 3.44391 3.80932 2.94391C4.44932 2.31391 5.14932 2.00391 5.88932 2.00391C6.16932 2.00391 6.44932 2.06391 6.69932 2.18391C6.95932 2.30391 7.18932 2.48391 7.36932 2.74391L9.68932 6.01391C9.86932 6.26391 9.99932 6.49391 10.0893 6.71391C10.1793 6.92391 10.2293 7.13391 10.2293 7.32391C10.2293 7.56391 10.1593 7.80391 10.0193 8.03391C9.88932 8.26391 9.69932 8.50391 9.45932 8.74391L8.69932 9.53391C8.58932 9.64391 8.53932 9.77391 8.53932 9.93391C8.53932 10.0139 8.54932 10.0839 8.56932 10.1639C8.59932 10.2439 8.62932 10.3039 8.64932 10.3639C8.82932 10.6939 9.13932 11.1239 9.57932 11.6439C10.0293 12.1639 10.5093 12.6939 11.0293 13.2239C11.5693 13.7539 12.0893 14.2439 12.6193 14.6939C13.1393 15.1339 13.5693 15.4339 13.9093 15.6139C13.9593 15.6339 14.0193 15.6639 14.0893 15.6939C14.1693 15.7239 14.2493 15.7339 14.3393 15.7339C14.5093 15.7339 14.6393 15.6739 14.7493 15.5639L15.5093 14.8139C15.7593 14.5639 15.9993 14.3739 16.2293 14.2539C16.4593 14.1139 16.6893 14.0439 16.9393 14.0439C17.1293 14.0439 17.3293 14.0839 17.5493 14.1739C17.7693 14.2639 17.9993 14.3939 18.2493 14.5639L21.5593 16.9139C21.8193 17.0939 21.9993 17.3039 22.1093 17.5539C22.2093 17.8039 22.2693 18.0539 22.2693 18.3339Z"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                    />
                    <path
                        d="M16.499 7.80391H21.299M16.499 7.80391V3.00391V7.80391Z"
                        stroke="#262626"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            ),
            title: "Лиды",
        },
    ];

    // const transformCountry = () => {

    //     return coun
    // };

    console.log(countrySvg);

    return (
        <Layout>
            <div className={styles.info}>
                <WhiteContentBlock>
                    <Text type="h2" fz="18px">
                        Все города по количеству пользователей, клиник и врачей
                    </Text>
                    <div className={styles.chart}></div>
                    <BlueArrows
                        prev={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                        next={function (): void {
                            throw new Error("Function not implemented.");
                        }}
                    />
                </WhiteContentBlock>
                <Cols type="auto" count={2} gap={10}>
                    <WhiteContentBlock>
                        <Text type="h2" fz="18px">
                            {countryName}
                        </Text>
                        <div className={styles.country}>{countrySvg}</div>
                    </WhiteContentBlock>
                    <WhiteContentBlock>
                        <div className={styles.blocks}>
                            {data.map((item) => (
                                <BlueBox>
                                    <div className={styles.top} color="#3C3D3E">
                                        {item.icon}
                                        <Text type="p">{item.title}</Text>
                                    </div>
                                    <div className={styles.bottom}>
                                        <Text type="h2" fz="24px">
                                            23,752
                                        </Text>
                                        {/* <Indicator type="up" value="666" /> */}
                                    </div>
                                </BlueBox>
                            ))}
                        </div>
                    </WhiteContentBlock>
                </Cols>
                <WhiteContentBlock>
                    <Text type="h2" fz="18px">
                        Количество пользователей, клиник и врачей
                    </Text>
                    <div className={styles.chart}></div>
                </WhiteContentBlock>
            </div>
        </Layout>
    );
};

export default CountryInfo;
