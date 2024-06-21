import { FC, useEffect, useState } from "react";
import { ISeacrh } from "../types";

import { Image } from "@/shared/ui/Image";

import styles from "./styles.module.scss";

export const Search: FC<ISeacrh> = ({
    placeholder,
    value,
    onChange,
    className,
    showSearchByScroll = true,
    additionalBlock,
}) => {
    const [showSearch, setShowSearch] = useState(
        showSearchByScroll ? false : true
    );

    useEffect(() => {
        if (!showSearchByScroll) return;

        const handleScroll = () => {
            if (showSearch) return;

            setShowSearch(true);
        };

        window.addEventListener("scroll", handleScroll, true);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [showSearch, showSearchByScroll]);

    return (
        <>
            {showSearch && (
                <div className={className}>
                    <div className={styles.wrapper}>
                        <div className={styles.searchWrapper}>
                            <Image
                                src="/assets/icons/search.svg"
                                alt="search"
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

                        {additionalBlock || null}
                    </div>
                </div>
            )}
        </>
    );
};
