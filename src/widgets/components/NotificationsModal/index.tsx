import { Dispatch, FC, useRef } from "react";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";
import { getNotifications } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { Notification } from "@/widgets";
import { formatRelativeDate } from "@/shared/utils";
import cn from "clsx";
import { useOutside } from "@/shared/lib/hooks";

type Props = {
  isOpen: boolean;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
};

export const NotificationsModal: FC<Props> = ({ isOpen, setOpen }) => {
  const { getCookie } = useCookie();
  const { data: notificationsData } = useQuery(
    ["notifications"],
    () => getNotifications(getCookie("access_token") as string),
    {
      keepPreviousData: true,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
      retry: false,
    }
  );
  const ref = useRef<HTMLDivElement>(null);

  useOutside(ref, () => setOpen(false));

  const close = () => {
    setOpen(false);
  };

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.notOpen]: !isOpen,
      })}
      ref={ref}
    >
      <div className={styles.header}>
        <h5>Уведомления</h5>

        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          onClick={close}
          style={{ cursor: "pointer" }}
        >
          <path
            d="M19.5 4.5L4.5 19.5M4.5 4.5L19.5 19.5"
            stroke="#262626"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className={cn(styles.list, "scrollbar")}>
        {notificationsData?.data.reverse().map((el) => {
          return (
            <Notification
              className={styles.notification}
              key={el.id}
              userSrcAvatar={el.user?.image}
              title={el.text}
              time={formatRelativeDate(new Date(el.created_at))}
              userType="standart"
            />
          );
        })}
      </div>
    </div>
  );
};
