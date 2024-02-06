import { MainData } from "@/pages/AccountPage/ui/MainData";
import styles from "./AccountMoreDetailedForm.module.scss";
import { Interest } from "@/pages/AccountPage/ui/Interest";
import { Protection } from "../../Protection";
import { useForm } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";
import { Button } from "@/shared/ui";
import { useMutation } from "react-query";
import { updateUserData } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IUserData } from "@/shared/types";

export const AccountMoreDetailedForm = () => {
  const { register, handleSubmit } = useForm<AccountMoreDetailedFormData>();
  const { getCookie } = useCookie();
  const updateUserDataMutation = useMutation((updateData: IUserData) =>
    updateUserData(getCookie("access_token") as string, updateData)
  );

  const formHandler = (data: AccountMoreDetailedFormData) => {
    updateUserDataMutation.mutate(data as any);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(formHandler)}>
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

      <Button type="submit" color="primary" title="Сохранить" />
    </form>
  );
};
