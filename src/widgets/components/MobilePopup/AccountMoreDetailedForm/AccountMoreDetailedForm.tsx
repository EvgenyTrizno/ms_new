import { MainData } from "@/pages/AccountPage/ui/MainData";
import styles from "./AccountMoreDetailedForm.module.scss";
import { Interest } from "@/pages/AccountPage/ui/Interest";
import { Protection } from "../../Protection";
import { useForm } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";

export const AccountMoreDetailedForm = () => {
  const { register } = useForm<AccountMoreDetailedFormData>();

  return (
    <form className={styles.form}>
      <div>
        <p className={styles.groupTitle}>Основная информация</p>
        <MainData register={register} />
      </div>

      <div>
        <p className={styles.groupTitle}>Интерес</p>
        <Interest />
      </div>

      <div>
        <p className={styles.groupTitle}>Защита профиля</p>
        <Protection />
      </div>
    </form>
  );
};
