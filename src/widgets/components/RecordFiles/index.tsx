import { File } from "../RecordDoctors/ui/File";
import { WidgetWrapper } from "../WidgetWrapper";
import styles from "./styles.module.scss";

export const RecordFiles = () => {
    return(
        <WidgetWrapper title="Файлы">
            <div className={styles.list}>
                <File />
                <File />
                <File />
                <File />
            </div>
        </WidgetWrapper>
    )
}