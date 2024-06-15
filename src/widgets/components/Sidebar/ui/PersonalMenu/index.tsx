import { ROUTES } from "@/shared/utils/PATHS";
import { MenuItem } from "../MenuItem";
import { useLogout } from "@/shared/lib/hooks/useLogout";
import styles from "./styles.module.scss";
import cn from "clsx";

export const PersonalMenu = () => {
    const { logout } = useLogout();

    return (
        <>
            <MenuItem
                className={cn(styles.firstEl)}
                icon={
                    <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g clip-path="url(#clip0_11202_89814)">
                            <path
                                d="M16.625 1.66667H15.75V0.833333C15.75 0.61232 15.6578 0.400358 15.4937 0.244078C15.3296 0.0877974 15.1071 0 14.875 0C14.6429 0 14.4204 0.0877974 14.2563 0.244078C14.0922 0.400358 14 0.61232 14 0.833333V1.66667H7V0.833333C7 0.61232 6.90781 0.400358 6.74372 0.244078C6.57962 0.0877974 6.35706 0 6.125 0C5.89294 0 5.67038 0.0877974 5.50628 0.244078C5.34219 0.400358 5.25 0.61232 5.25 0.833333V1.66667H4.375C3.2151 1.66799 2.10311 2.1074 1.28294 2.88852C0.462772 3.66963 0.00138938 4.72867 0 5.83333L0 15.8333C0.00138938 16.938 0.462772 17.997 1.28294 18.7782C2.10311 19.5593 3.2151 19.9987 4.375 20H16.625C17.7849 19.9987 18.8969 19.5593 19.7171 18.7782C20.5372 17.997 20.9986 16.938 21 15.8333V5.83333C20.9986 4.72867 20.5372 3.66963 19.7171 2.88852C18.8969 2.1074 17.7849 1.66799 16.625 1.66667V1.66667ZM1.75 5.83333C1.75 5.17029 2.02656 4.53441 2.51884 4.06557C3.01113 3.59673 3.67881 3.33333 4.375 3.33333H16.625C17.3212 3.33333 17.9889 3.59673 18.4812 4.06557C18.9734 4.53441 19.25 5.17029 19.25 5.83333V6.66667H1.75V5.83333ZM16.625 18.3333H4.375C3.67881 18.3333 3.01113 18.0699 2.51884 17.6011C2.02656 17.1323 1.75 16.4964 1.75 15.8333V8.33333H19.25V15.8333C19.25 16.4964 18.9734 17.1323 18.4812 17.6011C17.9889 18.0699 17.3212 18.3333 16.625 18.3333Z"
                                fill="#B1B2B4"
                            />
                            <path
                                d="M10.5 13.75C11.2249 13.75 11.8125 13.1904 11.8125 12.5C11.8125 11.8096 11.2249 11.25 10.5 11.25C9.77513 11.25 9.1875 11.8096 9.1875 12.5C9.1875 13.1904 9.77513 13.75 10.5 13.75Z"
                                fill="#B1B2B4"
                            />
                            <path
                                d="M6.125 13.75C6.84987 13.75 7.4375 13.1904 7.4375 12.5C7.4375 11.8096 6.84987 11.25 6.125 11.25C5.40013 11.25 4.8125 11.8096 4.8125 12.5C4.8125 13.1904 5.40013 13.75 6.125 13.75Z"
                                fill="#B1B2B4"
                            />
                            <path
                                d="M14.875 13.75C15.5999 13.75 16.1875 13.1904 16.1875 12.5C16.1875 11.8096 15.5999 11.25 14.875 11.25C14.1501 11.25 13.5625 11.8096 13.5625 12.5C13.5625 13.1904 14.1501 13.75 14.875 13.75Z"
                                fill="#B1B2B4"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_11202_89814">
                                <rect width="21" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                }
                title="Календарь"
                href={ROUTES.calendar.path}
            />

            <MenuItem
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M10.1103 11.1562H7.4603C6.8303 11.1562 6.32031 11.6662 6.32031 12.2962V17.4162H10.1103V11.1562Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            stroke-Linejoin="round"
                        />
                        <path
                            d="M12.7616 6.60156H11.2415C10.6115 6.60156 10.1016 7.11158 10.1016 7.74158V17.4016H13.8916V7.74158C13.8916 7.11158 13.3916 6.60156 12.7616 6.60156Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            stroke-Linejoin="round"
                        />
                        <path
                            d="M16.5484 12.8516H13.8984V17.4016H17.6884V13.9916C17.6784 13.3616 17.1684 12.8516 16.5484 12.8516Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            stroke-Linejoin="round"
                        />
                        <path
                            d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Статистика"
                href={"/personal-statistics"}
            />

            <MenuItem
                icon={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M14.168 17.0827H5.83464C3.33464 17.0827 1.66797 15.8327 1.66797 12.916V7.08268C1.66797 4.16602 3.33464 2.91602 5.83464 2.91602L14.168 2.91602C16.668 2.91602 18.3346 4.16602 18.3346 7.08268V12.916C18.3346 15.8327 16.668 17.0827 14.168 17.0827Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M14.1654 7.5L11.557 9.58333C10.6987 10.2667 9.29036 10.2667 8.43203 9.58333L5.83203 7.5"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Сообщения"
                href="/messages"
            />

            <MenuItem
                icon={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M17.5 17.5L13.875 13.875"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Поиск"
                href="/search"
            />

            <MenuItem
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8 12.2031H15"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 16.2031H12.38"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 4.02344C19.33 4.20344 21 5.43344 21 10.0034V16.0034C21 20.0034 20 22.0034 15 22.0034H9C4 22.0034 3 20.0034 3 16.0034L3 10.0034C3 5.44344 4.67 4.20344 8 4.02344"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Баланс"
                href={ROUTES.balance.path}
            />

            <MenuItem
                icon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M8 12.2031H15"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M8 16.2031H12.38"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M16 4.02344C19.33 4.20344 21 5.43344 21 10.0034V16.0034C21 20.0034 20 22.0034 15 22.0034H9C4 22.0034 3 20.0034 3 16.0034L3 10.0034C3 5.44344 4.67 4.20344 8 4.02344"
                            stroke="#B1B2B4"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Услуги"
                href={ROUTES.balance.path}
            />

            <MenuItem
                icon={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                        <path
                            d="M1.66797 10.7319V9.26523C1.66797 8.39856 2.3763 7.6819 3.2513 7.6819C4.75964 7.6819 5.3763 6.61523 4.61797 5.3069C4.18464 4.5569 4.44297 3.5819 5.2013 3.14856L6.64297 2.32356C7.3013 1.9319 8.1513 2.16523 8.54297 2.82356L8.63463 2.9819C9.38463 4.29023 10.618 4.29023 11.3763 2.9819L11.468 2.82356C11.8596 2.16523 12.7096 1.9319 13.368 2.32356L14.8096 3.14856C15.568 3.5819 15.8263 4.5569 15.393 5.3069C14.6346 6.61523 15.2513 7.6819 16.7596 7.6819C17.6263 7.6819 18.343 8.39023 18.343 9.26523V10.7319C18.343 11.5986 17.6346 12.3152 16.7596 12.3152C15.2513 12.3152 14.6346 13.3819 15.393 14.6902C15.8263 15.4486 15.568 16.4152 14.8096 16.8486L13.368 17.6736C12.7096 18.0652 11.8596 17.8319 11.468 17.1736L11.3763 17.0152C10.6263 15.7069 9.39297 15.7069 8.63463 17.0152L8.54297 17.1736C8.1513 17.8319 7.3013 18.0652 6.64297 17.6736L5.2013 16.8486C4.44297 16.4152 4.18464 15.4402 4.61797 14.6902C5.3763 13.3819 4.75964 12.3152 3.2513 12.3152C2.3763 12.3152 1.66797 11.5986 1.66797 10.7319Z"
                            stroke="#B1B2B4"
                            strokeWidth="1.25"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                }
                title="Настройки"
                href={ROUTES.settings.path}
            />

            <MenuItem
                icon={
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.6991 18.5581H12.5908C8.89078 18.5581 7.10745 17.0997 6.79912 13.8331C6.76578 13.4914 7.01578 13.1831 7.36578 13.1497C7.69912 13.1164 8.01578 13.3747 8.04912 13.7164C8.29078 16.3331 9.52412 17.3081 12.5991 17.3081H12.7075C16.0991 17.3081 17.2991 16.1081 17.2991 12.7164V7.28307C17.2991 3.89141 16.0991 2.69141 12.7075 2.69141H12.5991C9.50745 2.69141 8.27412 3.68307 8.04912 6.34974C8.00745 6.69141 7.71578 6.94974 7.36578 6.91641C7.01578 6.89141 6.76578 6.58307 6.79078 6.24141C7.07412 2.92474 8.86578 1.44141 12.5908 1.44141H12.6991C16.7908 1.44141 18.5408 3.19141 18.5408 7.28307V12.7164C18.5408 16.8081 16.7908 18.5581 12.6991 18.5581Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M12.499 10.625H3.01562C2.67396 10.625 2.39062 10.3417 2.39062 10C2.39062 9.65833 2.67396 9.375 3.01562 9.375H12.499C12.8406 9.375 13.124 9.65833 13.124 10C13.124 10.3417 12.8406 10.625 12.499 10.625Z"
                            fill="#B1B2B4"
                        />
                        <path
                            d="M4.87552 13.4152C4.71719 13.4152 4.55885 13.3569 4.43385 13.2319L1.64219 10.4402C1.40052 10.1986 1.40052 9.79857 1.64219 9.5569L4.43385 6.76523C4.67552 6.52357 5.07552 6.52357 5.31719 6.76523C5.55885 7.0069 5.55885 7.4069 5.31719 7.64857L2.96719 9.99857L5.31719 12.3486C5.55885 12.5902 5.55885 12.9902 5.31719 13.2319C5.20052 13.3569 5.03385 13.4152 4.87552 13.4152Z"
                            fill="#B1B2B4"
                        />
                    </svg>
                }
                title="Выход"
                href={ROUTES.login.path}
                onClick={logout}
            />
        </>
    );
};
