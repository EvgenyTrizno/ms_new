import { FC } from "react";
import { ICheckbox } from "./types";

// import { useCheckbox } from "./store";
// import { useDiseases } from "../../../shared/model/store";

import styles from "./Checkbox.module.scss";

export const Checkbox: FC<ICheckbox> = ({ checked, value }) => {
    // const { setValue } = useCheckbox();
    // const { setDiseases } = useDiseases();

    // const handlerChange = (value: string) => {
    //     if (value === "") return;

    //     return value;
    // };

    return (
        <div className={styles.checkbox}>
            <input
                // onChange={(e: ChangeEvent<HTMLInputElement>) => {
                //     // setValue(e.target.value);
                //     // setDiseases(handlerChange(e.target.value));
                // }}
                type="checkbox"
                checked={checked}
                value={value}
            />
        </div>
    );
};
