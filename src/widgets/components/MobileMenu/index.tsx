import { FC } from "react";
import { useLocation, useNavigate } from "react-router";

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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.02 2.82258L3.63 7.02258C2.73 7.72258 2 9.21258 2 10.3426L2 17.7526C2 20.0726 3.89 21.9726 6.21 21.9726H17.79C20.11 21.9726 22 20.0726 22 17.7626V10.4826C22 9.27258 21.19 7.72258 20.2 7.03258L14.02 2.70258C12.62 1.72258 10.37 1.77258 9.02 2.82258Z"
            stroke="#B1B2B4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.99872 13H11.9987M14.9987 13H11.9987M11.9987 13V10M11.9987 13V16"
            stroke="#B1B2B4"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      path: ROUTES.search.path,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            d="M8.99994 16.999C13.4182 16.999 16.9999 13.4173 16.9999 8.99902C16.9999 4.58075 13.4182 0.999023 8.99994 0.999023C4.58166 0.999023 0.999939 4.58075 0.999939 8.99902C0.999939 13.4173 4.58166 16.999 8.99994 16.999Z"
            stroke="#B1B2B4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.0003 18.9994L14.6503 14.6494"
            stroke="#B1B2B4"
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_8094_103913)">
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5L2 8.5C2 5 4 3.5 7 3.5L17 3.5C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="#B1B2B4"
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
            <clipPath id="clip0_8094_103913">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      // path: ROUTES.notifications.path,
      path: ROUTES.account.path,
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
        >
          <path
            d="M12 12.5C14.7614 12.5 17 10.2614 17 7.5C17 4.73858 14.7614 2.5 12 2.5C9.23858 2.5 7 4.73858 7 7.5C7 10.2614 9.23858 12.5 12 12.5Z"
            stroke="#B1B2B4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.5901 22.5C20.5901 18.63 16.7402 15.5 12.0002 15.5C7.26015 15.5 3.41016 18.63 3.41016 22.5"
            stroke="#B1B2B4"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>

        // <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        //   <rect width="24" height="24" fill="none" stroke="none" />
        //   <path
        //     d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
        //     stroke="#B1B2B4"
        //     stroke-width="1.5"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //   />
        //   <g clip-path="url(#clip0_7545_53922)">
        //     <path
        //       d="M19.5 23C21.433 23 23 21.433 23 19.5C23 17.567 21.433 16 19.5 16C17.567 16 16 17.567 16 19.5C16 21.433 17.567 23 19.5 23Z"
        //       stroke="#B1B2B4"
        //       stroke-width="1.35"
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //     />
        //     <path
        //       d="M19.5 18.2031V19.7256L20.3313 20.5569"
        //       stroke="#B1B2B4"
        //       stroke-width="1.35"
        //       stroke-linecap="round"
        //       stroke-linejoin="round"
        //     />
        //   </g>
        //   <path
        //     d="M3.40625 22C3.40625 18.13 7.25625 15 11.9962 15C12.6861 15 13.7248 15.0805 14.6762 15.4528"
        //     stroke="#B1B2B4"
        //     stroke-width="1.5"
        //     stroke-linecap="round"
        //     stroke-linejoin="round"
        //   />
        //   <defs>
        //     <clipPath id="clip0_7545_53922">
        //       <rect
        //         width="9"
        //         height="9"
        //         fill="white"
        //         transform="translate(15 15)"
        //       />
        //     </clipPath>
        //   </defs>
        // </svg>
      ),
    },
  ];

  const newData = [...data];
  newData.splice(2, 0, {
    // path: "" as "/",
    // svg: (
    //     <ExtraCallBtn className={styles.mobileExtraCall} isOpen={isOpen} />
    // ),
    path: "/messages/chat/1" as "/",
    svg: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
      >
        <path
          d="M16 23H14C13.4477 23 13 22.5523 13 22V18C13 17.4477 12.5523 17 12 17H8C7.44772 17 7 16.5523 7 16V14C7 13.4477 7.44772 13 8 13H12C12.5523 13 13 12.5523 13 12V8C13 7.44772 13.4477 7 14 7H16C16.5523 7 17 7.44772 17 8V12C17 12.5523 17.4477 13 18 13H22C22.5523 13 23 13.4477 23 14V16C23 16.5523 22.5523 17 22 17H18C17.4477 17 17 17.4477 17 18V22C17 22.5523 16.5523 23 16 23Z"
          stroke="#B1B2B4"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <circle
          cx="15"
          cy="15"
          r="13"
          stroke="#B1B2B4"
          stroke-width="1.5"
          stroke-miterlimit="10"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
  });

  return (
    <div className={styles.menu}>
      {newData.map((item) => (
        <div
          className={item.path === location.pathname ? styles.active : ""}
          onClick={() => navigate(item.path)}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
};
