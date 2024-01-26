import { FC } from "react";
import { useLocation, useNavigate } from "react-router";
import { ROUTES } from "@/shared/utils/PATHS";
import styles from "./styles.module.scss";
import {
  AccountIcon,
  HomeIcon,
  MessagesIcon,
  PlusMenuIcon,
  SearchIcon,
} from "@/icons";

export const MobileMenu: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const data = [
    {
      path: ROUTES.main.path,
      svg: <HomeIcon />,
    },
    {
      path: ROUTES.search.path,
      svg: <SearchIcon />,
    },
    {
      path: ROUTES.messages.path,
      svg: <MessagesIcon />,
    },
    {
      path: ROUTES.account.path,
      svg: (
        <AccountIcon />

        // <AccountWithTimeIcon />
      ),
    },
  ];

  const newData = [...data];
  newData.splice(2, 0, {
    path: "/messages/chat/1" as "/",
    svg: <PlusMenuIcon />,
  });

  return (
    <div className={styles.menu}>
      {newData.map((item, idx) => (
        <div
          key={idx}
          className={item.path === location.pathname ? styles.active : ""}
          onClick={() => navigate(item.path)}
        >
          {item.svg}
        </div>
      ))}
    </div>
  );
};
