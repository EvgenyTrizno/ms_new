import { Email } from "@/widgets/components/Protection/ui/Email";
import { Number } from "@/widgets/components/Protection/ui/Number";
import styles from "./Protection.module.css";

export const Protection = () => {
  return (
    <div className={styles.wrapper}>
      <Number />
      <Email />
    </div>
  );
};
