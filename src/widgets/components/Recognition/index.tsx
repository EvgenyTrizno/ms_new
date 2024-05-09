import styles from "./styles.module.scss";
import { WidgetWrapper } from "../WidgetWrapper";
import { Label } from "./ui/Label";
import { Progress } from "./ui/Progress";

export const Recognition = () => {
  return (
    <WidgetWrapper
      title="Узнаваемость"
      headerRight={<div className={styles.total}>80%</div>}
    >
      <div className={styles.list}>
        <Label title="Посещения">
          <Progress value={40} />
        </Label>

        <Label title="Показы">
          <Progress value={100} />
        </Label>

        <Label title="Упоминания">
          <Progress value={60} />
        </Label>

        <Label title="Отметки">
          <Progress value={30} />
        </Label>
      </div>
    </WidgetWrapper>
  );
};
