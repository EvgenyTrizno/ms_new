import { ChangeEventHandler, FC, useEffect, useState } from "react";

import styles from "./styles.module.scss";
import { Image } from "@/shared/ui/Image";
import searchImg from "../../assets/search-gray.svg";
import { PropsWithClassName } from "@/shared/types";

type Props = {
  placeholder?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  value: string;
};

export const SearchWithFilter: FC<PropsWithClassName<Props>> = ({
  className,
  placeholder,
  onChange,
  value,
}) => {
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (showSearch) return;

      setShowSearch(true);
    };

    window.addEventListener("scroll", handleScroll, true);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSearch]);

  return (
    <>
      {showSearch && (
        <div className={className}>
          <div className={styles.wrapper}>
            <div className={styles.searchWrapper}>
              <Image
                src={searchImg}
                alt="magnifying glass"
                width={16}
                height={16}
              />
              <input
                type="text"
                placeholder={placeholder}
                height="100%"
                onChange={onChange}
                value={value}
              />
            </div>
            <div className={styles.btn}>
              <img src="/assets/icons/filters.svg" alt="filters" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
