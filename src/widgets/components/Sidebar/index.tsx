import styles from "./styles.module.scss";
import { Logo } from "@/widgets/components";
import { MenuItem } from "./ui/MenuItem";
import { ROUTES } from "@/shared/utils/PATHS";
import cn from "clsx";
import { useMainStore } from "@/shared/model/store/main";
import { FC, useEffect } from "react";
import { PropsWithClassName } from "@/shared/types";
import { useLogout } from "@/shared/lib/hooks/useLogout";

export const Sidebar: FC<PropsWithClassName> = ({ className }) => {
  const { isOpenSidebar, setOpenSidebar } = useMainStore();
  const { logout } = useLogout();

  useEffect(() => {
    const resizeWindow = () => {
      if (
        window.innerWidth >= 1024 &&
        window.innerWidth < 1280 &&
        isOpenSidebar
      ) {
        setOpenSidebar(false);
      } else {
        setOpenSidebar(true);
      }
    };

    resizeWindow();

    window.addEventListener("resize", resizeWindow);

    return () => window.removeEventListener("resize", resizeWindow);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className={cn(styles.wrapper, className, {
        [styles.notOpenSidebar]: !isOpenSidebar,
      })}
      onMouseEnter={() => {
        if (window.innerWidth >= 1280) return;

        setOpenSidebar(true);
      }}
      onMouseLeave={() => {
        if (window.innerWidth >= 1280) return;

        setOpenSidebar(false);
      }}
    >
      <div className={styles.header}>
        <Logo />
      </div>

      <div className={styles.list}>
        <MenuItem
          icon={
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.26703 2.58802L3.3262 6.43802C2.5012 7.07969 1.83203 8.44552 1.83203 9.48135L1.83203 16.2739C1.83203 18.4005 3.56453 20.1422 5.6912 20.1422H16.3062C18.4329 20.1422 20.1654 18.4005 20.1654 16.283V9.60969C20.1654 8.50052 19.4229 7.07969 18.5154 6.44719L12.8504 2.47802C11.567 1.57969 9.50453 1.62552 8.26703 2.58802Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.25 11.916H11M13.75 11.916H11M11 11.916V9.16602M11 11.916V14.666"
                stroke="white"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title="Главная"
          href="/"
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
                d="M2 7.89474V14C2 16.2091 3.79086 18 6 18H14C16.2091 18 18 16.2091 18 14V7.89474M2 7.89474V6C2 3.79086 3.79086 2 6 2H7.60003C8.55242 2 9.42067 2.54548 9.834 3.40351V3.40351C10.0407 3.83252 10.4748 4.10526 10.951 4.10526H14.2105C16.3034 4.10526 18 5.80187 18 7.89474V7.89474M2 7.89474H18M10 14.5V12.5M10 12.5V10.5M10 12.5H8M10 12.5H12"
                stroke="#B1B2B4"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
            </svg>
          }
          title="Мед задания"
          href={ROUTES.medTasks.path}
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
              <g clipPath="url(#clip0_3791_88477)">
                <path
                  d="M11.6674 16.5514H3.36042C1.82478 16.5514 0.862042 14.8924 1.62394 13.5591L7.63551 3.03885C8.40329 1.69523 10.3407 1.69522 11.1085 3.03885L15.4022 10.5528"
                  stroke="#B1B2B4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M15.3906 16.6015C16.5275 16.6015 17.4491 15.6798 17.4491 14.5429C17.4491 13.406 16.5275 12.4844 15.3906 12.4844C14.2537 12.4844 13.332 13.406 13.332 14.5429C13.332 15.6798 14.2537 16.6015 15.3906 16.6015Z"
                  stroke="#B1B2B4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.0385 17.1889L17.1562 16.3066"
                  stroke="#B1B2B4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M9.29688 6.69531L9.29688 10.001"
                  stroke="#B1B2B4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <rect
                  x="9.35289"
                  y="12.3529"
                  width="0.705788"
                  height="1.30202"
                  rx="0.352894"
                  fill="#0064FA"
                  stroke="#B1B2B4"
                  strokeWidth="0.705788"
                />
              </g>
              <defs>
                <clipPath id="clip0_3791_88477">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          }
          title="Диагноз"
          href={ROUTES.pacientDiagnosis.path}
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
                d="M6.85478 15.2955V13.972M6.85478 12.6484V13.972M6.85478 13.972H8.17831M6.85478 13.972H5.53125"
                stroke="#B1B2B4"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M8.46951 9.64367C11.6159 10.7187 12.087 14.9384 12.1438 16.7099C12.158 17.1531 11.7961 17.4998 11.3527 17.4998H6.85662H2.36054C1.91717 17.4998 1.55521 17.1544 1.56937 16.7113C1.62762 14.8894 2.12408 10.4734 5.52283 9.55859"
                stroke="#B1B2B4"
                strokeWidth="1.25"
              />
              <path
                d="M3.76562 5.36765V3.33333C3.76562 2.8731 4.13872 2.5 4.59896 2.5H9.10876C9.569 2.5 9.94209 2.8731 9.94209 3.33333V5.36765M3.76562 5.36765V6.91177C3.76562 8.61735 5.14828 10 6.85386 10V10C8.55944 10 9.94209 8.61735 9.94209 6.91177V5.36765M3.76562 5.36765H9.94209"
                stroke="#B1B2B4"
                strokeWidth="1.25"
              />
              <path
                d="M14.1641 17.4999H18.0549C18.4982 17.4999 18.8602 17.1535 18.8398 16.7106C18.7712 15.2153 18.3346 12.0445 15.9064 11.2148"
                stroke="#B1B2B4"
                strokeWidth="1.25"
                strokeLinecap="round"
              />
              <path
                d="M12.1445 7.7942V6.33333C12.1445 5.8731 12.5176 5.5 12.9779 5.5H16.2525C16.7128 5.5 17.0859 5.8731 17.0859 6.33333V7.7942M12.1445 7.7942V9.02953C12.1445 10.394 13.2507 11.5002 14.6152 11.5002V11.5002C15.9797 11.5002 17.0859 10.394 17.0859 9.02953V7.7942M12.1445 7.7942H17.0859"
                stroke="#B1B2B4"
                strokeWidth="1.25"
              />
            </svg>
          }
          title="Все врачи"
          href={ROUTES.allDoctors.path}
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
                d="M9.99844 11.1922C11.4344 11.1922 12.5984 10.0281 12.5984 8.59219C12.5984 7.15625 11.4344 5.99219 9.99844 5.99219C8.5625 5.99219 7.39844 7.15625 7.39844 8.59219C7.39844 10.0281 8.5625 11.1922 9.99844 11.1922Z"
                stroke="#B1B2B4"
                strokeWidth="1.25"
              />
              <path
                d="M3.0148 7.0763C4.65646 -0.140363 15.3481 -0.132029 16.9815 7.08464C17.9398 11.318 15.3065 14.9013 12.9981 17.118C11.3231 18.7346 8.67313 18.7346 6.9898 17.118C4.6898 14.9013 2.05646 11.3096 3.0148 7.0763Z"
                stroke="#B1B2B4"
                strokeWidth="1.25"
              />
            </svg>
          }
          title="Местоположение"
          href={ROUTES.map.path}
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
      </div>
    </div>
  );
};
