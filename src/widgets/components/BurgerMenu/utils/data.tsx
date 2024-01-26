import { ReactElement } from "react";

export interface IData {
  label: string;
  path: string;
  icon: ReactElement;
  disabled?: boolean;
}
export interface IMenuData {
  default: IData[];
}

export const menuData: IMenuData = {
  default: [
    {
      label: "Статистика",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.42504 9.29102H6.21671C5.69171 9.29102 5.26672 9.71598 5.26672 10.241V14.5076H8.42504V9.29102V9.29102Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M10.6344 5.49805H9.36771C8.84271 5.49805 8.41772 5.92306 8.41772 6.44806V14.4981H11.5761V6.44806C11.5761 5.92306 11.1594 5.49805 10.6344 5.49805Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.7901 10.707H11.5818V14.4987H14.7401V11.657C14.7318 11.132 14.3068 10.707 13.7901 10.707Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.49996 18.3327H12.5C16.6666 18.3327 18.3333 16.666 18.3333 12.4993V7.49935C18.3333 3.33268 16.6666 1.66602 12.5 1.66602H7.49996C3.33329 1.66602 1.66663 3.33268 1.66663 7.49935V12.4993C1.66663 16.666 3.33329 18.3327 7.49996 18.3327Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Все врачи",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.85344 15.2955V13.972M6.85344 12.6484V13.972M6.85344 13.972H8.17697M6.85344 13.972H5.52991"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M8.46817 9.64367C11.6145 10.7187 12.0857 14.9384 12.1425 16.7099C12.1567 17.1531 11.7947 17.4998 11.3514 17.4998H6.85527H2.3592C1.91583 17.4998 1.55387 17.1544 1.56803 16.7113C1.62627 14.8894 2.12274 10.4734 5.52149 9.55859"
            stroke="#0064FA"
            stroke-width="1.25"
          />
          <path
            d="M3.76428 5.36765V3.33333C3.76428 2.8731 4.13738 2.5 4.59762 2.5H9.10742C9.56766 2.5 9.94075 2.8731 9.94075 3.33333V5.36765M3.76428 5.36765V6.91177C3.76428 8.61735 5.14693 10 6.85252 10V10C8.5581 10 9.94075 8.61735 9.94075 6.91177V5.36765M3.76428 5.36765H9.94075"
            stroke="#0064FA"
            stroke-width="1.25"
          />
          <path
            d="M14.1631 17.4999H18.0539C18.4973 17.4999 18.8592 17.1535 18.8389 16.7106C18.7702 15.2153 18.3337 12.0445 15.9055 11.2148"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-linecap="round"
          />
          <path
            d="M12.1422 7.7942V6.33333C12.1422 5.8731 12.5153 5.5 12.9755 5.5H16.2502C16.7105 5.5 17.0836 5.8731 17.0836 6.33333V7.7942M12.1422 7.7942V9.02953C12.1422 10.394 13.2484 11.5002 14.6129 11.5002V11.5002C15.9774 11.5002 17.0836 10.394 17.0836 9.02953V7.7942M12.1422 7.7942H17.0836"
            stroke="#0064FA"
            stroke-width="1.25"
          />
        </svg>
      ),
    },
    {
      label: "Карта",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.9999 11.1922C11.4358 11.1922 12.5999 10.0281 12.5999 8.59219C12.5999 7.15625 11.4358 5.99219 9.9999 5.99219C8.56396 5.99219 7.3999 7.15625 7.3999 8.59219C7.3999 10.0281 8.56396 11.1922 9.9999 11.1922Z"
            stroke="#0064FA"
            stroke-width="1.25"
          />
          <path
            d="M3.01687 7.07435C4.65854 -0.142316 15.3502 -0.133982 16.9835 7.08268C17.9419 11.316 15.3085 14.8994 13.0002 17.116C11.3252 18.7327 8.67521 18.7327 6.99187 17.116C4.69187 14.8994 2.05854 11.3077 3.01687 7.07435Z"
            stroke="#0064FA"
            stroke-width="1.25"
          />
        </svg>
      ),
    },
    {
      label: "Платежи",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.5"
            cy="8.5"
            r="5.875"
            stroke="#0064FA"
            stroke-width="1.25"
          />
          <circle
            cx="8.5"
            cy="11.5"
            r="5.875"
            fill="white"
            stroke="#0064FA"
            stroke-width="1.25"
          />
          <path
            d="M6.5 14.0667H8.5M10.5 8.93333H8.5M8.5 8.93333H7.66667C7.02233 8.93333 6.5 9.45567 6.5 10.1V10.1C6.5 10.7443 7.02233 11.2667 7.66667 11.2667H9.1C9.8732 11.2667 10.5 11.8935 10.5 12.6667V12.6667C10.5 13.4399 9.8732 14.0667 9.1 14.0667H8.5M8.5 8.93333V8M8.5 14.0667V15"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Доступ",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_7259_105773)">
            <path
              d="M18.75 14.75C18.75 12.6768 16.7892 11 14.375 11C12.9444 11 11.673 11.5888 10.8745 12.5"
              stroke="#0064FA"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M14.375 9C15.7557 9 16.875 7.88071 16.875 6.5C16.875 5.11929 15.7557 4 14.375 4C12.9943 4 11.875 5.11929 11.875 6.5C11.875 7.88071 12.9943 9 14.375 9Z"
              stroke="#0064FA"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 18C15 14.6829 11.8626 12 8 12C4.13737 12 1 14.6829 1 18"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
              stroke="white"
              stroke-width="4"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M15 18C15 14.6829 11.8626 12 8 12C4.13737 12 1 14.6829 1 18"
              stroke="#0064FA"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8 10C10.2091 10 12 8.20914 12 6C12 3.79086 10.2091 2 8 2C5.79086 2 4 3.79086 4 6C4 8.20914 5.79086 10 8 10Z"
              stroke="#0064FA"
              stroke-width="1.25"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_7259_105773">
              <rect width="20" height="20" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      label: "Подписки",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.99996 18.0423C9.74163 18.0423 9.49163 18.009 9.28329 17.934C6.09996 16.8423 1.04163 12.9673 1.04163 7.24232C1.04163 4.32565 3.39996 1.95898 6.29996 1.95898C7.70829 1.95898 9.02496 2.50898 9.99996 3.49232C10.975 2.50898 12.2916 1.95898 13.7 1.95898C16.6 1.95898 18.9583 4.33398 18.9583 7.24232C18.9583 12.9757 13.9 16.8423 10.7166 17.934C10.5083 18.009 10.2583 18.0423 9.99996 18.0423ZM6.29996 3.20898C4.09163 3.20898 2.29163 5.01732 2.29163 7.24232C2.29163 12.934 7.76663 16.1007 9.69163 16.759C9.84163 16.809 10.1666 16.809 10.3166 16.759C12.2333 16.1007 17.7166 12.9423 17.7166 7.24232C17.7166 5.01732 15.9166 3.20898 13.7083 3.20898C12.4416 3.20898 11.2666 3.80065 10.5083 4.82565C10.275 5.14232 9.74163 5.14232 9.50829 4.82565C8.73329 3.79232 7.56663 3.20898 6.29996 3.20898Z"
            fill="#0064FA"
          />
        </svg>
      ),
    },
    {
      label: "Сохраненное",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8914 18.9577C15.4664 18.9577 14.9997 18.8327 14.5497 18.5743L10.483 16.316C10.2414 16.1827 9.76636 16.1827 9.52469 16.316L5.45802 18.5743C4.63302 19.0327 3.79136 19.0827 3.14969 18.6993C2.50802 18.3243 2.14136 17.566 2.14136 16.6243V4.88268C2.14136 2.76602 3.86636 1.04102 5.98302 1.04102H14.0247C16.1414 1.04102 17.8664 2.76602 17.8664 4.88268V16.6243C17.8664 17.566 17.4997 18.3243 16.858 18.6993C16.5664 18.8743 16.233 18.9577 15.8914 18.9577ZM9.99969 14.966C10.3914 14.966 10.7747 15.0493 11.083 15.2243L15.1497 17.4827C15.5747 17.7243 15.9664 17.7743 16.2164 17.6243C16.4664 17.4743 16.608 17.116 16.608 16.6243V4.88268C16.608 3.45768 15.4414 2.29102 14.0164 2.29102H5.98302C4.55802 2.29102 3.39136 3.45768 3.39136 4.88268V16.6243C3.39136 17.116 3.53302 17.4827 3.78302 17.6243C4.03302 17.766 4.42469 17.7243 4.84969 17.4827L8.91636 15.2243C9.22469 15.0493 9.60802 14.966 9.99969 14.966Z"
            fill="#0064FA"
          />
        </svg>
      ),
    },
    {
      label: "Настройки",
      //   path: ROUTES.main.path,
      path: "",
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M1.66663 10.7319V9.26523C1.66663 8.39856 2.37496 7.6819 3.24996 7.6819C4.75829 7.6819 5.37496 6.61523 4.61663 5.3069C4.18329 4.5569 4.44163 3.5819 5.19996 3.14856L6.64163 2.32356C7.29996 1.9319 8.14996 2.16523 8.54163 2.82356L8.63329 2.9819C9.38329 4.29023 10.6166 4.29023 11.375 2.9819L11.4666 2.82356C11.8583 2.16523 12.7083 1.9319 13.3666 2.32356L14.8083 3.14856C15.5666 3.5819 15.825 4.5569 15.3916 5.3069C14.6333 6.61523 15.25 7.6819 16.7583 7.6819C17.625 7.6819 18.3416 8.39023 18.3416 9.26523V10.7319C18.3416 11.5986 17.6333 12.3152 16.7583 12.3152C15.25 12.3152 14.6333 13.3819 15.3916 14.6902C15.825 15.4486 15.5666 16.4152 14.8083 16.8486L13.3666 17.6736C12.7083 18.0652 11.8583 17.8319 11.4666 17.1736L11.375 17.0152C10.625 15.7069 9.39163 15.7069 8.63329 17.0152L8.54163 17.1736C8.14996 17.8319 7.29996 18.0652 6.64163 17.6736L5.19996 16.8486C4.44163 16.4152 4.18329 15.4402 4.61663 14.6902C5.37496 13.3819 4.75829 12.3152 3.24996 12.3152C2.37496 12.3152 1.66663 11.5986 1.66663 10.7319Z"
            stroke="#0064FA"
            stroke-width="1.25"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ],
};
