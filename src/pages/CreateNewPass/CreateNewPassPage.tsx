import { FC } from "react";

import { CreatePass } from "@/widgets";

import styles from "./CreateNewPassPage.module.scss";

const CreateNewPass: FC = () => {
    return (
        <div className={styles.container}>
            <CreatePass />
        </div>
    );
};

export default CreateNewPass;
