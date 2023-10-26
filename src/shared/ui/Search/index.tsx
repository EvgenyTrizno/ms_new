import { FC } from "react";
import { ISeacrh } from "./types";

import { Input } from "@/shared/ui/Input";
import { Image } from "../Image";

import search from "/assets/search-gray.svg";
import styles from "./styles.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder }) => {
    return (
        <div className={styles.search}>
            <Image src={search} alt="magnifying glass" width={16} height={16} />
            <Input
                type="text"
                placeholder={placeholder}
                height="100%"
                padding="0px"
                border="none"
            />
        </div>
        // <div
        //     className={styles.box}
        //     style={{ borderColor: sick ? "#F7E6E8" : "#EBF3FF" }}
        // >
        //     <button className={styles.btn}>
        //         <img src={search} alt="" />
        //     </button>
        //     <Input
        //         height={height && parseInt(height) - 2 + "px"}
        //         width="100%"
        //         borderColor={sick ? "#F7E6E8" : "#EBF3FF"}
        //         bl="none"
        //         bb="none"
        //         bt="none"
        //         br="none"
        //         borderRadius="0px 12px 12px 0px"
        //         btl="unset"
        //         bbl="unset"
        //         padding={LAPTOP ? "10px 16px 10px 8px" : "12px 16px 12px 10px"}
        //         bgcolor="#fff"
        //         type="text"
        //         placeholder={placeholder}
        //     />
        // </div>
    );
};
