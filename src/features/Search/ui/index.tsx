import { FC } from "react";
import { ISeacrh } from "../types";
import { useAuth } from "@/shared/model/store/auth";

import { Input } from "@/shared/ui/Input";
import { Image } from "@/shared/ui/Image";

import search from "../assets/search-gray.svg";
import styles from "./styles.module.scss";

export const Search: FC<ISeacrh> = ({ placeholder, onChange }) => {
    const { user } = useAuth();

    const sick = user && user.disease.length;

    console.log(user?.clinic);

    return (
        <div className={`${styles.search} ${sick && styles.sick}`}>
            <Image src={search} alt="magnifying glass" width={16} height={16} />
            <Input
                type="text"
                placeholder={placeholder}
                height="100%"
                padding="0px"
                border="none"
                borderRadius="0px"
                onChange={onChange}
            />
        </div>
    );
};
