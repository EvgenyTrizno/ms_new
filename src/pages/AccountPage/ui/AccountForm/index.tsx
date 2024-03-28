import { Input } from "@/shared/ui/Input";
import styles from "./styles.module.scss";
import { useForm } from "react-hook-form";
import { AccountMoreDetailedFormData } from "@/shared/types/formsTypes";
import { Email } from "@/widgets/components/Protection/ui/Email";
import { Number } from "@/widgets/components/Protection/ui/Number";
import { useMutation } from "react-query";
import { updateUserData } from "@/shared/api";
import { useCookie } from "@/shared/lib/hooks/useCookie";
import { IUserData } from "@/shared/types";
import { useResultForm } from "@/shared/lib/hooks";
import cn from "clsx";
import { FormControl } from "@/shared/ui";
import { useEffect } from "react";
import { useAuth } from "@/shared/model/store/auth";

export const AccountForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    watch,
  } = useForm<AccountMoreDetailedFormData>();
  const { user, setUser } = useAuth();
  const { getCookie } = useCookie();
  const { mutate, data, isError, isSuccess } = useMutation(
    (updateData: Partial<IUserData>) =>
      updateUserData(getCookie("access_token") as string, updateData)
  );
  const { error, success, resText } = useResultForm(isError, isSuccess);

  useEffect(() => {
    if (!data) return;

    setUser(data.data);
  }, [data, setUser]);

  useEffect(() => {
    if (!user) return;

    const data = {
      name: user.first_name,
      surname: user.surname,
      birthdate: user.birthday,
      address: user.address,
      email: user.email,
      sex: user.sex,
      interest: user.interest,
      number: user.number,
    };

    Object.entries(data).forEach((el) => {
      const key = el[0] as keyof AccountMoreDetailedFormData;
      const value = el[1];

      if (typeof value === "string") {
        setValue(key, value);
      }
    });
  });

  const formHandler = (data: AccountMoreDetailedFormData) => {
    const {
      name,
      surname,
      birthdate,
      // sex,
      login,
      // country,
      // city,
      address,
      email,
    } = data;

    const resData = {
      first_name: name,
      surname,
      birthdate,
      // sex,
      login,
      // country,
      // city,
      address,
      email,
    };

    mutate(resData);
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit(formHandler)}>
      <div className={styles.block}>
        <h4>Основная информация</h4>

        <div className={styles.inputs}>
          <Input
            type="text"
            placeholder={"Имя"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "name",
            }}
          />

          <Input
            type="text"
            placeholder={"Фамилия"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "surname",
            }}
          />

          <Input
            type="text"
            placeholder={"Дата рождения"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "birthdate",
            }}
          />

          <Input
            type="text"
            placeholder={"Пол"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "sex",
            }}
          />

          <Input
            type="text"
            placeholder={"Логин"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "login",
            }}
          />

          <Input
            type="text"
            placeholder={"Страна"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "country",
            }}
          />

          <Input
            type="text"
            placeholder={"Город"}
            borderRadius="12px"
            padding="16px"
            hookFormData={{
              register,
              registerName: "city",
            }}
          />

          <FormControl error={errors.address?.message}>
            <Input
              type="text"
              placeholder={"Адрес"}
              borderRadius="12px"
              padding="16px"
              hookFormData={{
                register,
                registerName: "address",
                options: {
                  required: {
                    value: true,
                    message: "Это поле обязательно для заполнения",
                  },
                },
              }}
            />
          </FormControl>
        </div>
      </div>

      <div className={styles.block}>
        <h4>Защита профиля</h4>

        <div className={styles.inputs}>
          <Number
            hookFormData={{
              register,
              registerName: "number",
            }}
            verify={!!watch("number")}
          />
          <Email
            hookFormData={{
              register,
              registerName: "email",
            }}

            verify={!!watch('email')}
          />
        </div>
      </div>

      <button
        className={cn(styles.btn, {
          "error-text": error,
          "success-text": success,
        })}
        type="submit"
      >
        {resText}
      </button>
    </form>
  );
};
